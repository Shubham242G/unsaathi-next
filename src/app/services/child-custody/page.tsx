'use client'

import Lottie from 'lottie-react';
import aboutAnimation from '../../../bannerImages/beidge.json';
import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { fetchFaqsByCategory } from '../../utils/fetchFaqs';
import FaqAccordion from '../../component/FaqAccordion';
import { useReviReady } from '../../hooks/useReviReady';

const ChildCustodyPage: React.FC = () => {
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
    fetchFaqsByCategory("child-custody")
      .then((data: any) => {
        setFaqs(data);
      })
      .catch((err: Error) => console.error("FAQs services page error:", err))
      .finally(() => setLoading(false));
  }, []);

  // Slider component
  const GoverningLawsSlider: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | undefined>(undefined);
    const isHovering = useRef(false);

    const laws = [
      {
        title: "Hindu Minority and Guardianship Act, 1956",
        description: "This law applies to Hindus. It emphasises that the welfare of the child is the primary consideration."
      },
      {
        title: "Guardian and Wards Act, 1890",
        description: "This secular law applies to all communities. The main goal of this law is to appoint a guardian who will take care of the child's interests and nurture them."
      },
      {
        title: "Muslim Personal Law (Shariat) Application Act, 1937",
        description: "The Muslim personal law governs the child custody rights and the guardianship matters of Muslims. Hizanat or child custody is usually granted to the mothers, and the fathers receive the child visitation rights."
      },
      {
        title: "Christian and Parsi Law",
        description: "The child custody disputes of Christian and Parsi individuals are now resolved under the Indian Divorce Act, 1869 or the Guardians and Wards Act, 1890."
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
      <section className="w-full py-12 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-3">Laws Governing Child Custody in India</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Child custody is one of the significant aspects of divorce. In India, child custody is governed by the following laws:
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
                {[...laws, ...laws].map((law, index) => (
                  <div
                    key={index}
                    className="w-[350px] md:w-[400px] flex-shrink-0 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="p-7">
                      <h3 className="text-2xl font-bold text-[#232122] mb-4">
                        {law.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {law.description}
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
        <title>Best Child Custody Lawyers in India | Unsaathi</title>
        <meta name="description" content="Losing custody of your child? India's best family lawyers at Unsaathi fight for your parental rights — sole, joint & interim custody. Call now: +91 9266877791" />
        <meta name="keywords" content="divorce lawyer delhi, mutual divorce delhi" />
      </Head>
      
      {/* Hero Section - Reduced bottom padding */}
      <section className="w-full flex flex-col justify-center items-center bg-white text-center px-4 pt-16 pb-8">
        {/* Text Content */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          Understanding Child Custody
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-4">
          Putting Your Child's Best Interest First
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
          During a divorce, determining child custody is one of the most critical decisions. The primary goal of the Indian legal system is to ensure the child's welfare and stability.
        </p>

        {/* Lottie Banner Illustration - Reduced bottom margin */}
        <div className="flex justify-center w-full max-w-xl mx-auto mb-4">
          <Lottie animationData={aboutAnimation} loop={true} className="w-full h-auto" />
        </div>
      </section>

      {/* Governing Laws Slider Section - Second section from top with reduced gap */}
      <GoverningLawsSlider />

      {/* Types of Custody Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">The Four Main Types of Custody</h2>
            <p className="text-lg text-[#c48e53] mt-2">
              Custody arrangements are typically broken down into four key categories.
            </p>
          </div>
          
          {/* Grid container for the cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Physical Custody Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-3 text-center">1. Physical Custody</h3>
              <p className="text-gray-700">
                This determines where the child lives. The parent with physical custody is the "custodial parent," responsible for the child's daily care. The other parent usually has visitation rights.
              </p>
            </div>

            {/* Legal Custody Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-3 text-center">2. Legal Custody</h3>
              <p className="text-gray-700">
                This grants a parent the legal authority to make major decisions about the child's life, including their education, healthcare, and religious upbringing.
              </p>
            </div>
            
            {/* Sole Custody Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-3 text-center">3. Sole Custody</h3>
              <p className="text-gray-700">
                In this arrangement, one parent is granted both full physical and legal custody. This is often awarded when the court believes it's in the child's best interest to have a single, stable home environment.
              </p>
            </div>

            {/* Joint Custody Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-3 text-center">4. Joint Custody</h3>
              <p className="text-gray-700">
                Both parents share legal and/or physical custody. This requires a high degree of cooperation, as parents must make decisions together and manage the logistics of the child living in two separate homes.
              </p>
            </div>
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

export default ChildCustodyPage;