import ContactForm from '@/components/ContactForm';
import styles from './contactPage.module.css';

export const metadata = {
  title: "Enroll Now | CodeOrbit MERN Training",
  description: "Ready to start your coding journey? Get in touch with CodeOrbit for MERN, Java, Python, and testing course enrollments.",
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.badge}>GET STARTED</div>
        <h1 className={styles.title}>Ignite your <span className={styles.accent}>Career</span></h1>
        <p className={styles.subtitle}>
          Fill out the form below or reach us directly via WhatsApp for instant admission support.
        </p>
      </header>
      
      <section className={styles.formSection}>
        <ContactForm />
      </section>

      <section className={styles.directContact}>
        <div className={styles.contactItem}>
          <span className={styles.icon}>📱</span>
          <strong>WhatsApp</strong>
          <a href="https://wa.me/919025013754">+91 9025013754</a>
        </div>
        <div className={styles.contactItem}>
          <span className={styles.icon}>✉️</span>
          <strong>Email</strong>
          <a href="mailto:johotechy@gmail.com">johotechy@gmail.com</a>
        </div>
      </section>
    </div>
  );
}
