import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { claudeDir, pluginRoot } from './lib.mjs';

export const RULE_PREFIX = 'aineto-kit-';
const PLAN_TEMPLATE = 'PLAN-TEMPLATE.md';
const BLOCK_START = '<!-- aineto-kit:start -->';
const BLOCK_END = '<!-- aineto-kit:end -->';
const SHARED_SOURCES = ['common.md', 'general-coding.md'];

// Instruções globais de outros CLIs; só recebem o bloco se o diretório de config já existir (CLI instalado).
const EXTERNAL_TARGETS = [
  { configDir: () => join(homedir(), '.copilot'), file: 'copilot-instructions.md' },
  { configDir: () => join(homedir(), '.gemini'), file: 'GEMINI.md' },
  { configDir: () => process.env.CODEX_HOME || join(homedir(), '.codex'), file: 'AGENTS.md' },
];

const sourceDir = () => join(pluginRoot(), 'instructions');
const normalizeEol = (text) => text.replace(/\r\n/g, '\n');

// Instruções viram ~/.claude/rules/aineto-kit-*.md: carregadas nativamente, sem tocar no CLAUDE.md do usuário.
export function plannedCopies() {
  const rulesDir = join(claudeDir(), 'rules');
  const rules = readdirSync(sourceDir())
    .filter((file) => file.endsWith('.md') && file !== PLAN_TEMPLATE)
    .map((file) => ({ from: join(sourceDir(), file), to: join(rulesDir, RULE_PREFIX + file), overwrite: true }));
  const template = { from: join(sourceDir(), PLAN_TEMPLATE), to: join(claudeDir(), 'plans', 'TEMPLATE.md'), overwrite: false };
  return [...rules, template];
}

export function staleRules() {
  const rulesDir = join(claudeDir(), 'rules');
  if (!existsSync(rulesDir)) return [];
  const expected = new Set(plannedCopies().map((copy) => copy.to));
  return readdirSync(rulesDir)
    .filter((file) => file.startsWith(RULE_PREFIX))
    .map((file) => join(rulesDir, file))
    .filter((path) => !expected.has(path));
}

export function isUpToDate({ from, to, overwrite }) {
  if (!existsSync(to)) return false;
  return !overwrite || readFileSync(from).equals(readFileSync(to));
}

function sharedBlock() {
  const body = SHARED_SOURCES
    .map((file) => normalizeEol(readFileSync(join(sourceDir(), file), 'utf8')).trim())
    .join('\n\n');
  return `${BLOCK_START}\n<!-- Gerado por /aineto-kit:sync-instructions; edite em plugins/aineto-kit/instructions. -->\n\n${body}\n${BLOCK_END}`;
}

// Outros CLIs não têm pasta de regras: o bloco gerenciado preserva o restante do arquivo (ex: bloco do codebase-memory-mcp).
export function plannedBlocks() {
  const block = sharedBlock();
  return EXTERNAL_TARGETS
    .filter((target) => existsSync(target.configDir()))
    .map((target) => ({ to: join(target.configDir(), target.file), block }));
}

export function withBlock(current, block) {
  const text = normalizeEol(current);
  const start = text.indexOf(BLOCK_START);
  const end = text.indexOf(BLOCK_END);
  if (start >= 0 && end > start) return text.slice(0, start) + block + text.slice(end + BLOCK_END.length);
  return text.trim() ? `${text.trimEnd()}\n\n${block}\n` : `${block}\n`;
}

export const readBlockTarget = ({ to }) => (existsSync(to) ? readFileSync(to, 'utf8') : '');

export function isBlockUpToDate(target) {
  const current = readBlockTarget(target);
  return current !== '' && withBlock(current, target.block) === normalizeEol(current);
}
