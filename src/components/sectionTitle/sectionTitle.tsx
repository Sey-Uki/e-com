import s from './sectionTitle.module.css';

type Props = {
  content: string | JSX.Element;
  withMarginBottom?: boolean;
};

export const SectionTitle = ({ content, withMarginBottom = true }: Props) => {
  return (
    <h2
      className={s.sectionTitle}
      style={{ marginBottom: withMarginBottom ? 20 : 0 }}
    >
      {content}
    </h2>
  );
};
