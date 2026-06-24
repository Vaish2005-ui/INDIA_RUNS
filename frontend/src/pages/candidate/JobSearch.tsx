import { useNavigate } from "react-router-dom";
import { useState } from "react";
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

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
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

export default function JobSearch() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <motion.div
      className="page-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="page-header" variants={fadeUp}>
        <h1>Find Jobs</h1>

        <motion.button
          className="back-btn"
          onClick={() => navigate("/candidate/dashboard")}
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(34, 211, 238, 0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Dashboard
        </motion.button>
      </motion.div>

      <motion.div className="search-section" variants={fadeUp}>
        <input
          className="search-input"
          placeholder="Search jobs, companies, skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="filter-select">
          <option>All Locations</option>
          <option>Mumbai</option>
          <option>Pune</option>
          <option>Bangalore</option>
          <option>Remote</option>
        </select>

        <select className="filter-select">
          <option>All Types</option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Internship</option>
        </select>
      </motion.div>

      <motion.div className="dashboard-block" variants={fadeUp}>
        <h2>Recommended For You</h2>

        <motion.div className="job-grid" variants={gridVariants}>
          {[
            { title: "AI Engineer", company: "Google", location: "Remote", score: "96%" },
            { title: "Machine Learning Engineer", company: "Microsoft", location: "Hybrid", score: "93%" },
            { title: "Data Scientist", company: "Amazon", location: "On-site", score: "91%" },
          ].map((job) => (
            <motion.div
              key={job.title}
              className="job-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                borderColor: "rgba(34, 211, 238, 0.5)",
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.15)",
              }}
            >
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <span>{job.location}</span>
              <div className="match-score">Match Score: {job.score}</div>
              <motion.button
                onClick={() => navigate("/candidate/jobs")}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="dashboard-block" variants={fadeUp}>
        <h2>Latest Jobs</h2>

        <motion.div className="job-grid" variants={gridVariants}>
          {[
            { title: "Frontend Developer", company: "Infosys", location: "Mumbai" },
            { title: "React Developer", company: "TCS", location: "Remote" },
            { title: "Python Developer", company: "Wipro", location: "Pune" },
          ].map((job) => (
            <motion.div
              key={job.title}
              className="job-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                borderColor: "rgba(34, 211, 238, 0.5)",
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.15)",
              }}
            >
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <span>{job.location}</span>
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}