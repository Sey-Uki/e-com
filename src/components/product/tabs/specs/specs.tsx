import { useState } from 'react';

import Image from 'next/image';

import s from './specs.module.css';
import { SpecsItem } from '../../../../utils/products';
import { Modal } from '../../../modal/modal';
import { Subtitle } from '../../../subtitle/subtitle';

type Props = {
  specs?: SpecsItem[];
};

export const SpecsTab = ({ specs }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const onModalHide = () => setShowModal(false);
  const onModalShow = () => setShowModal(true);

  return (
    <div className={s.specs}>
      {specs?.map((spec) => {
        return (
          <div className={s.item} key={spec.id}>
            <Subtitle>{spec.title}</Subtitle>
            {spec.list.map(({ id, key, value, imageSrc }) => {
              return (
                <div className={s.subItem} key={id}>
                  <strong>{key}</strong>
                  {imageSrc ? (
                    <button onClick={onModalShow}>{value}</button>
                  ) : (
                    <span>{value}</span>
                  )}

                  {imageSrc && (
                    <Modal visible={showModal} onHide={onModalHide}>
                      <Image
                        alt={spec.title}
                        height={0}
                        sizes="100vw"
                        src={imageSrc}
                        width={0}
                      />
                    </Modal>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
