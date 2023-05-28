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
      <ul className={s.nav}>
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

      <Image priority alt="basket" height={25} src={basketIcon} width={25} />
    </Container>
  );
};
