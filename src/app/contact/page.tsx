'use client'

import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Lottie from 'lottie-react';
import mobileLoopAnimation from '../bannerImages/mobile_line_loop.json';

interface RollingNumberProps {
    targetNumber: number;
}

const RollingNumber: React.FC<RollingNumberProps> = ({ targetNumber }) => {
    const [currentNumber, setCurrentNumber] = useState<number>(0);
    const animationDuration = 2000; // 2 seconds

    useEffect(() => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / animationDuration, 1);
            const nextNumber = Math.floor(progress * targetNumber);
            setCurrentNumber(nextNumber);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [targetNumber]);

    return <p className="text-4xl font-bold">{currentNumber}+</p>;
};

const ContactUsPage: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<string>('Submit');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');

        const serviceID = 'service_ypeplcf';
        const templateID = 'contact_form';
        const publicKey = 'am1VZPuktoi7yeO5J';

        if (form.current) {
            emailjs.sendForm(serviceID, templateID, form.current, publicKey)
                .then((result) => {
                    console.log(result.text);
                    setStatus('Submit');
                    alert('Message sent successfully!');
                    form.current?.reset();
                }, (error) => {
                    console.log(error.text);
                    setStatus('Submit');
                    alert('Failed to send the message. Please try again.');
                });
        }
    };

    return (
        <div className="min-h-screen font-serif bg-[#f5f1ed]">
            {/* Hero Section - NOW WHITE */}
            <section className="bg-white py-20 text-center">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Text Content */}
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight tracking-tight">
                            Your Brighter Tomorrow Is Just A Click Away
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                            Have questions or need guidance on your divorce journey? Our team is here to provide expert divorce services and compassionate support. Reach out today to connect with our experienced divorce lawyers for personalized, hassle-free solutions that prioritize your well-being.
                        </p>
                    </div>

                    {/* Lottie Animation (Full-width) */}
                    <div className="mt-19 w-full h-[45vh]">
                        <Lottie 
                            animationData={mobileLoopAnimation}
                            loop={true}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Main Content Section - NOW LIGHT WHITISH-PINK */}
            <section className="py-20 bg-[#f5f1ed]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Left Column: Expertise and Contact Info */}
                    <div className="lg:col-span-1 space-y-10">
                        <div>
                            <h3 className="text-lg text-[#c48e53] font-semibold tracking-wider">UNSAATHI EXPERTISE</h3>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">Handling Legal Complexities With Expertise & Empathy</h2>
                            <p className="text-neutral-700 mt-4 text-base leading-relaxed">
                                Our team brings a wealth of experience to the table, providing you with a strong foundation of knowledge and expertise. With a proven track record of resolving complex divorce and separation cases, our legal expertise sets us apart as your trusted partner.
                            </p>
                        </div>

                        <div className="flex gap-12 justify-center py-8">
                            <div className="text-center">
                                <RollingNumber targetNumber={230} />
                                <p className="text-neutral-600 text-sm mt-1">Legal Cases Handled</p>
                            </div>
                            <div className="text-center">
                                <RollingNumber targetNumber={320} />
                                <p className="text-neutral-600 text-sm mt-1">Legal Advisory On Board</p>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-gray-200">
                            <a href="tel:+919266877791" className="flex items-center space-x-3 group">
                                <div className="relative h-5 w-5">
                                    <Image 
                                        src="/assets/Call.png"
                                        alt="Call Icon"
                                        fill
                                        className="object-contain"
                                        sizes="20px"
                                        priority={false}
                                    />
                                </div>
                                <span className="text-neutral-800 group-hover:text-[#c48e53] transition-colors font-medium">+91-9266877791</span>
                            </a>
                            <a href="mailto:info@unsaathi.com" className="flex items-center space-x-3 group">
                                <div className="relative h-5 w-5">
                                    <Image 
                                        src="/assets/Message.png"
                                        alt="Email Icon"
                                        fill
                                        className="object-contain"
                                        sizes="20px"
                                        priority={false}
                                    />
                                </div>
                                <span className="text-neutral-800 group-hover:text-[#c48e53] transition-colors font-medium">info@unsaathi.com</span>
                            </a>
                        </div>

                        <div className="mt-6 flex space-x-4">
                            <a 
                                href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A104375160&keywords=unsaathi%20official&origin=RICH_QUERY_SUGGESTION&position=0&searchId=9be0b8b4-9aee-4e18-af9a-d037a94d41dd&sid=Bp7&spellCorrectionEnabled=false" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#cfd0d3] hover:text-[#b88b6c]" 
                                aria-label="LinkedIn"
                            >
                                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 9h4v12H4zm6.563 0h3.682v1.645h.053a4.105 4.105 0 0 1 3.699-2.034c3.954 0 4.69 2.603 4.69 5.986V21h-4v-5.855c0-1.344-.028-3.074-1.873-3.074-1.876 0-2.162 1.464-2.162 2.972V21h-4z" /></svg>
                            </a>
                            <a 
                                href="https://www.instagram.com/official_unsaathi?igsh=bHFoZHNjd3Jua2M1" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#cfd0d3] hover:text-[#b88b6c]" 
                                aria-label="Instagram"
                            >
                                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M16 3h-8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-8a5 5 0 0 0-5-5zm0 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" /></svg>
                            </a>
                            <a 
                                href="https://www.facebook.com/share/1AmiCrdNcR/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#cfd0d3] hover:text-[#3b5998] mt-1" 
                                aria-label="Facebook"
                            >
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.351C0 23.41.59 24 1.325 24h11.5v-9.294H9.691v-3.622h3.134V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.41 24 24 23.41 24 22.675v-21.35C24 .59 23.41 0 22.675 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Contact Form - NOW WHITE */}
                    <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-lg">
                        <h3 className="text-lg text-[#c48e53] font-semibold tracking-wider">REACH OUT TO OUR EXPERTS</h3>
                        <h2 className="text-3xl font-bold text-neutral-900 mt-2 mb-8">
                            Ready to take control of your future? Schedule an appointment now.
                        </h2>

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Your Name</label>
                                    <input type="text" id="name" name="user_name" placeholder="Enter your name" required className="w-full bg-gray-50 border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:ring-1 focus:ring-[#c48e53] focus:border-[#c48e53]" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
                                    <input type="tel" id="phone" name="user_phone" placeholder="e.g., 998-877-6655" className="w-full bg-gray-50 border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:ring-1 focus:ring-[#c48e53] focus:border-[#c48e53]" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                                <input type="email" id="email" name="user_email" placeholder="name@domain.com" required className="w-full bg-gray-50 border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:ring-1 focus:ring-[#c48e53] focus:border-[#c48e53]" />
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-1">Brief Description of Case</label>
                                <textarea id="description" name="message" rows={4} required placeholder="Please provide a brief summary..." className="w-full bg-gray-50 border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:ring-1 focus:ring-[#c48e53] focus:border-[#c48e53]"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-[#d5bfa7] hover:bg-[#c48e53] text-neutral-900 font-bold py-4 px-4 rounded-lg shadow-md transition-all duration-300 disabled:bg-gray-400 hover:text-white" disabled={status === 'Sending...'}>
                                {status}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* The Address and Map section would also have the new pink background */}
            <section className="py-20 bg-[#FFF9F7]">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Your address, contact info, and map here */}
                </div>
            </section>
        </div>
    );
};

export default ContactUsPage;