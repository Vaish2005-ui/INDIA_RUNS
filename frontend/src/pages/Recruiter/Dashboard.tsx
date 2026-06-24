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
    transition: { duration: 0.4 },
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

const numberVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function RecruiterDashboard() {
  return (
    <motion.div
      className="page-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={fadeUp}>Recruiter Dashboard</motion.h1>

      <motion.div className="stats-grid" variants={gridVariants}>
        {[
          { value: "24", label: "Active Jobs" },
          { value: "1,245", label: "Candidates Ranked" },
          { value: "48", label: "Interviews" },
          { value: "89%", label: "Hiring Success" },
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
            <motion.h2 variants={numberVariants}>{stat.value}</motion.h2>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="dashboard-block" variants={fadeUp}>
        <h2>Recent Job Posts</h2>

        <motion.div className="job-cards" variants={gridVariants}>
          {[
            { title: "AI Engineer", applicants: "34" },
            { title: "ML Engineer", applicants: "28" },
            { title: "Data Scientist", applicants: "52" },
          ].map((job) => (
            <motion.div
              key={job.title}
              className="job-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.04,
                borderColor: "rgba(34, 211, 238, 0.4)",
                boxShadow: "0 0 25px rgba(34, 211, 238, 0.12)",
              }}
            >
              <h3>{job.title}</h3>
              <p>{job.applicants} Applicants</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="dashboard-block" variants={fadeUp}>
        <h2>Top Candidates</h2>

        <table className="application-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Score</th>
            </tr>
          </thead>

          <motion.tbody variants={gridVariants}>
            {[
              { name: "Rahul Sharma", role: "AI Engineer", score: "97%" },
              { name: "Priya Patel", role: "ML Engineer", score: "95%" },
              { name: "Arjun Mehta", role: "Data Scientist", score: "93%" },
            ].map((row) => (
              <motion.tr
                key={row.name}
                variants={tableRowVariants}
                whileHover={{
                  backgroundColor: "rgba(34, 211, 238, 0.05)",
                }}
              >
                <td>{row.name}</td>
                <td>{row.role}</td>
                <td>{row.score}</td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}