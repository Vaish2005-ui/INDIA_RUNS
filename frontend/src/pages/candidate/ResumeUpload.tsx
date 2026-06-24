import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
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

const analysisItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export default function ResumeUpload() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="page-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="page-header" variants={fadeUp}>
        <h1>Resume Upload</h1>

        <motion.button
          className="back-btn"
          onClick={() => navigate("/candidate/dashboard")}
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(34, 211, 238, 0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Dashboard
        </motion.button>
      </motion.div>

      <motion.div className="upload-card" variants={fadeUp}>
        <motion.div
          className="upload-box"
          whileHover={{
            borderColor: "rgba(34, 211, 238, 0.5)",
            boxShadow: "0 0 30px rgba(34, 211, 238, 0.15)",
            scale: 1.02,
          }}
        >
          <motion.div
            className="upload-icon"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            📄
          </motion.div>

          <h2>Upload Your Resume</h2>
          <p>Upload PDF or DOCX format</p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Choose File
          </motion.button>

          <small>Maximum Size: 5 MB</small>
        </motion.div>

        <motion.div
          className="resume-analysis"
          whileHover={{
            borderColor: "rgba(34, 211, 238, 0.3)",
            boxShadow: "0 0 25px rgba(34, 211, 238, 0.1)",
            scale: 1.02,
          }}
        >
          <h3>AI Resume Analysis</h3>

          <motion.div variants={gridVariants}>
            {[
              { label: "Profile Score", value: "88%" },
              { label: "Skills Found", value: "14" },
              { label: "Experience", value: "2 Years" },
              { label: "Recommended Role", value: "Data Scientist" },
              { label: "ATS Score", value: "91%" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="analysis-item"
                variants={analysisItemVariants}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="dashboard-block" variants={fadeUp}>
        <h2>Extracted Skills</h2>

        <motion.div className="skills-container" variants={gridVariants}>
          {["Python", "Machine Learning", "React", "SQL", "TensorFlow", "Data Analysis", "NLP", "Git"].map(
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

      <motion.div className="dashboard-block" variants={fadeUp}>
        <h2>AI Suggestions</h2>

        <motion.div
          className="suggestion-card"
          whileHover={{
            borderColor: "rgba(34, 211, 238, 0.3)",
            boxShadow: "0 0 25px rgba(34, 211, 238, 0.1)",
          }}
        >
          <ul>
            {[
              "Add more project descriptions",
              "Include GitHub profile link",
              "Highlight technical achievements",
              "Add certifications section",
            ].map((suggestion, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {suggestion}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div className="dashboard-block" variants={fadeUp}>
        <h2>Recommended Roles</h2>

        <motion.div className="job-grid" variants={gridVariants}>
          {[
            { title: "Data Scientist", score: "96%" },
            { title: "ML Engineer", score: "93%" },
            { title: "AI Engineer", score: "90%" },
          ].map((role) => (
            <motion.div
              key={role.title}
              className="job-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                borderColor: "rgba(34, 211, 238, 0.5)",
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.15)",
              }}
            >
              <h3>{role.title}</h3>
              <p>Match Score: {role.score}</p>

              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Jobs
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}