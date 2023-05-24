import s from './specs.module.css';
import { SpecsItem } from '../../../../utils/products';
import { Subtitle } from '../../../subtitle/subtitle';

type Props = {
  specs?: SpecsItem[];
};

export const SpecsTab = ({ specs }: Props) => {
  return (
    <div className={s.specs}>
      {specs?.map((spec) => {
        return (
          <div className={s.item} key={spec.id}>
            <Subtitle>{spec.title}</Subtitle>
            {spec.list.map((listItem) => {
              return (
                <div className={s.subItem} key={listItem.id}>
                  <strong>{listItem.key}</strong>
                  <span>{listItem.value}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
