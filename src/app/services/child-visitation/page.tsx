'use client'

import React, { useEffect, useState } from 'react';
import aboutAnimation from '../../../bannerImages/beidge.json';
import Lottie from 'lottie-react';
import Head from 'next/head';
import { fetchFaqsByCategory } from '../../utils/fetchFaqs';
import FaqAccordion from '../../component/FaqAccordion';
import { useReviReady } from '../../hooks/useReviReady';

const ChildVisitationPage: React.FC = () => {
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
    fetchFaqsByCategory("child-visitation")
      .then((data: any) => {
        setFaqs(data);
      })
      .catch((err: Error) => console.error("FAQs services page error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f6f2] font-serif text-[#3d3d3d]">
      <Head>
        <title>Best Child Visitation Rights Lawyers in India | Unsaathi</title>
        <meta name="description" content="Being denied access to your child? India's best family lawyers at Unsaathi secure your child visitation rights via court order fast. Call now: +91 9266877791" />
        <meta name="keywords" content="divorce lawyer delhi, mutual divorce delhi" />
      </Head>
      
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center bg-white text-center px-4 py-8">
        {/* Text Content */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Child Visitation Rights
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-6">
          Building Lasting Connections with Your Child
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          For a non-custodial parent, visitation rights are essential for maintaining a strong, healthy relationship with their child. The law provides various frameworks to ensure this bond is protected, always prioritizing the child's best interests.
        </p>

        {/* Lottie Banner Illustration */}
        <div className="flex justify-center w-full max-w-xl mx-auto mb-8">
          <Lottie animationData={aboutAnimation} loop={true} className="w-full h-100" />
        </div>
      </section>

      {/* Types of Visitation Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Types of Child Visitation</h2>
            <p className="text-lg text-[#c48e53] mt-2">
              Courts can establish different visitation schedules based on the family's specific circumstances.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Scheduled Visitation Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Scheduled Visitation</h3>
              <p className="text-gray-700 text-sm">
                The most common type, where a fixed schedule outlines specific dates and times for visits, such as weekends, holidays, and school vacations.
              </p>
            </div>

            {/* Supervised Visitation Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Supervised Visitation</h3>
              <p className="text-gray-700 text-sm">
                Ordered when there are concerns about the child's safety, requiring a neutral third party to be present during visits to ensure a safe environment.
              </p>
            </div>

            {/* Virtual Visitation Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Virtual Visitation</h3>
              <p className="text-gray-700 text-sm">
                Uses technology like video calls and messaging to facilitate contact, especially useful when long distances make physical visits impractical.
              </p>
            </div>

            {/* Reasonable/Open Visitation Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Reasonable Visitation</h3>
              <p className="text-gray-700 text-sm">
                A flexible arrangement without a fixed schedule, where parents are expected to mutually agree on visitation times. This requires a high level of amicable cooperation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Factors Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Factors Considered by the Court</h2>
          <p className="text-lg text-gray-600 mb-8">
            When determining visitation rights, the court's primary goal is the child's welfare. Key factors include the child's age, the educational and daily routine, the geographical distance between parents, and the past conduct of each parent.
          </p>
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

export default ChildVisitationPage;