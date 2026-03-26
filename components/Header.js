import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>Code</span>
            <span className={styles.logoAccent}>Orbit</span>
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/">Overview</Link>
          <Link href="/syllabus">Syllabus</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact" className={styles.contactBtn}>Contact Now</Link>
        </nav>
      </div>
    </header>
  );
}
