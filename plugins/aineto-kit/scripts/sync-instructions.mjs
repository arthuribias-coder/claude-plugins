// Instala/atualiza as instruções globais do plugin em ~/.claude, com backup e suporte a --dry-run.
import { copyFileSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, isAbsolute, join, relative } from 'node:path';
import { claudeDir } from './lib.mjs';
import { isBlockUpToDate, isUpToDate, plannedBlocks, plannedCopies, readBlockTarget, staleRules, withBlock } from './instructions.mjs';

const dryRun = process.argv.includes('--dry-run');
const backupDir = join(claudeDir(), 'backups', `aineto-kit-${new Date().toISOString().replace(/\D/g, '').slice(0, 14)}`);
let backedUp = false;

// Arquivos de outros CLIs (fora de ~/.claude) vão para backups/<stamp>/home/...
function backupName(path) {
  const insideClaude = relative(claudeDir(), path);
  if (!insideClaude.startsWith('..') && !isAbsolute(insideClaude)) return insideClaude;
  return join('home', relative(homedir(), path));
}

function backup(path) {
  if (!existsSync(path)) return;
  const target = join(backupDir, backupName(path));
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

for (const target of plannedBlocks()) {
  if (isBlockUpToDate(target)) { console.log(`igual     ${target.to}`); continue; }
  if (dryRun) { console.log(`alteraria ${target.to} (bloco aineto-kit)`); continue; }
  const current = readBlockTarget(target);
  backup(target.to);
  writeFileSync(target.to, withBlock(current, target.block));
  console.log(`bloco     ${target.to}`);
}

if (backedUp) console.log(`backup em ${backupDir}`);
