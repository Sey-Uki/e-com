import Image from 'next/image';
import Link from 'next/link';

import s from './header.module.css';
import { Container } from '../container/container';
import { SectionTitle } from '../sectionTitle/sectionTitle';

const basketIcon = '/assets/images/basket.svg';

export const HeaderContent = () => {
  return (
    <Container extraClass={s.container}>
      <div className={s.title}>
        <SectionTitle
          content={<Link href="/">SHOP.</Link>}
          withMarginBottom={false}
        />
      </div>

      <ul className={s.nav}>
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

      <Image priority alt="basket" height={25} src={basketIcon} width={25} />
    </Container>
  );
};
