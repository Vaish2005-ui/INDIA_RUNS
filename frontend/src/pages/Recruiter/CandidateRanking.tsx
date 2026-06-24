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

export default function CandidateRanking() {
  return (
    <motion.div
      className="ranking-page"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="ranking-header" variants={fadeUp}>
        <h1>AI Candidate Ranking</h1>
        <p>Paste a Job Description and let AI find the best candidates.</p>
      </motion.div>

      <motion.div className="jd-card" variants={fadeUp}>
        <label>Job Description</label>
        <textarea placeholder="Paste Job Description here..." rows={8} />
        <motion.button
          className="rank-btn"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Rank Candidates
        </motion.button>
      </motion.div>

      <motion.div className="results-section" variants={fadeUp}>
        <h2>Top Ranked Candidates</h2>

        <motion.div className="candidate-grid" variants={gridVariants}>
          {[
            {
              name: "Rahul Sharma",
              role: "Senior AI Engineer",
              score: "97%",
              skills: ["Python", "LLM", "TensorFlow", "AWS"],
              exp: "6.5 Years",
              loc: "Mumbai",
            },
            {
              name: "Priya Patel",
              role: "ML Engineer",
              score: "95%",
              skills: ["PyTorch", "Python", "MLOps", "Docker"],
              exp: "5 Years",
              loc: "Pune",
            },
            {
              name: "Arjun Mehta",
              role: "Data Scientist",
              score: "93%",
              skills: ["Python", "NLP", "SQL", "GCP"],
              exp: "4 Years",
              loc: "Bangalore",
            },
          ].map((candidate) => (
            <motion.div
              key={candidate.name}
              className="candidate-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                borderColor: "rgba(34, 211, 238, 0.4)",
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.15)",
              }}
            >
              <div className="candidate-top">
                <h3>{candidate.name}</h3>
                <motion.span
                  className="score-badge"
                  whileHover={{ scale: 1.1 }}
                >
                  {candidate.score}
                </motion.span>
              </div>

              <p className="candidate-role">{candidate.role}</p>

              <motion.div className="skills-row" variants={gridVariants}>
                {candidate.skills.map((skill) => (
                  <motion.span key={skill} variants={skillVariants}>
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              <div className="candidate-meta">
                <p>Experience: {candidate.exp}</p>
                <p>Location: {candidate.loc}</p>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Profile
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}