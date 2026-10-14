# Padrões de implementação acessível (agnóstico de framework)

Padrões em HTML/ARIA/CSS puro, cada um mapeado aos itens da NBR 17225 que atende.
Traduza para o framework em uso apenas no último passo — a semântica é a mesma em todos.

## As cinco regras que evitam a maioria dos problemas

1. **Elemento nativo primeiro.** `<button>`, `<a href>`, `<input>`, `<table>`, `<details>`
   já trazem papel, foco, teclado e estado. Reimplementar isso é assumir uma dívida que
   quase ninguém paga por inteiro. (§5.13.11 — Recomendação que satisfaz §5.13.12 e §5.13.13.)
2. **Não sobrescreva semântica nativa com ARIA.** `<button role="link">` piora, não melhora.
   ARIA preenche lacunas; não corrige escolha errada de elemento.
3. **Todo estado visual precisa de equivalente programático.** Se a cor, a borda ou o
   ícone mudam, algo precisa mudar também na árvore de acessibilidade (`aria-expanded`,
   `aria-selected`, `aria-invalid`, `aria-current`, `aria-pressed`).
4. **Nunca `outline: none` sem substituto.** Se for redesenhar o foco, garanta 3:1 de
   contraste contra o fundo e contra o estado sem foco. (§5.1.1, §5.11.6.)
5. **Nada só por cor, só por hover, só por gesto.** Cada um desses tem um Requisito
   dedicado (§5.11.1, §5.1.7–5.1.9, §5.8.12–5.8.13).

## Formulários

Atende §5.9.1–5.9.10, §5.13.8.

```html
<form novalidate>
  <fieldset>
    <legend>Dados do requerente</legend>

    <p id="obrig-legenda">Campos marcados com asterisco (*) são obrigatórios.</p>

    <label for="nome">Nome completo *</label>
    <input id="nome" name="nome" type="text"
           autocomplete="name"
           required aria-required="true"
           aria-invalid="true"
           aria-describedby="nome-ajuda nome-erro">
    <span id="nome-ajuda">Como consta no documento de identificação.</span>
    <span id="nome-erro" class="erro">
      Informe o nome completo, com pelo menos um sobrenome.
    </span>
  </fieldset>

  <button type="submit">Enviar requerimento</button>
</form>
```

Pontos que costumam ser esquecidos:

- **`aria-describedby` aceita múltiplos ids** — ajuda e erro juntos, nessa ordem.
- **`aria-invalid` só quando há erro**, removido quando corrigido.
- **A mensagem de erro precisa existir no DOM** para ser referenciada; se ela só aparece
  depois, mantenha o contêiner e altere o conteúdo.
- **Asterisco sozinho não atende §5.9.7.** Precisa de `required`/`aria-required` **e** de
  legenda explicando o símbolo.
- **`autocomplete` com os tokens padronizados** (`name`, `email`, `tel`, `postal-code`,
  `bday`, `organization`…) é Requisito para dados pessoais (§5.9.8) — não é só conveniência.
- **Não use `placeholder` como rótulo.** Desaparece ao digitar, tem contraste baixo e
  suporte inconsistente em tecnologia assistiva.

### Resumo de erros após submissão

```html
<div role="alert" tabindex="-1" id="resumo-erros">
  <h2>Não foi possível enviar: 2 campos precisam de correção</h2>
  <ul>
    <li><a href="#nome">Nome completo: informe pelo menos um sobrenome</a></li>
    <li><a href="#cpf">CPF: use o formato 000.000.000-00</a></li>
  </ul>
</div>
```

Mova o foco para o resumo (`focus()` no contêiner com `tabindex="-1"`) após a validação.
Isso resolve §5.9.9 e §5.13.8 de uma vez e é muito melhor que anunciar erros dispersos.

### Formulário crítico (§5.9.12 — Requisito)

Peticionamento, transação financeira, exclusão de dados, envio de prova: precisa de etapa
de **revisão antes da confirmação**, com possibilidade de voltar e corrigir, ou de
reverter depois. Modal de "tem certeza?" sozinho não atende — a pessoa precisa poder
**revisar os dados**, não só confirmar a intenção.

## Diálogo modal

Atende §5.1.6, §5.13.10, §5.13.12, e o retorno de foco esperado.

```html
<dialog id="dlg" aria-labelledby="dlg-titulo">
  <h2 id="dlg-titulo">Confirmar exclusão</h2>
  <p>Esta ação não pode ser desfeita.</p>
  <button type="button" data-close>Cancelar</button>
  <button type="button" data-confirm>Excluir</button>
</dialog>
```

