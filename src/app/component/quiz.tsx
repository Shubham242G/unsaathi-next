'use client'

import React, { useState, useCallback } from 'react';

const DivorceInsightQuiz = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showConclusion, setShowConclusion] = useState(false);

  const quizQuestions = [
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

  // Memoize this function as it's used in getConclusion
  const getConclusion = useCallback(() => {
    if (score <= 3) {
      return {
        title: "Building on a Strong Foundation",
        text: "Your answers suggest that while there may be challenges, your relationship has a strong foundation of communication and hope. Exploring couples counseling could provide you with new tools to strengthen your bond further."
      };
    }
    if (score <= 7) {
      return {
        title: "Navigating Uncertainty",
        text: "It sounds like you are at a crossroads, facing uncertainty but still open to solutions. This is a common stage where mediation or a trial separation (Judicial Separation) can provide clarity. A legal consultation could help you understand these options without pressure."
      };
    }
    if (score <= 12) {
      return {
        title: "Considering a New Path",
        text: "Your responses indicate significant and persistent challenges. It may be time to understand your legal rights regarding divorce, property division, and child custody. An expert consultation can provide a clear roadmap for your next steps."
      };
    }
    return {
      title: "Prioritizing Safety and Security",
      text: "Your answers raise serious concerns about safety and well-being. It is crucial to seek immediate legal guidance, especially concerning domestic violence or dowry-related issues. Your safety is the highest priority, and legal protections are available."
    };
  }, [score]);

  const handleAnswerClick = (value: number) => {
    setScore(prevScore => prevScore + value);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowConclusion(true);
    }
  };

  const restartQuiz = () => {
    setIsStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowConclusion(false);
  };

  const handleTalkToExperts = () => {
    // Open WhatsApp chat or navigate to contact page
    const whatsappUrl = `https://wa.me/919266877791?text=${encodeURIComponent(
      "Hi! I just completed the Divorce Insight Quiz and would like to talk to an expert."
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  // Call getConclusion only when showConclusion becomes true
  const conclusion = showConclusion ? getConclusion() : null;

  return (
    <div className="w-full mx-auto my-20 bg-[#f5f1ed] font-serif text-[#3d3d3d]">
      {!isStarted ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Worried if divorce is the right decision? Take a quick quiz</h2>
          <p className="text-lg text-gray-600 mb-6">
            This confidential 5-question quiz is designed to help you reflect on your relationship 
            and understand which path might be right for you.
          </p>
          <button
            className="bg-[#c48e53] text-white font-bold px-8 py-3 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg"
            onClick={() => setIsStarted(true)}
          >
            Start Your Insight Quiz
          </button>
        </div>
      ) : showConclusion && conclusion ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#c48e53] mb-4">{conclusion.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{conclusion.text}</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              className="bg-[#c48e53] text-white font-bold px-8 py-3 rounded-full transition hover:bg-[#a97d4a]"
              onClick={handleTalkToExperts}
            >
              Talk to Our Experts
            </button>
            <button
              className="bg-transparent border-2 border-[#c48e53] text-[#c48e53] font-bold px-8 py-3 rounded-full transition hover:bg-[#f9f6f2]"
              onClick={restartQuiz}
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
            <h2 className="text-2xl font-bold mt-2">
              {quizQuestions[currentQuestionIndex].question}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {quizQuestions[currentQuestionIndex].options.map((option, index) => (
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

export default DivorceInsightQuiz;