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

const fieldVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function CreateJob() {
  return (
    <motion.div
      className="page-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={fadeUp}>Create Job</motion.h1>

      <motion.div className="form-card" variants={fadeUp}>
        <motion.div
          variants={fieldVariants}
          whileHover={{ scale: 1.01 }}
          whileFocus={{ scale: 1.01 }}
        >
          <input placeholder="Job Title" />
        </motion.div>

        <motion.div
          variants={fieldVariants}
          whileHover={{ scale: 1.01 }}
        >
          <input placeholder="Company Name" />
        </motion.div>

        <motion.div
          variants={fieldVariants}
          whileHover={{ scale: 1.01 }}
        >
          <input placeholder="Location" />
        </motion.div>

        <motion.div
          variants={fieldVariants}
          whileHover={{ scale: 1.01 }}
        >
          <textarea rows={8} placeholder="Job Description" />
        </motion.div>

        <motion.button
          variants={fieldVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Publish Job
        </motion.button>
      </motion.div>
    </motion.div>
  );
}