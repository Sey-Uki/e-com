import s from './mainTitle.module.css';

type Props = {
  children: React.ReactNode;
};

export const MainTitle = ({ children }: Props) => {
  return <h1 className={s.mainTitle}>{children}</h1>;
};
