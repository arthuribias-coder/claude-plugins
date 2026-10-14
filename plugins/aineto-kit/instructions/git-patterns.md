---
applyTo: '**'
description: "Boas práticas modernas de Git e versionamento de código"
---

# Boas Práticas Modernas de Git

## Princípios Fundamentais

- **Commits Atômicos**: Cada commit representa uma mudança lógica completa e independente
- **Histórico Limpo**: Evite merge commits desnecessários; prefira rebase ou squash
- **Clareza**: Mensagens descritivas e código autoexplicativo
- **Rastreabilidade**: Links para issues, PRs e documentação

## Fluxo de Trabalho (Git Flow Moderno)

### Branches Permanentes

**`main` (ou `master`)**
- Código em **PRODUÇÃO ESTÁVEL**
- Protegido: requer PR review + testes passando
- Tagged com versões semânticas (v1.2.3)
- Nunca commit direto
- Origem: merges de `release/*` e `hotfix/*`

**`develop`** (opcional em monorepos)
- Integração de features
- Pode ser menos estável que `main`
- Requer PR review
- Origem: merges de `feature/*`, `release/*`, `hotfix/*`

### Branches Temporárias

**`feature/<descricao>`**
- Novas funcionalidades ou melhorias
- Origem: criar de `develop` (ou `main` em mono-branch)
- Destino: merge para `develop` via PR
- Nomenclatura: `feature/auth-2fa`, `feature/dashboard-redesign`
- **Deletar após merge**

**`bugfix/<descricao>`**
- Correções de bugs em development
- Similar a `feature/*` em workflow
- Nomenclatura: `bugfix/login-validation`, `bugfix/api-timeout`

**`hotfix/v<versao>`**
- Correções **CRÍTICAS** em produção
- Origem: criar de `main`
- Destino: merge para `main` E `develop` (cherry-pick se necessário)
- Nomenclatura: `hotfix/v1.2.4`, `hotfix/v2.31.1-security`
- **Criar tag após merge**: `git tag v1.2.4`
- **Deletar após merge**

**`release/v<versao>`**
- Preparação para nova versão de produção
- Origem: criar de `develop`
- Destino: merge para `main` E `develop`
- Nomenclatura: `release/v2.32.0`, `release/v1.5.0-beta`
- **Criar tag após merge**: `git tag v2.32.0`
- **Deletar após merge**

**`docs/<descricao>`** (opcional)
- Atualizações de documentação
- Pode ser mergeada direto em `main` ou via `develop`
- Nomenclatura: `docs/api-reference`, `docs/setup-guide`

## Commits Eficazes

### Mensagem de Commit (Formato Convencional)

```
<tipo>[escopo]: <descrição curta (< 50 chars)>

<corpo detalhado, se necessário (máx 72 chars por linha)>

<footer: referências a issues, breaking changes>
```

### Tipos de Commit

| Tipo | Descrição | SemVer |
|------|-----------|--------|
| `feat:` | Nova funcionalidade | MINOR |
| `fix:` | Correção de bug | PATCH |
| `perf:` | Melhoria de performance | PATCH |
| `refactor:` | Reestruturação (sem mudança funcional) | - |
| `test:` | Adiciona/atualiza testes | - |
| `docs:` | Atualizações de documentação | - |
| `ci:` | Mudanças em CI/CD | - |
| `chore:` | Atualizações de dependências, build | - |
| `style:` | Formatação, lint (não afeta lógica) | - |

### Exemplos

```
feat(auth): adicionar autenticação com Google

- Integra provider OAuth2 do Google
- Adiciona rotas de callback e refresh token
- Implementa storage seguro de credenciais

Closes #123
```

```
fix(api): corrigir timeout em requisições lentas

Aumenta timeout padrão de 5s para 30s para endpoints pesados
```

```
refactor(database): simplificar queries de relatório

Remove JOIN desnecessário, melhora performance em 40%
```

## Workflow de Pull Request

### Antes de Abrir

1. **Sincronizar com base**: `git fetch origin && git rebase origin/develop`
2. **Commits limpos**: Squash/rebase para história limpa
3. **Testes passando**: `npm test`, `pytest`, etc
4. **Linting OK**: Sem warnings ou erros
5. **Documentação atualizada**: README, JSDoc, docstrings

### Abrindo a PR

- **Título descritivo**: Use convenção de commit
- **Descrição clara**: O que, por quê, como
- **Screenshots/GIFs**: Se interface foi alterada
- **Checklist**: ✅ Testes ✅ Docs ✅ Breaking changes?
- **Link issue**: `Closes #123` ou `Fixes #456`
- **Auto-assign reviewers**: Mínimo 2 reviews para `main`

### Exemplo de Descrição PR

