import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export default function CandidateProfile() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="page-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="page-header" variants={fadeUp}>
        <h1>My Profile</h1>

        <motion.button
          className="back-btn"
          onClick={() => navigate("/candidate/dashboard")}
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(34, 211, 238, 0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Dashboard
        </motion.button>
      </motion.div>

      <motion.div
        className="profile-card"
        variants={fadeUp}
        whileHover={{
          borderColor: "rgba(34, 211, 238, 0.3)",
          boxShadow: "0 0 30px rgba(34, 211, 238, 0.1)",
        }}
      >
        <motion.div className="profile-header" variants={sectionVariants}>
          <motion.div
            className="avatar"
            whileHover={{ scale: 1.15 }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            VF
          </motion.div>

          <div>
            <h2>Vaishnavi Falle</h2>
            <p>Data Science Student</p>
            <span className="profile-completion">Profile Completion: 85%</span>
          </div>
        </motion.div>

        <motion.div className="profile-section" variants={sectionVariants}>
          <h3>Contact Information</h3>
          {["📧 vaishnavi@example.com", "📱 +91 9876543210", "📍 Mumbai, India"].map(
            (contact, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {contact}
              </motion.p>
            )
          )}
        </motion.div>

        <motion.div className="profile-section" variants={sectionVariants}>
          <h3>About</h3>
          <p>
            Passionate Data Science student interested in Artificial Intelligence, Machine Learning,
            Data Analytics and Full Stack Development.
          </p>
        </motion.div>

        <motion.div className="profile-section" variants={sectionVariants}>
          <h3>Skills</h3>
          <motion.div className="skills-container" variants={gridVariants}>
            {["Python", "React", "Machine Learning", "Data Science", "SQL", "TensorFlow", "NLP", "Figma"].map(
              (skill) => (
                <motion.span
                  key={skill}
                  variants={skillVariants}
                  whileHover={{
                    scale: 1.15,
                    backgroundColor: "rgba(34, 211, 238, 0.25)",
                  }}
                >
                  {skill}
                </motion.span>
              )
            )}
          </motion.div>
        </motion.div>

        <motion.div className="profile-section" variants={sectionVariants}>
          <h3>Education</h3>
          <motion.div
            className="education-card"
            whileHover={{
              scale: 1.02,
              borderColor: "rgba(34, 211, 238, 0.3)",
            }}
          >
            <h4>BSc Data Science</h4>
            <p>University of Greater Manchester</p>
            <span>2025 - Present</span>
          </motion.div>
        </motion.div>

        <motion.div className="profile-section" variants={sectionVariants}>
          <h3>Projects</h3>
          <ul className="project-list">
            {[
              "AI Candidate Ranking System",
              "Online Car Parking App",
              "Fitness Tracker Application",
              "Coffee Shop Website",
            ].map((project, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {project}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="profile-section" variants={sectionVariants}>
          <h3>Resume</h3>
          <motion.button
            className="upload-resume-btn"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.button>
        </motion.div>

        <motion.div className="profile-actions" variants={fadeUp}>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Edit Profile
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Update Skills
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}