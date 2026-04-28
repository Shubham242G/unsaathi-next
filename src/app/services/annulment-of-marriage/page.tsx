'use client'

import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import aboutAnimation from '../../../bannerImages/beidge.json';
import Head from 'next/head';
import FaqAccordion from '../../component/FaqAccordion';
import { fetchFaqsByCategory } from '../../utils/fetchFaqs';
import { useReviReady } from '../../hooks/useReviReady';

const AnnulmentOfMarriagePage: React.FC = () => {
  const whatsappNumber = '919266877791';

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello, I'd like to connect with a legal advisor regarding Mutual Divorce."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };
  
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  const isDataReady = !loading && faqs !== null;
  useReviReady(isDataReady);
  
  useEffect(() => {
    fetchFaqsByCategory("annulment-of-marriage")
      .then((data: any) => {
        setFaqs(data);
      })
      .catch((err: Error) => console.error("FAQs services page error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f6f2] font-serif text-[#3d3d3d]">
      <Head>
        <title>Best Annulment of Marriage Lawyers in India | Unsaathi</title>
        <meta name="description" content="Marriage void or voidable? Get your marriage annulled under Sec 11 & 12 HMA with India's best family lawyers. Decree of nullity made simple. Call: +91 9266877791" />
        <meta name="keywords" content="divorce lawyer delhi, mutual divorce delhi" />
      </Head>
      
      {/* Hero Section */}
      <section className="w-full py-20 px-4 bg-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
          Annulment of Marriage in India
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-4">
          A Comprehensive Guide to Nullifying Unions
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
          Discover valid reasons for the annulment of the marriage. Understand the annulment of marriage through this step-by-step guide to voiding a marriage
        </p>

        {/* Lottie Banner Illustration */}
        <div className="flex justify-center w-full max-w-xl mx-auto mb-8">
          <Lottie animationData={aboutAnimation} loop={true} className="w-full h-100" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53]">
          Legally Declaring a Marriage Null and Void
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4 mb-10">
          An annulment is a legal procedure that declares a marriage void from its inception, as if it never happened. This is fundamentally different from a divorce, which dissolves a legally valid marriage.
        </p>
      </section>

      {/* Governing Laws Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Laws Governing Annulment</h2>
            <p className="text-lg text-[#c48e53] mt-2">
              The grounds and procedures for annulment are defined by various personal laws in India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Hindu Marriage Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Hindu Marriage Act, 1955</h3>
              <p className="text-gray-700 text-sm">
                Section 12 allows for annulment on grounds like impotence, unsoundness of mind, consent obtained by force or fraud, and the bride being pregnant by another person at the time of marriage.
              </p>
            </div>

            {/* Special Marriage Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Special Marriage Act, 1954</h3>
              <p className="text-gray-700 text-sm">
                This secular law provides similar grounds for annulment for inter-faith and civil marriages, ensuring uniform rights for couples registered under this act.
              </p>
            </div>

            {/* Muslim Personal Law Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Muslim Personal Law</h3>
              <p className="text-gray-700 text-sm">
                Under Shariat, an annulment (known as 'Faskh') can be sought if the marriage is irregular (fasid) or void (batil) due to issues like lack of proper witnesses or marriage within prohibited relationships.
              </p>
            </div>

            {/* Indian Divorce Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Indian Divorce Act, 1869</h3>
              <p className="text-gray-700 text-sm">
                For Christian marriages, Section 19 lists grounds for annulment, including bigamy, one party being a "lunatic or idiot," or the parties being within prohibited degrees of relation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grounds for Annulment Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Common Grounds for Annulment</h2>
          <p className="text-lg text-gray-600 mb-8">
            A marriage may be annulled if it was invalid from the start. Common grounds across various laws include:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-700">
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Bigamy</span>
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Force or Fraud</span>
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Unsoundness of Mind</span>
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Prohibited Relationship</span>
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Impotence</span>
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
        {/* @ts-ignore - Bypass type checking for FaqAccordion */}
        <FaqAccordion faqs={faqs} />
      </section>
    </div>
  );
};

export default AnnulmentOfMarriagePage;