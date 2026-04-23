'use client'

import React, { useState } from 'react';
import Image from 'next/image';

export default function ConnectWithUnsaathi() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Contested Divorce',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Here you would typically send the form data to your backend or email service
    // For now, we'll just log it and show success
    console.log('Form submitted:', formData);

    // Simulate API call
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Contested Divorce',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <section className="w-full py-14 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header row */}
        <div className="mb-8 md:flex justify-between items-start">
          <div>
            <div className="text-[#b88b6c] font-semibold text-lg mb-2">
              Connect With Unsaathi
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#232122] leading-tight mb-4">
              Think Of A Peaceful Life.<br />Think Unsaathi
            </h2>
            <div className="text-[#726964] text-base md:text-lg mb-2">
              Ready to embrace a new chapter? Reach out for expert divorce services, personalized support, and a path forward with clarity.
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-4 md:mt-0">
            <div className="flex items-center gap-3 text-[#b88b6c] text-2xl w-full mt-4">
              {/* Phone icon - using Next.js Image */}
              <div className="relative h-[18px] w-[20px]">
                <Image 
                  src="/assets/Call.png"
                  alt="Phone icon"
                  fill
                  sizes="20px"
                  className="object-contain"
                />
              </div>
              <span className="text-[#232122] text-xl font-medium">+91-9266877791</span>
            </div>
            <div className="flex items-center gap-3 text-[#b88b6c] text-2xl w-full mt-2">
              {/* Mail icon - using Next.js Image */}
              <div className="relative h-[18px] w-[20px]">
                <Image 
                  src="/assets/Message.png"
                  alt="Email icon"
                  fill
                  sizes="20px"
                  className="object-contain"
                />
              </div>
              <span className="text-[#232122] text-xl font-medium">info@unsaathi.com</span>
            </div>
          </div>
        </div>

        {/* Form section */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name */}
          <div className="flex flex-col mb-2">
            <label className="text-[#726964] text-sm mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-transparent border-b border-[#232122] outline-none py-2 text-lg placeholder:text-[#a7a0a0] focus:border-[#b88b6c] transition-colors"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col mb-2">
            <label className="text-[#726964] text-sm mb-1">
              A phone number we can reach you
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="998-877-6655"
              className="bg-transparent border-b border-[#232122] outline-none py-2 text-lg placeholder:text-[#a7a0a0] focus:border-[#b88b6c] transition-colors"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col mb-2">
            <label className="text-[#726964] text-sm mb-1">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@domain.com"
              className="bg-transparent border-b border-[#232122] outline-none py-2 text-lg placeholder:text-[#a7a0a0] focus:border-[#b88b6c] transition-colors"
              required
            />
          </div>

          {/* Service Dropdown */}
          <div className="flex flex-col mb-2">
            <label className="text-[#726964] text-sm mb-1">Service Interested In</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="bg-transparent border-b border-[#232122] outline-none py-2 text-lg text-[#232122] focus:border-[#b88b6c] transition-colors"
            >
              <option value="Contested Divorce">Contested Divorce</option>
              <option value="Mutual Divorce">Mutual Divorce</option>
              <option value="Child Custody">Child Custody</option>
              <option value="Child Visitation">Child Visitation</option>
              <option value="Maintenance and Alimony">Maintenance and Alimony</option>
              <option value="Judicial Seperation">Judicial Seperation</option>
              <option value="Annulment of marriage">Annulment of marriage</option>
              <option value="Dowry Case">Dowry Case</option>
              <option value="Domestic Violence">Domestic Violence</option>
              <option value="Case/Cruelty">Case/Cruelty</option>
              <option value="False Domestic Violence Case">False Domestic Violence Case</option>
              <option value="False Dowry">False Dowry</option>
              <option value="Not mentioned">Not mentioned</option>
            </select>
          </div>

          {/* Message row (grid spans 2 columns) */}
          <div className="flex flex-col mb-2 md:col-span-2">
            <label className="text-[#726964] text-sm mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="bg-transparent border-b border-[#232122] outline-none py-2 text-lg placeholder:text-[#a7a0a0] focus:border-[#b88b6c] transition-colors"
              placeholder="Tell us about your situation..."
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-6 md:col-span-2 md:flex-row md:justify-between mt-2 items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-2 bg-[#b88b6c] hover:bg-[#a5775c] text-white rounded-full text-lg font-semibold shadow transition duration-300 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            
            {/* Status messages */}
            {submitStatus === 'success' && (
              <div className="text-green-600 text-sm">
                ✓ Thank you! We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-red-600 text-sm">
                ✗ Something went wrong. Please try again.
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}