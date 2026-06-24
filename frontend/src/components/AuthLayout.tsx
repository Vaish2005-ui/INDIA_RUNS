import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({
  children,
  title,
  subtitle,
}: Props) {
  return (
    <div className="auth-page">
      <div className="left-panel">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>

        <div className="orb-container">
          <div className="orb"></div>
        </div>

        <div className="branding">
          <h1>
            Talent<span>IQ</span>
          </h1>

          <p>
            Beyond Keywords.
            <br />
            Beyond Resumes.
          </p>

          <small>Built by PixelSutra</small>
        </div>
      </div>

      <div className="right-panel">
        <div className="auth-card">
          <h2>{title}</h2>
          <p>{subtitle}</p>

          {children}
        </div>
      </div>
    </div>
  );
}