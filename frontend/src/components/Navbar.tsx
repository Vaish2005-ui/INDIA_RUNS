import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>TalentIQ</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/candidate/dashboard">
          Candidate
        </Link>
        <Link to="/recruiter/dashboard">
          Recruiter
        </Link>
      </div>
    </nav>
  );
}