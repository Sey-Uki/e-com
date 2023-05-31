import { useEffect } from 'react';

import s from './modal.module.css';
import CloseIcon from '../../../public/assets/images/close.svg';

type Props = {
  children: React.ReactNode;
  visible: boolean;
  onHide: () => void;
};

export const Modal = ({ children, visible, onHide }: Props) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.code === 'Escape' && visible) {
        onHide();
      }
    };
    window.addEventListener('keyup', handleEscape);

    return () => {
      window.removeEventListener('keyup', handleEscape);
    };
  }, [onHide, visible]);

  return (
    <>
      {visible && (
        <>
          <div className={s.overlay} onClick={onHide} />
          <div className={s.modal}>
            <button className={s.closeBtn} onClick={onHide}>
              <CloseIcon />
            </button>
            {children}
          </div>
        </>
      )}
    </>
  );
};
