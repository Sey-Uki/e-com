import s from './button.module.css';

type Props = {
  text: string;
};

export const Button = ({ text }: Props) => {
  return <button className={s.button}>{text}</button>;
};
