import s from './headings.module.css';

export const CartHeadings = () => {
  return (
    <div className={s.headings}>
      <span className={s.thumbnail}>
        <strong>Фото</strong>
      </span>
      <span className={s.name}>
        <strong>Наименование</strong>
      </span>
      <span className={s.amount}>
        <strong>Кол-во</strong>
      </span>
      <span className={s.price}>
        <strong>Цена</strong>
      </span>
      <span className={s.colors}>
        <strong>Цвет</strong>
      </span>
    </div>
  );
};
