import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Link href="/">SHOP.</Link>
        </div>

        <div className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Shop</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={styles.menu}>
          <Image src="/images/search.svg" height={25} width={25} alt="search" />
          <Image src="/images/basket.svg" height={25} width={25} alt="basket" />
        </div>
      </div>
    </header>
  );
};
