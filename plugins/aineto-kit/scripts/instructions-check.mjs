// SessionStart: avisa quando as instruções globais instaladas divergem das do plugin.
import { basename } from 'node:path';
import { isUpToDate, plannedCopies, staleRules } from './instructions.mjs';

const pending = [...plannedCopies().filter((copy) => !isUpToDate(copy)).map((copy) => copy.to), ...staleRules()];
if (pending.length > 0) {
  const names = pending.map((path) => basename(path)).join(', ');
  process.stdout.write(`aineto-kit: instruções globais ausentes ou desatualizadas (${names}). Sugira ao usuário rodar /aineto-kit:sync-instructions.\n`);
}
