import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-nature-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            
            {/* Form Side */}
            <div className="lg:w-3/5 p-10 lg:p-16">
                <span className="text-honey-600 font-bold tracking-widest uppercase text-sm mb-2 block">
                  Contact
                </span>
                <h2 className="text-4xl font-serif text-nature-900 mb-6">
                  Kom in contact
                </h2>
                <p className="text-gray-500 mb-10">
                    Heeft u vragen over onze honing, wilt u een rondleiding boeken of een zakelijke bestelling plaatsen? Vul het formulier in.
                </p>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Naam</label>
                            <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-honey-400 transition-all" placeholder="Uw naam" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                            <input type="email" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-honey-400 transition-all" placeholder="uw@email.nl" />
                        </div>
                    </div>
                    <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2">Bericht</label>
                         <textarea rows={4} className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-honey-400 transition-all" placeholder="Waar kunnen we u mee helpen?"></textarea>
                    </div>
                    <button type="button" className="bg-nature-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-honey-500 hover:text-nature-900 transition-colors duration-300">
                        Verstuur Bericht
                    </button>
                </form>
            </div>

            {/* Info Side */}
            <div className="lg:w-2/5 bg-nature-800 text-honey-100 p-10 lg:p-16 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-serif mb-8 text-white">Imkerij Pimker</h3>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-honey-400 mt-1" />
                            <p className="leading-relaxed text-nature-100">
                                Bloemenweg 42<br/>
                                7384 RP, Veluwezoom<br/>
                                Nederland
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="text-honey-400" />
                            <p>+31 (0)55 123 4567</p>
                        </div>
                         <div className="flex items-center gap-4">
                            <Mail className="text-honey-400" />
                            <p>info@pimker.nl</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-nature-700">
                    <p className="text-sm text-nature-300 mb-4">Openingstijden Winkel:</p>
                    <ul className="space-y-2 text-sm">
                        <li className="flex justify-between"><span>Vrijdag</span> <span>10:00 - 17:00</span></li>
                        <li className="flex justify-between"><span>Zaterdag</span> <span>10:00 - 16:00</span></li>
                        <li className="flex justify-between"><span>Zondag</span> <span>Op afspraak</span></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;