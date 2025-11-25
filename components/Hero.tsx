import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1062/1920/1080" 
          alt="Bijen in de natuur" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-nature-800/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto transform translate-y-[-5%]">
        <h2 className="text-honey-400 text-lg md:text-xl uppercase tracking-[0.3em] mb-4 font-light animate-fade-in-up">
          Ambachtelijke Imkerij
        </h2>
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight animate-fade-in-up delay-100">
          Goud uit de <br/> <span className="italic font-light text-honey-200">Natuur</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
          Puur, biologisch en met liefde voor de bij. Ontdek de rijke smaak van eerlijke honing, rechtstreeks van de imker.
        </p>
        
        <div className="animate-fade-in-up delay-300">
          <a 
            href="#products" 
            className="inline-block px-10 py-4 bg-honey-500 hover:bg-honey-400 text-nature-900 font-bold uppercase tracking-widest text-sm rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,179,0,0.5)]"
          >
            Ontdek onze collectie
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
        <ArrowDown size={32} strokeWidth={1} />
      </div>
    </section>
  );
};

export default Hero;