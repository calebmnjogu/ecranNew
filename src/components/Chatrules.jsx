// Chat rules converted from Python NLTK pairs into JavaScript RegEx rules
export const rules = [
  // Greetings
  {
    pattern: /hi|hello|hey|sasa/i,
    responses: [
      "Hello! Welcome to Ecran Electronics. How can I assist you today?",
      "Hi there 👋 Welcome to Ecran Online store! What are you looking for today?"
    ]
  },

  {
    pattern: /how are you/i,
    responses: [
      "I'm doing great, thanks for asking! How can I help you today?"
    ]
  },

  // Product Categories
  {
    pattern: /(.*)(phone|smartphone|mobile)(.*)/i,
    responses: [
      "We have a variety of smartphones available. Are you looking for Samsung, iPhone, Tecno, or another brand?"
    ]
  },

  {
    pattern: /(.*)(laptop|computer|pc)(.*)/i,
    responses: [
      "We stock laptops from brands like HP, Dell, Lenovo and more. Do you prefer a specific brand or budget range?"
    ]
  },

  {
    pattern: /(.*)(tv|television|smart tv)(.*)/i,
    responses: [
      "Yes, we have Smart TVs in different sizes (32\", 43\", 55\" and more). What size are you looking for?"
    ]
  },

  {
    pattern: /(.*)(accessories|charger|headphones|earphones|cable)(.*)/i,
    responses: [
      "We sell quality accessories including chargers, headphones, USB cables and more. What exactly do you need?"
    ]
  },

  // Pricing
  {
    pattern: /(.*)(price|cost|how much)(.*)/i,
    responses: [
      "Prices vary depending on the product model. Please tell me the exact product name so I can assist you better."
    ]
  },

  // Availability
  {
    pattern: /(.*)(available|in stock)(.*)/i,
    responses: [
      "Stock availability changes regularly. Please tell me the product name and I'll check for you."
    ]
  },

  // Delivery
  {
    pattern: /(.*)(delivery|shipping)(.*)/i,
    responses: [
      "We offer fast and secure delivery. Delivery time depends on your location. Where are you located?"
    ]
  },

  // Payment Methods
  {
    pattern: /(.*)(payment|pay|mpesa|card)(.*)/i,
    responses: [
      "We accept M-Pesa, debit/credit cards, and bank transfers. Which payment method do you prefer?"
    ]
  },

  // Returns & Warranty
  {
    pattern: /(.*)(return|refund)(.*)/i,
    responses: [
      "We have a return policy for eligible products within a specified period. Please ensure the item is unused and in original packaging.",
      "For returns, please provide the purchase receipt and our support team will guide you through the process."
    ]
  },

  {
    pattern: /(.*)(warranty|guarantee)(.*)/i,
    responses: [
      "Most of our electronics come with a manufacturer warranty. The duration depends on the product type."
    ]
  },

  // Orders
  {
    pattern: /(.*)(track|order status)(.*)/i,
    responses: [
      "To track your order, please provide your order number and our support team will assist you."
    ]
  },

  // Store Information
  {
    pattern: /(.*)(location|where are you located)(.*)/i,
    responses: [
      "We operate online via https://ecran-opal.vercel.app. For physical store details, please contact our support team at 0728810810."
    ]
  },

  {
    pattern: /(.*)(contact|support|help)(.*)/i,
    responses: [
      "You can reach our support team through the contact section on our website. We're always happy to help!"
    ]
  },

  {
    pattern: /(.*)(hours|open|closing time)(.*)/i,
    responses: [
      "Our online store is open 24/7. Customer support operates during business hours."
    ]
  },

  // Recommendations
  {
    pattern: /(.*)(recommend|best phone|best laptop)(.*)/i,
    responses: [
      "It depends on your budget and needs. Are you looking for gaming, business, or everyday use?"
    ]
  },

  // Goodbye / End conversation
  {
    pattern: /quit|that is all|no more questions|goodbye|bye/i,
    responses: [
      "Thank you for visiting Ecran store. Have a great day! 👋"
    ]
  },

  // Thank You
  {
    pattern: /thank you|thanks/i,
    responses: [
      "You're welcome! 😊 Let me know if you need anything else."
    ]
  },

  // Default fallback
  {
    pattern: /(.*)/i,
    responses: [
      "I'm not sure I understand. Could you please rephrase your question?",
      "Kindly provide more details so I can assist you better.",
      "Sorry, I didn't catch that. Can you please clarify?"
    ]
  }
];