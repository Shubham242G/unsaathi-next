'use client'

import Lottie from 'lottie-react';
import React, { useEffect, useState } from 'react';
import aboutAnimation from '../../../bannerImages/beidge.json';
import Head from 'next/head';
import FaqAccordion from '../../component/FaqAccordion';
import { fetchFaqsByCategory } from '../../utils/fetchFaqs';
import { useReviReady } from '../../hooks/useReviReady';

const ConjugalRightsPage: React.FC = () => {
  const whatsappNumber = '919266877791';

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello, I'd like to connect with a legal advisor regarding Mutual Divorce."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const isDataReady = !loading && faqs !== null;
  useReviReady(isDataReady);
  
  useEffect(() => {
    fetchFaqsByCategory("conjugal-rights")
      .then((data: any) => {
        setFaqs(data);
      })
      .catch((err: Error) => console.error("FAQs services page error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f6f2] font-serif text-[#3d3d3d]">
      <Head>
        <title>Conjugal Rights Lawyers in India | Consult Unsaathi</title>
        <meta name="description" content="Spouse deserted you? File for Restitution of Conjugal Rights under Section 9 HMA. Expert family lawyers at Unsaathi protect your marriage rights. Book a free consultation today." />
        <meta name="keywords" content="divorce lawyer delhi, mutual divorce delhi" />
      </Head>
      
      {/* Hero Section (Banner) */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Restitution of Conjugal Rights
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-6">
            A Legal Remedy to Resume Cohabitation
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            "Restitution of Conjugal Rights" is a legal provision that allows a spouse to petition the court if their partner has withdrawn from the marriage without a reasonable excuse. It is a remedy aimed at preserving the marital union.
          </p>

          {/* Lottie Banner Illustration - reduced gap */}
          <div className="flex justify-center w-full max-w-xl mx-auto mb-8">
            <Lottie
              animationData={aboutAnimation}
              loop={true}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Governing Laws Section */}
      <section className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">The Legal Framework in India</h2>
            <p className="text-base md:text-lg text-[#c48e53] mt-2">
              This remedy is recognized under various personal laws.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Hindu Marriage Act Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-center">Hindu Marriage Act, 1955</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Section 9 of this Act allows either the husband or wife to file a petition for the restitution of conjugal rights. It applies to Hindus, Jains, Buddhists, and Sikhs.
              </p>
            </div>

            {/* Special Marriage Act Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-center">Special Marriage Act, 1954</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Section 22 of this secular law provides the same remedy for couples married in a civil ceremony, regardless of their religion.
              </p>
            </div>

            {/* Indian Divorce Act Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-center">Indian Divorce Act, 1869</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Sections 32 and 33 of this Act provide for the restitution of conjugal rights for couples married under Christian law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose and Effect Section */}
      <section className="w-full bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Purpose and Effect</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            The primary goal of a restitution decree is not to force an unwilling spouse to live with the other, but to preserve the marriage. If the court's decree is not obeyed for a period of one year or more, it can become a valid ground for the petitioning spouse to file for divorce.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#fff8f3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Begin Your Fresh Start
          </h2>
          <p className="text-[#c48e53] mb-8">
            A mutual divorce doesn't have to be a battle. Let our experts guide you through this streamlined process to ensure a peaceful and dignified resolution.
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#c48e53] hover:bg-[#b57d45] text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
              Connect With Our Legal Advisors
            </button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* @ts-ignore - Bypass type checking for FaqAccordion */}
        <FaqAccordion faqs={faqs} />
      </section>
    </div>
  );
};

export default ConjugalRightsPage;