import React from 'react';

const testimonials = [
  { 
    name: "Danielle D.",
    text: "Chris pushed me to my limits while providing the support I needed to succeed. Highly recommended."
  },
  {
    name: "Michael R.",
    text: "The transformation in my fitness level has been incredible. Best investment in myself!"
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 px-6 bg-black text-white relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4">HEAR IT FROM THEM</h2>
        <p className="text-center text-gray-400 mb-8">Success stories from real clients</p>
        
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-8">
            {testimonials.map((t, i) => (
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
            <button className="w-2 h-2 rounded-full bg-yellow-500"></button>
            <button className="w-2 h-2 rounded-full bg-zinc-700"></button>
            <button className="w-2 h-2 rounded-full bg-zinc-700"></button>
          </div>
        </div>
      </div>
    </section>
  );
}