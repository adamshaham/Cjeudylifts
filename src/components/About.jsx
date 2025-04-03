import React from 'react';

export default function About() {
  return (
    <section className="py-24 md:py-12 px-4 sm:px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center mb-8 md:mb-32">
          <div className="order-2 md:order-1">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="/trainer-session.jpg" 
                alt="Training Session" 
                className="w-full h-[400px] sm:h-[500px] object-cover rounded-2xl hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Who Is <span className="text-blue-500">Christopher Jeudy</span>?</h2>
            <p className="text-base sm:text-lg text-gray-400 mb-6">
            I've been through my own struggles, but fitness helped me find my strength. Now, as a personal trainer, I'm here to help you do the same. Together, we'll create personalized training plans to break through your barriers and achieve real results—inside and out.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500">20+</h3>
                <p className="text-xs sm:text-sm text-gray-400">Satisfied Clients</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500">10</h3>
                <p className="text-xs sm:text-sm text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6 text-center">MY <span className="text-blue-500">TRANSFORMATION</span></h2>
          <p className="text-base sm:text-lg text-gray-400 mb-6 md:mb-8 text-center max-w-2xl mx-auto">
            I understand the journey because I've been there. My personal transformation drives my passion to help others achieve their fitness goals.
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl flex items-end justify-center pb-4 sm:pb-6">
                <span className="text-lg sm:text-xl font-bold text-white">BEFORE</span>
              </div>
              <img 
                src="/re-image.jpg" 
                alt="Transformation Before" 
                className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover object-[center_30%] rounded-2xl border-2 border-yellow-500/50"
              />
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl flex items-end justify-center pb-4 sm:pb-6">
                <span className="text-lg sm:text-xl font-bold text-white">AFTER</span>
              </div>
              <img 
                src="/after-image.jpg" 
                alt="Transformation After" 
                className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover rounded-2xl border-2 border-yellow-500/50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}