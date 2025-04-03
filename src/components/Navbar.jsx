import React from 'react';

export default function Navbar() {
  const handleClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      const offset = 100; // Adjust this value to control how much extra space appears above the pricing section
      const elementPosition = pricingSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-yellow-500 text-black cursor-pointer" onClick={handleClick}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-center md:justify-between items-center">
          <p className="text-sm sm:text-base font-semibold">
            🎉 60% OFF Community Launch Sale - Limited Time!
          </p>
          <button 
            onClick={handleClick}
            className="hidden md:block px-6 py-2.5 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
          >
            Claim Offer →
          </button>
        </div>
      </div>
    </div>
  );
} 