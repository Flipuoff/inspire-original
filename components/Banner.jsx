import Link from "next/link";
import styles from "../styles/Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
    <img src="/logo.jpg" alt="Inspire Original" />    
      </div>
      <div className={styles.infoBox}>
        <h2>
          Crafted for those who dare to stand apart. Inspire Original is more than a brand — it is a declaration of identity.
        </h2>
        <Link href="/about">
          <button>Discover More</button>
        </Link>
      </div>
    </div>
  );
}