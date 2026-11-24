// One Sentence for a Traveler from 1800
// Writes a single sentence (at most 200 characters) explaining the modern
// internet to someone arriving from the year 1800, using only words and
// pictures a person of that time could know: a road, a post office, a library.
// Node stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "It is a road of light joining every post office and library on earth, so a letter you send reaches any town in a breath, and a man may read the books of every land from his own desk.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE + "\n", "utf8");
