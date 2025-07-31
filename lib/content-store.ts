// Content storage and management using localStorage
export interface HomeContent {
  heroTitle: string;
  heroSubtitle: string;
  address: string;
  phone: string;
  email: string;
}

export interface AboutContent {
  mission: string;
  vision: string;
  values: string[];
  valuesDescription: string;
}

export interface ContactContent {
  pageTitle: string;
  pageSubtitle: string;
  formTitle: string;
  formDescription: string;
  businessHours: {
    weekdays: string;
    saturday?: string;
  };
}

export interface SiteContent {
  home: HomeContent;
  about: AboutContent;
  contact: ContactContent;
}

// Default content as fallback
const defaultContent: SiteContent = {
  home: {
    heroTitle: "Goal Getters Financial Services",
    heroSubtitle: "Helps you to live your dream",
    address: "No. 2, East wing, First Floor of 6491A Clyde Road Eastlea, Harare",
    phone: "+263713014547, +263789573321",
    email: "info@goalgetters.co.zw",
  },
  about: {
    mission: "To provide the best, affordable and smart financial solutions that empower and addresses the needs of employees and small to medium enterprises in Zimbabwe.",
    vision: "To be a leading financial institution in the provision of affordable and smart financial solution to employed individuals and SMEs in Zimbabwe.",
    values: ["Commitment", "Respect", "Transparency"],
    valuesDescription: "Goal Getters is a learning institute and encourages a system of continuous improvement.",
  },
  contact: {
    pageTitle: "Contact Us",
    pageSubtitle: "Get in touch with our team",
    formTitle: "Send us a Message",
    formDescription: "Fill out the form below and we'll get back to you as soon as possible.",
    businessHours: {
      weekdays: "Monday - Friday: 8:00 AM - 4:30 PM"
    },
  }
};

// Get all site content
export function getSiteContent(): SiteContent {
  if (typeof window === 'undefined') {
    return defaultContent;
  }
  
  const storedContent = localStorage.getItem('siteContent');
  if (!storedContent) {
    return defaultContent;
  }
  
  try {
    return JSON.parse(storedContent);
  } catch (error) {
    console.error('Error parsing stored content:', error);
    return defaultContent;
  }
}

// Get specific section content
export function getHomeContent(): HomeContent {
  return getSiteContent().home;
}

export function getAboutContent(): AboutContent {
  return getSiteContent().about;
}

export function getContactContent(): ContactContent {
  return getSiteContent().contact;
}

// Save content
export function saveHomeContent(content: HomeContent): void {
  const siteContent = getSiteContent();
  siteContent.home = content;
  saveSiteContent(siteContent);
}

export function saveAboutContent(content: AboutContent): void {
  const siteContent = getSiteContent();
  siteContent.about = content;
  saveSiteContent(siteContent);
}

export function saveContactContent(content: ContactContent): void {
  const siteContent = getSiteContent();
  siteContent.contact = content;
  saveSiteContent(siteContent);
}

// Helper to save all content
function saveSiteContent(content: SiteContent): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('siteContent', JSON.stringify(content));
  }
}
