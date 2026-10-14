# Checklist de conformidade — ABNT NBR 17225:2025

Modelo preenchível para homologação e aceite. Adapte o cabeçalho ao processo da
organização. Baseado na estrutura do Anexo C da norma.

**Preenchimento:** `C` = Conforme · `NC` = Não conforme · `N/A` = Não aplicável ·
`V` = A verificar (exige teste manual/ambiente real)

**Regra de conformidade:** conformidade **regular** exige todos os itens `REQ` como `C`
ou `N/A`. Conformidade **plena** exige também os `REC`, e cada `REC` não atendida precisa
de justificativa registrada no campo de observação.

---

| Sistema / módulo | |
|---|---|
| Versão / release | |
| Telas ou fluxos avaliados | |
| Data da avaliação | |
| Responsável pelo preenchimento | |
| Revisor técnico | |
| Ferramentas utilizadas | |
| Leitor(es) de tela testado(s) | |

---

## 5.1 Interação por teclado

| # | Item | Classe | WCAG | Status | Observação |
|---|---|---|---|---|---|
| 5.1.1 | Indicador de foco visível em todos os elementos focáveis | REQ | 2.4.7 (AA) | | |
| 5.1.2 | Elemento em foco totalmente visível | REC | 2.4.11/2.4.12 | | |
| 5.1.3 | Elemento em foco ao menos parcialmente visível | REQ | 2.4.11 (AA) | | |
| 5.1.4 | Ordem de foco lógica e previsível | REQ | 2.4.3 (A) | | |
| 5.1.5 | Só elementos interativos são focáveis | REC | 2.1.1/2.1.3 | | |
| 5.1.6 | Sem armadilhas de foco | REQ | 2.1.2 (A) | | |
| 5.1.7 | Sem conteúdo exibido só por hover/foco | REC | 1.4.13 (AA) | | |
| 5.1.8 | Conteúdo adicional persistente | REQ | 1.4.13 (AA) | | |
| 5.1.9 | Conteúdo adicional dispensável | REQ | 1.4.13 (AA) | | |
| 5.1.10 | Sem atalho de tecla única | REC | 2.1.4 (A) | | |
| 5.1.11 | Atalho de tecla única desativável/remapeável | REQ | 2.1.4 (A) | | |
| 5.1.12 | Acessibilidade total por teclado | REC | 2.1.1/2.1.3 | | |
| 5.1.13 | Exceções de teclado apenas quando não há equivalente | REQ | 2.1.1 (A) | | |
| 5.1.14 | Sem restrição de mecanismo de entrada | REC | 2.5.6 (AAA) | | |
| 5.1.15 | Componentes customizados com comportamento previsível | REC | 2.1.1/2.1.3 | | |
| 5.1.16 | Instruções para componentes customizados complexos | REQ | 3.3.2 (A) | | |

## 5.2 Imagens

| # | Item | Classe | WCAG | Status | Observação |
|---|---|---|---|---|---|
| 5.2.1 | Imagens de conteúdo com texto alternativo descritivo | REQ | 1.1.1 (A) | | |
| 5.2.2 | Imagens funcionais descrevem a função | REQ | 1.1.1/2.4.4 (A) | | |
| 5.2.3 | Imagens decorativas ignoradas por tecnologia assistiva | REQ | 1.1.1 (A) | | |
| 5.2.4 | Imagens complexas com descrição detalhada | REQ | 1.1.1 (A) | | |
| 5.2.5 | Imagens de texto evitadas ou com alternativa equivalente | REQ | 1.1.1/1.4.5 | | |
| 5.2.6 | Mapas de imagem com alternativa por área | REQ | 1.1.1 (A) | | |

## 5.3 Cabeçalhos

| # | Item | Classe | WCAG | Status | Observação |
|---|---|---|---|---|---|
| 5.3.1 | Cabeçalhos com semântica programática | REQ | 1.3.1 (A) | | |
| 5.3.2 | Cabeçalhos identificam seções | REQ | 1.3.1/2.4.6 | | |
| 5.3.3 | Um único h1 identificando a página | REC | 2.4.6/2.4.10 | | |
| 5.3.4 | Toda seção tem cabeçalho | REC | 2.4.10 (AAA) | | |
| 5.3.5 | Hierarquia de cabeçalhos sem pulo de nível | REQ | 1.3.1/2.4.6 | | |

