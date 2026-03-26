import Image from 'next/image';
import styles from './CourseDetails.module.css';

export default function CourseDetails() {
  const stacks = [
    {
      name: "MongoDB",
      icon: "🍃",
      color: "#00ED64",
      description: "Dive into NoSQL databases. Master document-based data structures, aggregation pipelines, and high-performance indexing."
    },
    {
      name: "Express.js",
      icon: "⚡",
      color: "#F8F9FA",
      description: "Build robust, scalable APIs. Learn middleware architecture, routing, error handling, and security best practices."
    },
    {
      name: "React.js",
      icon: "⚛️",
      color: "#61DBFB",
      description: "Craft immersive user experiences. Master state management, server components, hooks, and performance optimization."
    },
    {
      name: "Node.js",
      icon: "🚀",
      color: "#339933",
      description: "Scale your backend with JavaScript. Understand the event loop, streams, clusters, and asynchronous programming."
    }
  ];

  return (
    <section id="courses" className={styles.courseSection}>
      <div className={styles.inner}>
        <div className={styles.badge}>PROFESSIONAL TRAINING</div>
        <h2 className={styles.title}>Master the <span className={styles.accent}>MERN Stack</span></h2>
        <p className={styles.subtitle}>
          Accelerate your dev career with our hands-on curriculum. From database design to front-end excellence.
        </p>

        <div className={styles.grid}>
          {stacks.map((stack, index) => (
            <div 
              key={index} 
              className={styles.card}
              style={{ '--stack-color': stack.color }}
            >
              <div className={styles.cardIcon}>{stack.icon}</div>
              <h3 className={styles.cardTitle}>{stack.name}</h3>
              <p className={styles.cardText}>{stack.description}</p>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <div className={styles.ctaContent}>
            <h3>Ready to start?</h3>
            <p>Enroll today and transform your future.</p>
          </div>
          <div className={styles.ctaActions}>
            <a href="#contact" className={styles.primaryBtn}>Apply Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
