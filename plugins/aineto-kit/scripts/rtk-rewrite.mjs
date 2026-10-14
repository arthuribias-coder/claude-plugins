// PreToolUse(Bash): reescrita de comandos pelo rtk para economia de tokens.
import { delegateHook } from './lib.mjs';
delegateHook('rtk', ['hook', 'claude']);
