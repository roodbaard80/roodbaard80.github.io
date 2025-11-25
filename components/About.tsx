import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-nature-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/id/287/800/1000" 
                alt="Imker aan het werk" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-1/2 aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-nature-50 hidden md:block">
              <img 
                src="https://picsum.photos/id/250/500/500" 
                alt="Honingraad detail" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-10 -left-10 w-32 h-32 border border-honey-500/30 rounded-full hidden md:block"></div>
          </div>

          {/* Text Content */}
          <div className="lg:pl-10">
            <span className="text-honey-600 font-bold tracking-widest uppercase text-sm mb-2 block">
              Ons Verhaal
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-nature-900 mb-8">
              De kunst van het <span className="italic text-honey-600">imkeren</span>.
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                In het hart van de regio, waar wilde bloemen bloeien en de natuur haar gang mag gaan, vind je onze imkerij. Wat begon als een passie voor natuurbehoud, is uitgegroeid tot een missie: de puurste honing maken met respect voor elke bij.
              </p>
              <p>
                Wij geloven niet in massaproductie. Onze honing wordt koud geslingerd, niet gefilterd en met de hand gepot. Hierdoor blijven alle waardevolle enzymen, pollen en aroma’s behouden. Het resultaat? Een smaak die je terugvoert naar de essentie van de natuur.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-stone-200 pt-8">
              <div>
                <span className="block text-3xl font-serif text-honey-600 mb-1">100%</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Biologisch</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-honey-600 mb-1">40+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Bijenvolken</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-honey-600 mb-1">3</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Generaties</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;