interface Props {
  title: string;
  company: string;
  score?: string;
}

export default function JobCard({
  title,
  company,
  score,
}: Props) {
  return (
    <div className="job-card">

      <h3>{title}</h3>

      <p>{company}</p>

      {score && (
        <span>
          Match Score: {score}
        </span>
      )}

      <button>
        View Job
      </button>

    </div>
  );
}