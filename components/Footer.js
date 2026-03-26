import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const whatsappUrl = "https://wa.me/919025013754?text=Hi CodeOrbit, I'm interested in your training sessions.";

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <div className={styles.logo}>
            <span className={styles.logoText}>Code</span>
            <span className={styles.logoAccent}>Orbit</span>
          </div>
          <p className={styles.motto}>Elevating your coding journey to new heights with hands-on MERN Training.</p>
        </div>
        
        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/syllabus">Syllabus</Link></li>
            <li><Link href="/#other-courses">Programs</Link></li>
            <li><Link href="/#about">About</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerContact} id="contact">
          <h3>Enroll Now</h3>
          <p>WhatsApp: <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>+91 9025013754</a></p>
          <p>Phone: <a href="tel:9025013754" className={styles.contactLink}>+91 9025013754</a></p>
          <p>Email: <a href="mailto:johotechy@gmail.com" className={styles.contactLink}>johotechy@gmail.com</a></p>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} CodeOrbit. All rights reserved.</p>
      </div>
    </footer>
  );
}
