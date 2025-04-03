import React from 'react';

export default function Hero() {
  const handleClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      const isMobile = window.innerWidth < 768; // md breakpoint
      const offset = isMobile ? -100 : 100; // Negative offset for mobile, positive for desktop
      const elementPosition = pricingSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative bg-black">
      <section className="min-h-[85vh] flex flex-col justify-start items-center px-4 sm:px-6 pt-16 md:pt-24">
        <div className="max-w-6xl w-full mx-auto relative">
          {/* Mobile Image with Overlay and Text */}
          <div className="relative md:hidden">
            <img 
              src="hero-trainer.jpg" 
              alt="Professional Trainer" 
              className="w-full h-[80vh] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 rounded-2xl"></div>
            <div className="absolute inset-0 flex flex-col justify-center p-6 z-10">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                ELITE<br />
                <span className="text-blue-500">FITNESS</span><br />
                COACHING
              </h1>
              <p className="text-base sm:text-lg text-gray-200 mb-6">
                Personalized training programs designed to help you reach peak performance and achieve lasting results. Experience the difference of expert guidance.
              </p>
              <button 
                onClick={handleClick}
                className="w-full sm:w-auto px-8 py-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400 transition-all"
              >
                Start Training
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 md:mb-6">
                ELITE<br />
                <span className="text-blue-500">FITNESS</span><br />
                COACHING
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-xl text-gray-400 mb-6 md:mb-8">
                Personalized training programs designed to help you reach peak performance and achieve lasting results. Experience the difference of expert guidance.
              </p>
              <button 
                onClick={handleClick}
                className="w-full sm:w-auto px-8 py-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400 transition-all"
              >
                Start Training
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-blue-500/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="hero-trainer.jpg" 
                alt="Professional Trainer" 
                className="w-full h-[500px] object-cover rounded-2xl relative z-10 border-2 border-yellow-500/50"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
