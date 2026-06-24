interface Props {
  value: string;
  label: string;
}

export default function StatsCard({
  value,
  label,
}: Props) {
  return (
    <div className="stats-card">
      <h2>{value}</h2>
      <p>{label}</p>
    </div>
  );
}