`<dialog>` com `showModal()` entrega focus trap, `aria-modal`, inerte no fundo e Esc
nativamente — prefira-o a qualquer implementação manual. Se precisar de fallback:
`role="dialog"` + `aria-modal="true"` + `aria-labelledby`, foco movido para dentro ao
abrir, foco contido enquanto aberto, Esc fecha, **foco devolvido ao elemento gatilho**
ao fechar. Guardar a referência do gatilho antes de abrir é o passo que mais se esquece.

## Mensagens de status e conteúdo dinâmico

Atende §5.13.8 (Requisito, C.S. 4.1.3 AA).

```html
<!-- presente no DOM desde o carregamento, vazio -->
<div role="status" aria-live="polite" id="status"></div>
<div role="alert" id="alerta"></div>
```

- `role="status"` / `aria-live="polite"` — sucesso, resultado de busca, "salvo",
  contagem de resultados. Aguarda a pessoa terminar o que está fazendo.
- `role="alert"` / `aria-live="assertive"` — só o que é urgente. Interrompe a leitura;
  usar demais é ruído.
- **O contêiner precisa existir antes do conteúdo chegar.** Criar o elemento já com o
  texto costuma não disparar anúncio.
- **Carregamento:** `aria-busy="true"` na região que está carregando, e um texto
  alternativo no placeholder — spinner puramente gráfico não comunica nada.
- Não mova o foco para anunciar algo. Mover foco é para mudança de contexto intencional;
  live region é para informar sem interromper.

## Tabela de dados

Atende §5.6.1–5.6.5.

```html
<table>
  <caption>Processos distribuídos em julho de 2026</caption>
  <thead>
    <tr>
      <th scope="col" aria-sort="ascending">
        <button type="button">Número</button>
      </th>
      <th scope="col">Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">0001234-56.2026.8.21.0001</th>
      <td>Procedimento Comum</td>
    </tr>
  </tbody>
</table>
```

- `aria-sort` no `th` da coluna ordenada (`ascending`/`descending`/`none`), e o controle
  de ordenação precisa ser um botão real.
- Tabela complexa (múltiplos níveis de cabeçalho): `headers` + `id` explícitos.
- Paginação: `<nav aria-label="Paginação">` com página atual em `aria-current="page"`.
- Grid com `div`: exige `role="table"/"row"/"columnheader"/"cell"` completos e consistentes.
  Quase sempre é mais barato usar `<table>` com CSS.

## Navegação, rotas e SPA

Atende §5.4.5, §5.7.12, §5.13.1, §5.7.14.

```html
<a href="#conteudo" class="skip-link">Ir para o conteúdo principal</a>

<header>…</header>
<nav aria-label="Principal">…</nav>
<main id="conteudo" tabindex="-1">…</main>
<footer>…</footer>
```

- Skip link é o **primeiro** elemento focável e precisa **ficar visível ao receber foco**
  (esconder com `clip`/posição, não com `display: none`).
- `aria-label` distinto em cada `nav` (§5.4.5). Evite a palavra "navegação" no rótulo — o
  papel já é anunciado.
- Item ativo com `aria-current="page"`.

**Em aplicação de página única, dois pontos são obrigatórios e quase sempre faltam:**

1. **Atualizar `document.title` a cada mudança de rota** (§5.13.1). Sem isso, o leitor de
   tela anuncia sempre o mesmo título e a pessoa não sabe que navegou.
2. **Mover o foco** após a navegação — para o `h1` ou para o contêiner `main` com
   `tabindex="-1"` — e anunciar a mudança. O foco nunca deve voltar ao `body`, porque isso
   joga a pessoa para o início do documento a cada clique.

## Botões com ícone e imagens

Atende §5.2.1–5.2.3, §5.8.3, §5.13.7.

```html
<button type="button" aria-label="Excluir processo 0001234-56">
  <svg aria-hidden="true" focusable="false">…</svg>
</button>

<img src="grafico.png"
     alt="Distribuição de processos por vara em 2026"
     aria-describedby="grafico-desc">
<div id="grafico-desc">…descrição detalhada ou tabela equivalente…</div>

<img src="ornamento.svg" alt="">
```

Atenção ao §5.13.7: se o botão mostra texto visível, o nome acessível precisa **conter**
esse texto. `<button aria-label="Confirmar alterações">Salvar</button>` quebra o comando
por voz — quem diz "clicar em Salvar" não ativa nada.

## Componentes customizados

