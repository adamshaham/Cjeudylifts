import React, { useState, useRef } from 'react';
import CheckoutForm from './CheckoutForm';

const basicFeatures = [
  "Personalized Workout Plans",
 
];

const premiumFeatures = [
  "Personalized Workout Plans",
  "Nutrition Guidance & Meal Plans",
  "1-1 Weekly Support & Motivation Check-ins",
  "Supplement Advice",
  
];

export default function Pricing() {
  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const pricingRef = useRef(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowForm(true);
  };

  const handleFormSubmit = (formData) => {
    // Here you would typically send the form data to your email
    console.log('Form submitted:', formData);
    
    // Redirect to appropriate payment link based on plan
    if (selectedPlan === 'basic') {
      window.open('https://buy.stripe.com/cN23eOdv09la6jeaEF', '_blank');
    } else if (selectedPlan === 'premium') {
      window.open('https://buy.stripe.com/aFa5kE4HW0DK73O6mFb3q02', '_blank');
    }
  };

  const handleBackToPricing = () => {
    setShowForm(false);
    setSelectedPlan(null);
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (showForm) {
    return <CheckoutForm onSubmit={handleFormSubmit} planType={selectedPlan} onBack={handleBackToPricing} />;
  }

  return (
    <section id="pricing" ref={pricingRef} className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">START YOUR <span className="text-yellow-500">TRANSFORMATION</span></h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Choose the perfect plan for your fitness journey. Transform your life with personalized training and expert guidance.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-zinc-800 hover:border-yellow-500 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-blue-500">Basic Plan</h3>
              <div className="flex flex-col items-center justify-center gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-4xl sm:text-5xl font-bold text-yellow-500">$30</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg text-gray-500 line-through">$75</span>
                  <span className="px-3 py-1.5 bg-red-500/20 text-red-500 text-sm font-bold rounded-full">60% OFF</span>
                </div>
              </div>
              <p className="text-gray-400">Perfect for those who want a structured workout plan</p>
            </div>

            <div className="space-y-4 mb-8">
              {basicFeatures.map((feature, i) => (
                <div key={i} className="flex items-center text-sm sm:text-base text-white sm:text-gray-400">
                  <span className="w-5 h-5 mr-3 flex items-center justify-center bg-yellow-500/10 rounded-full">
                    <span className="text-yellow-500">✓</span>
                  </span>
                  {feature}
                </div>
              ))}
              <div className="border-t border-zinc-800 my-4"></div>
              {premiumFeatures.slice(1).map((feature, i) => (
                <div key={i} className="flex items-center text-sm sm:text-base text-gray-500">
                  <span className="w-5 h-5 mr-3 flex items-center justify-center bg-red-500/10 rounded-full">
                    <span className="text-red-500">✕</span>
                  </span>
                  {feature}
                </div>
              ))}
            </div>

            <button
              onClick={() => handlePlanSelect('basic')}
              className="w-full py-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300 text-lg"
            >
              Start Basic Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-yellow-500/50 hover:border-yellow-500 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-blue-500">Premium Plan</h3>
              <div className="flex flex-col items-center justify-center gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-4xl sm:text-5xl font-bold text-yellow-500">$60</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg text-gray-500 line-through">$150</span>
                  <span className="px-3 py-1.5 bg-red-500/20 text-red-500 text-sm font-bold rounded-full">60% OFF</span>
                </div>
              </div>
              <p className="text-gray-400">Complete transformation with full support and guidance</p>
            </div>

            <div className="space-y-4 mb-8">
              {premiumFeatures.map((feature, i) => (
                <div key={i} className="flex items-center text-sm sm:text-base text-white sm:text-gray-400">
                  <span className="w-5 h-5 mr-3 flex items-center justify-center bg-yellow-500/10 rounded-full">
                    <span className="text-yellow-500">✓</span>
                  </span>
                  {feature}
                </div>
              ))}
            </div>

            <button
              onClick={() => handlePlanSelect('premium')}
              className="w-full py-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition-all duration-300 text-lg"
            >
              Start Premium Plan
            </button>
          </div>
        </div>
        
        <div className="mt-12 text-center space-y-2">
          <p className="text-sm text-gray-500">
            No long-term contract required. Cancel anytime.
          </p>
          <p className="text-sm text-gray-500 italic">
            Results vary by individual and are not guaranteed. Success depends on commitment, consistency, and following the program guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}