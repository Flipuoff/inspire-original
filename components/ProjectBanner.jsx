import Link from "next/link";
import styles from "../styles/ProjectBanner.module.css";

export default function ProjectBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.projectBox}>
        <h2>Inspire Original</h2>
        <p>
          Premium print-on-demand apparel crafted for those who dare to stand apart. Every piece is made to order — designed with intention, delivered with excellence.
        </p>
        <div className={styles.buttonLine}>
          <Link href="/about">
            <button>Our Story</button>
          </Link>
        </div>
      </div>
      <div className={styles.helpBox}>
        <h2>Why Choose Inspire Original?</h2>
        <ul className={styles.helpItems}>
          <li>
            <img src="icons/heart.svg" alt="" />
            <span>Exclusive limited designs.</span>
          </li>
          <li>
            <img src="icons/add-cart.svg" alt="" />
            <span>Premium quality, made to order.</span>
          </li>
          <li>
            <img src="icons/git-mask.svg" alt="" />
            <span>Delivered straight to your door.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}