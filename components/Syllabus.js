import styles from './Syllabus.module.css';

export default function Syllabus() {
  const modules = [
    { title: "Module 1: Web Development Fundamentals", topics: ["Introduction to Web Development", "How Internet Works", "Client vs Server Architecture", "HTTP / HTTPS Basics", "Web Browsers & Developer Tools", "Introduction to Git & GitHub"] },
    { title: "Module 2: HTML5", topics: ["Introduction to HTML", "HTML Structure", "Headings, Paragraphs", "Lists", "Links & Images", "Forms & Input Types", "Semantic HTML", "Personal Portfolio Page Project"], highlight: true },
    { title: "Module 3: CSS3", topics: ["Selectors", "Box Model", "Flexbox", "CSS Grid", "Responsive Design", "Media Queries", "Animations & Transitions", "Responsive Landing Page Project"], highlight: true },
    { title: "Module 4: JavaScript (Core)", topics: ["Variables", "Data Types", "Functions", "Arrays", "Objects", "DOM Manipulation", "Events", "To-Do List App Project"], highlight: true },
    { title: "Module 5: Advanced JavaScript", topics: ["ES6 Features", "Destructuring", "Spread / Rest", "Promises", "Async / Await", "Fetch API", "Weather App Project"] },
    { title: "Module 6: React JS", topics: ["Architecture", "Components", "JSX", "Props & State", "Hooks (useState, useEffect)", "React Router", "API Integration", "React Blog App Project"], highlight: true },
    { title: "Module 7: Node.js", topics: ["Node Architecture", "NPM", "Modules", "File System", "HTTP Module", "Simple Node API Project"] },
    { title: "Module 8: Express.js", topics: ["Routing", "Middleware", "REST API Development", "Authentication Basics", "Product Management API Project"], highlight: true },
    { title: "Module 9: MongoDB", topics: ["NoSQL", "CRUD Operations", "MongoDB Compass/Atlas", "Student Database System Project"] },
    { title: "Module 10: Mongoose", topics: ["Schema & Models", "Validation", "Relationships", "Populate"] },
    { title: "Module 11: Authentication & Security", topics: ["JWT Authentication", "Login & Registration", "Password Hashing (bcrypt)", "Role Based Access"] },
    { title: "Module 12: Full MERN Integration", topics: ["Connecting React + Node + MongoDB", "Environment Variables", "Deployment Preparation"] },
    { title: "Module 13: Deployment", topics: ["Frontend & Backend Deployment", "Environment Setup", "Production Build", "Domain Setup"] }
  ];

  const tools = ["Git & GitHub", "Postman", "VS Code", "MongoDB Compass", "Netlify / Vercel", "AWS / Render"];
  
  const projects = [
    { name: "E-Commerce Website", features: ["User Login", "Product Listing", "Cart", "Order System"], icon: "🛒" },
    { name: "Grocery Store System", features: ["Product Management", "Inventory", "Orders", "Dashboard"], icon: "🥦" },
    { name: "Personal Blog App", features: ["Post Creation", "Comments", "Authentication"], icon: "✍️" }
  ];

  return (
    <section id="syllabus" className={styles.syllabusSection}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.badge}>CURRICULUM v1.0</div>
          <h2 className={styles.title}>Comprehensive <span className={styles.accent}>Syllabus</span></h2>
          <p className={styles.subtitle}>A step-by-step roadmap to becoming a world-class Full Stack Developer.</p>
        </div>

        <div className={styles.moduleGrid}>
          {modules.map((mod, idx) => (
            <div key={idx} className={`${styles.moduleCard} ${mod.highlight ? styles.featured : ''}`}>
              <h3 className={styles.moduleTitle}>{mod.title}</h3>
              <ul className={styles.topicList}>
                {mod.topics.map((topic, tidx) => (
                  <li key={tidx} className={styles.topicItem}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.projectSection}>
          <h2 className={styles.sectionTitle}>Capstone <span className={styles.accent}>Projects</span></h2>
          <div className={styles.projectGrid}>
            {projects.map((proj, pidx) => (
              <div key={pidx} className={styles.projectCard}>
                <div className={styles.projectIcon}>{proj.icon}</div>
                <h3>{proj.name}</h3>
                <ul>
                  {proj.features.map((f, fidx) => <li key={fidx}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.toolsSection}>
          <h3>Industry Tools We Cover</h3>
          <div className={styles.toolCloud}>
            {tools.map((tool, index) => (
              <span key={index} className={styles.toolTag}>{tool}</span>
            ))}
          </div>
        </div>

        <div className={styles.courseStats}>
          <div className={styles.stat}>
            <span className={styles.val}>2 Months</span>
            <span className={styles.label}>Intensive Training</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.val}>40+ Hours</span>
            <span className={styles.label}>Live Classes</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.val}>3 Real-time</span>
            <span className={styles.label}>Portfolio Projects</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.val}>Verified</span>
            <span className={styles.label}>Certificate Provided</span>
          </div>
        </div>
      </div>
    </section>
  );
}
