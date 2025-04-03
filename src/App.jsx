import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import CheckoutForm from './components/CheckoutForm';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Testimonials />
              <Pricing />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/checkout" element={
            <>
              <CheckoutForm />
              <Footer />
            </>
          } />
          <Route path="/privacy-policy" element={
            <>
              <PrivacyPolicy />
              <Footer />
            </>
          } />
          <Route path="/terms-of-service" element={
            <>
              <TermsOfService />
              <Footer /> service_xdsrxrr
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 