export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'honing' | 'cadeau' | 'special';
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface SustainabilityMetric {
  year: string;
  flowers: number; // in thousands
  hives: number;
}
