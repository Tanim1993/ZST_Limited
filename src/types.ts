export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProductData {
  id: string;
  name: string;
  tagline: string;
  altText: string;
  description: string;
  accentColor: string;
  features: ProductFeature[];
  interactiveType: "fintech" | "connecthub" | "meetsphere" | "political" | "ngo" | "bi";
}

export interface ServiceData {
  title: string;
  category: "technology" | "advisory" | "operations";
  description: string;
  icon: string;
  features: string[];
}

export interface ExportImportItem {
  type: "import" | "export";
  title: string;
  category: string;
  description: string;
  regions: string[];
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarSeed: string; // fallback to high-quality avatars
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}
