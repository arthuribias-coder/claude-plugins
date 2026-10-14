# Auditoria, testes e laudo de conformidade

Use quando o pedido for **avaliar, criticar, revisar, auditar, testar ou emitir parecer**
sobre acessibilidade — de um trecho de HTML a um sistema inteiro, de um protótipo a uma
tela em produção.

## Antes de começar: delimite o que dá para afirmar

Auditoria fraca é a que confunde ausência de evidência com evidência de conformidade.
Estabeleça no início o que o material permite verificar:

| Insumo disponível | Dá para verificar | Não dá para verificar |
|---|---|---|
| Trecho de HTML/JSX/template | Semântica, rótulos, ARIA, alternativas textuais, estrutura | Contraste real, ordem de foco efetiva, comportamento dinâmico, reflow |
| Componente completo com CSS | O acima + contraste declarado, indicador de foco, área de acionamento | Renderização real, sobreposições, interação com o resto da página |
| Aplicação rodando + ferramenta | O acima + violações automáticas (~30–40% dos critérios) | Qualidade da alternativa textual, lógica da ordem de foco, fluxo com leitor de tela |
| Aplicação + teste manual + leitor de tela | Praticamente tudo | Experiência real de pessoas com deficiência |

Declare essa delimitação no início do relatório. Uma linha basta: *"Análise estática do
código fornecido; contraste, ordem de foco efetiva e comportamento com leitor de tela não
puderam ser verificados."*

## Varredura: os 16 grupos

Percorra os grupos da Seção 5 na ordem, mesmo que rapidamente. Um grupo sem achado é uma
informação — registre "sem achados" em vez de omitir, porque a omissão é lida como
"não olhei".

Roteiro condensado (detalhe de cada item em `nbr-17225-requisitos.md`):

1. **Teclado** — tudo alcançável e operável? Foco visível? Ordem lógica? Armadilhas? Esc funciona?
2. **Imagens** — classificação correta (conteúdo / funcional / decorativa / complexa)?
3. **Cabeçalhos** — existem? hierarquia sem pulo? um `h1`?
4. **Regiões** — `main`, `nav`, `header`, `footer`? nomes únicos onde repetem?
5. **Listas** — agrupamentos são listas semânticas?
6. **Tabelas** — `th`/`scope`, `caption`, sem tabela de leiaute com semântica?
7. **Links e navegação** — propósito claro, skip link, navegação consistente, ajuda consistente?
8. **Botões e controles** — `<button>` real, nome acessível, alvo ≥ 24px, sem mudança de contexto no foco/entrada, alternativa a arrastar e a gestos?
9. **Formulários** — rótulo associado, agrupamento, obrigatoriedade programática, erro descritivo + sugestão, confirmação em formulário crítico, sem reentrada de dados, autenticação sem carga cognitiva?
10. **Apresentação** — reflow 320px, orientação livre, instruções não sensoriais?
11. **Cores** — cor nunca sozinha; contrastes 4,5:1 / 3:1 / 3:1?
12. **Texto** — espaçamentos, largura de bloco, zoom 200%, semântica de ênfase?
13. **Codificação** — `title` por rota, `lang`, `iframe` com `title`, zoom liberado, mensagens de status anunciadas, nome acessível contém texto visível?
14. **Áudio e vídeo** — legenda, transcrição, audiodescrição, controle de áudio automático?
15. **Animação** — controle de animação > 5s, `prefers-reduced-motion`, flash?
16. **Tempo** — sessão avisada e extensível, auto-refresh controlável?

Depois da varredura, faça uma passada por **cenário** (Anexo B): percorra mentalmente a
tarefa principal do sistema como alguém que não enxerga, e como alguém que só usa teclado.
Isso captura problemas de fluxo que a lista item a item não pega — foco perdido após ação,
mensagem de sucesso silenciosa, etapa impossível de concluir.

## Formato do achado

Use este formato. Ele é o que torna o relatório utilizável em aceite e em backlog.

```
[SEVERIDADE] Título curto do problema
Norma:      NBR 17225 §5.9.3 (Requisito) — WCAG 2.2 C.S. 1.3.1, Nível A
Onde:       <arquivo/componente/tela>, elemento ou linha
Evidência:  <trecho mínimo que demonstra o problema>
Impacto:    quem é afetado e o que acontece com essa pessoa
Correção:   ação concreta, com código quando aplicável
```

Duas coisas fazem diferença na qualidade:

- **Evidência mínima.** Cole o menor trecho que prova o problema, não o componente inteiro.
- **Impacto em pessoa, não em regra.** "O leitor de tela anuncia apenas 'caixa de edição'
  e a pessoa não descobre o que digitar" convence quem prioriza backlog; "viola 1.3.1", não.

## Severidade

A norma não define severidade — ela define Requisito e Recomendação. Severidade é
instrumento de priorização, e deve ser derivada de duas dimensões: **classificação
normativa** e **impacto no uso**.

| Severidade | Critério |
|---|---|
| **Crítica** | Requisito não atendido que **impede** a conclusão de tarefa essencial por algum grupo de usuários. Ex.: etapa de peticionamento inacessível por teclado; CAPTCHA sem alternativa; modal que aprisiona o foco. |
| **Alta** | Requisito não atendido que dificulta severamente, mas admite contorno. Ex.: campo sem rótulo associado; erro comunicado só por cor; contraste 3:1 em texto normal. |
| **Média** | Requisito não atendido com impacto localizado, ou Recomendação com impacto real. Ex.: hierarquia de cabeçalhos com pulo; link "clique aqui"; ausência de `caption`. |
| **Baixa** | Recomendação não atendida, sem impacto funcional relevante. |

