import styles from "./page.module.css";
import CourseDetails from '@/components/CourseDetails';
import OtherCourses from '@/components/OtherCourses';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.category}>Student-First Approach</div>
          <h1 className={styles.heroTitle}>
            From Concept to <span className={styles.highlight}>Code</span>
          </h1>
          <p className={styles.heroText}>
            Join the elite circle of full-stack developers. We provide tailored training sessions focused on real-world projects, industry standards, and hands-on experience.
          </p>
          <div className={styles.heroActions}>
            <Link href="/syllabus" className={styles.primaryBtn}>Explore Syllabus</Link>
            <a href="#about" className={styles.secondaryBtn}>How we work</a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.glassContainer}>
            <div className={styles.stackIcons}>
              <span className={styles.stackItem}>M</span>
              <span className={styles.stackItem}>E</span>
              <span className={styles.stackItem}>R</span>
              <span className={styles.stackItem}>N</span>
            </div>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Hands-On</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Support</span>
              </div>
            </div>
          </div>
          <div className={styles.glowBg}></div>
        </div>
      </header>

      <CourseDetails />
      
      <OtherCourses />

      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutInfo}>
            <h2 className={styles.aboutTitle}>Why Choose CodeOrbit?</h2>
            <ul className={styles.benefitList}>
              <li className={styles.benefitItem}>
                <strong>Industry Standard Workflows:</strong> Learn how top tech companies build, deploy, and scale applications.
              </li>
              <li className={styles.benefitItem}>
                <strong>Personalized Mentorship:</strong> One-on-one sessions to help you through roadblocks and debugging.
              </li>
              <li className={styles.benefitItem}>
                <strong>Portfolio Ready:</strong> Build and launch real web applications to showcase your skills.
              </li>
            </ul>
          </div>
          <div className={styles.aboutExtra}>
            <div className={styles.trustCard}>
              <h3>Enrollment Open</h3>
              <p>Limited seats available for the next cohort starting next month.</p>
              <a href="tel:9025013754" className={styles.callBtn}>Call +91 9025013754</a>
              <p style={{ marginTop: '1.5rem', opacity: 0.7, fontSize: '0.9rem' }}>Email: johotechy@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
