import { Product, SustainabilityMetric } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Gouden Acacia',
    description: 'Een heldere, zachte honing met een subtiele bloemige smaak. Geoogst in de ongerepte bossen.',
    price: 12.95,
    image: 'https://picsum.photos/id/1080/600/600',
    category: 'honing'
  },
  {
    id: '2',
    name: 'Wilde Heide bloem',
    description: 'Robuuste, donkere honing met een pittige, kruidige afdronk. Een ware delicatesse voor fijnproevers.',
    price: 14.50,
    image: 'https://picsum.photos/id/292/600/600',
    category: 'honing',
    isNew: true
  },
  {
    id: '3',
    name: 'Raathoning Puur',
    description: 'Direct uit de kast: pure honing in de raat. Een authentieke ervaring van textuur en smaak.',
    price: 18.00,
    image: 'https://picsum.photos/id/312/600/600',
    category: 'special'
  },
  {
    id: '4',
    name: 'Royal Giftset',
    description: 'Een luxe proeverij van drie soorten seizoenshoning, verpakt in een duurzame houten kist.',
    price: 39.95,
    image: 'https://picsum.photos/id/225/600/600',
    category: 'cadeau'
  },
  {
    id: '5',
    name: 'Lavendel Infusie',
    description: 'Onze zachte zomerhoning geinfuseerd met biologische lavendel uit eigen tuin.',
    price: 15.95,
    image: 'https://picsum.photos/id/514/600/600',
    category: 'special'
  },
  {
    id: '6',
    name: 'Bijenwas Kaarsenset',
    description: 'Handgerolde kaarsen van 100% zuivere bijenwas. Brandt langzaam en zuivert de lucht.',
    price: 24.50,
    image: 'https://picsum.photos/id/158/600/600',
    category: 'cadeau'
  }
];

export const SUSTAINABILITY_DATA: SustainabilityMetric[] = [
  { year: '2020', flowers: 150, hives: 12 },
  { year: '2021', flowers: 280, hives: 18 },
  { year: '2022', flowers: 450, hives: 25 },
  { year: '2023', flowers: 620, hives: 32 },
  { year: '2024', flowers: 800, hives: 40 },
];
