import Image from 'next/image';
import Link from 'next/link';

import s from './header.module.css';
import { Container } from '../container/container';

const basketIcon = '/assets/images/basket.svg';

export const Header = () => {
  return (
    <header className={s.header}>
      <Container extraClass={s.container}>
        <div className={s.title}>
          <Link href="/">SHOP.</Link>
        </div>

        <div className={s.nav}>
          <ul>
            <li>
              <Link href="/">Shop</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={s.menu}>
          <Image
            priority
            alt="basket"
            height={25}
            src={basketIcon}
            width={25}
          />
        </div>
      </Container>
    </header>
  );
};
