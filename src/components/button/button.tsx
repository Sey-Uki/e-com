import s from './button.module.css';

type Props = {
  children: React.ReactNode;
  extraClass?: string;
};

export const Button = ({ children, extraClass }: Props) => {
  return (
    <button className={`${s.button} ${extraClass ? extraClass : ''}`}>
      {children}
    </button>
  );
};
