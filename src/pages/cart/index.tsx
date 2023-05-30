import { ReactElement, useMemo, useState } from 'react';

import Image from 'next/image';

import s from './cart.module.css';
import { Button } from '../../components/button/button';
import { Container } from '../../components/container/container';
import Layout from '../../components/layout';
import { MainTitle } from '../../components/mainTitle/mainTitle';
import { Price } from '../../components/price/price';
import { Subtitle } from '../../components/subtitle/subtitle';
import { CART_ITEMS, CartItem } from '../../utils/cart';

const COLORS = ['red', 'green', 'blue', 'orange', 'yellow', 'skyblue'];

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(CART_ITEMS);

  const [visibleDropDowns, setVisibleDropDowns] = useState<
    (boolean | undefined)[]
  >([]);

  const handleShowDropdown = (index: number) => {
    setVisibleDropDowns((v) => {
      const temp = [...v];

      if (temp[index]) {
        temp[index] = false;
      } else {
        temp[index] = true;
      }

      return temp;
    });
  };

  const handleSelectColor = (index: number, color: string) => {
    setCartItems((c) =>
      c.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            color,
          };
        }

        return item;
      }),
    );
  };

  const totalAmount = useMemo(
    () => CART_ITEMS.reduce((acc, item) => acc + item.amount, 0),
    [],
  );

  const totalPrice = useMemo(
    () => CART_ITEMS.reduce((acc, item) => acc + item.price * item.amount, 0),
    [],
  );

  const totalWeight = useMemo(
    () => CART_ITEMS.reduce((acc, item) => acc + item.weight * item.amount, 0),
    [],
  );

  return (
    <div className={s.cart}>
      <Container extraClass={s.container}>
        <MainTitle>Корзина</MainTitle>
        <div className={s.content}>
          <section className={s.items}>
            {cartItems.map(
              ({ id, name, price, amount, thumbnail, color }, index) => {
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
                    <input
                      defaultValue={amount}
                      max={20}
                      min={0}
                      type="number"
                    />
                    <Price>{`${price}₽`}</Price>
                    <div
                      className={s.colors}
                      onClick={() => handleShowDropdown(index)}
                    >
                      <div
                        className={s.preview}
                        style={{
                          backgroundColor: color,
                        }}
                      >
                        {visibleDropDowns[index] ? (
                          <span className={s.arrow}>▲</span>
                        ) : (
                          <span className={s.arrow}>▼</span>
                        )}
                      </div>
                      {visibleDropDowns[index] && (
                        <div className={s.dropDown}>
                          {COLORS.map((color) => {
                            return (
                              <div
                                key={color}
                                style={{ backgroundColor: color }}
                                onClick={() => handleSelectColor(index, color)}
                              />
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                );
              },
            )}
          </section>

          <section className={s.summary}>
            <div className={s.info}>
              <div>
                <strong>Товары</strong>
                <span>{totalAmount}</span>
              </div>

              <div>
                <strong>Общая цена</strong>
                <span>{`${totalPrice}₽`}</span>
              </div>

              <div>
                <strong>Общий вес</strong>
                <span>{totalWeight} кг</span>
              </div>

              <p>Окончательная цена будет зависеть от доставки</p>
            </div>

            <div className={s.bottom}>
              <Button>Перейти к оформлению</Button>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CartPage;
