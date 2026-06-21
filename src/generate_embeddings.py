import pandas as pd
import numpy as np
from sentence_transformers import SentenceTransformer

print("Loading processed data...")

df = pd.read_csv(
    "processed/processed_candidates_v2.csv"
)

texts = df["semantic_text"].fillna("").tolist()

print("Loading model...")

model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

print("Generating embeddings...")

embeddings = model.encode(
    texts,
    batch_size=128,
    show_progress_bar=True,
    convert_to_numpy=True
)

np.save(
    "embeddings/candidate_embeddings.npy",
    embeddings
)

np.save(
    "embeddings/candidate_ids.npy",
    df["candidate_id"].values
)

print("\nDone")
print("Shape:", embeddings.shape)