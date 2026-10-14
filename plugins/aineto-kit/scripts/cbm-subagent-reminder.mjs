// SubagentStart: orienta subagentes a usar o codebase-memory-mcp (contexto via JSON).
import { findBinary } from './lib.mjs';
if (findBinary('codebase-memory-mcp')) {
  process.stdout.write(JSON.stringify({
    hookSpecificOutput: {
      hookEventName: 'SubagentStart',
      additionalContext: 'Code discovery: prefer codebase-memory-mcp tools (search_graph, trace_path, get_code_snippet, query_graph, get_architecture, search_code) over grep/file-read for navigating code. Use Grep/Glob/Read for text, configs, and non-code files.',
    },
  }));
}
