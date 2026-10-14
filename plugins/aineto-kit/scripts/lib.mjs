import { existsSync, readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { delimiter, join } from 'node:path';
import { spawnSync } from 'node:child_process';

const IS_WINDOWS = process.platform === 'win32';
const EXTENSIONS = IS_WINDOWS ? (process.env.PATHEXT || '.EXE;.CMD;.BAT').split(';') : [''];

export const claudeDir = () => process.env.CLAUDE_CONFIG_DIR || join(homedir(), '.claude');
export const pluginRoot = () => process.env.CLAUDE_PLUGIN_ROOT || join(import.meta.dirname, '..');

export function findBinary(name) {
  const dirs = [...(process.env.PATH || '').split(delimiter), join(homedir(), '.local', 'bin')];
  for (const dir of dirs.filter(Boolean)) {
    for (const ext of EXTENSIONS) {
      const candidate = join(dir, name + ext.toLowerCase());
      if (existsSync(candidate)) return candidate;
      if (ext && existsSync(join(dir, name + ext))) return join(dir, name + ext);
    }
  }
  return null;
}

export function readStdin() {
  try { return readFileSync(0); } catch { return Buffer.alloc(0); }
}

// Repassa o payload do hook ao binário e devolve seu stdout; falha silenciosa nunca bloqueia a ferramenta.
export function delegateHook(name, args) {
  const binary = findBinary(name);
  if (!binary) process.exit(0);
  const result = spawnSync(binary, args, {
    input: readStdin(),
    stdio: ['pipe', 'inherit', 'ignore'],
    shell: /\.(cmd|bat)$/i.test(binary),
  });
  process.exit(result.error ? 0 : (result.status ?? 0));
}
