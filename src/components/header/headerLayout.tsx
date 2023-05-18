'use client';

import { useEffect, useState } from 'react';

import s from './header.module.css';
type Props = {
  children: React.ReactNode;
};

export const HeaderLayout = ({ children }: Props) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else if (window.scrollY < 1 && isFixed) {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFixed]);

  return (
    <header className={`${s.header} ${isFixed ? s.scrolled : ''}`}>
      {children}
    </header>
  );
};
