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

export default function CompanyProfile() {
  return (
    <motion.div
      className="page-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={fadeUp}>Company Profile</motion.h1>

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
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            TI
          </motion.div>

          <div>
            <h2>TalentIQ Technologies</h2>
            <p>AI Recruitment Platform</p>
          </div>
        </motion.div>

        <motion.div className="profile-section" variants={sectionVariants}>
          <h3>Company Overview</h3>
          <p>
            TalentIQ helps recruiters discover the best candidates using
            AI-powered ranking and semantic search.
          </p>
        </motion.div>

        <motion.div className="profile-section" variants={sectionVariants}>
          <h3>Company Details</h3>
          <p>Industry: Artificial Intelligence</p>
          <p>Employees: 50-100</p>
          <p>Location: Mumbai</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}