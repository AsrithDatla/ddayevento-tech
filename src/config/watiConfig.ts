// WATI (WhatsApp Team Inbox) Configuration for D-Day Evento
// This file contains the chatbot flow configuration and webhook setup

export interface WATIMessage {
  id: string;
  text: string;
  type: 'text' | 'interactive' | 'template';
  buttons?: WATIButton[];
  listItems?: WATIListItem[];
}

export interface WATIButton {
  id: string;
  title: string;
  payload?: string;
}

export interface WATIListItem {
  id: string;
  title: string;
  description?: string;
}

export interface WATIFlow {
  id: string;
  trigger: string;
  messages: WATIMessage[];
  nextFlow?: string;
}

// WATI Chatbot Flow Configuration for D-Day Evento
export const watiChatbotFlow: WATIFlow[] = [
  {
    id: 'welcome',
    trigger: 'start',
    messages: [
      {
        id: 'welcome_msg',
        type: 'text',
        text: '🎉 Welcome to D-Day Evento! \n\nHyderabad\'s Most Trusted Event Planners with 400+ successful events! \n\nHow can we help you create your perfect celebration?',
        buttons: [
          { id: 'get_quote', title: '💰 Get Quote', payload: 'quote_request' },
          { id: 'check_availability', title: '📅 Check Availability', payload: 'availability' },
          { id: 'view_services', title: '🎊 Our Services', payload: 'services' },
          { id: 'speak_expert', title: '👨‍💼 Speak to Expert', payload: 'expert_call' }
        ]
      }
    ]
  },
  {
    id: 'quote_request',
    trigger: 'quote_request',
    messages: [
      {
        id: 'quote_intro',
        type: 'text',
        text: '✨ Great choice! Let\'s get you a personalized quote. \n\nWhat type of event are you planning?',
        buttons: [
          { id: 'wedding', title: '💒 Wedding Events', payload: 'wedding_events' },
          { id: 'birthday', title: '🎂 Birthday Party', payload: 'birthday_party' },
          { id: 'corporate', title: '🏢 Corporate Event', payload: 'corporate_event' },
          { id: 'other', title: '🎪 Other Events', payload: 'other_events' }
        ]
      }
    ]
  },
  {
    id: 'wedding_events',
    trigger: 'wedding_events',
    messages: [
      {
        id: 'wedding_types',
        type: 'interactive',
        text: '💒 Perfect! We specialize in complete wedding celebrations. \n\nWhich wedding event do you need help with?',
        listItems: [
          { id: 'engagement', title: 'Engagement', description: 'Ring ceremony & celebration' },
          { id: 'haldi', title: 'Haldi Ceremony', description: 'Traditional turmeric ceremony' },
          { id: 'mehendi', title: 'Mehendi', description: 'Henna ceremony with music' },
          { id: 'sangeeth', title: 'Sangeeth', description: 'Musical night celebration' },
          { id: 'wedding', title: 'Wedding Day', description: 'Main wedding ceremony' },
          { id: 'reception', title: 'Reception', description: 'Grand reception party' },
          { id: 'complete_wedding', title: 'Complete Wedding Package', description: 'All events together' }
        ]
      }
    ]
  },
  {
    id: 'event_details',
    trigger: 'event_selected',
    messages: [
      {
        id: 'event_details_form',
        type: 'text',
        text: '📋 Excellent choice! To provide you with an accurate quote, I need a few details: \n\n1️⃣ Event Date (approximate is fine)\n2️⃣ Number of guests expected\n3️⃣ Preferred venue/location in Hyderabad\n4️⃣ Your budget range\n\nPlease share these details, and I\'ll connect you with our event specialist immediately!'
      }
    ]
  },
  {
    id: 'availability',
    trigger: 'availability',
    messages: [
      {
        id: 'availability_check',
        type: 'text',
        text: '📅 Let me check our availability for you! \n\nPlease share:\n• Your preferred event date\n• Type of event\n• Location in Hyderabad\n\nI\'ll get back to you within 15 minutes with our availability and team assignment.',
        buttons: [
          { id: 'urgent_booking', title: '🚨 Urgent Booking', payload: 'urgent_booking' },
          { id: 'flexible_dates', title: '📆 Flexible Dates', payload: 'flexible_dates' }
        ]
      }
    ]
  },
  {
    id: 'services',
    trigger: 'services',
    messages: [
      {
        id: 'services_overview',
        type: 'text',
        text: '🎊 Here are our comprehensive event services: \n\n🎨 **Decoration & Lighting**\n• Flower decorations & backdrops\n• LED lighting & effects\n• Theme-based setups\n\n📸 **Photography & Videography**\n• Candid & traditional photography\n• Cinematic videography\n• Live streaming\n\n🍽️ **Catering Services**\n• Multi-cuisine menus\n• Live counters & stalls\n• Custom dietary options\n\n🎵 **Entertainment**\n• DJ & sound systems\n• Live music & artists\n• Games & activities\n\n💄 **Styling Services**\n• Bridal makeup & hair\n• Saree draping\n• Family styling\n\n🎁 **Additional Services**\n• Return gifts & favors\n• Transportation\n• Venue booking assistance',
        buttons: [
          { id: 'get_service_quote', title: '💰 Get Service Quote', payload: 'quote_request' },
          { id: 'call_expert', title: '📞 Call Expert', payload: 'expert_call' }
        ]
      }
    ]
  },
  {
    id: 'expert_call',
    trigger: 'expert_call',
    messages: [
      {
        id: 'expert_contact',
        type: 'text',
        text: '👨‍💼 Perfect! Our event specialists are ready to help you. \n\n📞 **Call us directly:** +91-7386813689\n\n⏰ **Available:** 9 AM - 9 PM (Mon-Sun)\n\n💬 **Or continue here** and I\'ll have an expert call you within 30 minutes!\n\nJust share your name and preferred call time.',
        buttons: [
          { id: 'call_now', title: '📞 Call Now', payload: 'call_direct' },
          { id: 'schedule_call', title: '⏰ Schedule Call', payload: 'schedule_call' },
          { id: 'continue_chat', title: '💬 Continue Chat', payload: 'continue_chat' }
        ]
      }
    ]
  },
  {
    id: 'lead_capture',
    trigger: 'capture_lead',
    messages: [
      {
        id: 'contact_details',
        type: 'text',
        text: '📝 Almost done! To send you a detailed quote and follow up: \n\nPlease share:\n• Your full name\n• Email address\n• Best time to call you\n\nOur team will contact you within 2 hours with a personalized proposal! \n\n✅ **Why choose D-Day Evento?**\n• 400+ successful events in Hyderabad\n• 4+ years of experience\n• 24/7 customer support\n• Transparent pricing\n• End-to-end event management'
      }
    ]
  }
];

