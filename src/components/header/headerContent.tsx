import Image from 'next/image';
import Link from 'next/link';

import s from './header.module.css';
import { Container } from '../container/container';
import { Logo } from '../logo/logo';

const basketIcon = '/assets/images/basket.svg';

export const HeaderContent = () => {
  return (
    <Container extraClass={s.container}>
      <Logo />
      <nav className={s.nav}>
        <ul>
          <li>
            <Link href="/">О нас</Link>
          </li>
          <li>
            <Link href="/">Каталог</Link>
          </li>
          <li>
            <Link href="/contact">Контакты</Link>
          </li>
        </ul>
      </nav>

      <Link href="/cart">
        <Image priority alt="basket" height={25} src={basketIcon} width={25} />
        <span className={s.cartCount}>3</span>
      </Link>
    </Container>
  );
};
