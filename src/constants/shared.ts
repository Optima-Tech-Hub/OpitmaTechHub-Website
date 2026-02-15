// ================================
// SHARED CONSTANTS
// ================================
// This file contains all repeated/static values used across the application
// These values can be easily updated and will be used for database integration

export const SHARED = {
  // Company Information
  company: {
    name: "Optima",
    nameAccent: "Tech",
    nameSuffix: "Hub",
    fullName: "Optima Tech Hub",
  },

  // Contact Information
  contact: {
    email: "contact@optimatech.hub",
    privacyEmail: "privacy@optimatech.hub",
    legalEmail: "legal@optimatech.hub",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Street, Innovation City, IC 12345",
  },

  // Social Media Links
  social: {
    linkedin: "#",
    twitter: "#",
    github: "#",
    website: "#",
  },

  // Legal & Policy
  legal: {
    effectiveDate: "February 15, 2026",
  },

  // Navigation Paths
  paths: {
    home: "/",
    about: "/about",
    services: "/services",
    solutions: "/solutions",
    caseStudies: "/case-studies",
    team: "/team",
    careers: "/careers",
    blog: "/blog",
    contact: "/contact",
    privacy: "/privacy",
    terms: "/terms",
    cookies: "/cookies",
  },

  // Service Anchors
  serviceAnchors: {
    platform: "#platform",
    ai: "#ai",
    cloud: "#cloud",
    maintenance: "#maintenance",
  },

  // About Anchors
  aboutAnchors: {
    faq: "#faq",
    story: "#story",
    mission: "#mission",
  },
};

// Export individual sections for convenience
export const {
  company,
  contact,
  social,
  legal,
  paths,
  serviceAnchors,
  aboutAnchors,
} = SHARED;
