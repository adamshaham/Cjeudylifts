import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={
              <div className="relative">
                <Hero />
                <About />
                <Services />
                <Testimonials />
                <Pricing />
                <Contact />
                <Footer />
              </div>
            } />
            <Route path="/privacy-policy" element={
              <div className="relative">
                <PrivacyPolicy />
                <Footer />
              </div>
            } />
            <Route path="/terms-of-service" element={
              <div className="relative">
                <TermsOfService />
                <Footer />
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 