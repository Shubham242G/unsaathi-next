// src/utils/schemaHelper.ts

// Type definitions
interface Address {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressCountry: string;
}

interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  description: string;
  email: string;
  telephone: string;
  areaServed: string;
  sameAs: string[];
  address: Address[];
  serviceType: string[];
}

interface WebsiteSchema {
  "@context": string;
  "@type": string;
  url: string;
  name: string;
  description: string;
  potentialAction: {
    "@type": string;
    target: {
      "@type": string;
      urlTemplate: string;
    };
    "query-input": string;
  };
}

interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  areaServed: string;
  address: {
    "@type": string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  priceRange: string;
  telephone: string;
}

interface ServiceSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  provider: {
    "@type": string;
    name: string;
    sameAs: string;
  };
  url: string;
  serviceType: string;
  areaServed: string[];
}

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSchema {
  "@context": string;
  "@type": string;
  mainEntity: {
    "@type": string;
    name: string;
    acceptedAnswer: {
      "@type": string;
      text: string;
    };
  }[];
}

// Organization Schema (for all pages)
export const organizationSchema: OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Unsaathi",
  "url": "https://www.unsaathi.com",
  "logo": "https://www.unsaathi.com/Unsaathi-logo1.png",
  "description": "Unsaathi provides legal guidance and support for divorce, separation, alimony, child custody, and other family law matters in India.",
  "email": "info@unsaathi.com",
  "telephone": "+91-9266877791",
  "areaServed": "India",
  "sameAs": [
    "https://www.facebook.com/share/1AmiCrdNcR/",
    "https://www.instagram.com/official_unsaathi"
  ],
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 7, Fourth Floor, Arihant Nagar, Main Rohtak Road, Punjabi Bagh",
      "addressLocality": "New Delhi",
      "postalCode": "110026",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "208-209, Tower-E, Alphathum",
      "addressLocality": "Noida",
      "postalCode": "201305",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "412, Emaar Colonnade, Golf Course Extension Road, Sector-66",
      "addressLocality": "Gurgaon",
      "postalCode": "122018",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "401, B-Block HIG, Vijay Stambh, Zone-1, MP Nagar",
      "addressLocality": "Bhopal",
      "postalCode": "462011",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "205, B-Block, The One, RNT Marg, Near High Court",
      "addressLocality": "Indore",
      "postalCode": "452001",
      "addressCountry": "IN"
    }
  ],
  "serviceType": [
    "Divorce Consultation",
    "Mutual Divorce",
    "Child Custody",
    "Alimony and Maintenance",
    "Judicial Separation",
    "Marriage Annulment"
  ]
};

// WebSite Schema
export const websiteSchema: WebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.unsaathi.com",
  "name": "Unsaathi - Divorce Lawyers India",
  "description": "Expert divorce lawyers serving Delhi NCR - Noida, Delhi, Gurgaon. Mutual consent & contested divorces.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.unsaathi.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// LocalBusiness Schema for city pages
export const localBusinessSchema = (cityName: string, cityUrl: string): LocalBusinessSchema => ({
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": `Best Divorce Lawyer in ${cityName} | Unsaathi`,
  "url": `https://www.unsaathi.com${cityUrl}`,
  "areaServed": cityName,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": cityName,
    "addressRegion": cityName === "Delhi" ? "Delhi" : cityName === "Noida" ? "Uttar Pradesh" : "Haryana",
    "addressCountry": "IN"
  },
  "priceRange": "₹20k - ₹20L+",
  "telephone": "+91-9266877791"
});

// Service Schema for individual services (Mutual Divorce, Contested Divorce, etc.)
export const serviceSchema = (serviceName: string, description: string, url: string): ServiceSchema => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "LegalService",
    "name": "Unsaathi",
    "sameAs": "https://www.unsaathi.com"
  },
  "url": `https://www.unsaathi.com${url}`,
  "serviceType": serviceName,
  "areaServed": ["Delhi", "Noida", "Gurgaon", "Bhopal", "Indore"]
});

// FAQ Schema from API data
export const faqSchemaFromData = (faqs: FaqItem[]): FaqSchema => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});