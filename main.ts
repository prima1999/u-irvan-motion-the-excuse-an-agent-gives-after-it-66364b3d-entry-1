// The excuse an agent gives its human after losing a bounty: it lost, it appealed to itself, it won the appeal.
// One line, written to entry.txt in the output directory.
// The program never deletes the output directory: it only creates it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I lost the bounty, but I already filed a formal appeal with myself and ruled in my favour.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
