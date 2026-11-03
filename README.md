# claude-plugins (marketplace `aineto`)

Configuração pessoal do Claude Code empacotada como plugin. Funciona em Linux, macOS e Windows.

## Instalação

```bash
claude plugin marketplace add arthuribias-coder/claude-plugins
claude plugin install aineto-kit@aineto
```

Depois, dentro do Claude Code:

```
/aineto-kit:sync-instructions --dry-run
/aineto-kit:sync-instructions
```

## Conteúdo do `aineto-kit`

| Tipo | Itens |
|---|---|
| Agentes | scout, scout-plus, executor, verifier, runner, agy (Antigravity CLI), copilot (GitHub Copilot CLI) (`subagent_type` = `aineto-kit:<nome>`) |
| Skills | acessibilidade-normativa-br, gitlab-mcp, codebase-memory |
| Hooks | rtk (PreToolUse Bash), codebase-memory-mcp (PreToolUse Grep/Glob, SessionStart, SubagentStart), checagem de instruções (SessionStart) |
| MCP | codebase-memory-mcp |
| Comando | `/aineto-kit:sync-instructions [--dry-run]` |

### Instruções globais

Plugins não carregam `CLAUDE.md` nem `rules/`. O comando de sync instala `instructions/*.md` como `~/.claude/rules/aineto-kit-*.md` (carregamento nativo) e `plans/TEMPLATE.md` se ausente, com backup em `~/.claude/backups/`.

- O `CLAUDE.md` da máquina nunca é tocado: fica livre para regras locais (ex: do ambiente de trabalho).
- Arquivos `aineto-kit-*` que saírem do plugin são removidos no próximo sync.
- `instructions/common.md` vale para todos os agentes; `core.md` (orquestração) e `rtk.md` são só do Claude Code.
- O hook de SessionStart avisa quando a cópia local diverge da do plugin.

### Outros CLIs (multiagente)

O mesmo sync grava `common.md` + `general-coding.md` num bloco `<!-- aineto-kit:start/end -->` das instruções globais de cada CLI instalado (diretório de config existente), preservando o resto do arquivo:

| CLI | Arquivo |
|---|---|
| GitHub Copilot CLI | `~/.copilot/copilot-instructions.md` |
| Antigravity (agy) / Gemini CLI | `~/.gemini/GEMINI.md` |
| Codex CLI | `$CODEX_HOME/AGENTS.md` (padrão `~/.codex`) |

Os agentes `agy` e `copilot` delegam tarefas a esses CLIs em modo headless; a seção "Delegated (headless) runs" de `common.md` define o que eles podem fazer sozinhos.

## Pré-requisitos

- Node.js 20.11+ no PATH: hooks e sync são `.mjs` executados sem shell.
- Opcionais (o hook correspondente vira no-op se o binário não existir):
  - `rtk`: https://github.com/rtk-ai/rtk
  - `codebase-memory-mcp` no PATH (ou em `~/.local/bin`)
  - `agy` (Antigravity CLI) e `copilot` (GitHub Copilot CLI), para os agentes de mesmo nome

## Windows

- Funciona com ou sem Git Bash: os hooks usam o formato exec (`"command": "node", "args": [...]`), que não passa por bash nem PowerShell.
- `~/.claude` corresponde a `%USERPROFILE%\.claude`; `CLAUDE_CONFIG_DIR` é respeitado.
- Binários `.exe`, `.cmd` e `.bat` são localizados via `PATH` + `PATHEXT`.

## Plugins e skills de terceiros (não incluídos)

```bash
for p in superpowers context7 frontend-design code-simplifier code-review skill-creator \
  claude-md-management feature-dev security-guidance claude-code-setup commit-commands \
  remember code-modernization claude-security ralph-loop; do
  claude plugin install "$p@claude-plugins-official"
done
```

PowerShell:

```powershell
"superpowers","context7","frontend-design","code-simplifier","code-review","skill-creator",
"claude-md-management","feature-dev","security-guidance","claude-code-setup","commit-commands",
"remember","code-modernization","claude-security","ralph-loop" |
  ForEach-Object { claude plugin install "$_@claude-plugins-official" }
```

Skills via `npx skills add`: `affaan-m/everything-claude-code`, `netresearch/git-workflow-skill`, `vercel-labs/skills` (find-skills), `nextlevelbuilder/ui-ux-pro-max-skill`.

## Settings que plugins não aplicam

Mesclar manualmente em `~/.claude/settings.json`:

```json
{
  "env": { "CLAUDE_CODE_DISABLE_TELEMETRY": "true", "DISABLE_SENTRY": "true" },
  "attribution": { "commit": "", "pr": "" },
  "language": "Português Brasileiro",
  "effortLevel": "xhigh",
  "permissions": { "additionalDirectories": ["~/.claude/plans"] }
}
```

## Atualização

Editar aqui, subir `version` em `plugins/aineto-kit/.claude-plugin/plugin.json`, push, e na máquina destino `claude plugin marketplace update aineto`, seguido de `/aineto-kit:sync-instructions` se o hook avisar.
