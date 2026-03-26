'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = "https://wa.me/919025013754?text=Hi CodeOrbit, I'm interested in the MERN Stack training.";

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>Code</span>
            <span className={styles.logoAccent}>Orbit</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <Link href="/">Overview</Link>
          <Link href="/syllabus">Syllabus</Link>
          <Link href="/#other-courses">Programs</Link>
          <Link href="/#about">About</Link>
          <Link href="/contact" className={styles.contactBtn}>
            Enroll Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={styles.hamburger} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${isOpen ? styles.barOne : ''}`}></span>
          <span className={`${styles.bar} ${isOpen ? styles.barTwo : ''}`}></span>
          <span className={`${styles.bar} ${isOpen ? styles.barThree : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.menuOpen : ''}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>Overview</Link>
          <Link href="/syllabus" onClick={() => setIsOpen(false)}>Syllabus</Link>
          <Link href="/#other-courses" onClick={() => setIsOpen(false)}>Programs</Link>
          <Link href="/#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className={styles.contactBtn} onClick={() => setIsOpen(false)}>
            Enroll Now
          </Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ marginTop: '20px', color: '#db2777', fontWeight: 800 }}>
            WhatsApp: +91 9025013754
          </a>
        </div>
      </div>
    </header>
  );
}
