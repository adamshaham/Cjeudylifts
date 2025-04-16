import React, { useState } from 'react';

const faqs = [
  {
    question: "How often should I exercise?",
    answer: "The frequency depends on your goals and current fitness level. We'll create a personalized schedule that works for you."
  },
  {
    question: "What's the best workout routine for weight loss?",
    answer: "A combination of strength training and cardio, along with proper nutrition, typically yields the best results for weight loss."
  },
  {
    question: "When can I see results and after how long?",
    answer: "Results vary by individual, but with consistent effort, you can start seeing changes in 4-8 weeks."
  },
  {
    question: "How can I make muscle effectively?",
    answer: "Building muscle requires a combination of progressive overload training, adequate protein intake, and proper recovery."
  }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  const handlePricingClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      const offset = 100;
      const elementPosition = pricingSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white text-center mb-4">COMMONLY ASKED <span className="text-blue-500">QUESTIONS</span></h2>
          <p className="text-center text-gray-400 mb-8">I can help to help!</p>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-zinc-800">
                <button
                  className="w-full py-4 flex justify-between items-center text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  <span className={`text-yellow-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaq === i && (
                  <p className="text-gray-400 pb-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">YOU WANT TO <span className="text-blue-500">TRAIN</span> WITH ME?</h2>
          <p className="text-gray-400 mb-6">Feel free to contact me if you want to train with me!</p>
          <button 
            onClick={handlePricingClick}
            className="w-full py-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300 text-lg"
          >
            Start Your 90-Day Journey
          </button>
        </div>
      </div>
    </section>
  );
}