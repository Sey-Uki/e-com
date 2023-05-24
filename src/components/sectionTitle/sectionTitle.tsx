import s from './sectionTitle.module.css';

type Props = {
  children: React.ReactNode;
  withMarginBottom?: boolean;
};

export const SectionTitle = ({ children, withMarginBottom = true }: Props) => {
  return (
    <h2
      className={s.sectionTitle}
      style={{ marginBottom: withMarginBottom ? 20 : 0 }}
    >
      {children}
    </h2>
  );
};
