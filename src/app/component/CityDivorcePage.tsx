'use client'

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Head from "next/head";
import ForYou from "../home/ForYou";
import { fetchFaqsByCategory } from "../utils/fetchFaqs";
import FaqAccordion from "../component/FaqAccordion";
import { useReviReady } from "../hooks/useReviReady";
import { localBusinessSchema, organizationSchema, faqSchemaFromData } from "../utils/schemaHelper";

const CityDivorcePage: React.FC = () => {
  const pathname = usePathname();

  let citySlug = "";
  if (pathname === "/divorce-lawyer-noida") citySlug = "noida";
  else if (pathname === "/divorce-lawyer-delhi") citySlug = "delhi";
  else if (pathname === "/divorce-lawyer-gurgaon") citySlug = "gurgaon";

  const cityName = citySlug.charAt(0).toUpperCase() + citySlug.slice(1);

  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const isDataReady = !loading && faqs !== null;
  useReviReady(isDataReady);
  
  useEffect(() => {
    const category = pathname === "/divorce-lawyer-noida" ? "divorce-lawyer-noida" :
                      pathname === "/divorce-lawyer-delhi" ? "divorce-lawyer-delhi" :
                      pathname === "/divorce-lawyer-gurgaon" ? "divorce-lawyer-gurgaon" :
                      "divorce-lawyer-noida";
    
    fetchFaqsByCategory(category)
      .then((data: any) => {
        setFaqs(data);
      })
      .catch((err: Error) => console.error("FAQs services page error:", err))
      .finally(() => setLoading(false));
  }, [pathname]);

  const services = [
    { label: "Restitution of Conjugal Rights", path: "/services/conjugal-rights" },
    { label: "Contested Divorce", path: "/services/contested-divorce" },
    { label: "Maintenance and Alimony", path: "/services/maintanance-and-alimony" },
    { label: "Dowry Cases", path: "/services/dowry" },
    { label: "Child Custody", path: "/services/child-custody" },
    { label: "Cruelty", path: "/services/cruelty" },
    { label: "Judicial Separation", path: "/services/judicial-separation" },
    { label: "Child Visitation", path: "/services/child-visitation" },
    { label: "Annulment of Marriage", path: "/services/annulment-of-marriage" },
    { label: "Mutual Divorce", path: "/services/mutual-divorce" },
  ];

  return (
    <>
      <Head>
        <title>Best Divorce Lawyer in {cityName} | Unsaathi</title>
        <meta 
          name="description" 
          content={`Looking for the best divorce lawyer in ${cityName}? Unsaathi offers expert legal help for mutual & contested divorce, custody, alimony & more. Get consultation today.`} 
        />
        <link rel="canonical" href={`https://www.unsaathi.com${pathname}`} />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Local Business Schema for this city */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema(cityName, pathname)) }}
        />
        
        {/* FAQ Schema from API data */}
        {faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaFromData(faqs)) }}
          />
        )}
      </Head>

      <div className="bg-[#f5f1ed] text-[#232122]">
        {/* Hero Section with Video Background */}
        <section className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={`/assets/${cityName}.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Divorce Lawyers in {cityName}
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
              Expert help for mutual divorce, custody, alimony, and legal documentation—handled with care and confidentiality.
              Get guidance from experienced lawyers in {cityName}.
            </p>
            <Link href="/contact" className="bg-[#b88b6c] hover:bg-[#a3775a] px-8 py-4 rounded-full font-semibold shadow-lg transition">
              Talk to an Expert
            </Link>
          </div>
        </section>
        
        {/* TRUSTED SECTION */}
        <section className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Trusted Divorce Services in {cityName}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Unsaathi offers reliable and discreet divorce services in {cityName}, helping individuals navigate legal separation with clarity and confidence. If you are searching for the best divorce lawyer in {cityName}, our platform connects you with experienced professionals who handle both mutual and contested divorce cases efficiently. From legal consultation to documentation and court procedures, we ensure every step is managed smoothly. Our goal is to reduce emotional stress while maintaining complete confidentiality and legal accuracy. With the guidance of the best divorce lawyer in {cityName}, you can expect a structured approach that prioritises faster resolution, transparency, and your peace of mind.
          </p>
        </section>

        {/* SERVICES GRID */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Our Legal Services in {cityName}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-[#eee]">
                <h3 className="text-xl font-semibold mb-3">{service.label}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Professional legal support tailored to your case with complete confidentiality.
                </p>
                <Link href={service.path} className="text-[#b88b6c] font-semibold">
                  Know More →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <ForYou />

        {/* FAQ SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          {/* @ts-ignore - Bypass type checking for FaqAccordion */}
          <FaqAccordion faqs={faqs} />
        </section>
      </div>
    </>
  );
};

export default CityDivorcePage;