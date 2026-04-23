'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lottie from 'lottie-react';
import ConnectWithUnsaathi from '../home/ConnectWithUnsaathi';
import aboutAnimation from '../bannerImages/about-us-banner-anim.json';

export default function AboutUsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Handle mounting for client-side only features
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (!mounted) return;
    
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 4); // There are 4 testimonials
    }, 6000);
    return () => clearInterval(timer);
  }, [mounted]);

  // Don't render during SSR to avoid hydration mismatches
  if (!mounted) {
    return (
      <div className="bg-[#F5EFE9] font-serif overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-36 text-center">
            <div className="animate-pulse">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F5EFE9] font-serif overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section 1: Unravelling Unsaathi - Premium Version */}
        <section className="py-24 md:py-36">
          <div className="grid md:grid-cols-2 items-center gap-20 max-w-7xl mx-auto px-6">
            {/* Left side - Text content */}
            <div className="text-left space-y-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#232122] tracking-tight">
                Unravelling Unsaathi
              </h1>
              <p className="text-lg md:text-xl text-[#726964] max-w-lg leading-relaxed">
                Empowering you with peace of mind, guiding you towards a brighter future,
                and redefining the divorce landscape in India.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Link href="/connect-With-Us">
                  <button className="px-8 py-3 border-2 border-[#d4a373] text-[#b58850] rounded-full font-medium text-lg transition-all duration-300 hover:bg-[#d4a373] hover:text-white shadow-md hover:shadow-lg">
                    Explore Our Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Right side - Lottie animation */}
            <div className="flex justify-center md:justify-start">
              <Lottie
                animationData={aboutAnimation}
                loop={true}
                className="w-full md:w-[90%] lg:w-[85%] h-auto max-h-[600px]"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Divorce In India. Think Unsaathi. */}
        <section className="py-10 md:py-32 rounded-lg bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16 lg:gap-24">
            {/* Left side - Image */}
            <div className="w-full h-[600px] rounded-2xl overflow-hidden order-last md:order-first relative">
              <Image 
                src='/assets/About_Us_Page_2nd_image.png'
                alt="A compassionate legal consultation session"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Right side - Text content */}
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#232122] tracking-tight mb-6">
                Divorce In India. Think Unsaathi.
              </h2>
              
              <p className="text-xl text-[#726964] mb-8">
                Getting a divorce in India can be stress-free with the right guidance, support, and compassionate legal care.
              </p>

              <p className="text-lg text-[#726964] leading-relaxed mb-10">
                While divorce in India is often seen as a taboo that brings emotional stress, Unsaathi is breaking these barriers. We provide empathetic support and expert legal guidance, transforming a difficult process into an empowering journey of personal growth and new beginnings.
              </p>
              
              <div>
                <a 
                  href="https://wa.me/919266877791" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#d5bfa7] text-[#232122] px-8 py-4 rounded-full font-semibold transition-all duration-300 ease-in-out hover:bg-[#c4ab92] hover:shadow-md hover:-translate-y-1"
                >
                  Book An Appointment
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Mission and Vision */}
        <section className="py-16 md:py-20 space-y-16">
          <div className="text-center">
            <p className="text-[#b88b6c] font-semibold mb-2">The Unsaathi Mission</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#232122]">Divorce Is Not The End, It's A Brand New Beginning.</h2>
            <p className="max-w-4xl mx-auto text-base md:text-lg text-[#726964] mt-6">
              Unsaathi is committed to providing compassionate divorce services and expert separation guidance. We understand that the emotional stress of divorce can be overwhelming, so we empower our clients with the support and guidance to overcome the tough times legally and emotionally. We strongly believe divorce is not the end but the beginning of a new life.
            </p>
          </div>
        </section>

        {/* Section 4: Meet The Founder */}
        <section className="bg-[#f6f2ef] py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-[#b88b6c] font-semibold mb-2">Unsaathi's Visionary</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#232122]">Meet The Founder</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
              
              <div className="w-full order-1 md:order-2 relative h-[500px] md:h-[600px]">
                <Image 
                  src='/assets/GAURAV-SHARMA-UNSAATHI.jpg'
                  alt="Gaurav Sharma, Founder of Unsaathi"
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              <div className="w-full order-2 md:order-1 text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-[#232122] mb-4">Adv. GAURAV SHARMA</h3>

                <div className="text-base md:text-lg text-[#726964] space-y-5">
                  <p>
                    Gaurav Sharma, the founder of Unsaathi, has always been driven by a deep sense of purpose. With a rich academic background in Economics and Law from Delhi University, his motivation stems from a desire to offer compassionate legal support that prioritizes emotional well-being.
                  </p>
                  <p>
                    Through his visionary leadership, Unsaathi is transforming the divorce process in India. Gaurav's focus is on breaking the stigma around divorce and helping clients embrace new beginnings with confidence, peace of mind, and a renewed sense of hope.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl font-serif text-[#232122] relative my-8 shadow-sm">
                  <span className="absolute top-4 left-6 text-7xl text-[#eaddd1] opacity-70">“</span>
                  <p className="text-lg md:text-xl leading-relaxed italic relative z-10">
                    Divorce is one of life's hardest decisions, but it doesn't have to define you... Together, we'll turn this chapter into a new beginning filled with hope.
                  </p>
                </div>

                <div className="flex gap-5 mt-8">
                  <a 
                    href="https://www.linkedin.com/in/gaurav-sharma-82a87125b" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#b88b6c] hover:text-[#9c7150] transition-colors" 
                    aria-label="LinkedIn"
                  >
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zM5 8H0v12h5V8zm7.982 0H8.014v12h4.968v-6.2c0-3.368 4.02-3.368 4.02 0V20h4.998v-7.2c0-5.54-7.01-5.54-7.01 0V8z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/gauravlaw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#b88b6c] hover:text-[#9c7150] transition-colors" 
                    aria-label="Instagram"
                  >
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2c-2.717 0-3.056.01-4.122.06-1.065.05-1.79.217-2.428.465a4.898 4.898 0 00-1.772 1.153 4.942 4.942 0 00-1.153 1.772c-.247.637-.415 1.363-.465 2.428C2.013 8.944 2 9.283 2 12s.013 3.056.06 4.122c.05 1.065.218 1.79.465 2.428a4.898 4.898 0 001.153 1.772 4.942 4.942 0 001.772 1.153c.637.247 1.363.415 2.428.465C8.944 21.987 9.283 22 12 22s3.056-.013 4.122-.06c1.065-.05 1.79-.218 2.428-.465a4.898 4.898 0 001.772-1.153 4.942 4.942 0 001.153-1.772c.247-.637.415-1.363.465-2.428C21.987 15.056 22 14.717 22 12s-.013-3.056-.06-4.122c-.05-1.065-.218-1.79-.465-2.428a4.898 4.898 0 00-1.153-1.772 4.942 4.942 0 00-1.772-1.153c-.637-.247-1.363-.415-2.428-.465C15.056 2.013 14.717 2 12 2zm0 2c2.67 0 2.987.01 4.042.059.975.044 1.502.207 1.857.344.467.182.8.398 1.15.748.35.35.566.683.748 1.15.137.355.3.882.344 1.857.048 1.055.058 1.372.058 4.042s-.01 2.987-.058 4.042c-.044.975-.207 1.502-.344 1.857a3.42 3.42 0 01-.748 1.15 3.41 3.41 0 01-1.15.748c-.355.137-.882.3-1.857.344-1.055.048-1.372.058-4.042.058s-2.987-.01-4.042-.058c-.975-.044-1.502-.207-1.857-.344a3.42 3.42 0 01-1.15-.748 3.41 3.41 0 01-.748-1.15c-.137-.355-.3-.882-.344-1.857-.048-1.055-.058-1.372-.058-4.042s.01-2.987.058-4.042c.044-.975.207-1.502.344-1.857.182-.466.398-.8.748-1.15a3.41 3.41 0 011.15-.748c.355-.137.882-.3 1.857-.344C9.013 4.01 10.33 4 12 4zm0 10a4 4 0 100-8 4 4 0 000 8zm0-6a2 2 0 110 4 2 2 0 010-4zm5-1a1 1 0 110-2 1 1 0 010 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Real Stories */}
        <section className="text-center py-20 bg-[#f6f2ef]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#232122] mb-4">
            Real Stories Of New Beginnings
          </h2>
          <p className="text-base md:text-lg text-[#726964] max-w-3xl mx-auto mb-12">
            Explore inspiring stories from our clients who found clarity and strength with Unsaathi.
            Their journeys reflect resilience and the power of compassionate support in transforming
            challenges into new beginnings.
          </p>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden relative">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {[
                  {
                    text: "All my expectations were surpassed. The approach that Gaurav took in my divorce case not only saved me time but also gave me emotional closure. I now approach co-parenting with balance and confidence.",
                    name: "Neha Kapoor, Delhi",
                  },
                  {
                    text: "Unsaathi created a safe space for me to heal during one of the most turbulent times of my life. Their sensitivity and legal clarity helped me rebuild my confidence step by step.",
                    name: "Ankit Mehra, Gurgaon",
                  },
                  {
                    text: "Their compassionate and organized approach changed how I saw divorce. Instead of fear, I found freedom, clarity, and a supportive hand guiding me every step of the way.",
                    name: "Priya Malhotra, Mumbai",
                  },
                  {
                    text: "From day one, Unsaathi felt more like a friend than a legal service. The process was smooth, transparent, and full of emotional understanding — I couldn't have asked for better support.",
                    name: "Rohit Bansal, Bangalore",
                  },
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="min-w-full px-6 md:px-12"
                  >
                    <div className="bg-white border border-[#e2d2c0] rounded-2xl p-10 shadow-md">
                      <p className="text-lg italic text-[#5f554f] leading-relaxed mb-6">
                        “{testimonial.text}”
                      </p>
                      <p className="text-[#b88b6c] font-semibold text-lg">
                        — {testimonial.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6 gap-3">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index
                        ? "bg-[#b88b6c] scale-110"
                        : "bg-[#e2d2c0]"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
            </div>
          </div>
        </section>

        {/* Section 7: Contact Form */}
        <section className="py-16 md:py-20">
          <ConnectWithUnsaathi />
        </section>

      </div>
    </div>
  );
}