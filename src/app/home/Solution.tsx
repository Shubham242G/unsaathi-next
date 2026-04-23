'use client'

import React from "react";

// Update icon paths to your actual assets or use inline SVGs
const services = [
  {
    icon: "/assets/consultation.png",
    title: "Divorce Attorney",
    description:
      "Our expert divorce attorneys guide you through the legal complexities and help you move forward with confidence.",
  },
  {
    icon: "/assets/agreement.png",
    title: "1 On 1 Counselling",
    description:
      "Personalised counselling sessions help you manage stress and rediscover your emotional strength.",
  },
  {
    icon: "/assets/talking.png",
    title: "Off Court Settlements",
    description:
      "Our mediation experts help resolve disputes peacefully, saving time, money, and effort.",
  },
  {
    icon: "/assets/woman.png",
    title: "Separation Coaching",
    description:
      "Practical guidance helps you navigate the early challenges of separation and rebuild your life.",
  },
];

// ✅ Reusable WhatsApp redirect function with TypeScript
const redirectToWhatsApp = (number: string) => {
  if (!number) return alert("WhatsApp number not provided!");
  const cleanNumber = number.toString().replace(/[^0-9]/g, ""); // keep only digits
  const whatsappUrl = `https://wa.me/${cleanNumber}`;
  window.open(whatsappUrl, "_blank");
};

export default function UnsaathiSolutions() {
  const whatsappNumber = "919266877791"; // ✅ just change this number when needed

  return (
    <section className="w-full bg-[#ece2d7] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h5 className="text-[#b88b6c] text-lg font-semibold mb-2">
          The Unsaathi Solutions
        </h5>
        <h2 className="font-serif font-bold text-3xl md:text-5xl text-[#45362e] leading-tight mb-4">
          Guiding You Through Uncertainty
        </h2>
        <p className="text-[#7f756f] text-base md:text-lg mb-9">
          Get hassle-free solutions under one roof with our comprehensive
          divorce services. 
        </p>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 border-t border-[#bcb0a6] pt-12">
          {services.map((service, index) => (
            <div key={index} className="flex gap-4 items-start">
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="w-9 h-9 mt-1 flex-shrink-0"
              />
              <div>
                <h3 className="font-sans font-semibold text-xl text-[#232122]">
                  {service.title}
                </h3>
                <p className="text-[#726964] text-base mt-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box - Centered below the grid */}
        <div className="mt-20 text-center">
          <div className="inline-block rounded-2xl border border-[#bcb0a6] px-8 py-10 bg-white shadow-sm w-full max-w-2xl">
            <h3 className="font-sans font-semibold text-2xl text-[#232122] mb-6">
              Talk Your Heart Out! We Are Listening 
            </h3>
            <button
              onClick={() => redirectToWhatsApp(whatsappNumber)}
              className="bg-[#b88b6c] hover:bg-[#a5775c] text-white text-lg font-semibold py-4 px-8 rounded-full w-full max-w-sm mx-auto transition-transform transform hover:scale-105"
            >
              Start Afresh Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}