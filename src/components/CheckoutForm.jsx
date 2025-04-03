import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fitnessGoals: '',
    currentFitnessLevel: '',
    medicalConditions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your submission! We will contact you soon.');
    navigate('/');
  };

  return (
    <section className="min-h-screen bg-black border-4 border-red-500">
      <div className="container mx-auto py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto bg-zinc-900 p-8 sm:p-10 rounded-2xl border border-zinc-800 shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Start Your <span className="text-blue-500">Transformation</span>
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="fitnessGoals" className="block text-sm font-medium text-white mb-2">
                What are your fitness goals?
              </label>
              <textarea
                id="fitnessGoals"
                name="fitnessGoals"
                value={formData.fitnessGoals}
                onChange={handleChange}
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
                value={formData.currentFitnessLevel}
                onChange={handleChange}
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
                value={formData.medicalConditions}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="List any medical conditions or injuries (optional)"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300 text-lg mt-8"
            >
              Submit Information
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 