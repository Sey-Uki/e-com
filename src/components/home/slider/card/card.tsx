import s from './card.module.css';
import { Button } from '../../../button/button';
import { Price } from '../../../price/price';
import { SectionTitle } from '../../../sectionTitle/sectionTitle';

type Props = {
  title: string;
  price: string;
  description: string;
};

export const Card = ({ title, price, description }: Props) => {
  return (
    <div className={s.card}>
      <Price>{`${price}₽`}</Price>
      <SectionTitle>{title}</SectionTitle>
      <p className={s.description}>{description}</p>
      <Button>Подробнее</Button>
    </div>
  );
};