Regra de bloqueio sugerida para aceite: **Crítica e Alta bloqueiam a entrega; Média entra
no backlog com prazo; Baixa é registrada com justificativa.** Explicite que é uma sugestão
de política, não determinação da norma, e ajuste ao que a organização já pratica.

## Ferramentas e o que cada uma cobre

Nenhum nível é suficiente sozinho. Deixe isso explícito sempre que alguém propuser
"rodar o axe e liberar".

| Nível | Ferramentas | Cobertura real |
|---|---|---|
| Estático / lint | Regras de acessibilidade do linter do ecossistema em uso (`eslint-plugin-jsx-a11y`, `@angular-eslint`, `vue-a11y`, htmlhint) | Erros grosseiros, em tempo de escrita |
| Automático em teste | `axe-core` via `jest-axe`, `@axe-core/playwright`, `cypress-axe`, Testing Library | ~30–40% dos critérios |
| Automático em CI/E2E | Lighthouse CI, Pa11y CI, `@axe-core/cli` | Regressão em páginas-chave |
| Manual por teclado | Só Tab, Shift+Tab, Enter, Espaço, setas, Esc | Ordem, foco visível, armadilhas, operabilidade |
| Leitor de tela | NVDA + Firefox/Chrome, JAWS + Chrome, VoiceOver + Safari, TalkBack + Chrome | Semântica, nome/papel/valor, fluxo de leitura, anúncios dinâmicos |
| Zoom e reflow | 200% de texto e 400% de zoom; largura 320px | Perda de conteúdo, rolagem em duas dimensões |
| Com usuários PcD | Teste com pessoas reais | Usabilidade efetiva — insubstituível |

Números como "Lighthouse ≥ 90" e "zero violações critical/serious no axe" são critérios de
aceite **complementares**, não prova de conformidade. Uma página pode marcar 100 no
Lighthouse e ser inutilizável por teclado. Diga isso quando a organização tratar a nota
como suficiente.

### Teste manual por teclado — roteiro mínimo

1. Tab do início ao fim: a ordem faz sentido? o foco está sempre visível?
2. O foco fica preso em algum lugar? Esc libera modais e overlays?
3. Skip link é o primeiro elemento e fica visível ao receber foco?
4. Header/footer fixos escondem o elemento focado?
5. Toda ação disponível por mouse é alcançável por teclado?
6. Após abrir/fechar modal, disparar ação ou trocar de rota, para onde vai o foco?
7. Após submissão com erro, o foco vai ao primeiro erro ou ao resumo?

### Leitor de tela — roteiro mínimo

1. Navegar pela lista de cabeçalhos: a estrutura da página se entende só por ela?
2. Navegar por regiões/landmarks: dá para chegar ao conteúdo principal direto?
3. Navegar por formulário: cada campo anuncia rótulo, tipo, obrigatoriedade e erro?
4. Disparar ação assíncrona: sucesso, erro e carregamento são anunciados?
5. Abrir componente customizado: papel, estado e valor são anunciados corretamente?

## Estrutura do laudo / parecer

Para relatórios formais, use esta estrutura:

```
1. Identificação        — sistema, versão, telas avaliadas, data, responsável
2. Escopo e método      — o que foi avaliado, com quais insumos e ferramentas,
                          e o que ficou fora (seja explícito)
3. Referencial normativo— NBR 17225:2025, WCAG 2.2 AA, e demais aplicáveis
4. Resultado consolidado— nº de Requisitos não atendidos, por grupo e severidade
5. Achados detalhados   — no formato de achado, ordenados por severidade
6. Itens não verificados— o que exige teste manual, leitor de tela ou ambiente real
7. Conclusão            — atende / não atende à conformidade regular, sem meio-termo
8. Plano de adequação   — correções por prioridade, com esforço estimado
```

Para uma revisão de código informal ou um PR, isso é excessivo. Aí vale: achados por
severidade + uma linha de conclusão + o que falta verificar. Calibre o formato ao pedido,
não ao que parece mais completo.

## Integração em CI/CD

Sugestão de arranjo, a ser adaptado ao pipeline existente:

- Lint de acessibilidade no *pre-commit* e no job de lint.
- `axe-core` nos testes unitários de componente, falhando o build em `critical`/`serious`.
- Verificação E2E (Lighthouse CI ou Pa11y) nas rotas principais, com limiar acordado.
- Publicação dos resultados como artefato do pipeline, para rastreabilidade em auditoria.
- Checklist da entrega (ver `assets/checklist-nbr17225.md`) preenchido e arquivado.

O que a automação **não** substitui e deve permanecer como etapa humana no fluxo de
homologação: teste por teclado, teste com pelo menos um leitor de tela, e avaliação da
qualidade — não da existência — das alternativas textuais.

## Erros comuns em auditorias

- **Aprovar por ausência de erro automático.** Ferramenta silenciosa ≠ conformidade.
- **Reprovar por Recomendação.** Verifique a classificação antes de usar a palavra
  "violação".
- **Exigir 44px como piso.** O Requisito é 24px; 44px é Recomendação.
- **Citar WCAG 2.1 como base da NBR 17225.** É a 2.2.
- **Listar 60 achados sem priorizar.** Relatório que não se pode executar não muda nada.
- **Confundir `alt` presente com `alt` adequado.** `alt="imagem"` passa em ferramenta e
  falha com a pessoa.
- **Ignorar o que não está no código.** PDFs anexos, vídeos institucionais, widgets de
  terceiros e conteúdo editorial fazem parte da conformidade do sistema.
