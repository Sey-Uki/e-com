import Image from 'next/image';
import Link from 'next/link';

import s from './products.module.css';
import BasketIcon from '../../../../public/assets/images/basket.svg';
import { PRODUCTS } from '../../../utils/products';
import { Container } from '../../container/container';
import { Price } from '../../price/price';
import { SectionTitle } from '../../sectionTitle/sectionTitle';
import { Subtitle } from '../../subtitle/subtitle';

export const Products = () => {
  return (
    <section className={s.products}>
      <Container extraClass={s.container}>
        <div className={s.top}>
          <p className={s.preTitle}>Cool stuff</p>
          <SectionTitle>Products.</SectionTitle>
          <p className={s.slogan}>
            Dignissimos asperiores vitae velit veniam totam fuga molestias
            accusamus alias autem provident. Odit ab aliquam dolor eius.
          </p>
        </div>
        <div className={s.content}>
          {PRODUCTS.map(({ name, thumbnail, id, price }) => {
            return (
              <div className={s.item} key={id}>
                <div className={s.thumbnail}>
                  <Image
                    alt={name}
                    height={0}
                    sizes="100vw"
                    src={thumbnail}
                    width={0}
                  />
                </div>
                <Subtitle>
                  <Link href={`/product/${encodeURIComponent(id)}`}>
                    {name}
                  </Link>
                </Subtitle>
                <div className={s.bottom}>
                  <Price>{price}</Price>
                  <button>
                    → <BasketIcon />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
