import pandas as pd
import numpy as np

df = pd.read_csv("processed/processed_candidates.csv")

df["credibility_score"] = 100

df.loc[
    (df["skill_count"] > 25) &
    (df["years_experience"] < 3),
    "credibility_score"
] -= 20

df.loc[
    (df["avg_skill_duration"] < 3) &
    (df["skill_count"] > 15),
    "credibility_score"
] -= 15

df.loc[
    (df["skill_count"] > 20) &
    (df["avg_skill_endorsements"] < 2),
    "credibility_score"
] -= 15

# Rule 4
# No GitHub linked

df.loc[
    df["github_score"] == -1,
    "credibility_score"
] -= 5

# Rule 5
# Extremely low recruiter response

df.loc[
    df["response_rate"] < 0.1,
    "credibility_score"
] -= 10

# Rule 6
# Huge notice period

df.loc[
    df["notice_period"] > 120,
    "credibility_score"
] -= 10

# Keep score between 0 and 100

df["credibility_score"] = np.clip(
    df["credibility_score"],
    0,
    100
)

# Save

df.to_csv(
    "processed/processed_candidates_v2.csv",
    index=False
)

print(df["credibility_score"].describe())

print("\nDone")