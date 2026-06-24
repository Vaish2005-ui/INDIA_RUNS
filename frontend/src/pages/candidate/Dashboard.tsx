import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

const staggerGrid = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
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

const tableRowVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35 },
  },
};

export default function CandidateDashboard() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="candidate-dashboard"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div className="candidate-header" variants={fadeUp}>
        <div>
          <h1>Candidate Dashboard</h1>
          <p>Welcome back, Vaishnavi 👋</p>
        </div>

        <motion.button
          className="upload-resume-btn"
          onClick={() => navigate("/candidate/upload")}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 20px rgba(34, 211, 238, 0.35)",
          }}
          whileTap={{ scale: 0.96 }}
        >
          Upload Resume
        </motion.button>
      </motion.div>

      {/* Stats */}
      <motion.div className="candidate-stats" variants={staggerGrid}>
        {[
          { value: "85%", label: "Profile Completion" },
          { value: "12", label: "Applications" },
          { value: "5", label: "Interviews" },
          { value: "18", label: "Saved Jobs" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            className="candidate-stat-card"
            variants={cardVariants}
            whileHover={{
              scale: 1.04,
              borderColor: "rgba(34, 211, 238, 0.35)",
              boxShadow: "0 0 24px rgba(34, 211, 238, 0.12)",
            }}
          >
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick Actions */}
      <motion.div className="dashboard-block" variants={fadeUp}>
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          {[
            { label: "Browse Jobs", path: "/candidate/jobs" },
            { label: "My Profile", path: "/candidate/profile" },
            { label: "Resume Upload", path: "/candidate/upload" },
          ].map((btn) => (
            <motion.button
              key={btn.label}
              onClick={() => navigate(btn.path)}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 18px rgba(34, 211, 238, 0.3)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              {btn.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Recommended Jobs */}
      <motion.div className="dashboard-block" variants={fadeUp}>
        <h2>Recommended Jobs</h2>
        <motion.div className="job-cards" variants={staggerGrid}>
          {[
            { title: "AI Engineer", company: "OpenAI Technologies", score: "96%" },
            { title: "Machine Learning Engineer", company: "Infosys", score: "92%" },
            { title: "Data Scientist", company: "TCS", score: "90%" },
          ].map((job) => (
            <motion.div
              key={job.title}
              className="job-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(34, 211, 238, 0.3)",
                boxShadow: "0 0 24px rgba(34, 211, 238, 0.1)",
              }}
            >
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <span>Match Score: {job.score}</span>
              <motion.button
                onClick={() => navigate("/candidate/jobs")}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 14px rgba(34, 211, 238, 0.3)",
                }}
                whileTap={{ scale: 0.96 }}
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Applications Table */}
      <motion.div className="dashboard-block" variants={fadeUp}>
        <h2>Recent Applications</h2>
        <table className="application-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <motion.tbody variants={staggerGrid}>
            {[
              { company: "Google", role: "AI Engineer", status: "Shortlisted", cls: "status-shortlisted" },
              { company: "Microsoft", role: "Data Scientist", status: "Under Review", cls: "status-review" },
              { company: "Amazon", role: "ML Engineer", status: "Rejected", cls: "status-rejected" },
            ].map((row) => (
              <motion.tr key={row.company} variants={tableRowVariants}>
                <td>{row.company}</td>
                <td>{row.role}</td>
                <td className={row.cls}>{row.status}</td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </motion.div>

      {/* Skills */}
      <motion.div className="dashboard-block" variants={fadeUp}>
        <h2>Top Skills</h2>
        <motion.div className="skills-container" variants={staggerGrid}>
          {["Python", "Machine Learning", "React", "SQL", "Data Science", "TensorFlow", "NLP"].map(
            (skill) => (
              <motion.span
                key={skill}
                variants={skillVariants}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(34, 211, 238, 0.2)",
                }}
              >
                {skill}
              </motion.span>
            )
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}