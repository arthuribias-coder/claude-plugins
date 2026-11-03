---
description: Instala/atualiza as instruções globais do aineto-kit em ~/.claude/rules e nos CLIs instalados (Copilot, Gemini/agy, Codex), com backup
argument-hint: "[--dry-run]"
allowed-tools: Bash(node:*), PowerShell(node:*)
disable-model-invocation: true
---
Rode `node "${CLAUDE_PLUGIN_ROOT}/scripts/sync-instructions.mjs" $ARGUMENTS` e mostre a saída. Se algo foi copiado ou removido, avise que as instruções valem a partir da próxima sessão (/clear ou reinício).
