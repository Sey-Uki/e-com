import { Nunito_Sans } from 'next/font/google';

import { Header } from '../components/header/header';
import { Slider } from '../components/slider/slider';

const nunito = Nunito_Sans({
  weight: ['200', '300', '400', '600'],
  subsets: ['latin'],
});

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={nunito.className}>
      <Header />
      <main>
        <Slider />
        {children}
      </main>
    </div>
  );
}
