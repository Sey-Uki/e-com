import s from './price.module.css';

type Props = {
  text: string;
};

export const Price = ({ text }: Props) => {
  return <p className={s.price}>{text}</p>;
};
