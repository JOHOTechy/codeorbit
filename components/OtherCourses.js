import styles from './OtherCourses.module.css';

export default function OtherCourses() {
  const courses = [
    { name: "Java", icon: "☕", color: "#ED8B00", desc: "Master Object-Oriented Programming with Java. From Core to Advanced concepts including Spring & Hibernate." },
    { name: "Python", icon: "🐍", color: "#3776AB", desc: "Unlock the power of Python for Web Development, Data Science, and Automation. Learn Django, Flask, and more." },
    { name: "C / C++", icon: "⚙️", color: "#00599C", desc: "Build a strong foundation in system-level programming. Master memory management, data structures, and algorithms." },
    { name: "Software Testing", icon: "🔍", color: "#10b981", desc: "Master Manual and Automation Testing. Learn Selenium, JUnit, and modern testing methodologies for quality assurance." }
  ];

  return (
    <section className={styles.section} id="other-courses">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.badge}>DIVERSE PROGRAMS</div>
          <h2 className={styles.title}>More Courses at <span className={styles.accent}>CodeOrbit</span></h2>
          <p className={styles.subtitle}>Beyond MERN, we offer specialized training in the world's most in-demand technologies.</p>
        </div>

        <div className={styles.grid}>
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={styles.card}
              style={{ '--course-color': course.color }}
            >
              <div className={styles.iconBox}>{course.icon}</div>
              <h3 className={styles.courseName}>{course.name}</h3>
              <p className={styles.courseDesc}>{course.desc}</p>
              <div className={styles.glow}></div>
            </div>
          ))}
        </div>

        <div className={styles.contactBanner}>
          <div className={styles.bannerInfo}>
            <h4>Interested in these courses?</h4>
            <p>Call us to get the detailed syllabus for Java, Python, or Testing programs.</p>
          </div>
          <a href="tel:9025013754" className={styles.bannerBtn}>Inquire Now</a>
        </div>
      </div>
    </section>
  );
}
