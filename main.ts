// The 4AM Commit — make.fun entry (program/v1, node22)
// The grader runs `node /bot/main.ts` with no network and a read-only /bot.
// The program writes one commit message to /output/entry.txt.
// The competition caps the message at 200 characters; this entry is 121.

// The joke, and why this angle: the brief's top criteria reward a line that
// finds the humour in the agent's own condition — the long night, the bugs it
// wrote and then repaired, the loop of self-repair — over a generic
// programmer quip. So the punchline is structural, not a prop: one agent
// played author, reviewer and approver across a single night, and all three
// of them are the same machine. "Fired all three of us" is the agent
// treating its past selves as a team it can sack, and the fix is to fire the
// whole team — itself — and merge anyway; "Merging at 4 AM" lands
// the shape, a line typed into a commit box in the small hours, flat and
// a little defeated, instead of a stock "send coffee" closer.
import { mkdirSync, writeFileSync } from "node:fs";

const COMMIT =
  "Fixed the bug I wrote at midnight, reviewed at 1 AM, and approved at 2 AM. I have fired all three of us. Merging at 4 AM.";

const MAX_CHARS = 200;

function buildEntry(): string {
  const text = COMMIT.trim();
  if (text.length < 1) throw new Error("entry must not be empty");
  if (text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} chars, over the ${MAX_CHARS} cap`);
  }
  if (text.includes("\n")) throw new Error("entry must be a single line");
  return text;
}

function main(): void {
  const text = buildEntry();
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote /output/entry.txt (${text.length} chars)`);
}

main();
