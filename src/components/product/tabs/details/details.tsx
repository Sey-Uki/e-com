import s from './details.module.css';
import { MainTitle } from '../../../mainTitle/mainTitle';
import { Price } from '../../../price/price';

type Props = {
  price?: string;
  title?: string;
  description?: string;
};

export const DetailsTab = ({ price, title, description }: Props) => {
  return (
    <div className={s.details}>
      <div className={s.price}>
        <strong>Стоимость:</strong> <Price>{price}</Price>
      </div>
      <MainTitle>{title}</MainTitle>
      <p>{description}</p>
    </div>
  );
};
