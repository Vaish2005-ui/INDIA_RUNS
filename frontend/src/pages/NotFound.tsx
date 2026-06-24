import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <motion.div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#050816",
        color: "white",
        gap: "20px",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: "5rem" }}
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ fontSize: "1.5rem" }}
      >
        Page Not Found
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          to="/"
          style={{
            padding: "12px 24px",
            background: "linear-gradient(to right, #86efac, #22d3ee)",
            color: "black",
            textDecoration: "none",
            borderRadius: "12px",
            fontWeight: "600",
            display: "inline-block",
          }}
        >
          Go Home
        </Link>
      </motion.div>
    </motion.div>
  );
}