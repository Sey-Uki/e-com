import Image from 'next/image';
import Link from 'next/link';

import { PRODUCTS } from './data';
import s from './products.module.css';
import { Container } from '../container/container';
import { Price } from '../price/price';
import { SectionTitle } from '../sectionTitle/sectionTitle';
import { Subtitle } from '../subtitle/subtitle';

export const Products = () => {
  return (
    <section className={s.products}>
      <Container extraClass={s.container}>
        <div className={s.top}>
          <p className={s.preTitle}>Cool stuff</p>
          <SectionTitle content="Products." />
          <p className={s.slogan}>
            Dignissimos asperiores vitae velit veniam totam fuga molestias
            accusamus alias autem provident. Odit ab aliquam dolor eius.
          </p>
        </div>
        <div className={s.content}>
          {PRODUCTS.map((item) => {
            return (
              <div className={s.item} key={item.id}>
                <div className={s.thumbnail}>
                  <Image
                    alt={item.name}
                    height={0}
                    sizes="100vw"
                    src={item.thumbnail}
                    width={0}
                  />
                </div>
                <Link href={`/product/${encodeURIComponent(item.id)}`}>
                  <Subtitle text={item.name} />
                </Link>

                <Price text={item.price} />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
