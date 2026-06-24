import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidateDashboard from "./pages/candidate/Dashboard";
import CandidateProfile from "./pages/candidate/Profile";
import ResumeUpload from "./pages/candidate/ResumeUpload";
import JobSearch from "./pages/candidate/JobSearch";
import RecruiterDashboard from "./pages/Recruiter/Dashboard";
import CandidateRanking from "./pages/Recruiter/CandidateRanking";
import CreateJob from "./pages/Recruiter/CreateJob";
import CompanyProfile from "./pages/Recruiter/CompanyProfile";
import Analytics from "./pages/Recruiter/Analytics";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Candidate Routes */}
        <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
        <Route path="/candidate/jobs" element={<JobSearch />} />
        <Route path="/candidate/profile" element={<CandidateProfile />} />
        <Route path="/candidate/upload" element={<ResumeUpload />} />

        {/* Recruiter Routes */}
        <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
        <Route path="/recruiter/ranking" element={<CandidateRanking />} />
        <Route path="/recruiter/jobs" element={<CreateJob />} />
        <Route path="/recruiter/company" element={<CompanyProfile />} />
        <Route path="/recruiter/analytics" element={<Analytics />} />

        {/* Auth Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;