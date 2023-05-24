import s from './price.module.css';

type Props = {
  children: React.ReactNode;
};

export const Price = ({ children }: Props) => {
  return <p className={s.price}>{children}</p>;
};
