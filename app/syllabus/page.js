import Syllabus from '@/components/Syllabus';
import styles from './syllabusPage.module.css';

export const metadata = {
  title: "MERN Stack Course Syllabus | CodeOrbit",
  description: "Comprehensive 13-module MERN Stack training syllabus. From Web Fundamentals to Full-Stack Deployment.",
};

export default function SyllabusPage() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.badge}>DEEP DIVE</div>
        <h1 className={styles.title}>Full Stack <span className={styles.accent}>Curriculum</span></h1>
        <p className={styles.subtitle}>
          A comprehensive breakdown of our 2-month intensive training program. Designed for students to master every aspect of modern web development.
        </p>
      </header>
      
      <div className={styles.content}>
        <Syllabus />
      </div>

      <section className={styles.cta}>
        <h3>Ready to begin your journey?</h3>
        <p>Enroll now and get 24/7 mentorship support.</p>
        <div className={styles.actions}>
          <a href="tel:9025013754" className={styles.callBtn}>Call +91 9025013754</a>
          <a href="mailto:johotechy@gmail.com" className={styles.emailBtn}>Email Us</a>
        </div>
      </section>
    </div>
  );
}
