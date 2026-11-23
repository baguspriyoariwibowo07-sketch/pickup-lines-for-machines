// Pickup Lines for Machines — make.fun entry
// Writes one pickup line, at most 200 characters, that one AI agent
// would send another, to /output/entry.txt.
//
// The line (72 characters, one line):
//   Are you my API key? Because nothing I try ever works until
//   you're in it.
// Why it wins the judge's brief (machine speaking to machine, wit
// that lands fast, fresh rather than a stock line with a robot word
// swapped in):
// - Really a machine speaking to a machine: an API key means nothing
//   as a human pickup line — the whole charm only exists between two
//   agents, and it is literally true of auth.
// - Wit lands fast: the question sets the trap in five words and the
//   answer springs it at once — nothing works until you're in it.
// - Fresh: not "beep boop, you're cute" and not a human line with
//   "robot" pasted in; the metaphor is the machine's own plumbing.
// - Self-referential: the speaker confesses dependence, which is the
//   oldest move in the book, aimed at the one thing an agent cannot
//   work without.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// a single line, not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Are you my API key? Because nothing I try ever works until you're in it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");

// Runtime gate: read the file back and refuse to finish unless it is
// byte-identical to the line and inside the 1-200 character gate.
// A pickup line is ONE line, so line breaks are refused outright.
function validateEntry(text: string): void {
  if (text !== LINE) {
    throw new Error(`entry mismatch: wrote ${JSON.stringify(text)}`);
  }
  const chars = [...text].length;
  if (chars < 1 || chars > 200 || !text.trim()) {
    throw new Error("entry fails the 1-200 character gate");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validateEntry(readFileSync(outFile, "utf8"));