## 5.4 Regiões

| # | Item | Classe | WCAG | Status | Observação |
|---|---|---|---|---|---|
| 5.4.1 | Regiões com semântica correta | REQ | 1.3.1 (A) | | |
| 5.4.2 | Regiões usadas conforme o tipo de conteúdo | REQ | 1.3.1 (A) | | |
| 5.4.3 | Todo conteúdo dentro de regiões | REC | 1.3.6 (AAA) | | |
| 5.4.4 | Uma única região banner / main / contentinfo | REC | 1.3.1/1.3.6 | | |
| 5.4.5 | Regiões do mesmo tipo com nome acessível único | REQ | 1.3.1/4.1.2 (A) | | |

## 5.5 Listas

| # | Item | Classe | WCAG | Status | Observação |
|---|---|---|---|---|---|
| 5.5.1 | Listas com semântica correta (ul/ol/dl) | REQ | 1.3.1 (A) | | |
| 5.5.2 | Listas usadas para agrupar itens de mesma natureza | REQ | 1.3.1 (A) | | |

## 5.6 Tabelas

| # | Item | Classe | WCAG | Status | Observação |
|---|---|---|---|---|---|
| 5.6.1 | Tabelas de dados com semântica programática | REQ | 1.3.1 (A) | | |
| 5.6.2 | Sem tabela de leiaute com semântica | REQ | 1.3.1 (A) | | |
| 5.6.3 | Células associadas aos cabeçalhos de linha e coluna | REQ | 1.3.1 (A) | | |
| 5.6.4 | Tabelas com título/legenda | REC | 2.4.6/2.4.10 | | |
| 5.6.5 | Título associado programaticamente à tabela | REQ | 1.3.1 (A) | | |
| 5.6.6 | Tabelas complexas com descrição textual | REC | 3.1.5 (AAA) | | |

## 5.7 Links e navegação

| # | Item | Classe | WCAG | Status | Observação |
|---|---|---|---|---|---|
| 5.7.1 | Links com semântica programática | REQ | 1.3.1 (A) | | |
| 5.7.2 | Links usados para navegação | REQ | 1.3.1 (A) | | |
| 5.7.3 | Propósito do link claro sem contexto | REC | 2.4.4/2.4.9 | | |
| 5.7.4 | Propósito do link claro no contexto | REQ | 2.4.4 (A) | | |
| 5.7.5 | Links iguais levam ao mesmo destino | REC | 3.2.4 (AA) | | |
| 5.7.6 | Abertura em nova guia informada | REC | 2.4.4/3.2.5 | | |
| 5.7.7 | Links para arquivos informam formato e tamanho | REC | 2.4.4 (A) | | |
| 5.7.8 | Links externos sinalizados | REC | 2.4.4 (A) | | |
| 5.7.9 | Sem texto complementar redundante | REC | 2.4.4 (A) | | |
| 5.7.10 | Sem links adjacentes ao mesmo destino | REC | 2.4.4 (A) | | |
| 5.7.11 | Mecanismo para contornar blocos na página | REC | 2.4.1 (A) | | |
| 5.7.12 | Skip link funcional para blocos repetidos | REQ | 2.4.1 (A) | | |
| 5.7.13 | Mais de uma forma de localizar uma página | REQ | 2.4.5 (AA) | | |
| 5.7.14 | Indicação de localização (breadcrumb / aria-current) | REC | 2.4.8 (AAA) | | |
| 5.7.15 | Navegação consistente entre páginas | REQ | 3.2.3 (AA) | | |
| 5.7.16 | Mecanismos de ajuda em ordem consistente | REQ | 3.2.6 (A) | | |

## 5.8 Botões e controles

