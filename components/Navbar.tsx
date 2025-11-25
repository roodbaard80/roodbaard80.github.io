import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Hexagon } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-500 ${
    isScrolled 
      ? 'bg-nature-800/95 backdrop-blur-sm text-honey-100 shadow-lg py-4' 
      : 'bg-transparent text-white py-6'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Hexagon className={`w-8 h-8 ${isScrolled ? 'text-honey-400' : 'text-honey-400'}`} strokeWidth={1.5} />
          <span className="text-2xl font-serif font-bold tracking-wide">Pimker<span className="text-honey-400">.</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-light">
          <a href="#about" className="hover:text-honey-400 transition-colors">Over Ons</a>
          <a href="#products" className="hover:text-honey-400 transition-colors">Shop</a>
          <a href="#sustainability" className="hover:text-honey-400 transition-colors">Natuur</a>
          <a href="#contact" className="hover:text-honey-400 transition-colors">Contact</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button 
            onClick={onOpenCart}
            className="relative p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ShoppingBag className="w-6 h-6" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-honey-600 text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-nature-800 text-honey-100 shadow-xl py-8 px-6 flex flex-col gap-6 text-center border-t border-white/10">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">Over Ons</a>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">Shop</a>
          <a href="#sustainability" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">Natuur</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;