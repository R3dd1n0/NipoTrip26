/*
 * data.js — FONTE DE VERDADE da viagem ao Japão 2026
 * ---------------------------------------------------
 * Edite SOMENTE este arquivo para atualizar o site.
 * O layout (index.html / styles.css / app.js) lê tudo daqui.
 *
 * Dica: mantenha as datas no formato "AAAA-MM-DD" onde houver `iso`,
 * e use o texto livre em `data`/`diaSemana` para exibição.
 */

const TRIP = {
  /* ----------------------------------------------------------------
   * 1. METADADOS / HERO
   * ---------------------------------------------------------------- */
  meta: {
    titulo: "Japão 2026",
    subtitulo: "Dois casais · 22 dias · oeste → leste",
    periodo: "21/11 – 12/12 de 2026",
    // Data/hora alvo da contagem regressiva (pouso em Haneda)
    countdownAlvoISO: "2026-11-21T06:50:00+09:00",
    frase:
      "Uma viagem para celebrar: o casamento da Felipana e o aniversário da Thamires — com o Japão clássico, os Alpes, o Fuji e a China como capítulo novo.",
  },

  /* ----------------------------------------------------------------
   * 2. PESSOAS
   * ---------------------------------------------------------------- */
  pessoas: [
    {
      grupo: "Felipana",
      cor: "#E8A846",
      membros: "Felipe + Mariana",
      tag: "1ª vez no Japão",
      descricao:
        "A viagem celebra o casamento deles (vão casar ainda este ano). Priorizam o Japão clássico e os momentos românticos.",
    },
    {
      grupo: "Thamandro",
      cor: "#D83A3A",
      membros: "Thamires + Leandro",
      tag: "2ª vez · China é o capítulo novo",
      descricao:
        "Já fizeram Japão + Coreia há ~1 ano e amaram. Aniversário da Thamires: 01/12 (data sagrada — todos juntos).",
    },
  ],

  /* ----------------------------------------------------------------
   * 3. VISÃO GERAL — os momentos da viagem
   * ---------------------------------------------------------------- */
  momentos: [
    {
      n: 1,
      titulo: "Abertura nos Alpes",
      quando: "21–24/11",
      quem: "Juntos",
      resumo: "Nagano, macacos da neve, Takayama e Shirakawa-go.",
    },
    {
      n: 2,
      titulo: "Semana separada",
      quando: "25–29/11",
      quem: "Felipana × Thamandro",
      resumo: "Felipana no clássico (Kyoto/Osaka); Thamandro na China.",
    },
    {
      n: 3,
      titulo: "Reencontro no Fuji",
      quando: "30/11–02/12",
      quem: "Juntos",
      resumo: "Aniversário da Thamires + celebração. Ryokan top em Kawaguchiko.",
    },
    {
      n: 4,
      titulo: "Final em Tóquio",
      quando: "03–12/12",
      quem: "Juntos",
      resumo: "Disney, bairros, bate-voltas e jantar de despedida.",
    },
  ],

  // Rota oeste → leste (para o mapa/linha da rota)
  rota: [
    "Nagano",
    "Takayama",
    "Shirakawa-go",
    "Kyoto / China",
    "Osaka",
    "Kawaguchiko (Fuji)",
    "Tóquio",
  ],

  /* ----------------------------------------------------------------
   * 3.1. MAPA — cidades (lat/lon reais) e rotas
   * ----------------------------------------------------------------
   * Renderizado num mapa real (Leaflet + OpenStreetMap) pelo app.js.
   * Para adicionar uma cidade: inclua em `cidades` com `lat`, `lon` e
   * `grupo` ("comum" | "felipana" | "thamandro" | "fuji"). Use
   * `tbd: true` para marcar como opcional (trecho/cidade a confirmar).
   * Em `rotas`, liste as chaves (`key`) na ordem do trajeto;
   * `voo: true` desenha linha tracejada (deslocamento aéreo).
   */
  mapa: {
    cidades: [
      // Japão — abertura/final (todos juntos)
      { key: "toquio", nome: "Tóquio (Haneda)", lat: 35.55, lon: 139.78, grupo: "comum" },
      { key: "nagano", nome: "Nagano", lat: 36.65, lon: 138.18, grupo: "comum" },
      { key: "takayama", nome: "Takayama", lat: 36.14, lon: 137.25, grupo: "comum" },
      { key: "shirakawa", nome: "Shirakawa-go", lat: 36.26, lon: 136.91, grupo: "comum" },
      // Japão — clássico (Felipana)
      { key: "kyoto", nome: "Kyoto", lat: 35.01, lon: 135.77, grupo: "felipana" },
      { key: "osaka", nome: "Osaka", lat: 34.69, lon: 135.50, grupo: "felipana" },
      { key: "hiroshima", nome: "Hiroshima (opc.)", lat: 34.39, lon: 132.46, grupo: "felipana", tbd: true },
      // Transferência aérea do Thamandro
      { key: "nagoya", nome: "Nagoya", lat: 35.18, lon: 136.91, grupo: "thamandro" },
      // China (Thamandro)
      { key: "pequim", nome: "Pequim", lat: 39.90, lon: 116.40, grupo: "thamandro" },
      { key: "xangai", nome: "Xangai (opc.)", lat: 31.23, lon: 121.47, grupo: "thamandro", tbd: true },
      // Reencontro (todos)
      { key: "kawaguchiko", nome: "Kawaguchiko · Fuji", lat: 35.50, lon: 138.77, grupo: "fuji" },
    ],
    rotas: [
      // Abertura nos Alpes (todos)
      { grupo: "comum", pontos: ["toquio", "nagano", "takayama", "shirakawa"] },
      // Felipana — o clássico (terrestre)
      { grupo: "felipana", pontos: ["takayama", "kyoto", "osaka", "kawaguchiko"] },
      { grupo: "felipana", pontos: ["osaka", "hiroshima"], tbd: true },
      // Thamandro — China (Nagoya por terra, depois voos)
      { grupo: "thamandro", pontos: ["takayama", "nagoya"] },
      { grupo: "thamandro", pontos: ["nagoya", "pequim"], voo: true },
      { grupo: "thamandro", pontos: ["pequim", "xangai"], voo: true, tbd: true },
      { grupo: "thamandro", pontos: ["pequim", "kawaguchiko"], voo: true }, // volta direto ao Fuji
      // Reencontro + final (todos)
      { grupo: "comum", pontos: ["kawaguchiko", "toquio"] },
    ],
  },

  /* ----------------------------------------------------------------
   * 4. ROTEIRO DIA A DIA
   * ----------------------------------------------------------------
   * Campo `quem`: "todos" | "felipana" | "thamandro"
   * (usado pelo filtro de abas na semana separada).
   * Campo `tbd: true` marca itens "a confirmar".
   */
  roteiro: [
    // 1. ABERTURA NOS ALPES — juntos
    {
      iso: "2026-11-21",
      data: "21/11",
      diaSemana: "Sábado",
      local: "Nagano",
      quem: "todos",
      bloco: "Abertura nos Alpes",
      atividades:
        "Tarde leve por causa do jet lag: templo Zenkō-ji.",
      transporte:
        "Haneda → Tokyo Station → Shinkansen até Nagano (~1h30).",
    },
    {
      iso: "2026-11-22",
      data: "22/11",
      diaSemana: "Domingo",
      local: "Jigokudani / Shibu Onsen",
      quem: "todos",
      bloco: "Abertura nos Alpes",
      atividades:
        "Macacos da neve em Jigokudani (no onsen) + Shibu Onsen. Opcional: Castelo de Matsumoto.",
      transporte: "~45 min de Nagano + caminhada.",
    },
    {
      iso: "2026-11-23",
      data: "23/11",
      diaSemana: "Segunda",
      local: "Takayama",
      quem: "todos",
      bloco: "Abertura nos Alpes",
      atividades: "Cidade velha de Hida; provar Hida beef.",
      transporte: "Nagano → Takayama via Toyama (~3h).",
    },
    {
      iso: "2026-11-24",
      data: "24/11",
      diaSemana: "Terça",
      local: "Shirakawa-go",
      quem: "todos",
      bloco: "Abertura nos Alpes",
      atividades:
        "Bate-volta às casas gasshō-zukuri (possível neve). À noite, a separação dos casais.",
      transporte: "Bate-volta de Takayama (~50 min).",
    },

    // 2. SEMANA SEPARADA — Thamandro (China)
    {
      iso: "2026-11-25",
      data: "25/11",
      diaSemana: "Quarta",
      local: "Takayama → China",
      quem: "thamandro",
      bloco: "Semana separada · China",
      atividades: "Início do capítulo China.",
      transporte:
        "Takayama → Nagoya (~2h30) → voo p/ Pequim (~4h) ou Xangai (~3h).",
    },
    {
      iso: "2026-11-26",
      data: "25–29/11",
      diaSemana: "Qua–Dom",
      local: "China (Pequim de base)",
      quem: "thamandro",
      bloco: "Semana separada · China",
      atividades:
        "~5 dias: Muralha, Cidade Proibida. Opcional emendar Xangai de trem-bala. Brasileiros entram sem visto (até 30 dias, política vigente até 31/12/2026 — confirmar; levar passagem de volta + hospedagem).",
      transporte: "Trem-bala Pequim ⇄ Xangai (opcional).",
      tbd: true,
    },
    {
      iso: "2026-11-30",
      data: "30/11",
      diaSemana: "Domingo",
      local: "China → Fuji",
      quem: "thamandro",
      bloco: "Semana separada · China",
      atividades: "Voo de volta direto para o reencontro no Fuji.",
      transporte: "Voo China → Tóquio/Fuji.",
    },

    // 2. SEMANA SEPARADA — Felipana (o clássico)
    {
      iso: "2026-11-25",
      data: "25/11",
      diaSemana: "Quarta",
      local: "Kyoto",
      quem: "felipana",
      bloco: "Semana separada · clássico",
      atividades: "Chegada e primeiro contato com Kyoto.",
      transporte: "Takayama → Kyoto (~3h30 via Nagoya).",
    },
    {
      iso: "2026-11-26",
      data: "25–27/11",
      diaSemana: "Qua–Sex",
      local: "Kyoto (+ Nara)",
      quem: "felipana",
      bloco: "Semana separada · clássico",
      atividades:
        "Fushimi Inari, Arashiyama, Gion, Kiyomizu; bate-volta a Nara. Folhas de outono no pico. Cabe o ensaio de quimono/pré-wedding.",
      transporte: "Trens locais + bate-volta a Nara.",
    },
    {
      iso: "2026-11-28",
      data: "28–29/11",
      diaSemana: "Sáb–Dom",
      local: "Osaka",
      quem: "felipana",
      bloco: "Semana separada · clássico",
      atividades:
        "Dotonbori, Castelo de Osaka. Opcional: trocar uma noite por Hiroshima + Miyajima.",
      transporte: "Kyoto → Osaka (~30 min).",
      tbd: true,
    },
    {
      iso: "2026-11-30",
      data: "30/11",
      diaSemana: "Domingo",
      local: "Osaka → Fuji",
      quem: "felipana",
      bloco: "Semana separada · clássico",
      atividades: "Seguir para o reencontro no Fuji.",
      transporte: "Osaka → Kawaguchiko (~3h30–4h).",
    },

    // 3. REENCONTRO — o pico (Kawaguchiko)
    {
      iso: "2026-11-30b",
      data: "30/11",
      diaSemana: "Domingo",
      local: "Kawaguchiko",
      quem: "todos",
      bloco: "Reencontro no Fuji",
      atividades:
        "Todos chegam, check-in, onsen, jantar de reencontro. Avisar o ryokan sobre o aniversário (bolo/jantar especial).",
      transporte: "Chegada ao ryokan (lado norte do lago).",
    },
    {
      iso: "2026-12-01",
      data: "01/12",
      diaSemana: "Segunda",
      local: "Kawaguchiko — Aniversário",
      quem: "todos",
      bloco: "Reencontro no Fuji",
      atividades:
        "Aniversário da Thamires: lago, Pagode Chūreitō (foto Fuji + pagode), Oishi Park. Jantar de aniversário e celebração.",
      transporte: "Locomoção local no entorno do lago.",
    },
    {
      iso: "2026-12-02",
      data: "02/12",
      diaSemana: "Terça",
      local: "Kawaguchiko → Tóquio",
      quem: "todos",
      bloco: "Reencontro no Fuji",
      atividades: "Onsen sem pressa, mais Fuji, e seguir para Tóquio à tarde.",
      transporte: "Kawaguchiko → Tóquio.",
    },

    // 4. FINAL — Tóquio juntos
    {
      iso: "2026-12-03",
      data: "03/12",
      diaSemana: "Quarta",
      local: "Tóquio — Shibuya",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades: "Shibuya ao anoitecer.",
      transporte: "Fuji → Tóquio (~2h).",
    },
    {
      iso: "2026-12-04",
      data: "04/12",
      diaSemana: "Quinta",
      local: "Tokyo DisneySea",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades: "Decoração de Natal. Comprar ingresso com antecedência.",
      transporte: "Trem até Maihama.",
    },
    {
      iso: "2026-12-05",
      data: "05/12",
      diaSemana: "Sexta",
      local: "Tokyo Disneyland",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades: "Dia de parque.",
      transporte: "Trem até Maihama.",
    },
    {
      iso: "2026-12-06",
      data: "06/12",
      diaSemana: "Sábado",
      local: "Asakusa / Skytree / Yanaka",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades: "Sensō-ji, Skytree e o bairro retrô de Yanaka.",
      transporte: "Metrô.",
    },
    {
      iso: "2026-12-07",
      data: "07/12",
      diaSemana: "Domingo",
      local: "Meiji / Harajuku / Shinjuku",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades:
        "Meiji Jingu + Harajuku + Omotesando; Shinjuku à noite.",
      transporte: "Metrô / linha Yamanote.",
    },
    {
      iso: "2026-12-08",
      data: "08/12",
      diaSemana: "Segunda",
      local: "teamLab + Akihabara",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades: "teamLab (reservar) + Akihabara.",
      transporte: "Metrô.",
    },
    {
      iso: "2026-12-09",
      data: "09/12",
      diaSemana: "Terça",
      local: "Nikko ou Kawagoe",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades:
        "Bate-volta: Nikko (Tōshō-gū) ou Kawagoe (a 'pequena Edo').",
      transporte: "Trem (bate-volta).",
      tbd: true,
    },
    {
      iso: "2026-12-10",
      data: "10/12",
      diaSemana: "Quarta",
      local: "Kamakura ou compras",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades:
        "Bate-volta leve: Kamakura (Grande Buda) ou compras/descanso.",
      transporte: "Trem (bate-volta).",
      tbd: true,
    },
    {
      iso: "2026-12-11",
      data: "11/12",
      diaSemana: "Quinta",
      local: "Tóquio",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades:
        "Último dia inteiro: compras, mala, jantar marcante de despedida.",
      transporte: "Metrô.",
    },
    {
      iso: "2026-12-12",
      data: "12/12",
      diaSemana: "Sábado",
      local: "Haneda — voo de volta",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades: "Café e Haneda às ~15h → NH963 17:25.",
      transporte: "Tóquio → Haneda.",
    },
  ],

  /* ----------------------------------------------------------------
   * 5. VOOS
   * ---------------------------------------------------------------- */
  voos: [
    { voo: "AF545", data: "18/11", hora: "21:50", trecho: "Brasil → Paris (CDG)", tbd: true },
    { voo: "AF282", data: "20/11", hora: "09:45", trecho: "Paris (CDG) → Tóquio-Haneda (chega 21/11 ~06:50)" },
    { voo: "NH963", data: "12/12", hora: "17:25", trecho: "Tóquio-Haneda → Pequim (PEK)" },
    { voo: "AF381", data: "13/12", hora: "00:05", trecho: "Pequim (PEK) → Paris (CDG)" },
    { voo: "AF546", data: "13/12", hora: "10:55", trecho: "Paris (CDG) → Brasil", tbd: true },
  ],
  voosNota:
    "Não há dia 13 no Japão — a volta apenas conecta em Pequim de madrugada. Confirmar a cidade brasileira de origem nos trechos AF545/AF546.",

  /* ----------------------------------------------------------------
   * 6. ORÇAMENTO
   * ---------------------------------------------------------------- */
  orcamento: {
    cambioBase: 0.032, // ¥1 ≈ R$0,032
    cambioCartao: 0.034, // efetivo no cartão (com IOF)
    diaria: [
      { categoria: "Hospedagem", iene: 7000, real: 225 },
      { categoria: "Comida", iene: 4000, real: 130 },
      { categoria: "Transporte", iene: 2700, real: 90 },
      { categoria: "Lazer/atrações", iene: 2500, real: 80 },
    ],
    diariaTotal: { iene: 16200, real: 525 },
    base22dias: "≈ R$11–12 mil/pessoa (fora a passagem internacional, que já temos).",
    pontuais: [
      { item: "Tokyo Disney", valor: "~R$300/dia × 2 dias ≈ R$600 (por pessoa)" },
      { item: "Ryokan especial no Fuji (celebração)", valor: "R$1.000–1.600/noite × 2–3 noites" },
      { item: "Ensaio quimono/pré-wedding (Felipana)", valor: "R$300–800" },
      { item: "Só Thamandro: voo Japão⇄China", valor: "R$1.500–3.000" },
      { item: "Só Thamandro: ~5 dias na China", valor: "R$2.000–3.500" },
    ],
    totais: [
      { grupo: "Felipana", valor: "~R$13–16 mil/pessoa (com os mimos da celebração)." },
      { grupo: "Thamandro", valor: "~R$15–19 mil/pessoa (China inclusa)." },
    ],
  },

  /* ----------------------------------------------------------------
   * 7. ONDE FICAR
   * ---------------------------------------------------------------- */
  ondeFicar: [
    { cidade: "Nagano", bairro: "Perto da estação ou Shibu Onsen (p/ os macacos)." },
    { cidade: "Takayama", bairro: "Centro histórico (Sanmachi)." },
    { cidade: "Kyoto", bairro: "Centro (Kawaramachi/Gion) — a pé de comida e templos, estação perto." },
    { cidade: "Osaka", bairro: "Namba/Dotonbori." },
    { cidade: "Kawaguchiko", bairro: "Ryokan com vista do Fuji (lado norte do lago)." },
    { cidade: "Tóquio", bairro: "Shinjuku (hub de trens e vida noturna). Alternativas: Shibuya, estação de Tóquio." },
  ],

  /* ----------------------------------------------------------------
   * 8. LOGÍSTICA & DICAS
   * ---------------------------------------------------------------- */
  logistica: [
    {
      titulo: "Bagagem (takkyūbin)",
      texto:
        "Serviço porta a porta em toda troca de cidade. Na semana separada, cada casal manda a mala adiante e viaja leve.",
    },
    {
      titulo: "Trens",
      texto:
        "Bilhetes avulsos de Shinkansen (reservar assento — alta de outono) + Suica/ICOCA no celular. JR Pass nacional não compensa (22 dias, poucos trechos longos).",
    },
    {
      titulo: "Voos internos",
      texto:
        "Nenhum no Japão nesta versão (sem Hokkaido). Único voo extra é o do Thamandro p/ China (Nagoya ⇄ Pequim/Xangai).",
    },
    {
      titulo: "Clima",
      texto:
        "Outono no pico em Kyoto (fim de nov); Tóquio lindo em dez; Fuji nítido no inverno. Manhãs de dezembro ~5–8°C — levar casaco.",
    },
    {
      titulo: "China sem visto",
      texto:
        "Brasileiros entram sem visto (até 30 dias, política vigente até 31/12/2026). Confirmar perto da data; levar passagem de volta + comprovante de hospedagem.",
    },
    {
      titulo: "Aniversário à prova de falhas (01/12)",
      texto:
        "Thamandro volta da China dia 30; Felipana termina o oeste em Osaka. Todos chegam ao ryokan ainda no dia 30.",
    },
  ],

  /* ----------------------------------------------------------------
   * 9. TOQUES ESPECIAIS (celebração)
   * ---------------------------------------------------------------- */
  toquesEspeciais: [
    "Ensaio de quimono / pré-wedding pra Felipana (Kyoto ou com o Fuji ao fundo).",
    "Ryokan top no Fuji com rotenburo privativo; avisar sobre aniversário e celebração.",
    "Jantar especial em Tóquio (sushi de balcão, kaiseki ou teppanyaki).",
    "Bolo de aniversário combinado com o ryokan para 01/12.",
  ],

  /* ----------------------------------------------------------------
   * 10. DECISÕES EM ABERTO (checklist)
   * ---------------------------------------------------------------- */
  pendencias: [
    "Hiroshima/Miyajima entra na trilha da Felipana?",
    "Takayama: 2 noites ou 1?",
    "China: só Pequim (5 dias) ou Pequim + Xangai?",
    "Reencontro: Kawaguchiko ou Hakone?",
    "Reservar Disney (data específica, época de Natal lota).",
    "Confirmar regra de entrada sem visto na China perto da data.",
    "Confirmar cidade brasileira de origem (AF545/AF546).",
  ],

  // Contagem de noites (resumo)
  noites: [
    { local: "Nagano", n: 2 },
    { local: "Takayama", n: 2 },
    { local: "Separados", n: 5 },
    { local: "Kawaguchiko", n: 3 },
    { local: "Tóquio", n: 9 },
  ],
};
