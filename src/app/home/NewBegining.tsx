'use client'

import React from "react";
import Image from "next/image";

export default function NewBeginning() {
  return (
    <section className="bg-[#ece2d7] w-full py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between">
        {/* Text content */}
        <div className="md:w-[60%]">
          <div className="text-[#b88b6c] text-lg font-semibold mb-3">
            Unsaathi For You
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#232122] leading-tight mb-4">
            Turn Heartaches Into New Beginning
          </h2>
          <div className="text-[#726964] text-base md:text-lg mb-8">
            Unsaathi reimagines divorce support with compassionate guidance and practical legal solutions.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#bcb0a6] pt-8 gap-2">
            <div className="pr-4">
              <h3 className="font-serif font-bold text-lg mb-2 text-[#232122]">
                Cost-Effective Solutions
              </h3>
              <p className="text-[#726964] text-base">
                Our consultants ensure accessible services so you can move forward with the right legal support.
              </p>
            </div>
            <div className="md:border-l border-[#bcb0a6] px-4">
              <h3 className="font-serif font-bold text-lg mb-2 text-[#232122]">
                Optimised Strategies
              </h3>
              <p className="text-[#726964] text-base">
                Quick documentation and streamlined procedures make legal support for separation simple and efficient.
              </p>
            </div>
            <div className="md:border-l border-[#bcb0a6] pl-4">
              <h3 className="font-serif font-bold text-lg mb-2 text-[#232122]">
                Cultural Sensitivity
              </h3>
              <p className="text-[#726964] text-base">
                Our team understands the cultural and emotional complexities of divorce in India and provides respectful guidance throughout the journey.
              </p>
            </div>
          </div>
        </div>
        {/* Illustration */}
        <div className="hidden md:flex w-[40%] justify-end items-start">
          <div className="relative w-[410px] h-auto aspect-square mt-8">
            <Image
              src="/assets/legal-service.webp"
              alt="Legal service illustration - Unsaathi divorce support"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 410px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}