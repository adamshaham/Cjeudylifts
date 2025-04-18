import React from 'react';

const features = [
  "Personalized Workout Plans",
  "Nutrition Guidance & Meal Plans",
  "Progress Tracking",
  "24/7 Support & Motivation",
  "Weekly Check-ins",
  "Supplement Advice"
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">90-DAY <span className="text-blue-500">TRANSFORMATION</span></h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Transform your life with personalized training, nutrition guidance, and exclusive access to our private Skool community. One comprehensive package for all your fitness needs.
        </p>
        
        <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-zinc-800 hover:border-yellow-500 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-blue-500">Complete Fitness Package</h3>
            <div className="flex flex-col items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-4xl sm:text-5xl font-bold text-yellow-500">$30</span>
                <span className="text-gray-400">/month</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg text-gray-500 line-through">$150</span>
                <span className="px-3 py-1.5 bg-red-500/20 text-red-500 text-sm font-bold rounded-full">80% OFF</span>
              </div>
            </div>
            <p className="text-gray-400">Limited time offer - Everything you need to reach your fitness goals</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center text-sm sm:text-base text-white sm:text-gray-400">
                <span className="w-5 h-5 mr-3 flex items-center justify-center bg-yellow-500/10 rounded-full">
                  <span className="text-yellow-500">✓</span>
                </span>
                {feature}
              </div>
            ))}
          </div>

          <a 
            href="/checkout.html" 
            className="block w-full"
          >
            <button 
              className="w-full py-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300 text-lg"
            >
              Start Your 90-Day Journey
            </button>
          </a>
          
          <div className="mt-6 space-y-2">
            <p className="text-center text-xs sm:text-sm text-gray-500">
              No long-term contract required. Cancel anytime.
            </p>
            <p className="text-center text-xs sm:text-sm text-gray-500 italic">
              Results vary by individual and are not guaranteed. Success depends on commitment, consistency, and following the program guidelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}