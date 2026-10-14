---
name: gitlab-mcp
description: Use whenever writing GitLab content by hand (issue descriptions, comments/notes, MR descriptions) or calling the gitlab MCP tools (mcp__gitlab__*) to create/read issues, work items, merge requests, notes, pipelines, or search — including auditorias multi-projeto (ex: levantar versões, CI/CD config, topics de dezenas de repositórios). Covers GitLab Flavored Markdown special references — bare commit SHAs, #issue, !MR, %milestone, $snippet, ~label, @user — and the exact formatting rule that makes GitLab auto-link them (no quotes/backticks around most of them). Also maps the available gitlab MCP tools, the ToolSearch pattern needed to load their schemas before calling (since they show up as deferred tools), which project metadata fields the MCP does NOT expose (ci_config_path e outros), and the REST API fallback using $GITLAB_PERSONAL_ACCESS_TOKEN for those gaps. Trigger on: "criar issue no gitlab", "comentar no MR", "abrir merge request", "gitlab work item", "vincular commit a uma issue", "buscar no gitlab", "CI/CD config file", "ci_config_path", "auditoria de projetos gitlab", or any task that produces text destined for a GitLab issue/MR/comment field, or that needs project/pipeline metadata the MCP tools don't return directly.
metadata:
  origin: learned
---

# GitLab MCP e GitLab Flavored Markdown

## A regra que importa mais: referências especiais sem aspas/crases

