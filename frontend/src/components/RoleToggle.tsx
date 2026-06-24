interface Props {
  role: string;
  setRole: (role: string) => void;
}

export default function RoleToggle({
  role,
  setRole,
}: Props) {
  return (
    <div className="role-toggle">

      <button
        className={
          role === "candidate"
            ? "active-role"
            : ""
        }
        onClick={() =>
          setRole("candidate")
        }
      >
        Candidate
      </button>

      <button
        className={
          role === "recruiter"
            ? "active-role"
            : ""
        }
        onClick={() =>
          setRole("recruiter")
        }
      >
        Recruiter
      </button>

    </div>
  );
}