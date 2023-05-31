import s from './confirmationModal.module.css';
import OkIcon from '../../../../public/assets/images/ok.svg';
import { Modal } from '../../modal/modal';
import { SectionTitle } from '../../sectionTitle/sectionTitle';
import { Subtitle } from '../../subtitle/subtitle';

type Props = {
  showConfirmation: boolean;
  onHide: () => void;
};

export const ConfirmationModal = ({ showConfirmation, onHide }: Props) => {
  return (
    <Modal visible={showConfirmation} onHide={onHide}>
      <div className={s.confirmation}>
        <SectionTitle>Ваш заказ успешно зарегистрирован!</SectionTitle>
        <OkIcon />
        <Subtitle>Наш оператор по доставке скоро с Вами cвяжется</Subtitle>
        <Subtitle>Вся информация о заказе направлена на Вашу почту</Subtitle>
      </div>
    </Modal>
  );
};
