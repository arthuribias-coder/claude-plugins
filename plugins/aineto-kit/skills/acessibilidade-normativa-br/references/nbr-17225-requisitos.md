# ABNT NBR 17225:2025 — Catálogo operacional da Seção 5

Norma brasileira de acessibilidade em conteúdo e aplicações web, 1ª edição, 11/03/2025,
elaborada pelo CB-040 (Comitê Brasileiro de Acessibilidade). Baseada na **WCAG 2.2**.

Este catálogo é uma **reescrita operacional** dos itens da Seção 5 para uso em análise e
implementação — não substitui a norma oficial, que deve ser adquirida junto à ABNT para
fins de citação formal, auditoria contratada ou laudo com valor jurídico.

**Classificação:** `REQ` = Requisito (obrigatório para conformidade regular ≈ WCAG A+AA).
`REC` = Recomendação (conformidade plena ≈ AAA e boas práticas; se não atendida, exige
justificativa registrada).

Muitas Recomendações, quando atendidas, satisfazem automaticamente o Requisito correlato —
marcado como **⊃ 5.x.y** na linha. São sempre pares vizinhos (versão "aprimorada" e versão
"mínima").

## Índice

1. [5.1 Interação por teclado](#51-interação-por-teclado)
2. [5.2 Imagens](#52-imagens)
3. [5.3 Cabeçalhos](#53-cabeçalhos)
4. [5.4 Regiões](#54-regiões)
5. [5.5 Listas](#55-listas)
6. [5.6 Tabelas](#56-tabelas)
7. [5.7 Links e navegação](#57-links-e-navegação)
8. [5.8 Botões e controles](#58-botões-e-controles)
9. [5.9 Formulários e entrada de dados](#59-formulários-e-entrada-de-dados)
10. [5.10 Apresentação](#510-apresentação)
11. [5.11 Uso de cores](#511-uso-de-cores)
12. [5.12 Conteúdo textual](#512-conteúdo-textual)
13. [5.13 Codificação e marcação semântica](#513-codificação-e-marcação-semântica)
14. [5.14 Áudio e vídeo](#514-áudio-e-vídeo)
15. [5.15 Animação](#515-animação)
16. [5.16 Tempo](#516-tempo)
17. [Anexo A — Itens problemáticos](#anexo-a--itens-problemáticos-para-acessibilidade)
18. [Anexo B — Desempenho funcional](#anexo-b--desempenho-funcional)
19. [Definições que mudam a análise](#definições-da-norma-que-mudam-a-análise)

---

## 5.1 Interação por teclado

Quem não usa mouse — por deficiência motora, por usar leitor de tela, por lesão temporária —
depende inteiramente deste grupo. É o grupo que mais reprova interfaces modernas.

| Item | Nome | Classe | WCAG | Verificação prática |
|---|---|---|---|---|
| 5.1.1 | Indicador de foco visível | REQ | 2.4.7 (AA) | Todo elemento focável mostra sinal visual ao receber foco. `outline: none` sem substituto é violação direta. |
| 5.1.2 | Elemento em foco totalmente visível | REC ⊃ 5.1.3 | 2.4.11 (AA), 2.4.12 (AAA) | O elemento focado não fica nem parcialmente coberto por header fixo, barra sticky, cookie banner ou modal. |
| 5.1.3 | Elemento em foco parcialmente visível | REQ | 2.4.11 (AA) | No mínimo parte do elemento focado permanece visível, considerando sobreposições criadas pelo próprio sistema. |
| 5.1.4 | Ordem de foco previsível | REQ | 2.4.3 (A) | Sequência de tabulação lógica e coerente com a leitura visual. Cuidado com `tabindex` positivo, reordenação por CSS (`order`, `flex-direction: row-reverse`, `grid-area`) e conteúdo injetado no fim do DOM. |
| 5.1.5 | Uso de foco | REC | 2.1.1 (A), 2.1.3 (AAA) | Só é focável o que é interativo. `tabindex="0"` em `div` decorativa polui a navegação. |
| 5.1.6 | Armadilha de foco | REQ | 2.1.2 (A) | Nenhum componente aprisiona o teclado. Modal pode conter o foco, mas precisa liberar via Esc / botão fechar. Verifique iframes, players e widgets de terceiros. |
| 5.1.7 | Conteúdo adicional | REC ⊃ 5.1.8, 5.1.9 | 1.4.13 (AA) | Nada de informação exposta apenas em hover/foco (tooltip, submenu). |
| 5.1.8 | Conteúdo adicional persistente | REQ | 1.4.13 (AA) | Se existir, o conteúdo em hover/foco permanece enquanto o ponteiro/foco estiver nele ou na área — permite mover o mouse até o tooltip. |
| 5.1.9 | Conteúdo adicional dispensável | REQ | 1.4.13 (AA) | Esse conteúdo pode ser dispensado (Esc) sem tirar o foco, salvo se comunicar erro ou não obstruir nada. |
| 5.1.10 | Atalhos de teclado | REC ⊃ 5.1.11 | 2.1.4 (A) | Não usar atalho de tecla única; sempre com modificador (Ctrl/Alt). |
| 5.1.11 | Atalhos sem tecla modificadora | REQ | 2.1.4 (A) | Se houver atalho de tecla única, tem que ser desativável/remapeável ou só ativo com o componente em foco. Crítico para quem usa reconhecimento de voz. |
| 5.1.12 | Acessibilidade por teclado total | REC ⊃ 5.1.13 | 2.1.1 (A), 2.1.3 (AAA) | Toda funcionalidade operável só por teclado, sem exceção. |
| 5.1.13 | Acessibilidade por teclado parcial | REQ | 2.1.1 (A) | Só se admite função inacessível por teclado quando não existe equivalente possível (desenho à mão livre). Conveniência não é justificativa. |
| 5.1.14 | Mecanismos de entrada simultâneos | REC | 2.5.6 (AAA) | Não restringir o meio de entrada (impedir toque, forçar mouse), salvo por segurança ou preferência do usuário. |
| 5.1.15 | Comportamento de componentes customizados | REC ⊃ 5.1.16 | 2.1.1 (A), 2.1.3 (AAA) | Componente customizado responde às teclas esperadas pelo padrão do APG para aquele papel. |
| 5.1.16 | Instruções para componentes customizados | REQ | 3.3.2 (A) | Interação complexa e não previsível exige instrução textual disponível ao usuário. |

## 5.2 Imagens

A classificação da imagem determina o tratamento. Errar a classificação é o problema mais
comum: imagem decorativa com `alt` descritivo polui a leitura tanto quanto imagem
informativa sem `alt` esconde conteúdo.

| Item | Nome | Classe | WCAG | Verificação prática |
|---|---|---|---|---|
| 5.2.1 | Texto alternativo para imagens de conteúdo | REQ | 1.1.1 (A) | Imagem que transmite informação tem `alt` que descreve essa informação — não o arquivo, não "imagem de". |
| 5.2.2 | Texto alternativo para imagens funcionais | REQ | 1.1.1, 2.4.4 (A), 2.4.9 (AAA) | Ícone/imagem que aciona algo descreve a **função** ("Buscar"), não a aparência ("lupa"). |
| 5.2.3 | Texto alternativo para imagens decorativas | REQ | 1.1.1 (A) | `alt=""` (presente e vazio) ou `aria-hidden="true"` / CSS background. Omitir o atributo `alt` faz o leitor ler o nome do arquivo. |
| 5.2.4 | Descrição para imagens complexas | REQ | 1.1.1 (A) | Gráfico, infográfico, organograma: `alt` curto identificando + descrição detalhada na página (perto) ou em página indicada. Tabela equivalente é uma boa forma de descrição. |
| 5.2.5 | Imagens de texto | REQ | 1.1.1 (A), 1.4.5 (AA), 1.4.9 (AAA) | Evitar texto dentro de imagem; se essencial (logotipo, reprodução de documento), `alt` com o mesmo conteúdo. |
| 5.2.6 | Texto alternativo para mapas de imagens | REQ | 1.1.1 (A) | Cada `area` clicável tem seu próprio `alt`. |

## 5.3 Cabeçalhos

Leitores de tela navegam por lista de cabeçalhos. Hierarquia quebrada equivale a sumário
embaralhado.

| Item | Nome | Classe | WCAG | Verificação prática |
|---|---|---|---|---|
| 5.3.1 | Semântica de cabeçalho | REQ | 1.3.1 (A) | `h1`–`h6` reais (ou `role="heading"` + `aria-level`), não `div` estilizada como título. |
| 5.3.2 | Uso de cabeçalhos | REQ | 1.3.1 (A), 2.4.6 (AA) | Cabeçalho serve para identificar seção — não para dar destaque visual a um trecho qualquer. |
| 5.3.3 | Cabeçalho principal | REC | 2.4.6 (AA), 2.4.10 (AAA) | Um, e apenas um, `h1` por página, identificando-a. |
| 5.3.4 | Seções com cabeçalhos | REC | 2.4.10 (AAA) | Toda seção de conteúdo tem cabeçalho que a identifica. |
| 5.3.5 | Estrutura de cabeçalhos | REQ | 1.3.1 (A), 2.4.6 (AA), 2.4.10 (AAA) | Hierarquia sem pulo de nível (h2 → h4). Em SPA, cuidado com fragmentos que injetam níveis fora de ordem. |

## 5.4 Regiões

Regiões (landmarks) permitem saltar direto ao conteúdo principal. Em SPA são frequentemente
esquecidas.

| Item | Nome | Classe | WCAG | Verificação prática |
|---|---|---|---|---|
| 5.4.1 | Semântica de região | REQ | 1.3.1 (A), 1.3.6 (AAA) | `header`, `nav`, `main`, `aside`, `footer`, `form`, `search`, `section` com nome — ou os `role` equivalentes. |
| 5.4.2 | Uso de regiões | REQ | 1.3.1 (A), 1.3.6 (AAA) | A região corresponde ao tipo de conteúdo que contém. `nav` só para navegação. |
| 5.4.3 | Conteúdo em regiões | REC | 1.3.6 (AAA) | Nenhum conteúdo órfão fora de região. |
| 5.4.4 | Regiões únicas | REC | 1.3.1 (A), 1.3.6 (AAA) | Apenas um `banner`/`header`, um `main`, um `contentinfo`/`footer` por página. |
| 5.4.5 | Regiões identificadas unicamente | REQ | 1.3.1, 4.1.2 (A) | Regiões do mesmo tipo precisam de nome acessível distinto: `<nav aria-label="Principal">` e `<nav aria-label="Paginação">`. Não repita a palavra "navegação" no rótulo — o papel já é anunciado. |

## 5.5 Listas

| Item | Nome | Classe | WCAG | Verificação prática |
|---|---|---|---|---|
| 5.5.1 | Semântica de lista | REQ | 1.3.1 (A) | `ul` / `ol` / `dl` conforme a relação entre itens. Sequência importa → `ol`. |
| 5.5.2 | Uso de listas | REQ | 1.3.1 (A) | Lista agrupa itens de mesma natureza; não usar `ul` como recurso de leiaute arbitrário. |

## 5.6 Tabelas

| Item | Nome | Classe | WCAG | Verificação prática |
|---|---|---|---|---|
| 5.6.1 | Semântica de tabela | REQ | 1.3.1 (A) | `table`/`thead`/`tbody`/`th`/`td` reais. Grid feito com `div` precisa de `role="table"`, `row`, `columnheader`, `cell` completos — raramente vale a pena. |
| 5.6.2 | Uso de tabelas | REQ | 1.3.1 (A) | Tabela só para dados tabulares. Tabela de leiaute precisa ter a semântica removida (`role="presentation"`). |
| 5.6.3 | Cabeçalhos de tabela | REQ | 1.3.1 (A) | Células associadas aos cabeçalhos de linha e coluna: `th` + `scope="col"/"row"`; tabelas complexas com `headers`/`id`. |
| 5.6.4 | Título de tabela | REC | 2.4.6 (AA), 2.4.10 (AAA) | Toda tabela tem título/legenda que a identifica. |
| 5.6.5 | Título de tabela associado | REQ | 1.3.1 (A) | O título está programaticamente ligado à tabela — `<caption>` ou `aria-labelledby`, não um `h3` solto acima. |
| 5.6.6 | Descrição para tabelas complexas | REC | 3.1.5 (AAA) | Tabela com múltiplos níveis de cabeçalho ganha descrição textual da sua estrutura. |

## 5.7 Links e navegação

| Item | Nome | Classe | WCAG | Verificação prática |
|---|---|---|---|---|
| 5.7.1 | Semântica de link | REQ | 1.3.1 (A) | `<a href>` real. `div` com `onclick` não é link. |
| 5.7.2 | Uso de links | REQ | 1.3.1 (A) | Link navega; botão executa ação. Trocar os dois quebra a expectativa de teclado (Enter × Espaço) e de menu de contexto. |
| 5.7.3 | Propósito do link sem contexto | REC ⊃ 5.7.4 | 2.4.4 (A), 2.4.9 (AAA) | O texto do link sozinho já informa destino. Nada de "clique aqui", "saiba mais", "leia". |
| 5.7.4 | Propósito do link no contexto | REQ | 2.4.4 (A) | No mínimo, texto + contexto programático (célula, parágrafo, item de lista) informam o destino. |
| 5.7.5 | Links com identificação consistente | REC | 3.2.4 (AA), 2.4.9 (AAA) | Textos iguais não podem levar a destinos diferentes. |
| 5.7.6 | Links que abrem em nova guia | REC | 2.4.4 (A), 2.4.9, 3.2.5 (AAA) | Evitar; se houver, avisar no texto ou no nome acessível. |
| 5.7.7 | Links para arquivos não HTML | REC | 2.4.4 (A), 2.4.9 (AAA) | Informar formato e tamanho (PDF, 2,3 MB). |
| 5.7.8 | Links para sites externos | REC | 2.4.4 (A), 2.4.9 (AAA) | Sinalizar saída do domínio. |
| 5.7.9 | Texto complementar do link | REC | 2.4.4 (A) | Não repetir o mesmo texto em `title`/`aria-label` idêntico ao visível — gera leitura duplicada. |
| 5.7.10 | Links adjacentes | REC | 2.4.4 (A) | Evitar dois links vizinhos para o mesmo destino (imagem + título do card → um só link). |
| 5.7.11 | Links para contornar blocos | REC | 2.4.1 (A) | Skip link na página. |
| 5.7.12 | Contornar blocos em conjunto de páginas | REQ | 2.4.1 (A) | Mecanismo para pular blocos repetidos entre páginas — skip link como primeiro elemento focável, visível ao receber foco. |
| 5.7.13 | Alternativas para localização | REQ | 2.4.5 (AA) | Mais de uma forma de chegar a uma página (menu + busca + mapa do site), salvo se for etapa de processo. |
| 5.7.14 | Localização em conjunto de páginas | REC | 2.4.8 (AAA) | Breadcrumb / `aria-current="page"` indicando onde a pessoa está. |
| 5.7.15 | Navegação consistente | REQ | 3.2.3 (AA) | Mecanismos repetidos mantêm a mesma ordem relativa entre páginas. |
| 5.7.16 | Ajuda consistente | REQ | 3.2.6 (A) | Contato, FAQ, chat: mesma ordem relativa em todas as páginas onde aparecem. Critério novo da WCAG 2.2. |

## 5.8 Botões e controles

| Item | Nome | Classe | WCAG | Verificação prática |
|---|---|---|---|---|
| 5.8.1 | Semântica de botão | REQ | 1.3.1 (A) | `<button>` real. `div role="button"` exige tratar Enter, Espaço e `tabindex` manualmente — e quase sempre falta algo. |
| 5.8.2 | Uso de botões | REQ | 1.3.1 (A) | Botão aciona funcionalidade, não navega. |
| 5.8.3 | Propósito do botão | REQ | 4.1.2 (A), 2.4.6 (AA) | Nome acessível que informa a função. Botão só com ícone **precisa** de `aria-label`, com o ícone `aria-hidden`. |
| 5.8.4 | Identificação consistente na página | REC | 3.2.4 (AA) | Mesma função → mesmo rótulo dentro da página. |
| 5.8.5 | Identificação consistente entre páginas | REQ | 3.2.4 (AA) | Mesma função → mesmo rótulo em todo o sistema ("Enviar" em uma tela e "Confirmar" em outra para a mesma ação é achado). |
| 5.8.6 | Área de acionamento (aprimorada) | REC ⊃ 5.8.7 | 2.5.8 (AA), 2.5.5 (AAA) | 44×44 px CSS. É meta, **não** critério de reprovação. |
| 5.8.7 | Área de acionamento (mínima) | REQ | 2.5.8 (AA) | **24×24 px CSS**, ou espaçamento que garanta 24px de alvo efetivo, ou controle equivalente na página, ou elemento inline em bloco de texto. Este é o piso exigível. |
| 5.8.8 | Mudança de contexto previsível | REC | 3.2.1, 3.2.2 (A), 3.2.5 (AAA) | Mudança de contexto só a pedido explícito, ou desativável. |
| 5.8.9 | Mudança de contexto no foco | REQ | 3.2.1 (A) | Receber foco não pode abrir modal, submeter, navegar ou reordenar a tela. |
| 5.8.10 | Mudança de contexto na entrada | REQ | 3.2.2 (A) | Selecionar num `select` ou digitar não dispara navegação/submit sem aviso prévio. Padrão comum e frequentemente violado. |
| 5.8.11 | Acionamento por ponteiro único | REQ | 2.5.2 (A) | Ação completa no `up-event`, com possibilidade de abortar arrastando para fora. Nada de disparar no `mousedown`. |
| 5.8.12 | Operação por gestos de ponteiro | REQ | 2.5.1 (A) | Swipe/pinça/desenho têm alternativa de toque simples (setas, botões), salvo se essenciais. Carrossel só por swipe é achado. |
| 5.8.13 | Operação por movimento de arrastar | REQ | 2.5.7 (AA) | Drag-and-drop tem alternativa sem arrastar (botões mover, seleção + destino, campo de ordem). Critério novo da 2.2 — atinge kanban, reordenação de listas, sliders. |
| 5.8.14 | Operação por movimento | REQ | 2.5.4 (A) | Função acionada por agitar/inclinar o dispositivo tem alternativa por componente e pode ser desabilitada. |
| 5.8.15 | Controles com retorno | REC | 1.3.3 (A), 4.1.3 (AA) | Todo acionamento produz retorno perceptível (estado, mensagem, carregamento). |

## 5.9 Formulários e entrada de dados

O grupo de maior criticidade prática: é onde o usuário assume risco jurídico, financeiro
e de perda de trabalho.

| Item | Nome | Classe | WCAG | Verificação prática |
|---|---|---|---|---|
| 5.9.1 | Rótulo de campo | REQ | 3.3.2, 4.1.2 (A) | Todo campo tem rótulo que o identifica; excepcionalmente, propósito visualmente evidente + nome acessível. |
| 5.9.2 | Rótulo de campo previsível | REQ | 1.3.2, 3.3.2 (A) | Rótulo em posição consistente (acima/à esquerda) em todo o formulário. |
| 5.9.3 | Rótulo de campo associado | REQ | 1.3.1 (A) | `<label for>` ↔ `id`, ou envolvimento, ou `aria-labelledby`. Texto solto ao lado não conta. |
| 5.9.4 | Rótulo de campo descritivo | REQ | 2.4.6 (A) | O rótulo identifica o propósito — sozinho ou junto com o agrupamento (`fieldset`/`legend`). |
| 5.9.5 | Textos de ajuda previsíveis | REQ | 3.3.2 (A) | Instruções e máscaras em posição consistente e associadas via `aria-describedby`. Instrução crítica **antes** do campo. |
| 5.9.6 | Campos relacionados | REQ | 1.3.1 (A) | Rádios, checkboxes e grupos com `fieldset` + `legend` (ou `role="group"` + nome). |
| 5.9.7 | Campos obrigatórios | REQ | 3.3.2 (A) | Obrigatoriedade perceptível por todos: marca visual + `required`/`aria-required`, com legenda explicando o símbolo. Asterisco sozinho, sem equivalente programático, não atende. |
| 5.9.8 | Tipo de dado determinado | REQ | 1.3.5 (AA) | `type` correto e `autocomplete` com os tokens padronizados em campos de dados pessoais — habilita preenchimento automático e ícones personalizados. |
| 5.9.9 | Mensagem de erro descritiva | REQ | 3.3.1 (A) | O erro é texto, identifica o campo e diz qual é o problema. Só borda vermelha não atende. |
| 5.9.10 | Sugestão de correção | REQ | 3.3.3 (AA) | Quando o sistema sabe o formato esperado, ele informa ("use dd/mm/aaaa"), salvo risco de segurança. |
| 5.9.11 | Prevenção de erro | REC ⊃ 5.9.12 | 3.3.4 (AA), 3.3.6 (AAA) | Todo formulário permite reverter, revisar ou confirmar. |
| 5.9.12 | Prevenção de erro para formulários críticos | REQ | 3.3.4 (AA) | Obrigatório em formulários com efeito jurídico, financeiro, exclusão de dados ou envio de prova/teste. Em sistema de tribunal, praticamente todo peticionamento cai aqui. |
| 5.9.13 | Ajuda contextual | REC | 3.3.5 (AAA) | Instruções e dicas disponíveis no ponto de uso. |
| 5.9.14 | Botão de submissão | REC | 3.2.2 (A) | Existe botão explícito de envio — não submeter só por Enter ou por mudança de campo. |
| 5.9.15 | Reentrada de dados | REQ | 3.3.7 (A) | Não pedir de novo o que já foi informado no mesmo processo: preencher automaticamente ou oferecer para seleção. Exceções: essencial, segurança, dado expirado. Critério novo da 2.2 — atinge wizards e formulários multi-etapa. |
| 5.9.16 | Validação sensorial ou por movimento | REQ | 1.1.1, 2.5.4 (A), 2.5.6 (AAA) | Validação que exige percepção ou motricidade específica tem alternativa (ver também CAPTCHA no Anexo A). |
| 5.9.17 | Autenticação acessível (aprimorado) | REC ⊃ 5.9.18 | 3.3.8 (AA), 3.3.9 (AAA) | Autenticação sem qualquer teste de função cognitiva. |
| 5.9.18 | Autenticação acessível (mínima) | REQ | 3.3.8 (AA) | Login não pode exigir memorizar/transcrever/calcular sem alternativa. Precisa permitir colar senha e funcionar com gerenciador de senhas. Bloquear paste no campo de senha é violação. Reconhecimento de objeto e conteúdo do próprio usuário são exceções. Critério novo da 2.2. |

## 5.10 Apresentação

| Item | Nome | Classe | WCAG | Verificação prática |
|---|---|---|---|---|
| 5.10.1 | Características sensoriais | REQ | 1.3.3 (A) | Instruções não dependem só de forma, cor, tamanho, posição visual, orientação ou som ("clique no botão à direita" → nomeie o botão). |
| 5.10.2 | Ordem de apresentação | REQ | 1.3.2 (A) | A ordem visual preserva significado e operabilidade. |
| 5.10.3 | Orientação de exibição | REQ | 1.3.4 (AA) | Não travar retrato ou paisagem, salvo quando essencial. |
| 5.10.4 | Design responsivo | REQ | 1.4.10 (AA) | Sem rolagem em duas dimensões nem perda de conteúdo: **320 px CSS** de largura (rolagem vertical) e **256 px** de altura (rolagem horizontal). Exceções: mapas, diagramas, vídeos, jogos, tabelas de dados. |
| 5.10.5 | Área do indicador de foco visível | REC | 2.4.13 (AAA) | Indicador com área ≥ perímetro do elemento × 2 px de espessura. |

## 5.11 Uso de cores

| Item | Nome | Classe | WCAG | Verificação prática |
|---|---|---|---|---|
| 5.11.1 | Uso de cores | REQ | 1.4.1 (A) | Cor nunca é o único meio de transmitir informação, indicar ação, pedir resposta ou distinguir elemento. Campo com erro só em vermelho, status só por bolinha colorida, link no texto distinguido só por cor: todos achados. |
| 5.11.2 | Contraste para texto (aprimorado) | REC ⊃ 5.11.3 | 1.4.3 (AA), 1.4.6 (AAA) | 7:1 texto normal; 4,5:1 texto grande. |
| 5.11.3 | Contraste para texto (mínimo) | REQ | 1.4.3 (AA) | **4,5:1** texto normal; **3:1** texto grande (≥ 18pt, ou ≥ 14pt em negrito). Exceção: logotipo e texto em plano secundário/inativo. |
| 5.11.4 | Contraste para componentes | REQ | 1.4.11 (AA) | 3:1 entre componente e fundo **e entre seus estados**. Borda de input, checkbox, toggle, estado hover/checked. Componentes inativos são exceção. |
| 5.11.5 | Contraste para objetos gráficos | REQ | 1.4.11 (AA) | 3:1 nas partes de ícones e gráficos necessárias à compreensão. Séries de gráfico precisam contrastar entre si. |
| 5.11.6 | Contraste para indicador de foco | REQ | 1.4.11 (AA), 2.4.13 (AAA) | 3:1 do indicador contra o fundo **e** entre estado com e sem foco. |

## 5.12 Conteúdo textual

Os espaçamentos abaixo são **Requisito**, não preferência tipográfica.

| Item | Nome | Classe | WCAG | Verificação prática |
|---|---|---|---|---|
| 5.12.1 | Espaçamento entre linhas | REQ | 1.4.12 (AA), 1.4.8 (AAA) | `line-height` ≥ 1,5 em blocos de texto (ou mecanismo de configuração sem quebra de leiaute). |
| 5.12.2 | Espaçamento entre parágrafos | REQ | 1.4.12 (AA), 1.4.8 (AAA) | Espaço entre parágrafos ≥ 2× o tamanho da fonte. |
| 5.12.3 | Espaçamento entre letras | REQ | 1.4.12 (AA) | `letter-spacing` ≥ 0,12em. |
| 5.12.4 | Espaçamento entre palavras | REQ | 1.4.12 (AA) | `word-spacing` ≥ 0,16em. |
| 5.12.5 | Alinhamento de blocos de texto | REC | 1.4.8 (AAA) | Alinhado à esquerda em português. Justificado cria "rios" que dificultam leitura para dislexia. |
| 5.12.6 | Largura de blocos de texto | REQ | 1.4.10 (AA), 1.4.8 (AAA) | ≤ 80 caracteres por linha (ou mecanismo de ajuste). |
| 5.12.7 | Texto redimensionado | REQ | 1.4.4 (AA), 1.4.8 (AAA) | Zoom de texto até 200% sem perda de conteúdo/função e sem rolagem horizontal. Unidades relativas (`rem`/`em`); evitar `px` fixo em texto e alturas fixas em contêineres de texto. |
| 5.12.8 | Semântica de texto especial | REQ | 1.3.1 (A) | `strong`, `em`, `abbr`, `q`, `blockquote`, `code` marcados semanticamente, não só via CSS. |
| 5.12.9 | Uso de texto especial | REQ | 1.3.1 (A) | Esses elementos usados pelo seu propósito real, não por aparência. |
| 5.12.10 | Definições de significado | REC | 3.1.3 (AAA) | Mecanismo para definir jargão e expressões incomuns — relevante em domínio jurídico. |
| 5.12.11 | Siglas e abreviaturas | REC | 3.1.4 (AAA) | Mecanismo para expandir siglas na primeira ocorrência. |
| 5.12.12 | Nível de linguagem | REC | 3.1.5 (AAA) | Linguagem simples e clara, ou versão simplificada alternativa. |
| 5.12.13 | Pronúncia identificada | REC | 3.1.6 (AAA) | Mecanismo para indicar pronúncia quando o sentido depende dela. |

## 5.13 Codificação e marcação semântica

| Item | Nome | Classe | WCAG | Verificação prática |
|---|---|---|---|---|
| 5.13.1 | Título da página | REQ | 2.4.2 (A) | `<title>` único e descritivo. Em SPA, atualizar o título a cada mudança de rota — não fazer isso é o achado mais comum em aplicações de página única. |
| 5.13.2 | Idioma da página | REQ | 3.1.1 (A) | `<html lang="pt-BR">`. |
| 5.13.3 | Idioma das partes | REQ | 3.1.2 (AA) | `lang` nos trechos em outro idioma. Nome próprio, termo técnico e estrangeirismo incorporado são exceção. |
| 5.13.4 | Título do frame | REQ | 1.3.1, 4.1.2 (A) | Todo `iframe` com `title` único e descritivo. |
| 5.13.5 | Zoom não bloqueado | REQ | 1.4.4, 1.4.10 (AA) | Sem `user-scalable=no` nem `maximum-scale` limitando na `viewport`. |
| 5.13.6 | Ordem de leitura | REQ | 1.3.2 (A) | Ordem no DOM lógica e coerente com a apresentação. |
| 5.13.7 | Texto visível no nome acessível | REQ | 2.5.3 (A) | O nome acessível contém o texto visível, de preferência no início. Botão que mostra "Salvar" com `aria-label="Confirmar alterações"` quebra o comando de voz. |
| 5.13.8 | Mensagens de status | REQ | 4.1.3 (AA) | Sucesso, erro, resultado de busca e progresso anunciados sem mover foco: `role="status"` / `aria-live="polite"`; `role="alert"` só para o que é urgente. O contêiner precisa existir no DOM **antes** do conteúdo chegar. |
| 5.13.9 | Propósito identificável | REC | 1.3.6 (AAA) | Finalidade de componentes, ícones e regiões determinável programaticamente. |
| 5.13.10 | Componentes com nome acessível | REQ | 4.1.2 (A) | Todo componente que precisa ser identificado tem nome acessível. |
| 5.13.11 | Elementos nativos | REC ⊃ 5.13.12, 5.13.13 | 1.3.1 (A) | Usar elementos HTML nativos. **Atendendo a esta Recomendação, dois Requisitos caem junto** — é o melhor retorno de esforço da norma inteira. |
| 5.13.12 | Semântica de componentes customizados | REQ | 1.3.1, 4.1.2 (A) | Componente customizado expõe papel, estados, propriedades e valores — e suas mudanças — programaticamente, seguindo o padrão do APG. |
| 5.13.13 | Estados, propriedades e valores de componentes customizados | REQ | 4.1.2 (A) | O que o usuário pode definir deve ser definível programaticamente (tecnologia assistiva consegue alterar, não só ler). |

## 5.14 Áudio e vídeo

| Item | Nome | Classe | WCAG | Verificação prática |
|---|---|---|---|---|
| 5.14.1 | Alternativa em texto para áudio | REQ | 1.2.1 (A) | Áudio pré-gravado tem transcrição completa. |
| 5.14.2 | Legendas descritivas para vídeo | REQ | 1.2.2 (A) | *Closed caption* com diálogos + efeitos sonoros relevantes. Legenda automática não revisada não atende. |
| 5.14.3 | Transcrição para vídeo | REC | 1.2.1, 1.2.3 (A), 1.2.8 (AAA) | Transcrição textual do conteúdo visual e sonoro. |
| 5.14.4 | Audiodescrição para vídeo | REQ | 1.2.1, 1.2.3 (A), 1.2.5 (AA) | Audiodescrição do conteúdo visual, salvo se o áudio original já for suficiente. |
| 5.14.5 | Audiodescrição estendida | REC | 1.2.3 (A), 1.2.5 (AA), 1.2.7 (AAA) | Versão estendida quando as pausas naturais não bastam. |
| 5.14.6 | Janela de Libras | REC | 1.2.6 (AAA) | Libras em mídia sincronizada pré-gravada. Em conteúdo institucional público, verifique também exigências específicas de Libras fora da NBR 17225. |
| 5.14.7 | Controle de áudio | REQ | 1.4.2 (A) | Áudio automático > 3s precisa de pausar/parar/silenciar independente do volume do sistema. |
| 5.14.8 | Áudio sem ruído | REC | 1.4.7 (AAA) | Fundo ≥ 20 dB abaixo da fala, ou desligável. |
| 5.14.9 | Legendas para áudio e vídeo ao vivo | REQ | 1.2.4 (AA) | Transmissão ao vivo com legendas — inclui sessões, audiências e webinars transmitidos. |
| 5.14.10 | Transcrição para áudio ao vivo | REC | 1.2.9 (AAA) | Transcrição em tempo real. |

## 5.15 Animação

| Item | Nome | Classe | WCAG | Verificação prática |
|---|---|---|---|---|
| 5.15.1 | Controle de animação | REQ | 2.2.2 (A) | Animação automática > 5s em paralelo com outro conteúdo precisa de pausar/parar/ocultar. Carrossel automático é o caso clássico. |
| 5.15.2 | Animações acionadas por interação | REC | 2.3.3 (AAA) | Respeitar `prefers-reduced-motion`; desativar parallax, transições de rota e movimento disparado por scroll. |
| 5.15.3 | Flash intermitente | REC ⊃ 5.15.4 | 2.3.1 (A), 2.3.2 (AAA) | Nada pisca mais de 3× por segundo. |
| 5.15.4 | Flash intermitente limitado | REQ | 2.3.1 (A) | Piscadas abaixo dos limites de flash geral e flash vermelho. Risco de convulsão fotossensível. |

## 5.16 Tempo

| Item | Nome | Classe | WCAG | Verificação prática |
|---|---|---|---|---|
| 5.16.1 | Limite de tempo | REC ⊃ 5.16.2 | 2.2.1 (A), 2.2.3 (AAA) | Sem limite de tempo, salvo se essencial ou evento em tempo real. |
| 5.16.2 | Limite de tempo ajustável | REQ | 2.2.1 (A) | Mecanismo para desligar, ajustar ou estender o limite **antes** de atingi-lo. Exceções: limite intrínseco, essencial, ou > 20 h. Sessão que expira em 15 min sem aviso e sem opção de estender é achado. |
| 5.16.3 | Controle de atualização | REQ | 2.2.2 (A) | Auto-refresh e polling que alteram a tela precisam de pausar/parar/ocultar ou controle de frequência. |
| 5.16.4 | Interrupções | REC | 2.2.4 (AAA) | Adiar ou bloquear interrupções não solicitadas, salvo emergência. |
| 5.16.5 | Reautenticação | REC | 2.2.1 (A), 2.2.5 (AAA) | Após reautenticar, a pessoa retoma sem perder dados. |
| 5.16.6 | Tempo de inatividade | REC | 2.2.1 (A), 2.2.6 (AAA) | Sem perda de dados por inatividade, ou aviso prévio, ou limite ≥ 20 h. |

---

## Anexo A — Itens problemáticos para acessibilidade

Informativo, mas é onde a maioria dos sistemas reais tropeça. Levante estes pontos
proativamente, mesmo sem ver o código.

- **A.1.1 CAPTCHA** — precisa ser identificado como CAPTCHA, informar que tipo de tarefa
  exige, e oferecer alternativa em outra modalidade. A alternativa não pode ser tão difícil
  quanto o original (áudio ruidoso, desafio lógico complexo).
- **A.1.2 Reconhecimento facial / biometria** — as instruções de posicionamento precisam
  ser acessíveis a leitor de tela, e deve existir outra forma de identificação que não
  dependa exclusivamente de biometria. Relevante para qualquer sistema com prova de vida.
- **A.1.3 Conteúdo só em foco ou hover** — tooltip via atributo `title` é barreira: não
  aparece no toque e o suporte em leitor de tela é inconsistente.
- **A.1.4 Conteúdo inserido por CSS** — texto em `::before`/`::after` pode não ser lido e
  some se o CSS falhar. Conteúdo pertence ao HTML.
- **A.1.5 Conteúdo de terceiros** — widgets, vídeos e iframes externos não têm
  conformidade garantida. Prefira fontes acessíveis; se inevitável, avise o usuário.
- **A.1.6 Componentes customizados** — modais, pop-ups e carrosséis próprios carregam para
  o desenvolvedor toda a semântica e o comportamento que o navegador daria de graça.
  Siga o APG à risca ou use componente de biblioteca já validada.
- **A.1.7 Arquivos acessíveis** — a página pode estar conforme e o PDF anexo não estar.
  PDF de decisão, edital ou formulário precisa de estrutura de tags, ordem de leitura e
  texto real (não imagem escaneada sem OCR).
- **A.1.8 Tabelas para leiaute** — se usadas, remover toda a semântica.
- **A.1.9 Marcação conforme a especificação** — a WCAG 2.2 removeu o C.S. 4.1.1, então
  erro de marcação não é mais reprovação automática. Ainda assim, `id` duplicado, ARIA
  inválida e aninhamento incorreto quebram a árvore de acessibilidade — verifique e
  reporte como qualidade, não como não conformidade.

## Anexo B — Desempenho funcional

Informativo. Serve para validar por **cenário de uso** em vez de item a item — útil quando
alguém pergunta "está acessível?" sem querer uma lista de 110 linhas. Para cada modo,
existe pelo menos uma forma de operar o sistema: sem visão; com visão limitada; sem
percepção de cor; sem audição; com audição limitada; sem voz; com manipulação ou força
limitadas; com alcance limitado; com epilepsia fotossensível; com cognição limitada.

Uma boa auditoria narra o percurso: *"uma pessoa cega consegue completar o cadastro? Onde
ela trava?"* — isso revela problemas de fluxo que a varredura item a item não captura.

## Definições da norma que mudam a análise

Vários itens só fazem sentido com a definição exata em mãos:

- **Componente customizado** — componente que não usa comportamento e semântica nativos do
  HTML. É o gatilho de 5.1.15, 5.1.16, 5.13.12 e 5.13.13.
- **Formulário crítico** — envolve responsabilidade jurídica, transação financeira,
  modificação/exclusão de dados do usuário, ou envio de respostas de teste. Aciona o
  Requisito 5.9.12.
- **Mudança de contexto** — abrir janela, mover foco para outro componente, ir para outra
  página ou reorganizar substancialmente a tela. Expandir submenu ou exibir mensagem de
  erro **não** é, por si só, mudança de contexto.
- **Texto em tamanho grande** — ≥ 18pt normal ou ≥ 14pt em negrito.
- **Conteúdo adicional** — conteúdo oculto que aparece na interação (tooltip, submenu não
  modal). Gatilho e conteúdo formam um único componente.
- **Teste de função cognitiva** — memorizar, transcrever, soletrar, calcular, resolver
  problema. Nome, e-mail e telefone **não** contam, por serem dados pessoais consistentes.
- **Elementos focáveis** — recebem foco por teclado (Tab). O que só recebe foco por
  programação ou ponteiro não entra nesta contagem.
- **Essencial** — se removido, altera profundamente a informação ou a funcionalidade, e
  não há outra forma de obtê-la. É a base de quase toda exceção da norma — e o argumento
  mais abusado. Exija demonstração antes de aceitar "é essencial".
