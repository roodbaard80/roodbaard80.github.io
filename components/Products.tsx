import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
  return (
    <section id="products" className="py-24 bg-white relative">
        {/* Background texture hint */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-honey-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-50 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-honey-600 font-bold tracking-widest uppercase text-sm mb-2 block">
            Webshop
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-nature-900 mb-6">
            Onze Oogst
          </h2>
          <p className="text-gray-500 text-lg">
            Ontdek onze selectie van pure honing, limited editions en handgemaakte bijenproducten. 
            Direct van de imker, met zorg voor de natuur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {PRODUCTS.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;