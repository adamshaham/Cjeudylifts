import React, { useState } from 'react';

export default function CheckoutForm({ onSubmit, planType, onBack }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData(e.target);
      
      // Add subject line based on plan type
      formData.append('_subject', planType === 'basic' ? 'Workout Plan Request' : 'Full Transformation Request');
      
      // Submit to FormSubmit
      const response = await fetch('https://formsubmit.co/cjeudylifts@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.statusText}`);
      }

      // If form submission is successful, call onSubmit to handle payment redirect
      if (onSubmit) {
        onSubmit(formData);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error submitting the form. Please try again or contact us directly at cjeudylifts@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-black">
      <div className="container mx-auto py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto bg-zinc-900 p-8 sm:p-10 rounded-2xl border border-zinc-800 shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Start Your <span className="text-blue-500">Transformation</span>
          </h1>
          
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-500">
              {error}
            </div>
          )}

          <form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            action="https://formsubmit.co/cjeudylifts@gmail.com"
            method="POST"
            target="_blank"
          >
            {/* Honeypot to prevent spam */}
            <input type="text" name="_honey" style={{ display: 'none' }} />
            
            {/* Disable Captcha */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Auto reply configuration */}
            <input type="hidden" name="_autoresponse" value="Thank you for your submission! We'll review your information and get back to you soon." />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-white mb-2">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  min="16"
                  max="100"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Enter your age"
                />
              </div>

              <div>
                <label htmlFor="weight" className="block text-sm font-medium text-white mb-2">
                  Weight (lbs)
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  required
                  min="50"
                  max="500"
                  step="1"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Enter your weight in pounds"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white mb-2">
                  Height
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="heightFeet" className="block text-xs text-gray-400 mb-1">
                      Feet
                    </label>
                    <input
                      type="number"
                      id="heightFeet"
                      name="heightFeet"
                      required
                      min="4"
                      max="8"
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder="Feet"
                    />
                  </div>
                  <div>
                    <label htmlFor="heightInches" className="block text-xs text-gray-400 mb-1">
                      Inches
                    </label>
                    <input
                      type="number"
                      id="heightInches"
                      name="heightInches"
                      required
                      min="0"
                      max="11"
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder="Inches"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="occupation" className="block text-sm font-medium text-white mb-2">
                  Occupation
                </label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Enter your occupation"
                />
              </div>
            </div>

            <div>
              <label htmlFor="fitnessGoals" className="block text-sm font-medium text-white mb-2">
                What are your fitness goals?
              </label>
              <textarea
                id="fitnessGoals"
                name="fitnessGoals"
                required
                rows={3}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Tell us about your fitness goals"
              />
            </div>

            <div>
              <label htmlFor="currentFitnessLevel" className="block text-sm font-medium text-white mb-2">
                Current Fitness Level
              </label>
              <select
                id="currentFitnessLevel"
                name="currentFitnessLevel"
                required
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              >
                <option value="">Select your level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label htmlFor="medicalConditions" className="block text-sm font-medium text-white mb-2">
                Any medical conditions or injuries we should know about?
              </label>
              <textarea
                id="medicalConditions"
                name="medicalConditions"
                rows={3}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="List any medical conditions or injuries (optional)"
              />
            </div>

            <div className="flex gap-4 mt-8">
              <button
                type="button"
                onClick={onBack}
                className="flex-1 py-4 bg-zinc-800 text-white font-bold rounded-lg hover:bg-zinc-700 transition-all duration-300 text-lg flex items-center justify-center"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                  />
                </svg>
                Back to Plans
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 py-4 bg-yellow-500 text-black font-bold rounded-lg transition-all duration-300 text-lg ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-400'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Information'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 