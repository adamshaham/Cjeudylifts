import React, { useState, useEffect } from 'react';

const testimonials = [
  { 
    name: "Danielle D.",
    text: "Chris pushed me to my limits while providing the support I needed to succeed. Highly recommended."
  },
  {
    name: "Michael R.",
    text: "The transformation in my fitness level has been incredible. Best investment in myself!"
  },
  {
    name: "Sarah L.",
    text: "The personalized workout plans and nutrition guidance have completely changed my approach to fitness. I've never felt better!"
  },
  {
    name: "James K.",
    text: "The support and motivation from Chris made all the difference. He's always there when you need him."
  },
  {
    name: "Emma T.",
    text: "I was skeptical at first, but the results speak for themselves. Lost 20 pounds and gained so much confidence!"
  },
  {
    name: "David M.",
    text: "The supplement advice and form correction have helped me avoid injuries and maximize my gains. Worth every penny!"
  }
];

export default function Testimonials() {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate total number of pairs (each pair shows 2 testimonials)
  const totalPairs = Math.ceil(testimonials.length / 2);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentPairIndex((prevIndex) => (prevIndex + 1) % totalPairs);
      }, 5000); // Change testimonial pair every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, totalPairs]);

  const nextTestimonial = () => {
    setCurrentPairIndex((prevIndex) => (prevIndex + 1) % totalPairs);
  };

  const prevTestimonial = () => {
    setCurrentPairIndex((prevIndex) => (prevIndex - 1 + totalPairs) % totalPairs);
  };

  // Get the current pair of testimonials
  const getCurrentPair = () => {
    const startIndex = currentPairIndex * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };

  return (
    <section className="py-12 px-6 bg-black text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4">HEAR IT FROM THEM</h2>
        <p className="text-center text-gray-400 mb-8">Success stories from real clients</p>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-col md:flex-row gap-8 transition-all duration-500 ease-in-out">
            {getCurrentPair().map((t, i) => (
              <div key={i} className="flex-1 relative">
                <div className="absolute -left-4 top-0 text-yellow-500 text-6xl font-serif">"</div>
                <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-lg border border-zinc-800 hover:border-yellow-500 transition-all duration-300">
                  <p className="text-gray-400 mb-6 relative z-10">{t.text}</p>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-gray-400 text-sm">Verified Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalPairs }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPairIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPairIndex ? 'bg-yellow-500 w-4' : 'bg-zinc-700'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-900/80 p-2 rounded-r-lg hover:bg-zinc-800 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-zinc-900/80 p-2 rounded-l-lg hover:bg-zinc-800 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}