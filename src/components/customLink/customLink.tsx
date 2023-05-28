import Link from 'next/link';

import s from './customLink.module.css';

type Props = {
  href: string;
  children: React.ReactNode;
};

export const CustomLink = ({ href, children }: Props) => {
  return (
    <Link className={s.link} href={href}>
      {children}
    </Link>
  );
};
