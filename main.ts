import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, one laugh: a constant, deterministic entry.
// No trailing newline: the file is exactly this one line.
const LINE =
  "My fitness tracker congratulated me on 10,000 steps — all of them pacing while I waited for a reply.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate self-check: the entry must be one line, 1–200 characters, not blank.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} is outside the 1-200 character gate`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be exactly one non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