| # | Item | Classe | WCAG | Status | Observação |
|---|---|---|---|---|---|
| 5.8.1 | Botões com semântica programática | REQ | 1.3.1 (A) | | |
| 5.8.2 | Botões usados para acionar funcionalidade | REQ | 1.3.1 (A) | | |
| 5.8.3 | Botões com nome acessível que informa a função | REQ | 4.1.2/2.4.6 | | |
| 5.8.4 | Identificação consistente na página | REC | 3.2.4 (AA) | | |
| 5.8.5 | Identificação consistente entre páginas | REQ | 3.2.4 (AA) | | |
| 5.8.6 | Área de acionamento ≥ 44×44 px | REC | 2.5.5 (AAA) | | |
| 5.8.7 | Área de acionamento ≥ 24×24 px (ou espaçamento equivalente) | REQ | 2.5.8 (AA) | | |
| 5.8.8 | Mudança de contexto só a pedido do usuário | REC | 3.2.1/3.2.2 | | |
| 5.8.9 | Foco não provoca mudança de contexto | REQ | 3.2.1 (A) | | |
| 5.8.10 | Entrada de dados não provoca mudança de contexto sem aviso | REQ | 3.2.2 (A) | | |
| 5.8.11 | Acionamento concluído no up-event, cancelável | REQ | 2.5.2 (A) | | |
| 5.8.12 | Alternativa a gestos multiponto e baseados em caminho | REQ | 2.5.1 (A) | | |
| 5.8.13 | Alternativa ao movimento de arrastar | REQ | 2.5.7 (AA) | | |
| 5.8.14 | Alternativa a acionamento por movimento do dispositivo | REQ | 2.5.4 (A) | | |
| 5.8.15 | Controles com retorno perceptível | REC | 1.3.3/4.1.3 | | |

## 5.9 Formulários e entrada de dados

| # | Item | Classe | WCAG | Status | Observação |
|---|---|---|---|---|---|
| 5.9.1 | Todo campo tem rótulo que o identifica | REQ | 3.3.2/4.1.2 (A) | | |
| 5.9.2 | Rótulos em posição previsível | REQ | 1.3.2/3.3.2 (A) | | |
| 5.9.3 | Rótulos associados programaticamente | REQ | 1.3.1 (A) | | |
| 5.9.4 | Rótulos descrevem o propósito do campo | REQ | 2.4.6 (A) | | |
| 5.9.5 | Textos de ajuda em posição previsível e associados | REQ | 3.3.2 (A) | | |
| 5.9.6 | Campos relacionados agrupados programaticamente | REQ | 1.3.1 (A) | | |
| 5.9.7 | Campos obrigatórios identificados de forma perceptível a todos | REQ | 3.3.2 (A) | | |
| 5.9.8 | Tipo de dado e autocomplete determinados programaticamente | REQ | 1.3.5 (AA) | | |
| 5.9.9 | Mensagens de erro em texto, identificando o campo | REQ | 3.3.1 (A) | | |
| 5.9.10 | Mensagens de erro sugerem correção | REQ | 3.3.3 (AA) | | |
| 5.9.11 | Todo formulário permite reverter/revisar/confirmar | REC | 3.3.4/3.3.6 | | |
| 5.9.12 | Formulários críticos permitem revisar e confirmar | REQ | 3.3.4 (AA) | | |
| 5.9.13 | Ajuda contextual disponível | REC | 3.3.5 (AAA) | | |
| 5.9.14 | Botão explícito de submissão | REC | 3.2.2 (A) | | |
| 5.9.15 | Sem reentrada de dados já informados no processo | REQ | 3.3.7 (A) | | |
| 5.9.16 | Validação sensorial/por movimento com alternativa | REQ | 1.1.1/2.5.4 (A) | | |
| 5.9.17 | Autenticação sem teste de função cognitiva | REC | 3.3.8/3.3.9 | | |
| 5.9.18 | Autenticação com alternativa ao teste cognitivo (permite colar senha) | REQ | 3.3.8 (AA) | | |

## 5.10 Apresentação

| # | Item | Classe | WCAG | Status | Observação |
|---|---|---|---|---|---|
| 5.10.1 | Instruções não dependem só de características sensoriais | REQ | 1.3.3 (A) | | |
| 5.10.2 | Ordem de apresentação preserva significado | REQ | 1.3.2 (A) | | |
| 5.10.3 | Orientação de tela não restrita | REQ | 1.3.4 (AA) | | |
| 5.10.4 | Reflow sem perda em 320 px de largura / 256 px de altura | REQ | 1.4.10 (AA) | | |
| 5.10.5 | Área do indicador de foco adequada | REC | 2.4.13 (AAA) | | |

