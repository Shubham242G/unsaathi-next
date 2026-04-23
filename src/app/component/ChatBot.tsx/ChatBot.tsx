'use client'

import React, { useState, useEffect, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import './bot.css';

// Define proper types for the questions
type QuestionType = 'text' | 'email' | 'select';

interface Question {
  id: number;
  text: string;
  type: QuestionType;
  key: string;
  options?: string[]; // Only for 'select' type
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Questions array with proper typing
  const questions: Question[] = [
    { id: 1, text: "Hi! What's your name?", type: "text", key: "name" },
    { id: 2, text: "What's your email address?", type: "email", key: "email" },
    { 
      id: 3, 
      text: "How can we help you?", 
      type: "select", 
      key: "service", 
      options: ["Contested Divorce", "Mutual Divorce", "Child Custody", "Dowry Case/Domestic Violence Case", "False Dowry and Domestic Violence Case", "Issue not mentioned"] 
    },
  ];

  // Handle mounting for client-side only features
  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoize the sendEmail function
  const sendEmail = useCallback(() => {
    if (Object.keys(answers).length !== questions.length) return;

    const templateParams = {
      name: answers.name || "Not provided",
      email: answers.email || "Not provided",
      service: answers.service || "Not provided"
    };

    emailjs.send(
      'service_kranxad', 
      'template_2gdcgwl', 
      templateParams, 
      'am1VZPuktoi7yeO5J'
    )
    .then((response) => {
      console.log('SUCCESS! Email sent.', response.status, response.text);
    }, (error) => {
      console.log('FAILED... Email not sent.', error);
    });
  }, [answers, questions.length]);

  // Send email when all answers are collected
  useEffect(() => {
    if (Object.keys(answers).length === questions.length && mounted) {
      sendEmail();
    }
  }, [answers, questions.length, sendEmail, mounted]);

  const handleAnswer = (answer: string) => {
    const currentQ = questions[currentQuestion];
    const newAnswers = { ...answers, [currentQ.key]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowWhatsApp(true);
    }
  };

  const handleWhatsAppRedirect = () => {
    const message = `Hi! I'm interested in your services. Here are my details:\nName: ${answers.name || 'Not provided'}\nEmail: ${answers.email || 'Not provided'}\nService: ${answers.service || 'Not provided'}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919266877791?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const resetChat = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowWhatsApp(false);
  };

  const goBack = () => {
    if (showWhatsApp) {
      setShowWhatsApp(false);
      setCurrentQuestion(questions.length - 1);
      return;
    }
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  // Type guard to check if question has options
  const hasOptions = (question: Question): question is Question & { options: string[] } => {
    return question.type === 'select' && Array.isArray(question.options);
  };

  const renderQuestion = () => {
    const question = questions[currentQuestion];
    
    if (showWhatsApp) {
      return (
        <div className="whatsapp-section">
          <div className="whatsapp-icon">📱</div>
          <h3>Thank you!</h3>
          <p>We've received your details. Let's talk on WhatsApp.</p>
          
          <div className="final-buttons-container">
            <button className="whatsapp-button" onClick={handleWhatsAppRedirect}>
              💬 Talk to us on WhatsApp
            </button>
            <button className="back-button" onClick={goBack}>
              ← Go Back
            </button>
            <button className="reset-button" onClick={resetChat}>
              🔄 Start Over
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="question-section">
        <div className="question-header">
          <div className="question-text">{question.text}</div>
          <div className="question-number">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
        
        {question.type === 'text' || question.type === 'email' ? (
          <form onSubmit={(e) => {
            e.preventDefault();
            const input = (e.currentTarget.elements[0] as HTMLInputElement);
            if (input.value.trim()) {
              handleAnswer(input.value.trim());
            }
          }}>
            <input
              type={question.type}
              placeholder={`Enter your ${question.key}`}
              className="text-input"
              autoFocus
              defaultValue={answers[question.key] || ''}
            />
          </form>
        ) : question.type === 'select' && hasOptions(question) ? (
          <div className="options">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${answers[question.key] === option ? 'active' : ''}`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        ) : null}

        {currentQuestion > 0 && (
          <button className="back-button" onClick={goBack}>
            ← Previous
          </button>
        )}
      </div>
    );
  };

  // Don't render anything during server-side rendering to avoid hydration mismatches
  if (!mounted) {
    return null;
  }

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>🤖 Chat Assistant</h3>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>
          <div className="chatbot-content">
            {renderQuestion()}
          </div>
        </div>
      )}
      
      <button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>
    </div>
  );
};

export default ChatBot;