O GitLab reconhece certos padrões de texto e os transforma automaticamente em links (para commits, issues, MRs, etc) — mas **só quando o padrão aparece "nu"** no markdown. Envolver a referência em crases (`` ` ``), aspas (`"` ou `'`) ou qualquer outro símbolo desativa o reconhecimento e o GitLab renderiza o texto literal em vez de um link clicável.

Isso vale tanto para texto escrito manualmente quanto para o `body`/`description` passado às tools MCP (`create_issue`, `create_workitem_note`, `create_merge_request`, etc) — a API não faz nenhuma mágica adicional, ela processa o markdown exatamente como foi enviado.

**Errado** (quebra o auto-link):
```
Corrigido no commit `1f96dfd2ff76a74596be5f85970611681b2c29f5`.
Corrigido no commit "1f96dfd2ff76a74596be5f85970611681b2c29f5".
```

**Certo** (GitLab cria o link automaticamente):
```
Corrigido no commit 1f96dfd2ff76a74596be5f85970611681b2c29f5.
```

### Tabela de referências especiais (GitLab Flavored Markdown)

| Referência | Sintaxe | Exemplo | Observação |
|---|---|---|---|
| Commit | SHA completo ou curto (≥7 hex), nu | `3a9a7f1f1e46302f2d42e8e10c66347155bcb2d3` | Nunca envolver em crases/aspas |
| Issue | `#<iid>` | `#28` | |
| Merge Request | `!<iid>` | `!26` | |
| Milestone | `%<iid>` ou `%"título"` | `%"Sprint 12"` | |
| Snippet | `$<id>` | `$42` | |
| Label | `~<id>` ou `~"nome do label"` | `~"Status::Em andamento"` | Único caso onde aspas são exigidas para nomes com espaço — não removê-las |
| Usuário/grupo | `@username` | `@jdoe` | |
| Epic (Premium/Ultimate) | `&<iid>` | `&5` | |
| Referência cross-project | `namespace/projeto#iid`, `namespace/projeto!iid` | `grupo/projeto#3428` | Necessário quando fora do projeto da issue/MR atual |

Referência completa: https://docs.gitlab.com/user/markdown/#gitlab-specific-references

Antes de enviar um `body`/`description` para qualquer tool de criação/edição de conteúdo do GitLab, revise se algum SHA, `#issue`, `!MR` etc. não ficou acidentalmente dentro de um bloco de código, aspas ou crases — isso é fácil de fazer sem querer ao formatar diffs ou trechos de código junto com o texto explicativo.

## Ferramentas MCP do GitLab (`mcp__gitlab__*`)

Essas tools aparecem como **deferred tools** — antes de chamar qualquer uma pela primeira vez na sessão, carregue o schema completo com:
```
ToolSearch(query: "select:<nome1>,<nome2>,...")
```
Sem isso a chamada falha com erro de schema não encontrado.

Nota: pode haver dois integrações GitLab distintas disponíveis numa sessão — o server `plugin:gitlab:gitlab` (costuma exigir OAuth interativo, pode aparecer como "requires authentication") e as tools soltas `mcp__gitlab__*` (geralmente já conectadas sem OAuth). Cheque no início da sessão qual delas está de fato disponível antes de assumir.

### Issues / Work Items
- `create_issue` — cria issue. `id` é o path ou id numérico do projeto; `assignee_ids` é array de **inteiros** (IDs de usuário), não usernames — obtenha o id via `search` (scope `users`).
- `get_issue` — busca uma issue (`id` do projeto + `issue_iid`).
- `create_workitem_note` — comenta em um work item. Aceita `project_id` (path funciona) + `work_item_iid`, não precisa do id numérico do projeto.
- `get_workitem_notes` — lista notas/comentários de um work item.
- `get_work_item_types`, `get_saved_view_work_items`, `link_work_items` — metadados e vínculos entre work items.

### Merge Requests
- `create_merge_request`, `get_merge_request`
- `get_merge_request_notes`, `create_merge_request_note`
- `get_merge_request_commits`, `get_merge_request_diffs`, `get_merge_request_conflicts`, `get_merge_request_pipelines`

### Pipelines / CI
- `manage_pipeline`, `get_pipeline_jobs`, `get_job_log`

### Busca
- `search` — multi-escopo (`issues`, `merge_requests`, `users`, `commits`, `blobs`, `notes`, `projects`, `milestones`, `wiki_blobs`, `epics`, `snippet_titles`); aceita `project_id` ou `group_id` para restringir o escopo, ou nenhum dos dois para buscar na instância inteira. Útil para resolver username → id numérico (scope `users`) antes de um `create_issue` com `assignee_ids`.
- `search_labels` — busca labels de um projeto/grupo.
- `semantic_code_search` — busca semântica de código (não é grep literal).

### Outros
- `attach_scan_profile` — anexa perfil de scan de segurança.
- `get_mcp_server_version` — versão do servidor MCP do GitLab.

## Fluxo típico: registrar um bug com a correção

1. `search` (scope `users`, `search: "<username>"`) para resolver o assignee.
2. `create_issue` com `id` (path do projeto), `title`, `description` (problema + causa raiz + impacto — **sem** a solução) e `assignee_ids`.
3. `create_workitem_note` no mesmo work item com a solução, diff resumido, e o commit id **nu** (sem crases) para o GitLab linkar automaticamente.

## Descoberta de projetos por topic/versão (auditorias, planejamento de upgrade)

Para levantar um conjunto de projetos por stack/versão (ex: "todos os projetos Angular, ordenados por versão"):

1. `search` com `scope: "projects"` e o termo (ex: `"angular"`) — a resposta já traz `topics`/`tag_list` por projeto, que, se a organização padroniza topics, codificam versão da stack e de libs internas (ex: `Angular 18`, `Spring Boot 3`) sem precisar abrir cada repositório.
2. Desconfie de falsos positivos textuais: um projeto pode aparecer na busca por citar a tecnologia na descrição sem realmente usá-la (stack diferente, ou tecnologia abandonada/migrada) — confirme pelos `topics`/tags antes de incluir na tabela, e documente exclusões.
3. `list_repository_tree` (`ref: "HEAD"`) mostra a raiz do repo — útil para checar rapidamente se existe `.gitlab-ci.yml` local, mas **não é suficiente sozinho** para concluir a origem do pipeline (ver seção seguinte).

### ⚠️ Busca textual por termo NÃO é exaustiva — método definitivo é a API de topics

`search(scope: "projects", search: "<termo>")` faz matching por relevância textual em nome/descrição/README, **não** filtra por `topics`. Numa auditoria real (levantamento de projetos "Angular"), a busca textual achou 21 projetos; uma varredura por K8s achou mais 26; nenhuma das duas provou ser exaustiva. O MCP do GitLab não expõe um jeito direto de listar projetos por topic — mas a **API REST tem exatamente esse endpoint**, e é o método certo, não um fallback:

1. `GET /api/v4/topics?search=<termo>` — lista todos os topics cujo nome contém o termo, cada um com `total_projects_count`. Para uma stack versionada (ex: "Angular 18", "Angular 20", "Angular 7"...) isso já mostra exatamente quantos projetos existem por versão, sem abrir nenhum projeto:
   ```bash
   curl -s -H "PRIVATE-TOKEN: $GITLAB_PERSONAL_ACCESS_TOKEN" \
     "https://<host>/api/v4/topics?search=Angular&per_page=50" \
     | python3 -c "import json,sys; [print(t['name'], t['total_projects_count']) for t in json.load(sys.stdin)]"
   ```
   Alerta: os nomes de topic costumam ser granulares por versão exata (`Angular 18`, `Angular 20`, `AngularJS`, etc, não um `Angular` genérico) — colete a lista completa de variantes antes de assumir que uma busca cobriu tudo.
2. Para cada topic com `total_projects_count > 0`, `GET /api/v4/projects?topic=<nome exato do topic, URL-encoded>&per_page=100` retorna os projetos reais — filtro server-side pelo campo `topics`, não relevância textual. Isso é exaustivo: a soma de todos os `total_projects_count` é o inventário completo e verificável.
3. Só depois disso, cruzar contra um ambiente de runtime (K8s, registry, CMDB) serve para achar o resíduo — projetos reais sem NENHUM topic preenchido, que são o único caso que a API de topics não pode achar por definição. Nomes de Deployment/imagem seguem convenção própria do time (ex: `<registry>/<path-completo-do-projeto>:<TAG>`, label `app=<nome>`) — pegue um projeto de referência conhecido para descobrir o padrão, liste os Deployments dos namespaces relevantes, e cruze contra o inventário já obtido via topics. Confirme cada candidato residual abrindo `package.json`/`angular.json` do repo antes de reportá-lo — é raro, mas existe.

Ordem de confiabilidade para "listar todos os projetos com uma stack/versão X": **API de topics (exaustiva e verificável pela soma de `total_projects_count`) > cruzamento com runtime (só pega o que roda e segue a convenção de nome conhecida) > busca textual (não exaustiva, não usar para inventário).** Nunca reporte um inventário por topic como completo só porque `search` textual não trouxe mais resultados.

## O que o MCP do GitLab NÃO expõe — e quando cair para a API REST

O `get_project` do MCP (`mcp__gitlab__get_project`) retorna só um subconjunto pequeno de campos (`id`, `path_with_namespace`, `default_branch`, `visibility`, `web_url`). Vários campos de configuração de projeto — o mais notável sendo **`ci_config_path`** (caminho do arquivo de CI/CD, que pode apontar para um arquivo em outro projeto via sintaxe `path@namespace/projeto`) — só existem na API REST/GraphQL nativa do GitLab, não no schema do MCP.

Sinal de que você precisa desse fallback: o repositório não tem `.gitlab-ci.yml` na raiz (`list_repository_tree` não mostra o arquivo, `get_repository_file` retorna erro de "does not exist"), mas `list_pipelines`/`get_pipeline` mostram pipelines rodando normalmente. Isso indica CI configurado via `ci_config_path` — provavelmente apontando para um template central em outro projeto (padrão comum em arquiteturas corporativas, onde um projeto central centraliza templates de pipeline reutilizados por dezenas de apps).

**Fallback via API REST** (não requer permissão admin — `ci_config_path` é um campo padrão retornado para qualquer usuário autenticado, conforme a documentação oficial):

```bash
curl -s -H "PRIVATE-TOKEN: $GITLAB_PERSONAL_ACCESS_TOKEN" \
  "https://<host>/api/v4/projects/<id_ou_path_urlencoded>" \
  | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('ci_config_path'))"
```

- O token vem de `$GITLAB_PERSONAL_ACCESS_TOKEN` no ambiente — **nunca** procure, liste ou tente descobrir tokens/credenciais por conta própria (`env | grep`, `cat ~/.netrc`, configs de CLI); isso é bloqueado pelo classificador de segurança e corretamente assim. Se o usuário não confirmou que a env var existe, pergunte antes de tentar qualquer chamada REST — não vasculhe o ambiente para achar um substituto.
- Para dezenas de projetos, iterar por `id` numérico (mais rápido que path com URL-encoding) em um loop `for`, uma chamada por projeto — o endpoint de listagem (`GET /api/v4/projects`) também devolve `ci_config_path` por item, então prefira paginar essa lista em vez de repetir GETs individuais quando o objetivo é auditar o grupo inteiro.
- Nunca imprima o valor do token em output, logs, ou artifacts — só o resultado da consulta.

**Outros campos com restrição real de admin/owner** (documentados assim na API oficial, ao contrário de `ci_config_path`): `ci_default_git_depth`, `ci_forward_deployment_enabled`, `ci_separated_caches`, `ci_allow_fork_pipelines_to_run_in_parent_project`, `build_git_strategy`, `keep_latest_artifact`, `runners_token`, `runner_token_expiration_interval`, `group_runners_enabled`. Esses só aparecem na resposta se o token pertencer a um admin da instância ou ao Owner do projeto — se vierem `null`/ausentes, não é bug do MCP nem da chamada, é a permissão do token mesmo.

**Sempre que o comportamento de um campo/endpoint não estiver claro** (existe? exige permissão? qual o formato?), consulte a documentação oficial antes de concluir — via `WebFetch`/`WebSearch` em `docs.gitlab.com/api/...` — em vez de inferir só pelo comportamento observado em um ou dois projetos de teste. A doc de referência para atributos de projeto: https://docs.gitlab.com/api/projects/
