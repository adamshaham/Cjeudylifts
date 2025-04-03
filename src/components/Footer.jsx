import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Christopher Jeudy</h3>
            
            <p className="mb-2">Fairfield County, CT</p>
            <p>cjeudylifts@gmail.com</p>
          </div>
          <div>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-yellow-500 transition-colors">INSTAGRAM</a></li>
              <li><a href="#about" className="hover:text-yellow-500 transition-colors">TIKTOK</a></li>
              <li><a href="#services" className="hover:text-yellow-500 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Legal Disclaimer</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
