import { ReactElement } from 'react';

import Image from 'next/image';

import s from './cart.module.css';
import { Container } from '../../components/container/container';
import Layout from '../../components/layout';
import { MainTitle } from '../../components/mainTitle/mainTitle';
import { Price } from '../../components/price/price';
import { Subtitle } from '../../components/subtitle/subtitle';
import { CART_ITEMS } from '../../utils/cart';

const CartPage = () => {
  return (
    <div className={s.cart}>
      <Container extraClass={s.container}>
        <MainTitle>Корзина</MainTitle>
        <div className={s.content}>
          <section className={s.items}>
            {CART_ITEMS.map(({ id, name, price, amount, thumbnail }) => {
              return (
                <div className={s.item} key={id}>
                  <Image
                    priority
                    alt="basket"
                    height={0}
                    sizes="100vw"
                    src={thumbnail}
                    width={0}
                  />
                  <Subtitle>{name}</Subtitle>
                  <input max={20} min={0} type="number" value={amount} />
                  <Price>{price}</Price>
                </div>
              );
            })}
          </section>

          <section className={s.summary}></section>
        </div>
      </Container>
    </div>
  );
};

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CartPage;
