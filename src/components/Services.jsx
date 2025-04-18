import React from 'react';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Nutrition Planning",
    description: "Personalized meal plans and nutrition guidance to maximize your results.",
    features: ["Custom meal plans", "Macro tracking", "Supplement advice"],
    details: "Achieve optimal results with personalized nutrition plans. We'll help you understand your macros, create meal plans, and provide supplement recommendations."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Online Coaching",
    description: "Remote training program with regular check-ins and progress tracking.",
    features: ["24/7 support", "Video analysis", "Weekly check-ins"],
    details: "Our online program includes a PERSONALIZED workout plan,video analysis, regular check-ins, and continuous support to keep you on track."
  }
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            90-DAY <span className="text-blue-500">PACKAGE</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-yellow-500"></div>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
          You're not lazy — you're lost in a world of confusing fitness advice. This is designed to cut through the noise, giving you a clear plan to transform your body and mind — no guesswork, no gimmicks.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-zinc-800 
                         hover:border-yellow-500 transition-all duration-500 hover:shadow-2xl 
                         hover:shadow-yellow-500/10 hover:-translate-y-2"
            >
              <div className="relative z-10">
                <div className="text-yellow-500 mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-yellow-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-xs sm:text-sm text-gray-400">
                      <span className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex items-center justify-center bg-yellow-500/10 rounded-full">
                        <span className="text-yellow-500">✓</span>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400 text-sm sm:text-base">
                  {service.details}
                </p>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-yellow-500/5 
                            rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}