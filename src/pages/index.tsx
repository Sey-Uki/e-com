import { Nunito_Sans } from 'next/font/google';

import { Header } from '../components/header/header';
import { Products } from '../components/products/products';
import { Slider } from '../components/slider/slider';

const nunito = Nunito_Sans({
  weight: ['200', '300', '400', '600', '700', '800'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={nunito.className}>
      <Header />
      <main>
        <Slider />
        <Products />
      </main>
    </div>
  );
}
