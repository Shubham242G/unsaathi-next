import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unsaathi",
  description: "Unsaathi provides legal guidance and support for divorce, separation, alimony, child custody, and other family law matters in India.",
  icons: {
    icon: "/Unsaathi-logo.jpg",
    apple: "/Unsaathi-logo.jpg",
  },
  manifest: "/manifest.json",
  verification: {
    google: "wBbirHQn2eAWbpoOWD7UnrQlNukzLsyHRU87vBibTic",
  },
  other: {
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Schema
  const jsonLd = {
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
      "https://www.instagram.com/official_unsaathi?igsh=bHFoZHNjd3Jua2M1"
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
    "foundingLocation": {
      "@type": "Place",
      "name": "Delhi, India"
    },
    "serviceType": [
      "Divorce Consultation",
      "Mutual Divorce",
      "Child Custody",
      "Alimony and Maintenance",
      "Judicial Separation",
      "Marriage Annulment"
    ]
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-43WT9DLG2Z"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-43WT9DLG2Z');
            `,
          }}
        />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}