# Base legal e regulatória — acessibilidade digital no Brasil

Consulte este arquivo quando a pergunta for sobre **obrigatoriedade, alcance, risco
jurídico, prazos, exceções ou qual norma se aplica a quem** — e não sobre como implementar.

## A hierarquia, em uma frase

**Lei e decreto obrigam; norma técnica diz como cumprir.** A NBR 17225 é, por natureza,
um documento voluntário — a própria ABNT registra que suas normas não substituem leis,
decretos e regulamentos, que têm precedência. O que torna a acessibilidade digital
**exigível** é a LBI. A norma técnica entra como o parâmetro objetivo de cumprimento —
e, uma vez citada em regulamento, contrato ou edital, torna-se exigível por esse vínculo.

Consequência prática: numa discussão de aceite, o argumento "a NBR é voluntária" não
libera ninguém. A obrigação vem da lei; a norma só define o que significa cumpri-la.

## Camada 1 — Lei

### Lei nº 13.146/2015 — Lei Brasileira de Inclusão (LBI) / Estatuto da PcD

O instrumento central. Pontos que importam para software:

- **Art. 63** — torna obrigatória a acessibilidade nos sites mantidos por empresas com
  sede ou representação comercial no país **e** por órgãos de governo, garantindo à pessoa
  com deficiência acesso às informações disponíveis, conforme as melhores práticas e
  diretrizes de acessibilidade adotadas internacionalmente. É o dispositivo que a NBR 17225
  operacionaliza. Note o alcance: **não é só setor público**.
- **Art. 3º** — define barreira, incluindo barreiras **nas comunicações e na informação**
  e barreiras **tecnológicas**. É a definição que sustenta caracterizar um sistema
  inacessível como barreira, não como falha de usabilidade.
- **Art. 4º** — veda discriminação por deficiência; a recusa de adaptação razoável é
  tratada como discriminação.
- **Arts. 74 e 75** — direito à tecnologia assistiva e ao seu fomento pelo poder público.
- A LBI também impõe acessibilidade em serviços públicos digitais, comunicação
  institucional e conteúdo audiovisual, entre outros.

### Lei nº 10.098/2000

Estabelece normas gerais e critérios básicos de acessibilidade, com capítulo sobre
acessibilidade nos sistemas de comunicação e sinalização. Base histórica da LBI.

### Decreto nº 5.296/2004

Regulamenta a Lei 10.098/2000. Para o meio digital, o dispositivo relevante trata da
acessibilidade dos portais e sítios da administração pública na internet para uso de
pessoas com deficiência visual — origem da exigência que depois virou o e-MAG.

## Camada 2 — Regulamentação e padrões de governo

### e-MAG — Modelo de Acessibilidade em Governo Eletrônico, v3.1

Padrão brasileiro para sites de governo, mantido pela Secretaria de Governo Digital
(hoje SGD/MGI). Estrutura-se em recomendações agrupadas em seções (marcação, comportamento,
conteúdo/informação, apresentação/design, multimídia e formulários), com identificadores
próprios do tipo "Recomendação 1.1".

Relação com a NBR 17225: o e-MAG é anterior e mais antigo tecnicamente (v3.1 é de 2014,
alinhada à WCAG 2.0). A NBR 17225 é mais atual e mais completa. **Atender à NBR 17225
cobre praticamente todo o e-MAG, mas não o inverso.** Em órgão federal do SISP, o e-MAG
segue sendo referência formal — cite os dois quando o contexto for governo, com a NBR
como parâmetro técnico principal.

Há um padrão federal de conformidade de acessibilidade digital em elaboração pelo
MGI em conjunto com o MDHC, destinado a regulamentar o art. 63 da LBI e tomar a
NBR 17225 como base. **Confirme o estado atual dessa regulamentação antes de afirmar
qualquer coisa sobre ela** — o cenário mudou desde a publicação da norma.

### Portaria SGD/MGI nº 666/2023

Citada em documentos institucionais como o normativo de acessibilidade digital em
serviços públicos. Ao usá-la como fundamento em parecer ou laudo, **verifique a ementa e
a vigência na fonte oficial** em vez de descrever seu conteúdo de memória.

### Convenção sobre os Direitos das Pessoas com Deficiência (ONU)

Internalizada com status de emenda constitucional (Decreto Legislativo 186/2008 e Decreto
6.949/2009). É o fundamento de topo — relevante quando a discussão sobe do plano técnico
para o de direitos.

## Camada 3 — Poder Judiciário

Aplicável a tribunais, conselhos e seus serviços auxiliares.

### Resolução CNJ nº 401/2021

Dispõe sobre diretrizes de acessibilidade e inclusão de pessoas com deficiência nos órgãos
do Poder Judiciário e regulamenta o funcionamento das unidades de acessibilidade e inclusão.
Inclui a previsão de acessibilidade nos portais e sítios eletrônicos dos órgãos, conforme
as melhores práticas e diretrizes internacionais, e traz indicadores reportados ao CNJ.

