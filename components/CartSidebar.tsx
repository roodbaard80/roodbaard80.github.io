import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem 
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`fixed inset-0 z-[60] pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      ></div>

      {/* Sidebar Panel */}
      <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-500 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-nature-50">
          <h2 className="font-serif text-2xl text-nature-900">Winkelmand</h2>
          <button onClick={onClose} className="p-2 hover:bg-stone-200 rounded-full transition-colors">
            <X size={24} className="text-stone-500" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <p className="text-lg">Je mandje is nog leeg.</p>
              <button onClick={onClose} className="mt-4 text-honey-600 hover:underline">Verder winkelen</button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-nature-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">€{item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-stone-50 rounded-lg p-1">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 hover:bg-white rounded shadow-sm transition-all"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                      <button 
                         onClick={() => onUpdateQuantity(item.id, 1)}
                         className="p-1 hover:bg-white rounded shadow-sm transition-all"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                        <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 bg-nature-50 border-t border-stone-200">
            <div className="flex justify-between items-center mb-4 text-xl font-bold text-nature-900">
              <span>Totaal</span>
              <span>€{total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-nature-900 text-white py-4 rounded-full font-bold uppercase tracking-widest hover:bg-honey-500 hover:text-nature-900 transition-all duration-300 shadow-lg">
              Afrekenen
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">Gratis verzending vanaf €50</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;