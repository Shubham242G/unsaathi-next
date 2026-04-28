'use client'

import React, { useEffect, useState, useRef } from 'react';
import Lottie from 'lottie-react';
import aboutAnimation from '../../../bannerImages/beidge.json';
import Head from 'next/head';
import FaqAccordion from '../../component/FaqAccordion';
import { fetchFaqsByCategory } from '../../utils/fetchFaqs';
import { useReviReady } from '../../hooks/useReviReady';

const JudicialSeparationPage: React.FC = () => {
  const whatsappNumber = '919266877791';

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello, I'd like to connect with a legal advisor regarding Judicial Separation."
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

  // Slider component for Grounds
  const GroundsSlider: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | undefined>(undefined);
    const isHovering = useRef(false);

    const grounds = [
      {
        title: "Cruelty",
        description: "If either of the spouses inflicts mental or physical abuse on the other spouse, it counts as cruelty. The cruelty encompasses a comprehensive range of behaviour, which includes verbal abuse, neglect, emotional abuse, financial deprivation, physical abuse, etc."
      },
      {
        title: "Desertion",
        description: "If either of the spouses abandons the other without any justification or consent it can be a ground for judicial separation."
      },
      {
        title: "Adultery",
        description: "When one of the spouses cohabits with another individual."
      },
      {
        title: "Insanity",
        description: "When either of the spouses has been declared mentally unfit."
      },
      {
        title: "Leprosy",
        description: "If one of the spouses contracts leprosy in a communicable form, it becomes a ground for judicial separation."
      },
      {
        title: "Venereal Disease",
        description: "When one spouse contracts a disease in a communicable form."
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
            <h2 className="text-4xl font-bold mb-4">Common Grounds for Separation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The grounds for judicial separation are generally the same as those for a contested divorce. These include:
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
                {[...grounds, ...grounds].map((ground, index) => (
                  <div
                    key={index}
                    className="w-[350px] md:w-[400px] flex-shrink-0 bg-[#fef9f5] rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="p-7">
                      <h3 className="text-2xl font-bold text-[#c48e53] mb-4">
                        {ground.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {ground.description}
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
        <title>Best Judicial Separation Lawyers in India | Unsaathi</title>
        <meta name="description" content="Want to live apart without divorce? File for Judicial Separation under Sec 10 HMA with India's best family lawyers. Stay legally protected. Call: +91 9266877791" />
        <meta name="keywords" content="judicial separation, legal separation india, divorce lawyer" />
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

      {/* Grounds for Separation Section with Autoplay Slider */}
      <GroundsSlider />

      {/* Final CTA Section */}
      <section className="bg-[#fff8f3] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Seek Expert Legal Guidance
          </h2>
          <p className="text-[#c48e53] mb-8">
            Understanding judicial separation? Let our expert legal advisors guide you through your rights and options with complete confidentiality.
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

export default JudicialSeparationPage;