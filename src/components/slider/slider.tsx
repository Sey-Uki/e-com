import React, { useEffect, useState } from 'react';

import classNames from 'classnames';
import Image from 'next/image';

import { Card } from './card/card';
import s from './slider.module.css';

const IMAGES = ['/assets/images/roof-1.jpeg', '/assets/images/roof-2.jpeg'];
const INTERVAL = 10000;

export const Slider = () => {
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
      <Card
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, officia facilis. Quia, magni possimus! Officia facere debitis, facilis voluptates magnam autem consequuntur non nobis? Dolores blanditiis reprehenderit aut assumenda tempora?"
        price="100"
        title="Title1"
      />
      <div className={classNames(s.wrapper, s.fade)}>
        <Image
          priority
          alt="123"
          height={0}
          sizes="100vw"
          src={item}
          width={0}
          onLoad={() => console.log(232323)}
        />
      </div>
    </section>
  );
};
