import s from './sectionTitle.module.css';

type Props = {
  text: string;
};

export const SectionTitle = ({ text }: Props) => {
  return <h2 className={s.sectionTitle}>{text}</h2>;
};
