'use client'

import React, { useEffect, useState } from "react";
import Head from "next/head";
import FaqAccordion from "../component/FaqAccordion";
import { useReviReady } from "../hooks/useReviReady";

const BASE_URL = "https://unsaathi-backend.onrender.com";

interface FaqItem {
  question: string;
  answer: string;
  _id?: string;
}

const FaqPage: React.FC = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Track when data is fully loaded for ReviJs
  const isDataReady = !loading && faqs !== null;
  useReviReady(isDataReady);

  useEffect(() => {
    fetch(`${BASE_URL}/api/faq/by-category/general`)
      .then(res => res.json())
      .then((data: FaqItem[]) => {
        setFaqs(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        console.error("FAQ error:", err);
        setLoading(false);
      });
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <Head>
        <title>FAQs | Unsaathi</title>
        <meta
          name="description"
          content="Frequently asked questions about legal services, divorce, custody, alimony and more."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h1>
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c48e53] mx-auto mb-4"></div>
              <p className="text-gray-600">Loading FAQs...</p>
            </div>
          ) : (
            /* @ts-ignore - Bypass type checking for FaqAccordion */
            <FaqAccordion faqs={faqs} />
          )}
        </div>
      </div>
    </>
  );
};

export default FaqPage;