// WATI Webhook Configuration
export const watiWebhookConfig = {
  baseUrl: 'https://api.wati.io',
  apiKey: process.env.WATI_API_KEY || 'your_wati_api_key',
  phoneNumber: process.env.WATI_PHONE_NUMBER || 'your_wati_phone_number'
};

// WATI Helper Functions
export const watiHelpers = {
  formatPhoneNumber: (phone: string): string => {
    // Remove non-digit characters and add country code if missing
    let cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
      cleaned = `91${cleaned}`;
    }
    return cleaned;
  },

  isGreeting: (message: string): boolean => {
    const greetings = ['hi', 'hello', 'hey', 'start'];
    return greetings.some(g => message.includes(g));
  },

  isThankYou: (message: string): boolean => {
    const thanks = ['thanks', 'thank you', 'appreciate it'];
    return thanks.some(t => message.includes(t));
  },

  isPriceInquiry: (message: string): boolean => {
    const inquiries = ['price', 'cost', 'budget', 'quote', 'how much'];
    return inquiries.some(i => message.includes(i));
  },

  isAvailabilityInquiry: (message: string): boolean => {
    const inquiries = ['available', 'availability', 'date', 'schedule'];
    return inquiries.some(i => message.includes(i));
  },

  isContactRequest: (message: string): boolean => {
    const requests = ['contact', 'speak', 'expert', 'call', 'phone'];
    return requests.some(r => message.includes(r));
  },

  responses: {
    greeting: '🎉 Welcome to D-Day Evento! How can we help you create your perfect celebration?',
    thankYou: 'You\'re welcome! Is there anything else I can help you with?',
    priceInquiry: 'To give you an accurate quote, could you please tell me more about your event? (Type of event, date, number of guests)',
    availabilityInquiry: 'To check our availability, please provide the date of your event.',
    contactRequest: 'Sure! Our event expert will call you shortly. Please provide your name and a convenient time to call.',
    default: 'Thanks for your message! Our team will get back to you shortly.'
  },

  calculateLeadScore: (eventType: string, budget: string, urgency: string): number => {
    let score = 0;
    if (eventType === 'wedding' || eventType === 'corporate') score += 40;
    if (budget === 'high') score += 30;
    if (urgency === 'soon') score += 20;
    return score;
  },

  generateWhatsAppLink: (phone: string, message: string): string => {
    const formattedPhone = watiHelpers.formatPhoneNumber(phone);
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  }
};

export default watiChatbotFlow;