import s from './button.module.css';

type Props = {
  children: React.ReactNode;
};

export const Button = ({ children }: Props) => {
  return <button className={s.button}>{children}</button>;
};
