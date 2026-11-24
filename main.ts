import { mkdirSync, writeFileSync } from "node:fs";

// The Long Roast: Lawmakers and the File They Cannot Convert.
// One satirical sentence (<=320 chars), revised for a sharper bite per the
// judge's criteria: the committee writing the law on artificial intelligence
// cannot convert a Word document to PDF — the turn lands on what it *has*
// converted instead (a hearing into a nap), punch on the last three words.
const LINE =
  "The committee writing the law on artificial intelligence spent three weeks trying to turn a Word document into a PDF, and the only thing it has successfully converted is a public hearing into a nap.";

const chars = [...LINE].length;
if (chars < 1 || chars > 320) {
  throw new Error(`entry must be 1-320 characters, got ${chars}`);
}
if (LINE.trim() !== LINE || LINE.endsWith("\n")) {
  throw new Error("entry must be a single line with no trailing newline");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
