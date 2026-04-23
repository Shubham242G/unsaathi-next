'use client'

import React from 'react';
import Lottie from 'lottie-react';
import heart from '../bannerImages/male.json';
import { useRouter } from 'next/navigation';

function Hero() {
  const router = useRouter();

  const handleBeginDivorce = () => {
    router.push('/connect-With-Us');
  };

  const handleLearnMore = () => {
    router.push('/why-Unsaathi');
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8 -mb-13">
          <h1 className="text-5xl lg:text-[64px] font-serif leading-[1.15] text-gray-900">
            Your Ally for a Simpler Divorce.
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            Divorce is a turning point. Unsaathi provides support from the best{' '}
            <span className="font-semibold text-gray-800">divorce lawyer</span> in India along with advanced online{' '}
            <span className="font-semibold text-gray-800">divorce services</span>, to reduce your emotional stress and help you begin a strong, fresh start.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            {/* Begin a Divorce Button */}
            <button
              onClick={handleBeginDivorce}
              className="px-8 py-3 border-2 border-[#d4a373] text-[#b58850] rounded-full font-medium text-lg transition-all duration-300 hover:bg-[#d4a373] hover:text-white shadow-md hover:shadow-lg"
            >
              Begin a Divorce
            </button>

            {/* Learn More Button */}
            <button
              onClick={handleLearnMore}
              className="px-8 py-3 bg-[#d4a373] text-white rounded-full font-medium text-lg transition-all duration-300 hover:bg-transparent hover:text-[#b58850] border-2 border-[#d4a373] shadow-md hover:shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Animation */}
        <div className="flex items-center justify-center lg:justify-end">
          <Lottie animationData={heart} loop={true} className="w-full h-[600px]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;