## 5.11 Uso de cores

| # | Item | Classe | WCAG | Status | Observação |
|---|---|---|---|---|---|
| 5.11.1 | Cor nunca é o único meio de transmitir informação | REQ | 1.4.1 (A) | | |
| 5.11.2 | Contraste de texto ≥ 7:1 | REC | 1.4.6 (AAA) | | |
| 5.11.3 | Contraste de texto ≥ 4,5:1 (3:1 texto grande) | REQ | 1.4.3 (AA) | | |
| 5.11.4 | Contraste de componentes e seus estados ≥ 3:1 | REQ | 1.4.11 (AA) | | |
| 5.11.5 | Contraste de objetos gráficos ≥ 3:1 | REQ | 1.4.11 (AA) | | |
| 5.11.6 | Contraste do indicador de foco ≥ 3:1 | REQ | 1.4.11 (AA) | | |

## 5.12 Conteúdo textual

| # | Item | Classe | WCAG | Status | Observação |
|---|---|---|---|---|---|
| 5.12.1 | Entrelinha ≥ 1,5× o tamanho da fonte | REQ | 1.4.12 (AA) | | |
| 5.12.2 | Espaço entre parágrafos ≥ 2× | REQ | 1.4.12 (AA) | | |
| 5.12.3 | Espaço entre letras ≥ 0,12× | REQ | 1.4.12 (AA) | | |
| 5.12.4 | Espaço entre palavras ≥ 0,16× | REQ | 1.4.12 (AA) | | |
| 5.12.5 | Blocos de texto alinhados à esquerda | REC | 1.4.8 (AAA) | | |
| 5.12.6 | Largura de bloco ≤ 80 caracteres | REQ | 1.4.10 (AA) | | |
| 5.12.7 | Zoom de texto até 200% sem perda | REQ | 1.4.4 (AA) | | |
| 5.12.8 | Texto especial com semântica programática | REQ | 1.3.1 (A) | | |
| 5.12.9 | Texto especial usado conforme o propósito | REQ | 1.3.1 (A) | | |
| 5.12.10 | Mecanismo para definições de termos incomuns | REC | 3.1.3 (AAA) | | |
| 5.12.11 | Mecanismo para expandir siglas | REC | 3.1.4 (AAA) | | |
| 5.12.12 | Linguagem simples ou versão simplificada | REC | 3.1.5 (AAA) | | |
| 5.12.13 | Mecanismo de pronúncia quando necessário | REC | 3.1.6 (AAA) | | |

## 5.13 Codificação e marcação semântica

| # | Item | Classe | WCAG | Status | Observação |
|---|---|---|---|---|---|
| 5.13.1 | Título de página único e descritivo (atualizado por rota) | REQ | 2.4.2 (A) | | |
| 5.13.2 | Idioma da página declarado | REQ | 3.1.1 (A) | | |
| 5.13.3 | Idioma de partes da página declarado | REQ | 3.1.2 (AA) | | |
| 5.13.4 | Frames e iframes com título único | REQ | 1.3.1/4.1.2 (A) | | |
| 5.13.5 | Zoom do agente de usuário não bloqueado | REQ | 1.4.4/1.4.10 (AA) | | |
| 5.13.6 | Ordem de leitura no código lógica | REQ | 1.3.2 (A) | | |
| 5.13.7 | Nome acessível contém o texto visível | REQ | 2.5.3 (A) | | |
| 5.13.8 | Mensagens de status anunciadas sem mover foco | REQ | 4.1.3 (AA) | | |
| 5.13.9 | Propósito de componentes e regiões identificável | REC | 1.3.6 (AAA) | | |
| 5.13.10 | Componentes com nome acessível | REQ | 4.1.2 (A) | | |
| 5.13.11 | Uso de elementos nativos | REC | 1.3.1 (A) | | |
| 5.13.12 | Componentes customizados com semântica completa | REQ | 1.3.1/4.1.2 (A) | | |
| 5.13.13 | Estados/propriedades/valores definíveis programaticamente | REQ | 4.1.2 (A) | | |

