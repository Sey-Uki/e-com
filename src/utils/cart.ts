export type CartItem = {
  id: number;
  name: string;
  price: number;
  amount: number;
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
    color: 'red',
  },
  {
    id: 2,
    name: 'Кронштейн Желоба (MAX)',
    price: 42,
    amount: 2,
    thumbnail: require('../../public/assets/images/brackets/bracket2.webp'),
    color: 'skyBlue',
  },
];
