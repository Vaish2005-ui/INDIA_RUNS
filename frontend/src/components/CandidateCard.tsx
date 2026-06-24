interface Props {
  name: string;
  score: string;
  role: string;
}

export default function CandidateCard({
  name,
  score,
  role,
}: Props) {
  return (
    <div className="candidate-card">

      <div className="candidate-top">

        <h3>{name}</h3>

        <span className="score-badge">
          {score}
        </span>

      </div>

      <p>{role}</p>

      <button>
        View Profile
      </button>

    </div>
  );
}