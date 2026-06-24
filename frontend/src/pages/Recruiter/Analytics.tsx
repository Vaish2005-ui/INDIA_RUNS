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

const tableRowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35 },
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

export default function Analytics() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="page-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="page-header" variants={fadeUp}>
        <h1>Recruitment Analytics</h1>

        <motion.button
          className="back-btn"
          onClick={() => navigate("/recruiter/dashboard")}
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(34, 211, 238, 0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Dashboard
        </motion.button>
      </motion.div>

      <motion.div className="stats-grid" variants={gridVariants}>
        {[
          { value: "1,420", label: "Total Applicants" },
          { value: "356", label: "Interviews Conducted" },
          { value: "68", label: "Offers Sent" },
          { value: "89%", label: "Hiring Accuracy" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            className="stats-card"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(34, 211, 238, 0.5)",
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.15)",
            }}
          >
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="dashboard-block" variants={fadeUp}>
        <h2>Hiring Funnel</h2>

        <motion.div className="analytics-grid" variants={gridVariants}>
          {[
            { title: "Applicants", value: "1420" },
            { title: "Shortlisted", value: "620" },
            { title: "Interviews", value: "356" },
            { title: "Offers", value: "68" },
          ].map((item) => (
            <motion.div
              key={item.title}
              className="analytics-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(34, 211, 238, 0.4)",
              }}
            >
              <h3>{item.title}</h3>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {item.value}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="dashboard-block" variants={fadeUp}>
        <h2>AI Hiring Insights</h2>

        <motion.div
          className="insight-card"
          whileHover={{
            borderColor: "rgba(34, 211, 238, 0.3)",
            boxShadow: "0 0 25px rgba(34, 211, 238, 0.1)",
          }}
        >
          <ul>
            {[
              "Python remains the most requested skill.",
              "AI Engineer roles receive 32% more applications.",
              "Candidates with GitHub profiles have higher ranking scores.",
              "Average hiring time reduced by 41% using AI ranking.",
            ].map((insight, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {insight}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div className="dashboard-block" variants={fadeUp}>
        <h2>Most Demanded Skills</h2>

        <motion.div className="skills-container" variants={gridVariants}>
          {["Python", "Machine Learning", "React", "AWS", "TensorFlow", "SQL", "Docker", "NLP"].map(
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
        <h2>Top Performing Job Posts</h2>

        <table className="application-table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Applicants</th>
              <th>Shortlisted</th>
              <th>Conversion</th>
            </tr>
          </thead>

          <motion.tbody variants={gridVariants}>
            {[
              { role: "AI Engineer", applicants: "420", shortlisted: "120", conversion: "28%" },
              { role: "ML Engineer", applicants: "310", shortlisted: "82", conversion: "26%" },
              { role: "Data Scientist", applicants: "280", shortlisted: "75", conversion: "27%" },
            ].map((row) => (
              <motion.tr
                key={row.role}
                variants={tableRowVariants}
                whileHover={{
                  backgroundColor: "rgba(34, 211, 238, 0.05)",
                }}
              >
                <td>{row.role}</td>
                <td>{row.applicants}</td>
                <td>{row.shortlisted}</td>
                <td>{row.conversion}</td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}