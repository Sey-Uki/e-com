import s from './button.module.css';

type Props = {
  children: React.ReactNode;
  extraClass?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, extraClass, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`${s.button} ${extraClass ? extraClass : ''}`}
    >
      {children}
    </button>
  );
};
