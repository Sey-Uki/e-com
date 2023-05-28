import s from './card.module.css';
import { CustomLink } from '../../../customLink/customLink';
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
      <Price>{`${price}`}</Price>
      <SectionTitle>{title}</SectionTitle>
      <p className={s.description}>{description}</p>
      <CustomLink href="/product/1">Подробнее</CustomLink>
    </div>
  );
};
