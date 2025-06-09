import styles from "./Header.module.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className={styles.header}>
        <Link to="/">Animesh's Blog</Link>
      {/* <a href="#">Animesh's Blog</a> */}
      <nav className={styles.nav}>
        {/* <a href="about">About</a> */}
        <Link to="about">About</Link>
      </nav>
    </header>
  );
}
