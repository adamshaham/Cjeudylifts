import React from 'react';

export default function About() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Trainer Introduction Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
          <div className="order-2 md:order-1">
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="/trainer-session.jpg" 
                alt="Training Session" 
                className="w-full h-[400px] sm:h-[500px] object-cover rounded-2xl transform group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex gap-4">
                  <div className="bg-yellow-500/20 backdrop-blur-sm p-4 rounded-xl border border-yellow-500/30">
                    <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">20+</h3>
                    <p className="text-sm text-white/80">Satisfied Clients</p>
                  </div>
                  <div className="bg-blue-500/20 backdrop-blur-sm p-4 rounded-xl border border-blue-500/30">
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-500">10</h3>
                    <p className="text-sm text-white/80">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Who Is <span className="text-blue-500">Chris Jeudy</span>?
            </h2>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              I've been through my own struggles, but fitness helped me find my strength. Now, as a personal trainer, I'm here to help you do the same. Together, we'll create personalized training plans to break through your barriers and achieve real results—inside and out.
            </p>
          </div>
        </div>

        {/* Transformation Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              MY <span className="text-blue-500">TRANSFORMATION</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              I understand the journey because I've been there. My personal transformation drives my passion to help others achieve their fitness goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 flex items-end justify-center pb-6">
                <span className="text-xl font-bold text-white">BEFORE</span>
              </div>
              <img 
                src="/re-image.jpg" 
                alt="Transformation Before" 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl transform group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 flex items-end justify-center pb-6">
                <span className="text-xl font-bold text-white">AFTER</span>
              </div>
              <img 
                src="/after-image.jpg" 
                alt="Transformation After" 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl transform group-hover:scale-105 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}