import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const heroLeftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const heroRightVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 },
  },
};

const buttonsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

export default function Home() {
  return (
    <motion.div
      className="home-page"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <section className="hero">
        <motion.div className="hero-left" variants={heroLeftVariants}>
          <motion.span className="badge" variants={badgeVariants}>
            AI-Powered Recruitment Platform
          </motion.span>

          <motion.h1 variants={titleVariants}>
            Find the
            <span> Right Talent </span>
            Faster with AI
          </motion.h1>

          <motion.p variants={descriptionVariants}>
            TalentIQ uses semantic search,
            vector embeddings and AI ranking
            to identify the best candidates
            beyond simple keyword matching.
          </motion.p>

          <motion.div className="hero-buttons" variants={buttonsVariants}>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34, 211, 238, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/register" className="primary-btn">
                Get Started
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, borderColor: "rgba(34, 211, 238, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/login" className="secondary-btn">
                Sign In
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="hero-right" variants={heroRightVariants}>
          <motion.div
            className="hero-card"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(34, 211, 238, 0.2)",
            }}
          >
            <h3>Top Candidate Match</h3>

            <motion.div
              className="score"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              97%
            </motion.div>

            <p>AI Match Score</p>

            <motion.div className="skills" variants={gridVariants}>
              {["Python", "ML", "React", "AWS"].map((skill) => (
                <motion.span key={skill} variants={skillVariants}>
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="features">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why TalentIQ?
        </motion.h2>

        <motion.div
          className="feature-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {["Semantic Search", "AI Ranking", "Recruiter Dashboard"].map(
            (feature, i) => (
              <motion.div key={feature} className="feature-card" variants={cardVariants}>
                <h3>{feature}</h3>
                <p>
                  {i === 0 && "Understand candidate profiles beyond keywords."}
                  {i === 1 && "Rank candidates using embeddings and LLMs."}
                  {i === 2 && "Manage jobs and evaluate candidates efficiently."}
                </p>
              </motion.div>
            )
          )}
        </motion.div>
      </section>

      <section className="workflow">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>

        <motion.div
          className="steps"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { num: "01", title: "Create Job" },
            { num: "02", title: "AI Analysis" },
            { num: "03", title: "Candidate Ranking" },
            { num: "04", title: "Hire Faster" },
          ].map((step) => (
            <motion.div
              key={step.num}
              className="step"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span>{step.num}</span>
              <h3>{step.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}