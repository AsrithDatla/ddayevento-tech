// WATI Service for handling WhatsApp chatbot interactions
import { watiWebhookConfig, watiHelpers } from '../config/watiConfig';

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

  constructor() {
    this.baseUrl = watiWebhookConfig.baseUrl;
    this.apiKey = watiWebhookConfig.apiKey;
  }

  // Send message via WATI API
  async sendMessage(to: string, message: string): Promise<boolean> {
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
  async sendTemplateMessage(to: string, templateName: string, parameters: Record<string, string>[] = []): Promise<boolean> {
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
  async processIncomingMessage(webhookData: { from: string; text: string; }): Promise<void> {
    try {
      const { from, text } = webhookData;
      
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
    const dateMatch = message.match(/(\d{1,2}[/-]\d{1,2}[/-]\d{2,4})/);
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
    if (lowerMessage.includes('5 lakh') || lowerMessage.includes('500000')) budget = 'high';
    
    const contact: WATIContact = {
      name: nameMatch ? nameMatch[1].trim() : 'Unknown',
      phone: phone,
      email: emailMatch ? emailMatch[0] : undefined,
      eventType: eventType,
      eventDate: dateMatch ? dateMatch[0] : undefined,
      guestCount: guestMatch ? parseInt(guestMatch[1]) : undefined,
      budget: budget,
      source: 'whatsapp_chatbot',
      createdAt: new Date().toISOString()
    };
    
    // Only return contact if a name was found
    return nameMatch ? contact : null;
  }
  
  // Generate auto-response based on message content
  private generateAutoResponse(message: string): string | null {
    const lowerMessage = message.toLowerCase();
    
    if (watiHelpers.isGreeting(lowerMessage)) {
      return watiHelpers.responses.greeting;
    }
    if (watiHelpers.isThankYou(lowerMessage)) {
      return watiHelpers.responses.thankYou;
    }
    if (watiHelpers.isPriceInquiry(lowerMessage)) {
      return watiHelpers.responses.priceInquiry;
    }
    if (watiHelpers.isAvailabilityInquiry(lowerMessage)) {
      return watiHelpers.responses.availabilityInquiry;
    }
    if (watiHelpers.isContactRequest(lowerMessage)) {
      return watiHelpers.responses.contactRequest;
    }
    
    return watiHelpers.responses.default;
  }
  
  // Save lead to a database or CRM (placeholder)
  private async saveLead(contact: WATIContact): Promise<void> {
    console.log('Saving lead:', contact);
    // In a real application, you would save this to a database
    // e.g., await db.collection('leads').insertOne(contact);
  }
  
  // Notify admin of new message (placeholder)
  private async notifyAdmin(from: string, message: string): Promise<void> {
    console.log(`New message from ${from}: ${message}`);
    // In a real application, you might send an email or push notification
    // e.g., await emailService.sendAdminNotification(from, message);
  }
}

export default new WATIService();