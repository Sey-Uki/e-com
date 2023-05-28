import Link from 'next/link';

import s from './footer.module.css';
import { Container } from '../container/container';
import { Logo } from '../logo/logo';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container extraClass={s.container}>
        <div className={s.left}>
          <Logo />
          <p>
            Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
            reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
          </p>
        </div>
        <div className={s.links}>
          <ul>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Help</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">Terms</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">Shop</Link>
            </li>
            <li>
              <Link href="/">Privacy</Link>
            </li>
            <li>
              <Link href="/">Testimonials</Link>
            </li>
            <li>
              <Link href="/">Handbook</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">Teams</Link>
            </li>
            <li>
              <Link href="/">Advertise</Link>
            </li>
            <li>
              <Link href="/">API</Link>
            </li>
            <li>
              <Link href="/">Career</Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
