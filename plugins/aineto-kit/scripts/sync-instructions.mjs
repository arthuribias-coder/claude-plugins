// Instala/atualiza as instruções globais do plugin em ~/.claude, com backup e suporte a --dry-run.
import { copyFileSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { claudeDir } from './lib.mjs';
import { isUpToDate, plannedCopies, staleRules } from './instructions.mjs';

const dryRun = process.argv.includes('--dry-run');
const backupDir = join(claudeDir(), 'backups', `aineto-kit-${new Date().toISOString().replace(/\D/g, '').slice(0, 14)}`);
let backedUp = false;

function backup(path) {
  if (!existsSync(path)) return;
  const target = join(backupDir, relative(claudeDir(), path));
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(path, target);
  backedUp = true;
}

for (const copy of plannedCopies()) {
  if (isUpToDate(copy)) { console.log(`igual     ${copy.to}`); continue; }
  if (dryRun) { console.log(`alteraria ${copy.to}`); continue; }
  backup(copy.to);
  mkdirSync(dirname(copy.to), { recursive: true });
  copyFileSync(copy.from, copy.to);
  console.log(`copiado   ${copy.to}`);
}

for (const path of staleRules()) {
  if (dryRun) { console.log(`removeria ${path}`); continue; }
  backup(path);
  rmSync(path);
  console.log(`removido  ${path}`);
}

if (backedUp) console.log(`backup em ${backupDir}`);
