import { Nunito_Sans } from 'next/font/google';

import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { Products } from '../components/home/products/products';
import { Slider } from '../components/home/slider/slider';

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
      <Footer />
    </div>
  );
}
