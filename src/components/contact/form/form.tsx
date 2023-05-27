import s from './form.module.css';
import { Button } from '../../button/button';

export const ContactForm = () => {
  return (
    <form className={s.form}>
      <div className={s.top}>
        <div>
          <input placeholder="Имя" type="text" />
        </div>
        <div>
          <input placeholder="Фамилия" type="text" />
        </div>
      </div>

      <input placeholder="Почта" type="email" />
      <textarea cols={30} placeholder="Сообщение" rows={10} />

      <div className={s.buttonWrapper}>
        <Button>Отправить</Button>
      </div>
    </form>
  );
};
