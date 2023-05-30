import s from './headers.module.css';

export const CartHeaders = () => {
  return (
    <div className={s.headers}>
      <span className={s.thumbnail}>
        <strong>Фото</strong>
      </span>
      <span className={s.name}>
        <strong>Наименование</strong>
      </span>
      <span className={s.amount}>
        <strong>Количество</strong>
      </span>
      <span className={s.price}>
        <strong>Стоимость</strong>
      </span>
      <span className={s.colors}>
        <strong>Цвет</strong>
      </span>
    </div>
  );
};
