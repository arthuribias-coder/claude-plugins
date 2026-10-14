// PreToolUse(Grep|Glob): adiciona contexto do grafo do codebase-memory-mcp; nunca bloqueia.
import { delegateHook } from './lib.mjs';
delegateHook('codebase-memory-mcp', ['hook-augment']);
