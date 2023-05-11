import s from './container.module.css';

type Props = {
  extraClass?: string;
  children: React.ReactNode;
};

export const Container = ({ extraClass, children }: Props) => {
  return (
    <div className={`${s.container} ${extraClass ? extraClass : ''}`}>
      {children}
    </div>
  );
};
