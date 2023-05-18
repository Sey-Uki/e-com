import s from './subtitle.module.css';

type Props = {
  children: React.ReactNode;
};

export const Subtitle = ({ children }: Props) => {
  return <h3 className={s.subtitle}>{children}</h3>;
};
