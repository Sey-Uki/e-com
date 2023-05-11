'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import s from './slider.module.css';

const IMAGES = ['/assets/images/roof-1.jpeg', '/assets/images/roof-2.jpeg'];
const INTERVAL = 12000;

type Props = {
  card: JSX.Element;
};

export const SliderLayout = ({ card }: Props) => {
  const [itemIndex, setItemIndex] = useState(0);

  const item = IMAGES[itemIndex];

  useEffect(() => {
    const timerId = setInterval(() => {
      setItemIndex((c) => {
        if (c < IMAGES.length - 1) {
          return c + 1;
        }

        return 0;
      });
    }, INTERVAL);

    return () => clearInterval(timerId);
  }, []);

  return (
    <section className={s.slider}>
      {card}
      <div className={`${s.wrapper} ${s.fade}`}>
        <Image
          priority
          alt="123"
          height={0}
          sizes="100vw"
          src={item}
          width={0}
        />
      </div>
    </section>
  );
};
