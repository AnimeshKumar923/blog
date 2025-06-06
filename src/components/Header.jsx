import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#">Animesh's Blog</a>
      <nav className={styles.nav}>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}
