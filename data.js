/*
 * data.js — FONTE DE VERDADE da viagem ao Japão 2026
 * ---------------------------------------------------
 * Edite SOMENTE este arquivo para atualizar o site.
 * O layout (index.html / styles.css / app.js) lê tudo daqui.
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
        "A viagem celebra o casamento deles (vão casar ainda este ano). Priorizam o Japão clássico, os parques (USJ + Disney) e os momentos românticos.",
    },
    {
      grupo: "Thamandro",
      cor: "#D83A3A",
      membros: "Thamires + Leandro",
      tag: "2ª vez · China é o capítulo novo",
      descricao:
        "Já fizeram Japão + Coreia há ~1 ano e amaram. Aniversário da Thamires: 01/12 (data sagrada — todos juntos). Trocam Takayama/Shirakawa por 6 dias cheios na China.",
    },
  ],

  /* ----------------------------------------------------------------
   * 3. VISÃO GERAL — os momentos da viagem
   * ---------------------------------------------------------------- */
  momentos: [
    {
      n: 1,
      titulo: "Abertura em Nagano",
      quando: "21–22/11",
      quem: "Juntos",
      resumo: "Chegada e os macacos da neve em Jigokudani.",
    },
    {
      n: 2,
      titulo: "Semana separada",
      quando: "23–30/11",
      quem: "Felipana × Thamandro",
      resumo:
        "Felipana: Takayama/Shirakawa + clássico + Hiroshima/Miyajima + USJ. Thamandro: China (6 dias).",
    },
    {
      n: 3,
      titulo: "Reencontro no Fuji",
      quando: "01–02/12",
      quem: "Juntos",
      resumo: "Todos chegam no dia 1º (aniversário). Ryokan top em Kawaguchiko.",
    },
    {
      n: 4,
      titulo: "Final em Tóquio",
      quando: "03–12/12",
      quem: "Juntos + dias solo",
      resumo:
        "Tóquio, Nikko (1 pernoite), Disney/dias solo do Thamandro, Kawagoe e despedida.",
    },
  ],

  // Rota oeste → leste (para a linha da rota)
  rota: [
    "Nagano",
    "Takayama",
    "Shirakawa-go",
    "Kyoto",
    "Hiroshima",
    "Osaka",
    "Kawaguchiko (Fuji)",
    "Tóquio",
    "Nikko",
  ],

  /* ----------------------------------------------------------------
   * 3.1. MAPA — cidades (lat/lon reais) e rotas
   * ----------------------------------------------------------------
   * Renderizado num mapa real (Leaflet + OpenStreetMap) pelo app.js.
   * Para adicionar uma cidade: inclua em `cidades` com `lat`, `lon` e
   * `grupo` ("comum" | "felipana" | "thamandro" | "fuji"). Use
   * `tbd: true` para marcar como opcional. Em `rotas`, liste as chaves
   * (`key`) na ordem; `voo: true` desenha linha tracejada (voo).
   */
  mapa: {
    cidades: [
      // Pontos comuns (abertura / final)
      { key: "toquio", nome: "Tóquio (Haneda)", lat: 35.55, lon: 139.78, grupo: "comum" },
      { key: "nagano", nome: "Nagano", lat: 36.65, lon: 138.18, grupo: "comum" },
      { key: "nikko", nome: "Nikko (pernoite)", lat: 36.76, lon: 139.60, grupo: "comum" },
      // Felipana — Takayama/Shirakawa + clássico + oeste
      { key: "takayama", nome: "Takayama", lat: 36.14, lon: 137.25, grupo: "felipana" },
      { key: "shirakawa", nome: "Shirakawa-go", lat: 36.26, lon: 136.91, grupo: "felipana" },
      { key: "kyoto", nome: "Kyoto", lat: 35.01, lon: 135.77, grupo: "felipana" },
      { key: "nara", nome: "Nara (bate-volta)", lat: 34.69, lon: 135.83, grupo: "felipana" },
      { key: "hiroshima", nome: "Hiroshima", lat: 34.39, lon: 132.46, grupo: "felipana" },
      { key: "miyajima", nome: "Miyajima", lat: 34.30, lon: 132.32, grupo: "felipana" },
      { key: "osaka", nome: "Osaka (USJ)", lat: 34.69, lon: 135.50, grupo: "felipana" },
      // China (Thamandro)
      { key: "pequim", nome: "Pequim", lat: 39.90, lon: 116.40, grupo: "thamandro" },
      { key: "xangai", nome: "Xangai (opc.)", lat: 31.23, lon: 121.47, grupo: "thamandro", tbd: true },
      // Reencontro (todos)
      { key: "kawaguchiko", nome: "Kawaguchiko · Fuji", lat: 35.50, lon: 138.77, grupo: "fuji" },
    ],
    rotas: [
      // Abertura (todos) — só Nagano
      { grupo: "comum", pontos: ["toquio", "nagano"] },
      // Felipana — oeste por terra
      { grupo: "felipana", pontos: ["nagano", "takayama", "kyoto", "hiroshima", "osaka", "kawaguchiko"] },
      { grupo: "felipana", pontos: ["takayama", "shirakawa"] }, // bate-volta
      { grupo: "felipana", pontos: ["kyoto", "nara"] }, // bate-volta
      { grupo: "felipana", pontos: ["hiroshima", "miyajima"] }, // bate-volta
      // Thamandro — China (sai de Tóquio dia 23)
      { grupo: "thamandro", pontos: ["nagano", "toquio"] },
      { grupo: "thamandro", pontos: ["toquio", "pequim"], voo: true },
      { grupo: "thamandro", pontos: ["pequim", "xangai"], voo: true, tbd: true },
      { grupo: "thamandro", pontos: ["toquio", "kawaguchiko"] }, // dia 1: Tóquio → Fuji
      // Reencontro + final (todos)
      { grupo: "comum", pontos: ["kawaguchiko", "toquio"] },
      { grupo: "comum", pontos: ["toquio", "nikko"] }, // pernoite
    ],
  },

  /* ----------------------------------------------------------------
   * 4. ROTEIRO DIA A DIA
   * ----------------------------------------------------------------
   * Campo `quem`: "todos" | "felipana" | "thamandro"
   * (usado pelo filtro de abas). Campo `tbd: true` marca "a confirmar".
   */
  roteiro: [
    // 1. ABERTURA EM NAGANO — juntos
    {
      data: "21/11",
      diaSemana: "Sábado",
      local: "Nagano",
      quem: "todos",
      bloco: "Abertura em Nagano",
      atividades: "Tarde leve por causa do jet lag: templo Zenkō-ji.",
      transporte:
        "Pouso em Haneda (~06:50) → Tokyo Station → Shinkansen até Nagano (~1h30).",
    },
    {
      data: "22/11",
      diaSemana: "Domingo",
      local: "Jigokudani / Shibu Onsen",
      quem: "todos",
      bloco: "Abertura em Nagano",
      atividades:
        "Macacos da neve em Jigokudani (no onsen) + Shibu Onsen. Opcional: Castelo de Matsumoto.",
      transporte: "~45 min de Nagano + caminhada.",
    },

    // 2. SEMANA SEPARADA — Thamandro (China)
    {
      data: "23/11",
      diaSemana: "Segunda",
      local: "Nagano → China",
      quem: "thamandro",
      bloco: "Semana separada · China",
      atividades:
        "Separação: seguem para a China (Pequim de base — Muralha, Cidade Proibida).",
      transporte: "Nagano → Tóquio → voo p/ a China.",
    },
    {
      data: "24–29/11",
      diaSemana: "Ter–Dom",
      local: "China (Pequim · opc. Xangai)",
      quem: "thamandro",
      bloco: "Semana separada · China",
      atividades:
        "6 dias cheios na China: Muralha, Cidade Proibida e mais. Opcional emendar Xangai de trem-bala. Sem visto p/ brasileiros (até 30 dias — confirmar; levar passagem de volta + hospedagem).",
      transporte: "Trem-bala Pequim ⇄ Xangai (opcional).",
      tbd: true,
    },
    {
      data: "30/11",
      diaSemana: "Segunda",
      local: "Volta da China → Tóquio",
      quem: "thamandro",
      bloco: "Semana separada · China",
      atividades: "Volta da China e pernoite em Tóquio antes do reencontro.",
      transporte: "Voo China → Tóquio (pernoite).",
    },

    // 2. SEMANA SEPARADA — Felipana (Takayama + clássico + oeste)
    {
      data: "23/11",
      diaSemana: "Segunda",
      local: "Takayama",
      quem: "felipana",
      bloco: "Semana separada · clássico",
      atividades: "Cidade velha de Hida; provar Hida beef.",
      transporte: "Nagano → Takayama via Toyama (~3h).",
    },
    {
      data: "24/11",
      diaSemana: "Terça",
      local: "Shirakawa-go",
      quem: "felipana",
      bloco: "Semana separada · clássico",
      atividades: "Bate-volta às casas gasshō-zukuri (possível neve).",
      transporte: "Bate-volta de Takayama (~50 min).",
    },
    {
      data: "25/11",
      diaSemana: "Quarta",
      local: "Kyoto",
      quem: "felipana",
      bloco: "Semana separada · clássico",
      atividades: "Fushimi Inari ao entardecer. Cabe o ensaio de quimono/pré-wedding.",
      transporte: "Takayama → Kyoto (~3h30).",
    },
    {
      data: "26/11",
      diaSemana: "Quinta",
      local: "Kyoto + Nara",
      quem: "felipana",
      bloco: "Semana separada · clássico",
      atividades:
        "Arashiyama (bambu cedo), Gion + bate-volta a Nara (Grande Buda de Tōdai-ji e os cervos).",
      transporte: "Bate-volta a Nara (~45 min).",
    },
    {
      data: "27/11",
      diaSemana: "Sexta",
      local: "Hiroshima",
      quem: "felipana",
      bloco: "Semana separada · clássico",
      atividades: "Parque e Museu da Paz.",
      transporte: "Kyoto → Hiroshima (Shinkansen ~1h40).",
    },
    {
      data: "28/11",
      diaSemana: "Sábado",
      local: "Miyajima",
      quem: "felipana",
      bloco: "Semana separada · clássico",
      atividades: "Torii flutuante de Itsukushima. Okonomiyaki à noite.",
      transporte: "Bate-volta de Hiroshima (trem + balsa).",
    },
    {
      data: "29/11",
      diaSemana: "Domingo",
      local: "Osaka — USJ",
      quem: "felipana",
      bloco: "Semana separada · clássico",
      atividades:
        "Dia inteiro de Universal Studios Japan (Super Nintendo World). Reservar ingresso + passe da Área Nintendo.",
      transporte: "Hiroshima → Osaka (~1h25).",
    },
    {
      data: "30/11",
      diaSemana: "Segunda",
      local: "Osaka",
      quem: "felipana",
      bloco: "Semana separada · clássico",
      atividades:
        "Dotonbori, Castelo de Osaka + Monster Hunter (Hunters Bar Namba / Capcom Store Shinsaibashi).",
      transporte: "Dia em Osaka; véspera do reencontro.",
    },

    // 3. REENCONTRO — o pico (Kawaguchiko)
    {
      data: "01/12",
      diaSemana: "Terça",
      local: "Kawaguchiko — Aniversário 🎂",
      quem: "todos",
      bloco: "Reencontro no Fuji",
      atividades:
        "Aniversário da Thamires. Felipana (Osaka→Fuji ~4h) e Thamandro (Tóquio→Fuji ~2h) chegam ao ryokan. Pagode Chūreitō (foto Fuji + pagode), lago e Oishi Park. Jantar de aniversário e celebração.",
      transporte: "Felipana de Osaka; Thamandro de Tóquio.",
    },
    {
      data: "02/12",
      diaSemana: "Quarta",
      local: "Kawaguchiko",
      quem: "todos",
      bloco: "Reencontro no Fuji",
      atividades: "Onsen sem pressa, mais Fuji.",
      transporte: "Dia tranquilo no lago.",
    },

    // 4. FINAL — Tóquio (juntos + dias solo)
    {
      data: "03/12",
      diaSemana: "Quinta",
      local: "Tóquio — Shibuya",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades:
        "Instalar em Tóquio. Shibuya + Capcom Store (Shibuya Parco 6F — Monster Hunter).",
      transporte: "Kawaguchiko → Tóquio (~2h).",
    },
    {
      data: "04/12",
      diaSemana: "Sexta",
      local: "Nikko (pernoite)",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades: "Tōshō-gū. Pernoite em Nikko (onsen / área do Lago Chuzenji).",
      transporte: "Tóquio → Nikko (~2h).",
    },
    {
      data: "05/12",
      diaSemana: "Sábado",
      local: "Nikko → Tóquio",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades: "Lago Chuzenji e Cataratas Kegon. À tarde, volta a Tóquio.",
      transporte: "Nikko → Tóquio.",
    },
    {
      data: "06/12",
      diaSemana: "Domingo",
      local: "Tóquio livre",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades: "Asakusa/Sensō-ji, Skytree ou bairros à escolha.",
      transporte: "Metrô.",
    },
    {
      data: "07/12",
      diaSemana: "Segunda",
      local: "Tokyo DisneySea",
      quem: "felipana",
      bloco: "Final em Tóquio",
      atividades: "Decoração de Natal. Comprar ingresso com antecedência.",
      transporte: "Trem até Maihama.",
    },
    {
      data: "07/12",
      diaSemana: "Segunda",
      local: "Yokohama",
      quem: "thamandro",
      bloco: "Final em Tóquio",
      atividades: "Minato Mirai, Chinatown, museu do Cup Noodle.",
      transporte: "Trem (~30 min).",
    },
    {
      data: "08/12",
      diaSemana: "Terça",
      local: "teamLab + Akihabara",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades:
        "teamLab (reservar) + Akihabara → Hunters Bar Akihabara à noite (Monster Hunter).",
      transporte: "Metrô.",
    },
    {
      data: "09/12",
      diaSemana: "Quarta",
      local: "Tokyo Disneyland",
      quem: "felipana",
      bloco: "Final em Tóquio",
      atividades: "Dia de parque.",
      transporte: "Trem até Maihama.",
    },
    {
      data: "09/12",
      diaSemana: "Quarta",
      local: "Monte Takao",
      quem: "thamandro",
      bloco: "Final em Tóquio",
      atividades: "Trilha no Monte Takao.",
      transporte: "Trem (~50 min).",
    },
    {
      data: "10/12",
      diaSemana: "Quinta",
      local: "Kawagoe",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades: "A 'pequena Edo'.",
      transporte: "Trem (~30 min de Tóquio).",
    },
    {
      data: "11/12",
      diaSemana: "Sexta",
      local: "Tóquio livre",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades: "Compras finais, malas e jantar especial de despedida.",
      transporte: "Metrô.",
    },
    {
      data: "12/12",
      diaSemana: "Sábado",
      local: "Haneda — partida",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades: "Café tranquilo e Haneda às ~15h → NH963 17:25.",
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
      { item: "USJ (Universal Studios Japan)", valor: "Ingresso ~¥8.600–10.400/dia (~R$275–335). Área Nintendo costuma exigir passe de horário/Express — reservar." },
      { item: "Tokyo Disney (Felipana)", valor: "~R$290–320/dia × 2 dias." },
      { item: "Nikko (1 pernoite, ryokan/onsen)", valor: "Somar 1 diária (~R$300–600/pessoa)." },
      { item: "Ryokan especial no Fuji (celebração)", valor: "R$1.000–1.600/noite × 2 noites." },
      { item: "Ensaio quimono/pré-wedding (Felipana)", valor: "R$300–800." },
      { item: "Só Thamandro: voo Japão⇄China", valor: "R$1.500–3.000." },
      { item: "Só Thamandro: ~6 dias na China", valor: "R$2.500–4.000." },
    ],
    totais: [
      { grupo: "Felipana", valor: "~R$14–17 mil/pessoa (USJ + Disney + celebração)." },
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
    { cidade: "Hiroshima", bairro: "Perto da estação ou do Parque da Paz." },
    { cidade: "Osaka", bairro: "Namba/Dotonbori (e perto da linha p/ USJ)." },
    { cidade: "Kawaguchiko", bairro: "Ryokan com vista do Fuji (lado norte do lago) — local do reencontro." },
    { cidade: "Nikko", bairro: "1 noite — área do Lago Chuzenji ou Kinugawa Onsen." },
    { cidade: "Tóquio", bairro: "Shinjuku (hub de trens e vida noturna). Alternativas: Shibuya, estação de Tóquio." },
  ],

  /* ----------------------------------------------------------------
   * 8. LOGÍSTICA & DICAS
   * ---------------------------------------------------------------- */
  logistica: [
    {
      titulo: "Bagagem (takkyūbin)",
      texto:
        "Serviço porta a porta em toda troca de cidade. Na semana separada, cada casal manda a mala adiante e viaja leve. Em Nikko, leve só uma mochila de 1 noite.",
    },
    {
      titulo: "Trens",
      texto:
        "Bilhetes avulsos de Shinkansen (reservar assento — alta de outono) + Suica/ICOCA no celular. JR Pass nacional não compensa (22 dias, poucos trechos longos).",
    },
    {
      titulo: "Voos internos",
      texto:
        "Nenhum no Japão nesta versão (sem Hokkaido). Único voo extra é o do Thamandro p/ China (Tóquio ⇄ Pequim/Xangai).",
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
        "Thamandro volta da China dia 30 e pernoita em Tóquio (a ~2h do Fuji); Felipana termina o oeste em Osaka. Todos chegam ao ryokan no dia 1º com folga.",
    },
  ],

  /* ----------------------------------------------------------------
   * 9. MONSTER HUNTER (Capcom) 🐉
   * ---------------------------------------------------------------- */
  monsterHunter: {
    intro:
      "Capcom é de Osaka — então a franquia aparece em vários pontos da viagem.",
    locais: [
      {
        cidade: "Osaka — Felipana (30/11)",
        texto:
          "Hunters Bar Osaka (Namba) — réplicas de armas, consoles com Monster Hunter Wilds, comida/drinks pagos em \"Zenny\". Capcom Store (Shinsaibashi Parco).",
      },
      {
        cidade: "Tóquio — todos",
        texto:
          "Capcom Store (Shibuya Parco 6F) — mural do Rathalos e espada gigante p/ foto (03/12). Hunters Bar Akihabara (08/12).",
      },
    ],
    dica: "Reservar o Hunters Bar com antecedência (couvert ~¥700–900/pessoa).",
  },

  /* ----------------------------------------------------------------
   * 10. TOQUES ESPECIAIS (celebração)
   * ---------------------------------------------------------------- */
  toquesEspeciais: [
    "Ensaio de quimono / pré-wedding pra Felipana (Kyoto ou com o Fuji ao fundo).",
    "Ryokan top no Fuji com rotenburo privativo; avisar sobre aniversário e celebração.",
    "Jantar especial em Tóquio (sushi de balcão, kaiseki ou teppanyaki).",
    "Bolo de aniversário combinado com o ryokan para 01/12.",
  ],

  /* ----------------------------------------------------------------
   * 11. THAMANDRO JÁ CONHECE (não repetir)
   * ---------------------------------------------------------------- */
  jaForam: [
    "Nara",
    "Kyoto (e Uji)",
    "Osaka",
    "Kanazawa",
    "Kamakura",
    "Enoshima",
  ],

  /* ----------------------------------------------------------------
   * 12. DECISÕES / CHECKLIST
   * ----------------------------------------------------------------
   * `feito: true` deixa o item já marcado por padrão. O estado também
   * é salvo no navegador (localStorage) ao clicar.
   */
  pendencias: [
    { texto: "Hiroshima — confirmado", feito: true },
    { texto: "USJ — confirmado", feito: true },
    { texto: "Takayama + Shirakawa só Felipana", feito: true },
    { texto: "China com 6 dias", feito: true },
    { texto: "Nikko = 1 pernoite (todos)", feito: true },
    { texto: "China: só Pequim ou Pequim + Xangai (cabe em 6 dias)?", feito: false },
    { texto: "Confirmar Kawaguchiko (vs Hakone) no reencontro", feito: false },
    { texto: "Reservar USJ (ingresso + passe da Área Nintendo)", feito: false },
    { texto: "Reservar Disney (época de Natal lota)", feito: false },
    { texto: "Reservar Hunters Bar e ryokan de Nikko", feito: false },
    { texto: "Confirmar entrada sem visto na China perto da data", feito: false },
    { texto: "Confirmar cidade brasileira de origem (AF545/AF546)", feito: false },
  ],

  // Contagem de noites (resumo) — total 21
  noites: [
    { local: "Nagano", n: 2 },
    { local: "Separados", n: 8 },
    { local: "Kawaguchiko", n: 2 },
    { local: "Tóquio / Nikko", n: 9 },
  ],
};
