import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col h-full">
      {/* Badge */}
      {product.isNew && (
        <div className="absolute top-4 left-4 z-10 bg-nature-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Nieuw
        </div>
      )}

      {/* Image Container */}
      <div className="aspect-square overflow-hidden bg-stone-100 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Overlay button on desktop */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <button 
                onClick={() => onAddToCart(product)}
                className="bg-white text-nature-900 px-6 py-3 rounded-full font-bold uppercase text-sm tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-honey-400"
             >
                In Winkelmand
             </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2 text-xs text-honey-600 uppercase font-bold tracking-widest">
          {product.category}
        </div>
        <h3 className="text-xl font-serif text-nature-900 mb-2 group-hover:text-honey-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-stone-100">
          <span className="text-lg font-bold text-nature-900">
            €{product.price.toFixed(2)}
          </span>
          <button 
            onClick={() => onAddToCart(product)}
            className="md:hidden w-10 h-10 bg-nature-100 rounded-full flex items-center justify-center text-nature-900 active:bg-honey-400 transition-colors"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;