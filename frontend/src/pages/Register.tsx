import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export default function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState("candidate");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === "candidate") {
      navigate("/candidate/dashboard");
    } else {
      navigate("/recruiter/dashboard");
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start your TalentIQ journey"
    >
      <motion.form
        className="auth-form"
        onSubmit={handleRegister}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Full Name */}
        <motion.div className="field-group" variants={fieldVariants}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            required
          />
        </motion.div>

        {/* Email */}
        <motion.div className="field-group" variants={fieldVariants}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />
        </motion.div>

        {/* Role Toggle */}
        <motion.div className="field-group" variants={fieldVariants}>
          <label>Select Role</label>
          <div className="role-toggle">
            <motion.button
              type="button"
              className={role === "candidate" ? "active-role" : ""}
              onClick={() => setRole("candidate")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              animate={
                role === "candidate"
                  ? { scale: [1, 1.06, 1] }
                  : { scale: 1 }
              }
              transition={{ duration: 0.3 }}
            >
              Candidate
            </motion.button>

            <motion.button
              type="button"
              className={role === "recruiter" ? "active-role" : ""}
              onClick={() => setRole("recruiter")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              animate={
                role === "recruiter"
                  ? { scale: [1, 1.06, 1] }
                  : { scale: 1 }
              }
              transition={{ duration: 0.3 }}
            >
              Recruiter
            </motion.button>
          </div>
        </motion.div>

        {/* Password */}
        <motion.div className="field-group" variants={fieldVariants}>
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

        {/* Confirm Password */}
        <motion.div className="field-group" variants={fieldVariants}>
          <label>Confirm Password</label>
          <div className="password-wrapper">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              required
            />
            <motion.button
              type="button"
              className="show-btn"
              onClick={() => setShowConfirm(!showConfirm)}
              whileTap={{ scale: 0.92 }}
            >
              {showConfirm ? "Hide" : "Show"}
            </motion.button>
          </div>
        </motion.div>

        {/* Submit */}
        <motion.button
          type="submit"
          variants={fieldVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 20px rgba(34, 211, 238, 0.35)",
          }}
          whileTap={{ scale: 0.97 }}
        >
          Create Account
        </motion.button>

        <motion.p className="bottom-link" variants={fieldVariants}>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </motion.p>
      </motion.form>
    </AuthLayout>
  );
}