import Link from 'next/link';

import s from './logo.module.css';
import LogoIcon from '../../../public/assets/images/logo.svg';

export const Logo = () => {
  return (
    <Link className={s.logo} href="/">
      <LogoIcon />
    </Link>
  );
};
