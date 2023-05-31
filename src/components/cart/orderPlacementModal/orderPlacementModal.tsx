import React, { useState } from 'react';

import s from './orderPlacementModal.module.css';
import ArrowDownIcon from '../../../../public/assets/images/arrow-down.svg';
import { Button } from '../../button/button';
import { Modal } from '../../modal/modal';
import { Subtitle } from '../../subtitle/subtitle';
import { ConfirmationModal } from '../confirmationModal/confirmationModal';

type ContactOoption = 'whatsapp' | 'telegram' | '';

type Props = {
  showModal: boolean;
  onModalHide: () => void;
};

export const OrderPlacementModal = ({ showModal, onModalHide }: Props) => {
  const [contactOption, setContactOption] = useState<ContactOoption>('');

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleContactChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setContactOption(e.target.value as ContactOoption);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onModalHide();
    setShowConfirmation(true);
  };

  return (
    <>
      <Modal visible={showModal} onHide={onModalHide}>
        <form className={s.form} onSubmit={handleSubmit}>
          <Subtitle>
            Укажите свои данные, чтобы оформить заказ <br /> и мы с Вами
            свяжемся
          </Subtitle>
          <div className={s.top}>
            <div>
              <input placeholder="Имя" type="text" />
            </div>
            <div>
              <input placeholder="Фамилия" type="text" />
            </div>
          </div>

          <div>
            <input placeholder="Почта" type="email" />
          </div>

          <div>
            <input placeholder="Телефон" type="tel" />
          </div>

          <div className={s.contactOptions}>
            <ArrowDownIcon />
            <select value={contactOption} onChange={handleContactChange}>
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
                placeholder="Укажите имя пользователя телеграм"
                type="text"
              />
            </div>
          )}
          <textarea cols={30} placeholder="Комментарий" rows={10} />

          <div className={s.buttonWrapper}>
            <Button type="submit">Отправить</Button>
          </div>
        </form>
      </Modal>
      <ConfirmationModal
        showConfirmation={showConfirmation}
        onHide={() => setShowConfirmation(false)}
      />
    </>
  );
};
