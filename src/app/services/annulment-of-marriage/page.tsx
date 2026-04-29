'use client'

import React, { useEffect, useState, useRef } from 'react';
import Lottie from 'lottie-react';
import aboutAnimation from '../../../bannerImages/beidge.json';
import Head from 'next/head';
import FaqAccordion from '../../component/FaqAccordion';
import { fetchFaqsByCategory } from '../../utils/fetchFaqs';
import { useReviReady } from '../../hooks/useReviReady';

const AnnulmentOfMarriagePage: React.FC = () => {
  const whatsappNumber = '919266877791';
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello, I'd like to connect with a legal advisor regarding Annulment of Marriage."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };
  
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  // Check scroll position to enable/disable buttons
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Grounds data array
  const groundsForAnnulment = [
    {
      title: "Bigamy",
      description: "If any one of the spouses was already married at the time of the purported marriage."
    },
    {
      title: "Consanguinity or Affinity",
      description: "If the marriage between persons is within prohibited degrees of relationships, for example, close relatives."
    },
    {
      title: "Unsoundness of Mind",
      description: "If any of the spouses was of unsound mind at the time of marriage."
    },
    {
      title: "Force or Coercion",
      description: "If the marriage was done under duress of any third party."
    },
    {
      title: "Fraud",
      description: "If one party obtained marriage through fraud of a material fact."
    },
    {
      title: "Minor's Marriage",
      description: "If the marriage was proceeding even after it being illegal, i.e. a marriage of minors."
    },
    {
      title: "Lack of Consent",
      description: "If one party did not give genuine permission for the marriage."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f9f6f2] font-serif text-[#3d3d3d]">
      <Head>
        <title>Best Annulment of Marriage Lawyers in India | Unsaathi</title>
        <meta name="description" content="Marriage void or voidable? Get your marriage annulled under Sec 11 & 12 HMA with India's best family lawyers. Decree of nullity made simple. Call: +91 9266877791" />
        <meta name="keywords" content="annulment lawyer india, marriage annulment, void marriage, nullity of marriage, family lawyer" />
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
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3 text-center">Hindu Marriage Act, 1955</h3>
              <p className="text-gray-700 text-sm">
                Section 12 allows for annulment on grounds like impotence, unsoundness of mind, consent obtained by force or fraud, and the bride being pregnant by another person at the time of marriage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3 text-center">Special Marriage Act, 1954</h3>
              <p className="text-gray-700 text-sm">
                This secular law provides similar grounds for annulment for inter-faith and civil marriages, ensuring uniform rights for couples registered under this act.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3 text-center">Muslim Personal Law</h3>
              <p className="text-gray-700 text-sm">
                Under Shariat, an annulment (known as 'Faskh') can be sought if the marriage is irregular (fasid) or void (batil) due to issues like lack of proper witnesses or marriage within prohibited relationships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3 text-center">Indian Divorce Act, 1869</h3>
              <p className="text-gray-700 text-sm">
                For Christian marriages, Section 19 lists grounds for annulment, including bigamy, one party being a "lunatic or idiot," or the parties being within prohibited degrees of relation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grounds for Annulment - HORIZONTAL SCROLLING CAROUSEL */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Common Grounds for Annulment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A marriage may be annulled if it was invalid from the start. Common grounds across various laws include:
            </p>
          </div>

          {/* Carousel Container with Navigation */}
          <div className="relative group">
            {/* Left Scroll Button */}
            {canScrollLeft && (
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-[#c48e53] hover:bg-[#b57d45] text-white rounded-full p-3 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Scroll left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
            )}

            {/* Horizontal Scroll Container */}
            <div
              ref={scrollContainerRef}
              onScroll={checkScrollPosition}
              className="flex overflow-x-auto scroll-smooth gap-6 pb-8 hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {groundsForAnnulment.map((ground, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-80 md:w-96 bg-[#f9f6f2] p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-[#c48e53] rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-[#3d3d3d]">{ground.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {ground.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Scroll Button */}
            {canScrollRight && (
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-[#c48e53] hover:bg-[#b57d45] text-white rounded-full p-3 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Scroll right"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            )}
          </div>

          {/* Scroll Hint / Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {groundsForAnnulment.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = 320 + 24; // card width + gap
                    scrollContainerRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="w-2 h-2 rounded-full bg-gray-300 hover:bg-[#c48e53] transition-all duration-300 hover:w-4"
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#fff8f3] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Ready to Begin Your Fresh Start?
          </h2>
          <p className="text-[#c48e53] mb-8">
            Whether you're seeking an annulment or need legal advice, our expert family lawyers are here to help you navigate the process with compassion and expertise.
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
        <FaqAccordion faqs={faqs} />
      </section>

      {/* Add this style to hide scrollbar but keep functionality */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AnnulmentOfMarriagePage;