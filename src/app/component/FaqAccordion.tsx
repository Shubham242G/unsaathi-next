// @ts-nocheck
import React, { useState } from "react";

const FaqAccordion = ({ faqs = [], title = "Frequently Asked Questions" }) => {
  console.log("📈 FaqAccordion received faqs:", faqs);

  const [openIndex, setOpenIndex] = useState(null);

  // Return null if no FAQs - this hides the entire section (heading + accordion)
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-[#232122]">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={faq._id || index}
            open={openIndex === index}
            onToggle={(e) => {
              if (e.target.open) {
                setOpenIndex(index);
              } else {
                setOpenIndex(null);
              }
            }}
            className="border rounded-lg p-4 bg-white shadow"
          >
            <summary className="font-semibold cursor-pointer text-lg">
              {faq.question}
            </summary>
            <p className="mt-3 text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FaqAccordion;