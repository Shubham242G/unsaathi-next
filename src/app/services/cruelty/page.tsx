'use client'

import React, { useEffect, useState, useRef } from 'react';
import Lottie from 'lottie-react';
import aboutAnimation from '../../../bannerImages/beidge.json';
import Head from 'next/head';
import FaqAccordion from '../../component/FaqAccordion';
import { fetchFaqsByCategory } from '../../utils/fetchFaqs';
import { useReviReady } from '../../hooks/useReviReady';

const CrueltyInMarriagePage: React.FC = () => {
  const whatsappNumber = '919266877791';

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello, I'd like to connect with a legal advisor regarding cruelty in a marriage."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const isDataReady = !loading && faqs !== null;
  useReviReady(isDataReady);
  
  useEffect(() => {
    fetchFaqsByCategory("cruelty")
      .then((data: any) => {
        setFaqs(data);
      })
      .catch((err: Error) => console.error("FAQs services page error:", err))
      .finally(() => setLoading(false));
  }, []);

  // Slider component for Types of Cruelty
  const CrueltyTypesSlider: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | undefined>(undefined);
    const isHovering = useRef(false);

    const crueltyTypes = [
      {
        title: "Physical Cruelty",
        description: "Beating, slapping, pushing, or any form of physical violence against the spouse. Physical cruelty is the most direct form and is relatively easier to establish through medical records, police complaints, and witness testimony."
      },
      {
        title: "Mental and Emotional Cruelty",
        description: "Persistent humiliation, verbal abuse, false accusations, threats, gaslighting, isolation from family, or causing constant psychological distress. Indian courts have repeatedly held that mental cruelty can be as grave as physical cruelty — and sometimes more so."
      },
      {
        title: "Economic Cruelty",
        description: "Controlling or withholding finances, preventing the spouse from working, misappropriating shared assets, or creating financial dependency as a tool of abuse."
      },
      {
        title: "Sexual Cruelty",
        description: "Forced sexual acts, denying conjugal rights without cause, or using sexual behaviour as punishment or control."
      },
      {
        title: "Social Cruelty",
        description: "Publicly humiliating the spouse, isolating them from friends and family, damaging their reputation, or forcing them out of social life."
      }
    ];

    useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const autoScroll = () => {
        if (!isHovering.current && scrollContainer) {
          if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 2) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += 0.8;
          }
        }
        animationRef.current = requestAnimationFrame(autoScroll);
      };

      animationRef.current = requestAnimationFrame(autoScroll);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, []);

    return (
      <section className="w-full py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Types of Cruelty Recognised by Indian Courts</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the different forms of cruelty can help you identify and address abuse in your marriage
            </p>
          </div>

          <div 
            className="relative"
            onMouseEnter={() => isHovering.current = true}
            onMouseLeave={() => isHovering.current = false}
          >
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                cursor: 'grab'
              }}
            >
              <div className="flex gap-8" style={{ minWidth: 'min-content' }}>
                {[...crueltyTypes, ...crueltyTypes].map((type, index) => (
                  <div
                    key={index}
                    className="w-[350px] md:w-[400px] flex-shrink-0 bg-[#fef9f5] rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="p-7">
                      <h3 className="text-2xl font-bold text-[#c48e53] mb-4">
                        {type.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle fade effect on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-[#f9f6f2] font-serif text-[#3d3d3d]">
      <Head>
        <title>Best Cruelty & 498A Lawyers in India | Unsaathi Legal Help</title>
        <meta name="description" content="Suffering physical or mental cruelty in marriage? India's best lawyers at Unsaathi help you file under Sec 498A IPC & Sec 13 HMA. Call now: +91 9266877791" />
        <meta name="keywords" content="divorce lawyer delhi, mutual divorce delhi" />
      </Head>
      
      {/* --- Hero Section (Banner) --- */}
      <section className="w-full py-20 px-4 bg-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Cruelty in Marriage? The Law is on Your Side.
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-6">
          Your Right to a Safe and Dignified Life
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Choosing kindness and compassion over cruelty reflects true strength, showcasing courage, empathy, and resilience—not a sign of weakness.
        </p>
        <div className="flex justify-center w-full max-w-xl mx-auto mt-12">
          <Lottie animationData={aboutAnimation} loop={true} className="w-full h-auto" />
        </div>
      </section>

      {/* --- Explanation of Cruelty --- */}
      <section className="w-full py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">What is Cruelty in a Marriage?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Cruelty in Marriage or Domestic Violence refers to behaviour that causes physical, emotional, or mental suffering to a spouse, making it difficult for the victim to continue living with the offender. It is a valid ground for divorce under Indian law.
          </p>
        </div>
      </section>

      {/* --- Types of Cruelty Section with Autoplay Slider --- */}
      <CrueltyTypesSlider />

      {/* --- Governing Laws Section --- */}
      <section className="w-full py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Laws for Cruelty</h2>
            <p className="text-lg text-[#c48e53] mt-2">
              In India, there are various laws that govern domestic violence cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Hindu Marriage Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Hindu Marriage Act, 1955</h3>
              <p className="text-gray-700 text-sm">
                Section 13(1)(a) allows divorce on the grounds of cruelty. This can include persistent accusations, abusive language, or harassment for dowry.
              </p>
            </div>

            {/* Special Marriage Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Special Marriage Act, 1954</h3>
              <p className="text-gray-700 text-sm">
                Section 27(1)(d) considers cruelty a valid ground for divorce for inter-faith or civil marriages.
              </p>
            </div>
            
            {/* Muslim Personal Law Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Muslim Personal Law</h3>
              <p className="text-gray-700 text-sm">
                The Dissolution of Muslim Marriage Act, 1939, empowers women to seek divorce ('khula') if their husband subjects them to cruelty.
              </p>
            </div>

            {/* Indian Divorce Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Indian Divorce Act, 1869</h3>
              <p className="text-gray-700 text-sm">
                Section 10 provides cruelty as a ground for divorce for Christian couples, where it has made life unsafe and unbearable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Criminal Offense Section --- */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="border-l-4 border-[#c48e53] pl-6 italic">
            <p className="text-2xl text-gray-800 leading-relaxed">
              "Domestic violence is not a private matter. It is a crime."
            </p>
            <footer className="mt-4 text-right text-lg text-gray-600">- Sandra Day O'Connor</footer>
          </blockquote>
          <p className="text-lg text-gray-600 mt-8">
            Under Section 498A of the IPC and Section 85 of the BNS, 2023, cruelty by a husband or his relatives is a criminal offense punishable with imprisonment up to three years and a fine.
          </p>
        </div>
      </section>

      {/* --- Final CTA Section --- */}
      <section className="bg-[#fff8f3] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Seek Confidential Legal Support
          </h2>
          <p className="text-[#c48e53] mb-8">
            You do not have to endure this alone. Let our expert legal advisors guide you through your rights and options with complete confidentiality.
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

export default CrueltyInMarriagePage;