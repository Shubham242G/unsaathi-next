'use client'

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import ForYou from "../home/ForYou";
import FaqAccordion from "../component/FaqAccordion";
import { fetchFaqsByCategory } from "../utils/fetchFaqs";
import { useReviReady } from "../hooks/useReviReady";

interface Service {
  label: string;
  path: string;
}

const NoidaDivorcePage: React.FC = () => {
  const services: Service[] = [
    { label: "Restitution of Conjugal Rights", path: "/services/conjugal-rights" },
    { label: "Contested Divorce", path: "/services/contested-divorce" },
    { label: "Maintenance and Alimony", path: "/services/maintanance-and-alimony" },
    { label: "Dowry Cases", path: "/services/dowry" },
    { label: "Child Custody", path: "/services/child-custody" },
    { label: "Cruelty", path: "/services/cruelty" },
    { label: "Judicial Separation", path: "/services/judicial-separation" },
    { label: "Child Visitation", path: "/services/child-visitation" },
    { label: "Annulment of Marriage", path: "/services/annulment-Of-marriage" },
    { label: "Mutual Divorce", path: "/services/mutual-divorce" },
  ];

  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const isDataReady = !loading && faqs !== null;
  useReviReady(isDataReady);
  
  useEffect(() => {
    fetchFaqsByCategory("divorce-lawyer-noida")
      .then((data: any) => {
        setFaqs(data);
      })
      .catch((err: Error) => console.error("FAQs services page error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[#f5f1ed] text-[#232122]">
      <Head>
        <title>Best Divorce Lawyer in Noida | Unsaathi</title>
        <meta 
          name="description" 
          content="Looking for the best divorce lawyer in Noida? Unsaathi offers expert legal help for divorce, custody, alimony & family disputes. Get consultation today." 
        />
      </Head>

      <section className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/assets/Noida.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Divorce Lawyers in Noida
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
            Expert help for mutual divorce, custody, alimony, and legal documentation—handled with care and confidentiality.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#b88b6c] hover:bg-[#a3775a] px-8 py-4 rounded-full font-semibold shadow-lg transition"
          >
            Talk to a Lawyer
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Trusted Divorce Services in Noida
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Unsaathi offers reliable and discreet divorce services in Noida, helping individuals navigate legal separation with clarity and confidence. If you are searching for the best divorce lawyer in Noida, our platform connects you with experienced professionals who handle both mutual and contested divorce cases efficiently. From legal consultation to documentation and court procedures, we ensure every step is managed smoothly. Our goal is to reduce emotional stress while maintaining complete confidentiality and legal accuracy. With the guidance of the best divorce lawyer in Noida, you can expect a structured approach that prioritises faster resolution, transparency, and your peace of mind.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-bold text-center mb-4">
          Our Legal Services in Noida
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Serving Noida Family Court and District Courts across Gautam Buddh Nagar.
        </p>
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

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-[#232122]">FAQs</h2>
        {/* @ts-ignore - Bypass type checking for FaqAccordion */}
        <FaqAccordion faqs={faqs} />
      </section>

      <section className="bg-[#232122] text-white py-16 text-center px-6">
        <h2 className="text-3xl font-serif mb-4">Need Legal Help in Noida?</h2>
        <p className="mb-6 text-gray-300">Speak with our experienced lawyers and get clarity on your case today.</p>
        <Link 
          href="/contact" 
          className="inline-block bg-[#b88b6c] hover:bg-[#a3775a] px-8 py-4 rounded-full font-semibold transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default NoidaDivorcePage;