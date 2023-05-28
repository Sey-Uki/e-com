import s from './form.module.css';
import { Button } from '../../button/button';
import { SectionTitle } from '../../sectionTitle/sectionTitle';

export const ContactForm = () => {
  return (
    <form className={s.form}>
      <SectionTitle>Напишите нам</SectionTitle>
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
