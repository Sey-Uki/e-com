import s from './comments.module.css';
import EmptyStar from '../../../../../public/assets/images/empty-star.svg';
import HalfStar from '../../../../../public/assets/images/half-star.svg';
import YellowStar from '../../../../../public/assets/images/yellow-star.svg';
import { CommentItem } from '../../../../utils/products';

type Props = {
  comments?: CommentItem[];
};

const stars = [...Array(5)].map((_, i) => i + 1);

const isNumberFloat = (num: number) => Math.trunc(num) !== num;

export const CommentsTab = ({ comments }: Props) => {
  return (
    <div className={s.comments}>
      {comments?.map((comment) => {
        const isFloat = isNumberFloat(comment.rate);
        const halfStarIndex = isFloat ? Math.trunc(comment.rate) : undefined;

        return (
          <div className={s.item} key={comment.id}>
            <p className={s.text}>{comment.text}</p>
            <div className={s.bottom}>
              <strong>— {comment.author}</strong>
              <div className={s.rate}>
                {stars.map((num, i) => {
                  if (halfStarIndex === i) {
                    return <HalfStar key={num} />;
                  }

                  if (comment.rate >= num) {
                    return <YellowStar key={num} />;
                  }

                  return <EmptyStar key={num} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
