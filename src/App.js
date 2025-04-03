import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans bg-black text-white min-h-screen w-full">
        <Routes>
          <Route path="/" element={
            <div className="w-full">
              <Hero />
              <About />
              <Services />
              <Testimonials />
              <Pricing />
              <Contact />
              <Footer />
            </div>
          } />

        </Routes>
      </div>
    </Router>
  );
}

export default App;