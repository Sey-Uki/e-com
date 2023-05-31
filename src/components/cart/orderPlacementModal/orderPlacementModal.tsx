import React, { useState } from 'react';

import s from './orderPlacementModal.module.css';
import ArrowDownIcon from '../../../../public/assets/images/arrow-down.svg';
import { Button } from '../../button/button';
import { Modal } from '../../modal/modal';
import { Subtitle } from '../../subtitle/subtitle';

type ContactOoption = 'whatsapp' | 'telegram' | '';

type Props = {
  showModal: boolean;
  onModalHide: () => void;
};

export const OrderPlacementModal = ({ showModal, onModalHide }: Props) => {
  const [contactOption, setContactOption] = useState<ContactOoption>('');

  const handleContactChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setContactOption(e.target.value as ContactOoption);
  };

  return (
    <Modal visible={showModal} onHide={onModalHide}>
      <form className={s.form}>
        <Subtitle>
          Укажите свои данные, чтобы оформить заказ <br /> и мы с Вами свяжемся
        </Subtitle>
        <div className={s.top}>
          <div>
            <input required placeholder="Имя" type="text" />
          </div>
          <div>
            <input required placeholder="Фамилия" type="text" />
          </div>
        </div>

        <div>
          <input required placeholder="Почта" type="email" />
        </div>

        <div>
          <input required placeholder="Телефон" type="tel" />
        </div>

        <div className={s.contactOptions}>
          <ArrowDownIcon />
          <select required value={contactOption} onChange={handleContactChange}>
            <option disabled hidden selected value="">
              Как с Вами связаться?
            </option>
            <option value="whatsapp">WhatsApp</option>
            <option value="telegram">Telegram</option>
          </select>
        </div>
        {contactOption === 'telegram' && (
          <div>
            <input
              required
              placeholder="Укажите имя пользователя телеграм"
              type="text"
            />
          </div>
        )}
        <textarea cols={30} placeholder="Комментарий" rows={10} />

        <div className={s.buttonWrapper}>
          <Button onClick={onModalHide}>Отправить</Button>
        </div>
      </form>
    </Modal>
  );
};
