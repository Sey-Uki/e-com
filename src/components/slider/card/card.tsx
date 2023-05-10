import s from './card.module.css';
import { Button } from '../../button/button';

type Props = {
  title: string;
  price: string;
  description: string;
};

export const Card = ({ title, price, description }: Props) => {
  return (
    <div className={s.card}>
      <p className={s.price}>{price}₽</p>
      <h2 className={s.title}>{title}</h2>
      <p className={s.description}>{description}</p>
      <Button text="Подробнее" />
    </div>
  );
};
