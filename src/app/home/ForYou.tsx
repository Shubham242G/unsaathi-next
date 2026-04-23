'use client'

import React from "react";
import Image from "next/image";

// For illustration, replace src attributes with your SVGs or image assets
const infoCards = [
  {
    img: "/assets/approach.webp", // Affordable Solutions icon
    title: "Affordable Solutions",
    desc: "We provide access to an affordable divorce lawyer India so you never have to worry about the financial impact of legal support.",
  },
  {
    img: "/assets/potential-icon-2.webp", // Tailored Approach icon
    title: "Tailored Approach",
    desc: "Every relationship is unique, which is why our services are personalised to suit your situation and goals.",
  },
  {
    img: "/assets/different-perspective.webp", // Peace of Mind icon
    title: "Peace of Mind",
    desc: "Our legal team ensures that your rights are protected throughout the process.",
  },
];

const secondaryCards = [
  {
    img: "/assets/heart-puzzle (1).webp", // Empathetic Guidance icon
    title: "Empathetic Guidance",
    desc: (
      <>
        Our <span className="font-semibold">lawyers</span> offer compassionate support while helping you navigate emotional challenges.
      </>
    ),
  },
  {
    img: "/assets/different-perspective.webp", // Legal Expertise icon
    title: "Legal Expertise",
    desc: (
      <>
        Whether you are searching for top <span className="font-semibold">divorce lawyers</span> near me or legal clarity on family law, our experts provide practical solutions.
      </>
    ),
  },
  {
    img: "/assets/approach.webp", // Simplified Process icon
    title: "Simplified Process",
    desc: "From documentation to legal filing, Unsaathi streamlines the entire journey for a smoother experience.",
  },
];

const redirectToWhatsApp = (number: string) => {
  if (!number) return alert("WhatsApp number not provided!");
  const cleanNumber = number.toString().replace(/[^0-9]/g, ""); // keep only digits
  const whatsappUrl = `https://wa.me/${cleanNumber}`;
  window.open(whatsappUrl, "_blank");
};

export default function ForYou() {
  const whatsappNumber = "919266877791";

  return (
    <section className="bg-[#f6f2ef] py-12 md:py-16 w-full overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top subheading and heading */}
        <div className="text-center">
          <h4 className="text-[#b88b6c] font-semibold mb-2">Unsaathi For You</h4>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#45362e] leading-tight mb-3">
            Clarity. Compassion. A Fresh Start.
          </h2>
          <div className="text-[#776e65] mb-10">
            For us, your peace of mind comes first. Our goal is to simplify the legal process while connecting you with the best lawyer for divorce near me and trusted legal guidance.
          </div>
        </div>

        {/* Main card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="bg-[#f8edeb] rounded-2xl shadow-sm flex flex-col items-center text-center px-6 py-10"
            >
              <div className="relative h-40 w-full mb-5">
                <Image 
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-serif font-bold text-xl md:text-2xl text-[#45362e] mb-3">{card.title}</h3>
              <p className="text-[#776e65] md:text-base text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Secondary card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryCards.map((card) => (
            <div
              key={card.title}
              className="bg-[#f8edeb] rounded-2xl shadow-sm flex flex-col items-center text-center px-6 py-10"
            >
              <div className="relative h-20 w-full mb-5">
                <Image 
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-serif font-bold text-xl md:text-2xl text-[#45362e] mb-3">{card.title}</h3>
              <p className="text-[#776e65] md:text-base text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <h2 className="font-serif text-2xl md:text-3xl text-[#45362e] font-bold mb-5">
            Unsaathi Walks You Through This Journey Hassle-Free With Our Divorce Services.
          </h2>
          <button
            onClick={() => redirectToWhatsApp(whatsappNumber)} 
            className="px-8 py-2 rounded-full bg-[#b88b6c] text-white shadow-md font-semibold text-lg hover:bg-[#a5775c] transition"
          >
            Make An Appointment
          </button>
        </div>
      </div>
    </section>
  );
}