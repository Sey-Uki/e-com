import Link from 'next/link';

import s from './info.module.css';
import MailIcon from '../../../../public/assets/images/mail.svg';
import WhatsappIcon from '../../../../public/assets/images/whatsapp.svg';
import { SectionTitle } from '../../sectionTitle/sectionTitle';

export const ContactInfo = () => {
  return (
    <div className={s.info}>
      <SectionTitle>Контактная информация</SectionTitle>
      <div className={s.phone}>
        <WhatsappIcon /> <Link href="tel:+79999999999">+7999-999-99-99</Link>
      </div>

      <div className={s.mail}>
        <MailIcon />{' '}
        <Link href="mailto:example@gmail.com">example@gmail.com</Link>
      </div>
    </div>
  );
};
