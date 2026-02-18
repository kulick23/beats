import type { ProductCard } from './types';

export const colorSlides = [
  'assets/images/clour-01.png',
  'assets/images/clour-02.png',
  'assets/images/clour-03.png',
] as const;

export const featureItems = [
  { title: 'Battery', text: 'Battery 6.2V-AAC codec', icon: 'assets/icons/battery.svg' },
  { title: 'Bluetooth', text: 'Battery 6.2V-AAC codec', icon: 'assets/icons/bluetooth.svg' },
  { title: 'Microphone', text: 'Battery 6.2V-AAC codec', icon: 'assets/icons/microphone.svg' },
] as const;

export const products: ProductCard[] = [
  {
    id: 'p1',
    name: 'Blue Headphone',
    rating: 5,
    score: '4.50',
    price: 256,
    image: 'assets/images/product-03.png',
    photoClassName: 'product__photo--first',
    iconClassName: 'photo__block--first-icon',
    itemClassName: 'product__item--first',
  },
  {
    id: 'p2',
    name: 'Blue Headphone',
    rating: 5,
    score: '4.50',
    price: 235,
    image: 'assets/images/product-02.png',
    photoClassName: 'product__photo--second',
    iconClassName: 'photo__block--second-icon',
  },
  {
    id: 'p3',
    name: 'Blue Headphone',
    rating: 5,
    score: '4.50',
    price: 245,
    image: 'assets/images/product-01.png',
    photoClassName: 'product__photo--third',
    iconClassName: 'photo__block--third-icon',
    itemClassName: 'product__item--third',
  },
];

export const boxItems = ['5A Charger', 'Extra battery', 'Sophisticated bag', 'User manual guide'] as const;