Quando não há elemento nativo (combobox, árvore, tabs, carrossel), siga o padrão
correspondente do **WAI-ARIA Authoring Practices Guide** integralmente — papel, teclas
esperadas, estados. Meia implementação costuma ser pior que nenhuma, porque promete
semântica que não entrega. (§5.1.15, §5.1.16, §5.13.12, §5.13.13, Anexo A.1.6.)

Padrão de divulgação (disclosure), que resolve a maioria dos casos sem ARIA complexa:

```html
<button type="button" aria-expanded="false" aria-controls="painel">
  Filtros avançados
</button>
<div id="painel" hidden>…</div>
```

Alterne `aria-expanded` **e** `hidden` juntos. Divergência entre estado visual e estado
programático é violação de §5.13.12.

## Alternativas a arrastar e a gestos

Atende §5.8.12 (gestos) e §5.8.13 (arrastar) — ambos Requisitos, e ambos novos na WCAG 2.2.

Toda funcionalidade de arrastar precisa de caminho equivalente sem arrastar:

- Reordenar lista → botões "mover para cima/baixo" ou campo de posição.
- Kanban → menu "mover para coluna…" no cartão.
- Slider → aceitar setas do teclado e entrada numérica.
- Carrossel → botões anterior/próximo além do swipe.

## Movimento e tempo

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- Animação automática > 5s exibida junto de outro conteúdo precisa de controle de
  pausar/parar/ocultar (§5.15.1). Carrossel com rotação automática é o caso clássico.
- Sessão com expiração: avisar **antes** e permitir estender (§5.16.2). Um diálogo com
  `role="alertdialog"`, foco movido para ele e botão "continuar conectado" resolve.
- Auto-refresh e polling que alteram a tela precisam de controle (§5.16.3).

## Cores, tipografia e tokens

Requisitos, não preferência de design (§5.11.3–5.11.6, §5.12.1–5.12.7):

| Alvo | Mínimo (Requisito) |
|---|---|
| Texto normal | 4,5:1 |
| Texto grande (≥18pt, ou ≥14pt negrito) | 3:1 |
| Componentes de interface e seus estados | 3:1 |
| Objetos gráficos essenciais à compreensão | 3:1 |
| Indicador de foco (vs. fundo e vs. sem foco) | 3:1 |

```css
:root { font-size: 100%; }        /* respeita a preferência do navegador */

body {
  line-height: 1.5;               /* §5.12.1 */
  letter-spacing: 0.12em;         /* §5.12.3 */
  word-spacing: 0.16em;           /* §5.12.4 */
  text-align: left;               /* §5.12.5 */
}
p + p { margin-top: 2em; }        /* §5.12.2 */
.conteudo { max-width: 80ch; }    /* §5.12.6 */
```

Use unidades relativas em texto; `px` fixo impede o redimensionamento exigido por §5.12.7.
Evite altura fixa em contêiner de texto — com espaçamento aumentado, o conteúdo é cortado.

Em design system com tokens, valide os pares de contraste **na definição do token**, não
em cada tela. Um token de "texto secundário" com contraste insuficiente propaga a
violação por todo o produto.

## Traduzindo para frameworks

O padrão não muda; muda a mecânica. Ao adaptar, verifique estes pontos, que são onde cada
ecossistema costuma escorregar:

- **Componentes de biblioteca de UI** — normalmente já trazem ARIA e teclado corretos.
  Customize por CSS/tokens; não sobrescreva a estrutura HTML nem os atributos ARIA
  internos, ou a acessibilidade se perde silenciosamente.
- **Ids gerados** — `aria-describedby`/`aria-labelledby` precisam de ids únicos e estáveis;
  use o mecanismo de id do framework, não string fixa que se repete em listas.
- **Renderização condicional** — o contêiner de live region tem que persistir; se ele for
  montado junto com a mensagem, o anúncio se perde.
- **Roteamento client-side** — título da página e foco após navegação são responsabilidade
  da aplicação; nenhum roteador faz isso por padrão.
- **Carregamento tardio / lazy** — o placeholder precisa de conteúdo textual acessível, e
  o conteúdo que chega após interação deve receber foco quando for o destino da ação.
- **Renderização no servidor** — ajuda a acessibilidade (HTML semântico chega antes do JS),
  mas componentes ainda não hidratados não respondem a eventos: o estado inicial precisa
  ser informativo por si só.
- **Testes** — inclua verificação automática de acessibilidade no teste de componente;
  ela pega regressão estrutural barata, embora não substitua o teste manual.