```markdown
## Descrição
Implementa autenticação com 2FA via TOTP.

## Tipo de Mudança
- [ ] Bug fix (não quebrando alterações)
- [x] Nova feature (não quebrando alterações)
- [ ] Breaking change
- [x] Requer atualização de docs

## Como Testar
1. Habilitar 2FA em settings
2. Fazer logout e login novamente
3. Escanear código QR com Google Authenticator
4. Confirmar TOTP gerado

## Checklist
- [x] Testes unitários adicionados
- [x] Testes de integração passando
- [x] Documentação atualizada
- [x] Sem breaking changes
- [x] Sem console.logs/debugs

Closes #456
```

## Versionamento Semântico (SemVer)

Formato: `MAJOR.MINOR.PATCH-prerelease+build`

| Versão | Quando | Exemplo |
|--------|--------|---------|
| MAJOR | Breaking changes | `2.0.0` (mudou API) |
| MINOR | Nova funcionalidade compatível | `1.5.0` (novo recurso) |
| PATCH | Bug fix | `1.4.2` (correção) |
| Pre-release | Alpha/Beta/RC | `1.5.0-beta.1`, `2.0.0-rc.2` |

## Tags e Releases

### Criar Tag

```bash
# Lightweight tag
git tag v1.2.3

# Annotated tag (recomendado)
git tag -a v1.2.3 -m "Release v1.2.3: Nova autenticação"

# Push tags
git push origin v1.2.3
```

### Release Notes

Gerar automaticamente a partir de commits convencional:
```bash
# Com ferramentas como conventional-changelog
npm run release
```

## Boas Práticas Avançadas

### Rebase vs Merge

| Operação | Quando | Vantagem |
|----------|--------|----------|
| **Rebase** | Feature para develop | Histórico linear, limpo |
| **Merge --no-ff** | develop para main | Preserva branch history |
| **Squash** | Muitos commits triviais | 1 commit por feature |

```bash
# Rebase interativo para limpar commits
git rebase -i origin/develop

# Merge com mensagem customizada
git merge --no-ff feature/auth -m "Merge: adiciona 2FA"
```

### Cherry-pick para Hotfix

```bash
# Se um fix de hotfix precisa ir para develop também
git checkout develop
git cherry-pick <commit-hash-do-hotfix>
```

### Stash para Mudanças Temporárias

```bash
# Salva mudanças sem commit
git stash

# Lista stashes
git stash list

# Recupera última mudança
git stash pop

# Recupera mudança específica
git stash apply stash@{0}
```

## Proteção de Branches

### Configurar em GitHub/GitLab

```yaml
# .github/settings.yml (GitHub)
branches:
  - name: main
    protection:
      required_status_checks:
        strict: true
        contexts:
          - "continuous-integration/travis-ci"
          - "codecov/project"
      required_pull_request_reviews:
        dismissal_restrictions: {}
        require_code_owner_reviews: true
        require_last_push_approval: true
        required_approving_review_count: 2
      restrict_who_can_push:
        - type: "Team"
          name: "maintainers"
      enforce_admins: true
```

## Aliases Úteis

```bash
# ~/.gitconfig
[alias]
    st = status -s
    co = checkout
    br = branch
    ci = commit
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = log --graph --oneline --decorate --all
    amend = commit --amend --no-edit
    fixup = "!f() { git commit --fixup=$1; }; f"
    squash = "!f() { git commit --squash=$1; }; f"
    sync = "!git fetch origin && git rebase origin/$(git rev-parse --abbrev-ref HEAD)"
```

## Troubleshooting

### Desfazer commits sem perder trabalho

```bash
# Soft reset (mantém mudanças na staging)
git reset --soft HEAD~1

# Mixed reset (mantém mudanças no working dir)
git reset --mixed HEAD~1

# Hard reset (descarta mudanças - ⚠️ CUIDADO)
git reset --hard HEAD~1
```

### Recuperar branch deletada

```bash
git reflog
git checkout -b <branch-name> <commit-hash>
```

### Corrigir commit anterior

```bash
git commit --amend --no-edit      # Adiciona staged files ao último commit
git commit --amend -m "Nova msg"  # Altera mensagem
```

## Ferramentas Recomendadas

- **Husky**: Git hooks pre-commit (lint, testes)
- **Commitlint**: Valida mensagens de commit
- **Conventional Commits**: Padrão de mensagens
- **Semantic Release**: Automação de versionamento
- **Git-flow**: Extensão para fluxo Git Flow
- **GitHub/GitLab/Gitea**: Plataformas de hospedagem com CI/CD

## Referências

- [Conventional Commits](https://www.conventionalcommits.org/)
- [SemVer](https://semver.org/)
- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Commitizen](http://commitizen.github.io/)