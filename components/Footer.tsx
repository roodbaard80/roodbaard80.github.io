import React from 'react';
import { Hexagon, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nature-900 text-nature-300 py-16 border-t border-nature-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
           <div className="flex items-center gap-2">
            <Hexagon className="w-8 h-8 text-honey-500" strokeWidth={1.5} />
            <span className="text-2xl font-serif font-bold text-white tracking-wide">Pimker<span className="text-honey-500">.</span></span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-honey-500 transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-honey-500 transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-honey-500 transition-colors"><Twitter size={24} /></a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-nature-800 pt-8 text-sm">
            <p>&copy; {new Date().getFullYear()} Pimker. Alle rechten voorbehouden.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Algemene Voorwaarden</a>
                <a href="#" className="hover:text-white">Verzending</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;