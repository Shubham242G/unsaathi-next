'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import FaqAccordion from "../component/FaqAccordion";
import { fetchFaqsByCategory } from "../utils/fetchFaqs";

interface Service {
  label: string;
  path: string;
}

const services: Service[] = [
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

const ServicesPage: React.FC = () => {
  // Initialize as empty array without type annotation to let TypeScript infer
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetchFaqsByCategory("services")
      .then((data:any) => {
        setFaqs(data);
      })
      .catch((err: Error) => console.error("FAQs services page error:", err));
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      {/* HERO SECTION */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 py-16 bg-[#f5f1ed]">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Video */}
          <div className="w-full h-[30vh] md:h-[35vh] rounded-2xl overflow-hidden shadow-lg bg-[#f5f1ed]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/assets/servicePage.mp4" type="video/mp4" />
            </video>
          </div>

          {/* RIGHT: Content */}
          <div className="flex flex-col justify-center h-full">
            <p className="text-[#c48e53] tracking-widest uppercase mb-3 text-sm font-semibold">
              Our Services
            </p>

            <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#232122] leading-tight mb-6">
              A Fresh Start: Insights into Mutual Divorce
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Divorces aren't always supposed to be a battle. Mutual divorce helps couples attain
              peace during this separation. Divorce refers to the dissolution of the marriage; it
              can be emotionally burdensome and legally complicated. If both spouses agree to part
              ways, the process becomes straightforward.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-[#c48e53] hover:bg-[#a07a3a] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg w-fit"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service: Service, index: number) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                {service.label}
              </h3>

              <p className="text-gray-600 mb-6">
                Professional legal guidance and representation tailored for your case.
              </p>

              <Link
                href={service.path}
                className="text-[#c48e53] font-semibold hover:underline flex items-center gap-2"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION (for services page) */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-[#232122]">FAQs</h2>
        <FaqAccordion faqs={faqs} />
      </section>
    </div>
  );
};

export default ServicesPage;