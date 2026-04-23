'use client'

import React from 'react';
import Image from 'next/image';
import DivorceInsightQuiz from '../component/quiz';

export default function AboutUs() {
  return (
    <div className="bg-[#f5f1ed] min-h-screen">
      {/* Main container for content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Section: Content */}
        <div>
          {/* Section Title */}
          <div className="mb-2 text-lg text-[#ae9478] font-semibold">About Unsaathi</div>

          {/* Heading */}
          <h2 className="text-5xl font-serif text-gray-900 leading-tight mb-8">
            Find Top-Notch Divorce Services Here
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Navigating a divorce can be overwhelming, but Unsaathi offers the best online <span className="font-semibold text-gray-900">divorce service</span> designed to simplify the journey.
              Whether you are looking for divorce <span className="font-semibold text-gray-900">divorce lawyers</span> near me, good <span className="font-semibold text-gray-900">divorce lawyers</span> near me, or trusted divorce and family lawyer near me, our platform connects you with experienced professionals who prioritise your well-being.
            </p>
            <p>
              Our legal experts help with every aspect of separation - from <span className="font-semibold text-gray-900">financial settlements</span> to custody disputes. If you are searching for the <span className="font-semibold text-gray-900">best divorce lawyers</span> near me or a reliable lawyer near me for divorce, Unsaathi ensures the process remains simple, transparent, and supportive.
            </p>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[500px] h-[470px] bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden relative">
            <Image 
              src='/assets/About_Us_Image.jpg'
              alt="About Unsaathi - Divorce services"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>
      </div>
      <DivorceInsightQuiz />
    </div>
  );
}