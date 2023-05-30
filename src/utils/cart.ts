export type CartItem = {
  id: number;
  name: string;
  price: number;
  amount: number;
  weight: number;
  thumbnail: string;
  color: string;
};

export const CART_ITEMS: CartItem[] = [
  {
    id: 1,
    name: 'Кронштейн Желоба (MIN)',
    price: 38,
    amount: 1,
    thumbnail: require('../../public/assets/images/brackets/bracket1.jpeg'),
    weight: 0.3,
    color: 'red',
  },
  {
    id: 2,
    name: 'Кронштейн Желоба (MAX)',
    price: 42,
    amount: 2,
    thumbnail: require('../../public/assets/images/brackets/bracket2.webp'),
    weight: 0.5,
    color: 'skyBlue',
  },
];
