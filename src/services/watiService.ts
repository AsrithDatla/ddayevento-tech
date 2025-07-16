// WATI Service for handling WhatsApp chatbot interactions
import { watiWebhookConfig, watiHelpers, leadScoringConfig } from '../config/watiConfig';

export interface WATIContact {
  name: string;
  phone: string;
  email?: string;
  eventType?: string;
  eventDate?: string;
  guestCount?: number;
  budget?: string;
  location?: string;
  leadScore?: number;
  source: 'whatsapp_chatbot';
  createdAt: string;
}

export interface WATIMessage {
  id: string;
  from: string;
  to: string;
  text: string;
  timestamp: string;
  type: 'incoming' | 'outgoing';
}

class WATIService {
  private baseUrl: string;
  private apiKey: string;
  private phoneNumber: string;

  constructor() {
    this.baseUrl = watiWebhookConfig.baseUrl;
    this.apiKey = watiWebhookConfig.apiKey;
    this.phoneNumber = watiWebhookConfig.phoneNumber;
  }

  // Send message via WATI API
  async sendMessage(to: string, message: string, type: 'text' | 'template' = 'text'): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/api/v1/sendSessionMessage/${to}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          messageText: message
        })
      });

      return response.ok;
    } catch (error) {
      console.error('Error sending WATI message:', error);
      return false;
    }
  }

  // Send template message
  async sendTemplateMessage(to: string, templateName: string, parameters: any[] = []): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/api/v1/sendTemplateMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          whatsappNumber: to,
          templateName: templateName,
          bodyParameterValues: parameters
        })
      });

      return response.ok;
    } catch (error) {
      console.error('Error sending WATI template message:', error);
      return false;
    }
  }

  // Process incoming webhook message
  async processIncomingMessage(webhookData: any): Promise<void> {
    try {
      const { from, text, timestamp } = webhookData;
      
      // Extract contact information
      const contact = await this.extractContactInfo(from, text);
      
      // Determine response based on message content
      const response = this.generateAutoResponse(text.toLowerCase());
      
      // Send auto-response
      if (response) {
        await this.sendMessage(from, response);
      }
      
      // Save lead if contact information is provided
      if (contact) {
        await this.saveLead(contact);
      }
      
      // Notify admin of new message
      await this.notifyAdmin(from, text);
      
    } catch (error) {
      console.error('Error processing incoming message:', error);
    }
  }

  // Extract contact information from message
  private async extractContactInfo(phone: string, message: string): Promise<WATIContact | null> {
    const lowerMessage = message.toLowerCase();
    
    // Basic patterns to extract information
    const nameMatch = message.match(/name[:\s]+([a-zA-Z\s]+)/i);
    const emailMatch = message.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
    const dateMatch = message.match(/(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/);
    const guestMatch = message.match(/(\d+)\s*guests?/i);
    
    // Determine event type
    let eventType = 'other';
    if (lowerMessage.includes('wedding') || lowerMessage.includes('marriage')) eventType = 'wedding';
    else if (lowerMessage.includes('birthday')) eventType = 'birthday';
    else if (lowerMessage.includes('corporate') || lowerMessage.includes('office')) eventType = 'corporate';
    else if (lowerMessage.includes('anniversary')) eventType = 'anniversary';
    
    // Determine budget range
    let budget = 'low';
    if (lowerMessage.includes('lakh') || lowerMessage.includes('100000')) budget = 'medium';
    if (lowerMessage.includes('2 lakh') || lowerMessage.includes('200000')) budget = 'high';
    
    // Determine urgency
    let urgency = 'planning';
    if (lowerMessage.includes('urgent') || lowerMessage.includes('asap') || lowerMessage.includes('immediate')) urgency = 'immediate';
    else if (lowerMessage.includes('soon') || lowerMessage.includes('next month')) urgency = 'soon';
    
    const contact: WATIContact = {
      name: nameMatch ? nameMatch[1].trim() : '',
      phone: watiHelpers.formatPhoneNumber(phone),
      email: emailMatch ? emailMatch[1] : undefined,
      eventType,
      eventDate: dateMatch ? dateMatch[1] : undefined,
      guestCount: guestMatch ? parseInt(guestMatch[1]) : undefined,
      budget,
      leadScore: watiHelpers.calculateLeadScore(eventType, budget, urgency),
      source: 'whatsapp_chatbot',
      createdAt: new Date().toISOString()
    };
    
    // Only return contact if we have meaningful information
    if (contact.name || contact.email || contact.eventType !== 'other') {
      return contact;
    }
    
    return null;
  }

  // Generate auto-response based on message content
  private generateAutoResponse(message: string): string | null {
    const responses = {
      greeting: [
        '🎉 Welcome to D-Day Evento! Hyderabad\'s most trusted event planners with 400+ successful events!\n\nHow can we help you create your perfect celebration?\n\n💰 Type "QUOTE" for instant quote\n📅 Type "AVAILABILITY" to check dates\n🎊 Type "SERVICES" to see our offerings\n👨‍💼 Type "EXPERT" to speak with specialist',
      ],
      quote: [
        '✨ Great! Let\'s get you a personalized quote.\n\nPlease share:\n1️⃣ Event type (Wedding/Birthday/Corporate/Other)\n2️⃣ Event date\n3️⃣ Number of guests\n4️⃣ Location in Hyderabad\n5️⃣ Your budget range\n\nOur expert will respond within 30 minutes with a detailed quote!',
      ],
      availability: [
        '📅 I\'ll check our availability for you!\n\nPlease share:\n• Your preferred event date\n• Type of event\n• Location in Hyderabad\n\nI\'ll get back to you within 15 minutes with our availability and team assignment.',
      ],
      services: [
        '🎊 Here are our comprehensive services:\n\n🎨 Decoration & Lighting\n📸 Photography & Videography\n🍽️ Multi-cuisine Catering\n🎵 Entertainment & Music\n💄 Makeup & Styling\n🎁 Gifts & Favors\n🚐 Transportation\n\nType "QUOTE" to get pricing for specific services!',
      ],
      expert: [
        '👨‍💼 Our event specialists are ready to help!\n\n📞 Call directly: +91-7386813689\n⏰ Available: 9 AM - 9 PM\n\nOr share your name and preferred call time, and we\'ll call you within 30 minutes!',
      ],
      pricing: [
        '💰 Our pricing is transparent and competitive:\n\n🎂 Birthday parties: ₹25K - ₹1L\n💒 Wedding events: ₹1L - ₹5L+\n🏢 Corporate events: ₹50K - ₹3L\n🎉 Other celebrations: ₹20K - ₹2L\n\nFinal pricing depends on your specific requirements. Share your event details for an accurate quote!',
      ]
    };

    // Check for greeting patterns
    if (message.includes('hi') || message.includes('hello') || message.includes('hey') || 
        message.includes('good morning') || message.includes('good evening')) {
      return responses.greeting[0];
    }
    
    // Check for quote requests
    if (message.includes('quote') || message.includes('price') || message.includes('cost') || 
        message.includes('budget') || message.includes('estimate')) {
      return responses.quote[0];
    }
    
    // Check for availability requests
    if (message.includes('availability') || message.includes('available') || message.includes('book') || 
        message.includes('date') || message.includes('schedule')) {
      return responses.availability[0];
    }
    
    // Check for services inquiry
    if (message.includes('service') || message.includes('what do you') || message.includes('offerings')) {
      return responses.services[0];
    }
    
    // Check for expert/call requests
    if (message.includes('expert') || message.includes('call') || message.includes('speak') || 
        message.includes('talk') || message.includes('discuss')) {
      return responses.expert[0];
    }
    
    // Check for pricing inquiry
    if (message.includes('pricing') || message.includes('rates') || message.includes('charges')) {
      return responses.pricing[0];
    }
    
    // Default response for unrecognized messages
    return '🤖 Thanks for your message! Our team will respond shortly.\n\nFor immediate assistance:\n📞 Call: +91-7386813689\n💬 Type "QUOTE" for instant quote\n🎊 Type "SERVICES" to see our offerings';
  }

  // Save lead to database/CRM
  private async saveLead(contact: WATIContact): Promise<void> {
    try {
      // In a real implementation, this would save to your database
      const response = await fetch('/api/leads/whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
      });
      
      if (response.ok) {
        console.log('Lead saved successfully:', contact);
      }
    } catch (error) {
      console.error('Error saving lead:', error);
    }
  }

  // Notify admin of new message
  private async notifyAdmin(from: string, message: string): Promise<void> {
    try {
      // Send notification to admin (email, Slack, etc.)
      await fetch('/api/notifications/new-whatsapp-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from,
          message,
          timestamp: new Date().toISOString()
        })
      });
    } catch (error) {
      console.error('Error notifying admin:', error);
    }
  }

  // Check if within business hours
  private isBusinessHours(): boolean {
    const now = new Date();
    const currentHour = now.getHours();
    const { start, end } = watiWebhookConfig.autoResponse.businessHours;
    
    const startHour = parseInt(start.split(':')[0]);
    const endHour = parseInt(end.split(':')[0]);
    
    return currentHour >= startHour && currentHour < endHour;
  }

  // Send follow-up messages
  async sendFollowUp(phone: string, eventType: string): Promise<void> {
    const followUpMessages = {
      wedding: '💒 Planning your dream wedding? \n\nWe\'d love to help make it perfect! Our wedding specialists have planned 200+ weddings in Hyderabad.\n\nWould you like to schedule a free consultation?',
      birthday: '🎂 Making birthday celebrations special is our expertise! \n\nFrom themed decorations to entertainment, we handle everything.\n\nShall we discuss your birthday party plans?',
      corporate: '🏢 Corporate events require precision and professionalism. \n\nWe\'ve successfully managed 100+ corporate events in Hyderabad.\n\nLet\'s discuss your corporate event requirements!',
      other: '🎉 Every celebration deserves to be special! \n\nOur team is ready to help you create memorable moments.\n\nWhen would be a good time to discuss your event?'
    };

    const message = followUpMessages[eventType as keyof typeof followUpMessages] || followUpMessages.other;
    await this.sendMessage(phone, message);
  }
}

export const watiService = new WATIService();
export default watiService;