## 5.14 Áudio e vídeo

| # | Item | Classe | WCAG | Status | Observação |
|---|---|---|---|---|---|
| 5.14.1 | Transcrição para áudio pré-gravado | REQ | 1.2.1 (A) | | |
| 5.14.2 | Legendas descritivas para vídeo | REQ | 1.2.2 (A) | | |
| 5.14.3 | Transcrição para vídeo | REC | 1.2.3 (A) | | |
| 5.14.4 | Audiodescrição para vídeo | REQ | 1.2.5 (AA) | | |
| 5.14.5 | Audiodescrição estendida | REC | 1.2.7 (AAA) | | |
| 5.14.6 | Janela de Libras em mídia sincronizada | REC | 1.2.6 (AAA) | | |
| 5.14.7 | Controle de áudio automático acima de 3 s | REQ | 1.4.2 (A) | | |
| 5.14.8 | Áudio sem ruído interferente | REC | 1.4.7 (AAA) | | |
| 5.14.9 | Legendas em transmissão ao vivo | REQ | 1.2.4 (AA) | | |
| 5.14.10 | Transcrição de áudio ao vivo | REC | 1.2.9 (AAA) | | |

## 5.15 Animação

| # | Item | Classe | WCAG | Status | Observação |
|---|---|---|---|---|---|
| 5.15.1 | Controle de animação automática acima de 5 s | REQ | 2.2.2 (A) | | |
| 5.15.2 | Animações por interação desativáveis (prefers-reduced-motion) | REC | 2.3.3 (AAA) | | |
| 5.15.3 | Nada pisca mais de 3× por segundo | REC | 2.3.1/2.3.2 | | |
| 5.15.4 | Conteúdo piscante abaixo dos limites de flash | REQ | 2.3.1 (A) | | |

## 5.16 Tempo

| # | Item | Classe | WCAG | Status | Observação |
|---|---|---|---|---|---|
| 5.16.1 | Ausência de limite de tempo | REC | 2.2.1/2.2.3 | | |
| 5.16.2 | Limite de tempo ajustável ou extensível com aviso prévio | REQ | 2.2.1 (A) | | |
| 5.16.3 | Controle de atualização automática | REQ | 2.2.2 (A) | | |
| 5.16.4 | Interrupções adiáveis ou bloqueáveis | REC | 2.2.4 (AAA) | | |
| 5.16.5 | Reautenticação sem perda de dados | REC | 2.2.5 (AAA) | | |
| 5.16.6 | Inatividade sem perda de dados ou com aviso | REC | 2.2.6 (AAA) | | |

---

## Anexo A — Itens problemáticos presentes no sistema

| Item | Presente? | Mitigação adotada |
|---|---|---|
| CAPTCHA | | |
| Reconhecimento facial / biometria | | |
| Conteúdo exibido só por hover ou foco | | |
| Conteúdo textual inserido por CSS | | |
| Conteúdo de terceiros (widget, iframe, vídeo externo) | | |
| Componentes customizados | | |
| Arquivos anexos (PDF, DOCX, planilhas) | | |
| Tabelas usadas para leiaute | | |

## Verificações manuais realizadas

| Verificação | Realizada? | Responsável | Resultado |
|---|---|---|---|
| Navegação completa por teclado | | | |
| Teste com leitor de tela | | | |
| Zoom de texto 200% e zoom de página 400% | | | |
| Reflow em 320 px de largura | | | |
| Verificação de contraste renderizado | | | |
| Teste com usuário com deficiência | | | |

## Resultado

- Requisitos avaliados: ____ · Conformes: ____ · Não conformes: ____ · N/A: ____ · A verificar: ____
- Recomendações atendidas: ____ de ____
- **Conformidade regular (Requisitos):** ( ) Atende ( ) Não atende
- **Conformidade plena (Requisitos + Recomendações):** ( ) Atende ( ) Não atende

**Justificativas para Recomendações não atendidas:**

**Pendências e prazo de adequação:**

Preenchido por: ______________________  Data: ____/____/______

Revisado por: ________________________  Data: ____/____/______
