'use client'

import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import aboutAnimation from '../../bannerImages/beidge.json';
import Head from 'next/head';
import FaqAccordion from '../../component/FaqAccordion';
import { fetchFaqsByCategory } from '../../utils/fetchFaqs';
import { useReviReady } from '../../hooks/useReviReady';

const JudicialSeparationPage: React.FC = () => {
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
    fetchFaqsByCategory("judicial-separation")
      .then((data: any) => {
        setFaqs(data);
      })
      .catch((err: Error) => console.error("FAQs services page error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f6f2] font-serif text-[#3d3d3d]">
      <Head>
        <title>Best Judicial Separation Lawyers in India | Unsaathi</title>
        <meta name="description" content="Want to live apart without divorce? File for Judicial Separation under Sec 10 HMA with India's best family lawyers. Stay legally protected. Call: +91 9266877791" />
        <meta name="keywords" content="divorce lawyer delhi, mutual divorce delhi" />
      </Head>
      
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center bg-white text-center px-4 py-8">
        {/* Text Content */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Judicial Separation in India
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-6">
          A Legal Alternative to Divorce
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Judicial separation is a legal remedy that allows a married couple to live apart without formally ending their marriage. It serves as a cooling-off period, giving both parties time to reflect, reconcile, or decide on the future of their relationship.
        </p>

        {/* Lottie Banner Illustration */}
        <div className="flex justify-center w-full max-w-xl mx-auto mb-8">
          <Lottie animationData={aboutAnimation} loop={true} className="w-full h-100" />
        </div>
      </section>

      {/* Governing Laws Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Laws Governing Judicial Separation</h2>
            <p className="text-lg text-[#c48e53] mt-2">
              This remedy is available under various personal laws in India.
            </p>
          </div>
          
          {/* Grid container for the cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Hindu Marriage Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Hindu Marriage Act, 1955</h3>
              <p className="text-gray-700 text-sm">
                Section 10 of this Act allows either spouse to file for judicial separation on the same grounds required for divorce, such as cruelty, adultery, or desertion.
              </p>
            </div>

            {/* Special Marriage Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Special Marriage Act, 1954</h3>
              <p className="text-gray-700 text-sm">
                Applicable to inter-faith and civil marriages, Section 23 provides for judicial separation on grounds similar to those in the Hindu Marriage Act.
              </p>
            </div>
            
            {/* Indian Divorce Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Indian Divorce Act, 1869</h3>
              <p className="text-gray-700 text-sm">
                This Act governs Christian marriages and permits judicial separation on the grounds of adultery, cruelty, or desertion for a period of two years or more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grounds for Separation Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Common Grounds for Separation</h2>
          <p className="text-lg text-gray-600 mb-8">
            The grounds for judicial separation are generally the same as those for a contested divorce. These include:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-700">
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Adultery</span>
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Cruelty</span>
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Desertion</span>
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Conversion</span>
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Unsoundness of Mind</span>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#fff8f3] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Begin Your Fresh Start
          </h2>
          <p className="text-[#c48e53] mb-8">
            A mutual divorce doesn't have to be a battle. Let our experts guide you through this streamlined process to ensure a peaceful and dignified resolution.
          </p>

          <div className="flex justify-center">
            <button onClick={handleWhatsAppClick}
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
        <h2 className="text-3xl font-bold mb-8 text-[#232122]">FAQs</h2>
        {/* @ts-ignore - Bypass type checking for FaqAccordion */}
        <FaqAccordion faqs={faqs} />
      </section>
    </div>
  );
};

export default JudicialSeparationPage;