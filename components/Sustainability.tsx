import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { SUSTAINABILITY_DATA } from '../constants';
import { Flower, Wind, Sprout } from 'lucide-react';

const Sustainability: React.FC = () => {
  return (
    <section id="sustainability" className="py-24 bg-nature-900 text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-nature-800 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-900 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Text & Features */}
          <div className="lg:w-1/2">
            <span className="text-honey-400 font-bold tracking-widest uppercase text-sm mb-2 block">
              Duurzaamheid
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-white">
              Hart voor de <span className="text-honey-400 italic">Natuur</span>.
            </h2>
            <p className="text-nature-100 text-lg leading-relaxed mb-10">
              Wij doen meer dan alleen honing oogsten. We geven terug aan de natuur. 
              Door bloemenstroken aan te leggen en invasieve soorten te vermijden, 
              creëren we een paradijs voor wilde bijen en vlinders.
            </p>

            <div className="grid gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-nature-800 flex items-center justify-center flex-shrink-0 text-honey-400 border border-nature-700">
                  <Flower size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-white">Biodiversiteit</h4>
                  <p className="text-sm text-nature-200">We zaaien jaarlijks duizenden inheemse bloemen om de lokale biodiversiteit te versterken.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-nature-800 flex items-center justify-center flex-shrink-0 text-honey-400 border border-nature-700">
                  <Sprout size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-white">Biologische Werkwijze</h4>
                  <p className="text-sm text-nature-200">Geen pesticiden, geen chemicaliën. Alleen pure natuur rondom onze kasten.</p>
                </div>
              </div>

               <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-nature-800 flex items-center justify-center flex-shrink-0 text-honey-400 border border-nature-700">
                  <Wind size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-white">Koude Oogst</h4>
                  <p className="text-sm text-nature-200">Energiezuinig proces waarbij de honing nooit verhit wordt boven de korftemperatuur.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="lg:w-1/2 bg-nature-800/50 p-8 rounded-3xl border border-nature-700 backdrop-blur-sm">
             <div className="mb-6">
                 <h3 className="text-2xl font-serif mb-1">Onze Impact</h3>
                 <p className="text-nature-300 text-sm">Gezaaide bloemen (x1000 m²) per jaar</p>
             </div>
             <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={SUSTAINABILITY_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1B3328" vertical={false} />
                        <XAxis 
                            dataKey="year" 
                            stroke="#A7B3AB" 
                            tick={{fill: '#A7B3AB'}} 
                            axisLine={false} 
                            tickLine={false} 
                        />
                        <YAxis 
                            stroke="#A7B3AB" 
                            tick={{fill: '#A7B3AB'}} 
                            axisLine={false} 
                            tickLine={false}
                        />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#1B3328', borderColor: '#2C4A3B', color: '#fff' }}
                            itemStyle={{ color: '#FFD54F' }}
                            cursor={{fill: '#2C4A3B', opacity: 0.5}}
                        />
                        <Bar 
                            dataKey="flowers" 
                            fill="#FFD54F" 
                            radius={[6, 6, 0, 0]}
                            barSize={32}
                            animationDuration={2000}
                        />
                    </BarChart>
                </ResponsiveContainer>
             </div>
             <div className="mt-6 text-center text-sm text-nature-300 italic">
                 "Samen maken we de wereld een stukje groener, bloem voor bloem."
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;