Uso prático: em tribunal, esta resolução é o vínculo institucional direto — a acessibilidade
de um sistema judicial não é só cumprimento da LBI, é item de indicador e de comissão
interna. Isso muda o interlocutor de uma não conformidade.

### Recomendação CNJ nº 144/2023 — Pacto Nacional do Judiciário pela Linguagem Simples

Promove linguagem simples, direta e compreensível nas decisões e na comunicação com a
sociedade. Conecta-se ao item 5.12.12 da NBR 17225 (nível de linguagem) e à ABNT NBR
ISO 24495-1 (linguagem simples). Em sistema de tribunal, textos de interface, mensagens
de erro e instruções entram nesse escopo — é um argumento adicional forte para simplificar
linguagem que costuma ser tratada como intocável.

## Normas técnicas correlatas

| Norma | Escopo | Quando importa |
|---|---|---|
| **ABNT NBR 17225:2025** | Conteúdo e aplicações **web** | Norma principal. Base WCAG 2.2. |
| **ABNT NBR 17060:2022** | Aplicativos de **dispositivos móveis** | App nativo iOS/Android. A NBR 17225 não cobre nativo — não force a aplicação. |
| **W3C WCAG 2.2 (AA)** | Referência internacional | Base da NBR 17225; é a fonte de técnicas e critérios de sucesso. |
| **W3C WCAG 2.1 (AA)** | Versão anterior | Ainda citada em contratos e normativos antigos. Todos os seus critérios permanecem na 2.2, exceto 4.1.1 (removido). |
| **W3C WAI-ARIA 1.2 + APG** | Semântica de componentes ricos | Referência normativa da NBR 17225 para componentes customizados. |
| **ABNT NBR ISO/IEC 25010** | Modelo de qualidade de produto de software | Posiciona acessibilidade como subcaracterística de usabilidade — útil para inserir acessibilidade em requisito não funcional e em plano de qualidade. |
| **ABNT NBR ISO 24495-1** | Linguagem simples | Referência normativa da NBR 17225; base para 5.12.12. |
| **ABNT NBR 16452 / NBR 15610-3** | Audiodescrição / Libras | Referências para 5.14.4 e 5.14.6. |
| **EN 301 549** | Requisitos de TIC (União Europeia) | Base do Anexo B (desempenho funcional). Relevante em contratação internacional. |

## Conformidade: o que se pode afirmar

A NBR 17225 define dois patamares:

- **Conformidade regular** — todos os **Requisitos**. Equivale a WCAG 2.2 A + AA.
  É o patamar exigível e o que deve constar de edital, contrato e critério de aceite.
- **Conformidade plena** — Requisitos + Recomendações. Recomendação não atendida precisa
  de justificativa razoável **registrada**, não apenas presumida.

Não existe "parcialmente conforme" como categoria da norma. Ou os Requisitos estão
atendidos, ou não há conformidade regular. Ao redigir laudo, prefira: *"não atende à
conformidade regular; N Requisitos pendentes"* a formulações que sugiram gradação onde
a norma não a prevê.

Sobre selo e declaração: a LBI menciona selo de acessibilidade em seu art. 63. Nenhuma
autodeclaração dispensa evidência — uma declaração de conformidade sem laudo, checklist
preenchido e registro de teste manual é passivo, não proteção.

## Como usar isto sem virar consultoria jurídica

Esta skill trata da dimensão técnico-normativa. Ao ser perguntada sobre exposição a
sanção, ação civil pública, TAC, responsabilização de gestor ou cláusula contratual
específica: exponha os dispositivos aplicáveis com clareza, explique o que a norma exige
em termos técnicos, e diga que a avaliação jurídica cabe à assessoria jurídica ou ao
órgão competente. Descrever o quadro normativo é útil e legítimo; opinar sobre desfecho
de litígio, não.

## Argumentos que aparecem — e como respondê-los

**"É norma técnica, não é lei, então não é obrigatório."** A obrigação vem da LBI, art. 63.
A norma técnica é o parâmetro de cumprimento. Além disso, quando referenciada em contrato,
edital ou normativo interno, ela vincula por si.

**"O sistema é interno, só servidor usa."** Servidores e magistrados também são pessoas
com deficiência, e a LBI trata de acesso ao trabalho e de adaptação razoável. Sistema
interno inacessível é barreira de acesso ao trabalho.

**"Ninguém com deficiência usa esse módulo."** Argumento circular: frequentemente ninguém
usa porque não consegue. Também ignora limitações temporárias e situacionais, que a norma
inclui expressamente no escopo.

**"Vamos deixar acessibilidade para a fase 2."** Retrofit custa mais e sai pior. Vale
apresentar o custo comparado e negociar prioridade por severidade — mas registre a
pendência com o item normativo, para que a decisão seja consciente e rastreável, e não
uma omissão silenciosa.
