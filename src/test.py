import pandas as pd

df = pd.read_csv("processed/processed_candidates.csv")

print(df.columns.tolist())