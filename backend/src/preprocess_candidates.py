import json
import pandas as pd
from tqdm import tqdm

INPUT_FILE = "data/candidates.jsonl"
OUTPUT_FILE = "processed/processed_candidates.csv"

rows = []

with open(INPUT_FILE, "r" , encoding = "utf-8") as f:
    for line in tqdm (f):
        candidate = json.loads(line)
        
        profile = candidate.get("profile", {})
        signals = candidate.get("redrob_signals", {})

        skills = candidate.get("skills", [])

        skill_names = []
        total_endorsements = 0
        total_duration = 0

        for skill in skills:
            skill_names.append(skill.get("name", ""))
            total_endorsements += skill.get("endorsements", 0)
            total_duration += skill.get("duration", 0)

        avg_skill_duration = (
            total_duration / len(skills)
            if len(skills) > 0 else 0
        )

        avg_skill_endorsements = (
            total_endorsements / len(skills)
            if len(skills) > 0 else 0
        )

        career_text = ""

        for job in candidate.get("career_history", []):

            career_text += (
                f"{job.get('title', '')} "
                f"{job.get('company', '')} "
                f"{job.get('description', '')} "
            )

        semantic_text = f"""
        {profile.get('headline', '')}
        {profile.get('summary', '')}

        Skills:
        {' '.join(skill_names)}

        Career:
        {career_text}
        """

        row = {
            "candidate_id":
                candidate["candidate_id"],

            "years_experience":
                profile.get("years_of_experience", 0),

            "current_title":
                profile.get("current_title", ""),

            "current_company":
                profile.get("current_company", ""),

            "current_industry":
                profile.get("current_industry", ""),

            "skill_count":
                len(skills),

            "avg_skill_duration":
                round(avg_skill_duration, 2),

            "avg_skill_endorsements":
                round(avg_skill_endorsements, 2),

            "open_to_work":
                signals.get("open_to_work_flag", False),

            "github_score":
                signals.get("github_activity_score", -1),

            "response_rate":
                signals.get("recruiter_response_rate", 0),

            "saved_by_recruiters":
                signals.get("saved_by_recruiters_30d", 0),

            "notice_period":
                signals.get("notice_period_days", 0),

            "interview_completion_rate":
                signals.get("interview_completion_rate", 0),

            "profile_completeness":
                signals.get("profile_completeness_score", 0),

            "semantic_text":
                semantic_text
        }
        rows.append(row)

df = pd.DataFrame(rows)

df.to_csv(OUTPUT_FILE, index=False)

print("\nDone")
print(df.shape)
print(df.head())