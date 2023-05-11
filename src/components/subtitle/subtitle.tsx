import s from './subtitle.module.css';

type Props = {
  text: string;
};

export const Subtitle = ({ text }: Props) => {
  return <h3 className={s.subtitle}>{text}</h3>;
};
