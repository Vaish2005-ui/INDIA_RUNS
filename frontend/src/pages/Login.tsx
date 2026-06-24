import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Temporary frontend-only redirect
    navigate("/candidate/dashboard");
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue"
    >
      <motion.form
        className="auth-form"
        onSubmit={handleLogin}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="field-group"
          variants={fieldVariants}
        >
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            required
          />
        </motion.div>

        <motion.div
          className="field-group"
          variants={fieldVariants}
        >
          <label>Password</label>

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              required
            />

            <motion.button
              type="button"
              className="show-btn"
              onClick={() => setShowPassword(!showPassword)}
              whileTap={{ scale: 0.92 }}
            >
              {showPassword ? "Hide" : "Show"}
            </motion.button>
          </div>
        </motion.div>

        <motion.button
          type="submit"
          variants={fieldVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 20px rgba(34, 211, 238, 0.35)",
          }}
          whileTap={{ scale: 0.97 }}
        >
          Sign In
        </motion.button>

        <motion.p
          className="bottom-link"
          variants={fieldVariants}
        >
          Don't have an account?{" "}
          <Link to="/register">Create Account</Link>
        </motion.p>
      </motion.form>
    </AuthLayout>
  );
}