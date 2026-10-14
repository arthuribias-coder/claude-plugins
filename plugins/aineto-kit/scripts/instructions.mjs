import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { claudeDir, pluginRoot } from './lib.mjs';

export const RULE_PREFIX = 'aineto-kit-';
const PLAN_TEMPLATE = 'PLAN-TEMPLATE.md';

// Instruções viram ~/.claude/rules/aineto-kit-*.md: carregadas nativamente, sem tocar no CLAUDE.md do usuário.
export function plannedCopies() {
  const sourceDir = join(pluginRoot(), 'instructions');
  const rulesDir = join(claudeDir(), 'rules');
  const rules = readdirSync(sourceDir)
    .filter((file) => file.endsWith('.md') && file !== PLAN_TEMPLATE)
    .map((file) => ({ from: join(sourceDir, file), to: join(rulesDir, RULE_PREFIX + file), overwrite: true }));
  const template = { from: join(sourceDir, PLAN_TEMPLATE), to: join(claudeDir(), 'plans', 'TEMPLATE.md'), overwrite: false };
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
