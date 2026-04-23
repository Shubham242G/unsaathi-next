'use client'

import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import man from '../bannerImages/man animation.json';
import woman from '../bannerImages/women.json';
import time from '../bannerImages/time.json';
import effort from '../bannerImages/effort.json';
import peace_of_mind from '../bannerImages/peace-of-mind.json';

// === IMPORTANT ===
// Enter your WhatsApp number here
const whatsappNumber = "919266877791";

// Type definitions
interface QuizOption {
  text: string;
  value: number;
}

interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

interface DivorceInsightQuizProps {
  onRestart: () => void;
}

interface Conclusion {
  title: string;
  text: string;
}

// --- Divorce Insight Quiz Component ---
const DivorceInsightQuiz: React.FC<DivorceInsightQuizProps> = ({ onRestart }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showConclusion, setShowConclusion] = useState<boolean>(false);
  const quizRef = useRef<HTMLDivElement>(null);

  const quizQuestions: QuizQuestion[] = [
    {
      question: "Which statement best describes the communication in your relationship?",
      options: [
        { text: "We talk openly and resolve conflicts constructively.", value: 0 },
        { text: "We talk, but important issues are often avoided.", value: 1 },
        { text: "Arguments are frequent and rarely resolved.", value: 2 },
        { text: "We barely speak to each other anymore.", value: 3 }
      ]
    },
    {
      question: "How do you feel about the future of your relationship?",
      options: [
        { text: "Hopeful and committed to making it work.", value: 0 },
        { text: "Uncertain, but willing to try.", value: 1 },
        { text: "Pessimistic, I feel we are drifting apart.", value: 2 },
        { text: "I believe the relationship may be over.", value: 3 }
      ]
    },
    {
      question: "Are there concerns about safety, respect, or trust?",
      options: [
        { text: "No, I feel completely safe and respected.", value: 0 },
        { text: "There have been minor breaches of trust.", value: 1 },
        { text: "I sometimes feel disrespected or unheard.", value: 2 },
        { text: "Yes, I have concerns about my emotional or physical safety.", value: 4 }
      ]
    },
    {
      question: "If children are involved, what is your main concern regarding them?",
      options: [
        { text: "Ensuring they feel loved and supported by both parents.", value: 0 },
        { text: "How to co-parent effectively if we separate.", value: 2 },
        { text: "I'm worried about their well-being in the current environment.", value: 3 },
        { text: "This question is not applicable.", value: 0 }
      ]
    },
    {
      question: "When you think about separation, what is your biggest question?",
      options: [
        { text: "Is it possible to separate amicably?", value: 1 },
        { text: "What are my legal rights and obligations?", value: 2 },
        { text: "How do we handle property and finances?", value: 2 },
        { text: "How can I ensure my and my children's safety?", value: 4 }
      ]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (quizRef.current && !quizRef.current.contains(event.target as Node)) {
        onRestart();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onRestart]);

  const handleAnswerClick = (value: number) => {
    setScore(prevScore => prevScore + value);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowConclusion(true);
    }
  };

  const getConclusion = (): Conclusion => {
    if (score <= 3) return { title: "Building on a Strong Foundation", text: "Your answers suggest that while there may be challenges, your relationship has a strong foundation. Exploring couples counseling could help strengthen your bond." };
    if (score <= 7) return { title: "Navigating Uncertainty", text: "You seem to be at a crossroads. Mediation or a legal consultation could help you understand options like Judicial Separation without pressure." };
    if (score <= 12) return { title: "Considering a New Path", text: "Your responses indicate significant challenges. It may be time to understand your legal rights. An expert consultation can provide a clear roadmap." };
    return { title: "Prioritizing Safety and Security", text: "Your answers raise serious safety concerns. It is crucial to seek immediate legal guidance. Your safety is the highest priority." };
  };

  const conclusion = getConclusion();

  return (
    <div ref={quizRef} className="w-full max-w-2xl mx-auto bg-[#f5f1ed] p-6 sm:p-8 rounded-2xl shadow-xl font-serif text-[#3d3d3d] mt-8">
      {showConclusion ? (
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#c48e53] mb-4">{conclusion.title}</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8">{conclusion.text}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="bg-[#c48e53] text-white font-bold px-8 py-3 rounded-full transition hover:bg-[#a97d4a]"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
            >
              Talk to Our Experts
            </button>
            <button
              className="bg-transparent border-2 border-[#c48e53] text-[#c48e53] font-bold px-8 py-3 rounded-full transition hover:bg-[#f9f6f2]"
              onClick={onRestart}
            >
              Retake Quiz
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center mb-8">
            <p className="text-sm font-bold text-[#c48e53] uppercase tracking-widest">
              Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </p>
            <h2 className="text-xl sm:text-2xl font-bold mt-2">
              {quizQuestions[currentQuestionIndex].question}
            </h2>
          </div>
          <div className="flex flex-col gap-4 mt-3">
            {quizQuestions[currentQuestionIndex].options.map((option: QuizOption, index: number) => (
              <button
                key={index}
                className="w-full text-left p-4 bg-[#f9f6f2] border border-gray-200 rounded-lg font-semibold hover:bg-[#c48e53] hover:text-white hover:border-[#c48e53] transition-all duration-200"
                onClick={() => handleAnswerClick(option.value)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- Features Table Component ---
interface Feature {
  feature: string;
  benefit: string;
}

const FeaturesTable: React.FC = () => {
  const features: Feature[] = [
    { feature: "Holistic Approach", benefit: "We focus on healing and growth, not just the legal outcome." },
    { feature: "Tailored Expertise", benefit: "Access to the best divorce lawyers and specialized consultants." },
    { feature: "Convenience & Clarity", benefit: "Online services and clear, step-by-step guidance reduce stress." },
    { feature: "Dedicated Care", benefit: "Your emotional and legal needs are our top priority." },
  ];

  return (
    <div className="overflow-x-auto mt-12">
      <table className="w-full min-w-[600px] max-w-4xl mx-auto border-collapse rounded-2xl shadow-lg overflow-hidden">
        <thead className="bg-[#f5e7db]">
          <tr>
            <th className="py-4 px-6 text-left text-lg sm:text-xl font-bold text-[#b88b6c] border-b border-[#e0d6cc]">Feature</th>
            <th className="py-4 px-6 text-left text-lg sm:text-xl font-bold text-[#b88b6c] border-b border-[#e0d6cc]">Your Benefit</th>
          </tr>
        </thead>
        <tbody>
          {features.map((item: Feature, idx: number) => (
            <tr key={idx} className="bg-white hover:bg-[#faf5eb] transition-colors duration-200">
              <td className="py-5 px-6 font-semibold text-[#3d3d3d] border-b border-[#e0d6cc]">{item.feature}</td>
              <td className="py-5 px-6 text-[#726964] border-b border-[#e0d6cc]">{item.benefit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// --- Main Page Component ---
const WhyUnsaathiPage: React.FC = () => {
  const [isQuizStarted, setIsQuizStarted] = useState<boolean>(false);

  const handleWhatsAppRedirect = (): void => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleRestartQuiz = (): void => {
    setIsQuizStarted(false);
  };

  return (
    <div className="min-h-screen bg-[#F5EFE9] font-serif py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Banner: Adjusted for mobile stacking and smaller animations */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-16 w-full">
            
            {/* Left Animation: Hidden on mobile during quiz */}
            <div className={`w-32 h-32 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full flex-shrink-0 transition-opacity duration-500 ${isQuizStarted ? 'hidden md:block' : 'block'}`}>
              <Lottie animationData={man} loop={true} className="w-full h-auto" />
            </div>

            {/* Center Content: Responsive text and layout */}
            <div className="w-full max-w-4xl">
              {!isQuizStarted ? (
                <>
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#232122] mb-4 leading-tight">
                    Worried if divorce is the right decision?
                  </h1>
                  <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-[#726964] leading-relaxed mb-4">
                    Take a quick quiz
                  </h2>
                  <p className="text-sm text-[#726964] max-w-xl mx-auto mb-8">
                    In a country like India, where the marital bond is revered... this confidential 5-question quiz is designed to help you reflect on your relationship.
                  </p>
                  <button
                    className="bg-[#c48e53] text-white font-bold px-8 py-3 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg"
                    onClick={() => setIsQuizStarted(true)}
                  >
                    Start Your Insight Quiz
                  </button>
                </>
              ) : (
                <DivorceInsightQuiz onRestart={handleRestartQuiz} />
              )}
            </div>

            {/* Right Animation: Hidden on mobile during quiz */}
            <div className={`w-32 h-32 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full flex-shrink-0 transition-opacity duration-500 ${isQuizStarted ? 'hidden md:block' : 'block'}`}>
              <Lottie animationData={woman} loop={true} className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* "Why Unsaathi" Section: Centered text on mobile */}
        <section className='my-16 md:my-24 text-center md:text-left'>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#232122] mb-4 leading-tight">
            Why Unsaathi is Your Ideal Divorce Partner
          </h1>
          <h3 className="text-lg lg:text-xl font-semibold text-[#726964] leading-relaxed max-w-4xl mx-auto md:mx-0">
            Choosing the right partner is crucial. Unsaathi stands out by offering a compassionate, expert-driven approach that blends emotional well-being with legal expertise.
          </h3>
          <FeaturesTable />
        </section>

        {/* CTA Section: Reduced margins for mobile */}
        <section className="text-center my-16 md:my-24">
          <p className="text-base sm:text-lg text-[#726964] mb-6 max-w-3xl mx-auto">
            Unsaathi makes your personal and legal journey smoother, ensuring you find harmony and peace of mind.
          </p>
          <button
            onClick={handleWhatsAppRedirect}
            className="bg-[#b88b6c] text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-[#a5775c] transition-transform transform hover:scale-105"
          >
            Ready to start your journey with a trusted guide?
          </button>
        </section>

        {/* "What You Will Save" Section */}
        <section className="bg-[#f9f3ee] py-16 px-6 font-serif rounded-2xl">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-base sm:text-lg font-semibold text-[#b88b6c] mb-2">
              Unsaathi For You
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#232122] mb-4">
              What You Will Save With Our Divorce Services
            </h1>
            <p className="text-base sm:text-lg text-[#726964] max-w-3xl mx-auto leading-relaxed mb-12">
              Our divorce services are designed to serve your best interests, ensuring a seamless journey of personal transformations.
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Time */}
              <div className="bg-[#f5efe9] p-8 rounded-2xl shadow-sm">
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-28 flex items-center justify-center">
                    <Lottie animationData={time} loop={true} className="w-full h-auto object-contain" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-[#232122] mb-3">Time</h2>
                <p className="text-base text-[#726964]">
                  We handle all legal complexities, giving you time to heal and rebuild.
                </p>
              </div>
              {/* Card 2: Effort */}
              <div className="bg-[#f5efe9] p-8 rounded-2xl shadow-sm">
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-28 flex items-center justify-center">
                    <Lottie animationData={effort} loop={true} className="w-full h-auto object-contain" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-[#232122] mb-3">Effort</h2>
                <p className="text-base text-[#726964]">
                  Affordable solutions and expert guidance without hidden costs or uncertain burdens.
                </p>
              </div>
              {/* Card 3: Peace of Mind */}
              <div className="bg-[#f5efe9] p-8 rounded-2xl shadow-sm">
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-28 flex items-center justify-center">
                    <Lottie animationData={peace_of_mind} loop={true} className="w-full h-auto object-contain" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-[#232122] mb-3">Peace of Mind</h2>
                <p className="text-base text-[#726964]">
                  We manage everything from filing to post-divorce support, prioritizing your well-being.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyUnsaathiPage;