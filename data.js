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
        "Já fizeram Japão + Coreia há ~1 ano e amaram. Aniversário da Thamires: 01/12 (data sagrada — todos juntos). No Japão, exploram o que ainda não conhecem.",
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
      quando: "24–30/11",
      quem: "Felipana × Thamandro",
      resumo:
        "Felipana no clássico + Hiroshima/Miyajima + USJ; Thamandro na China (~6 dias).",
    },
    {
      n: 3,
      titulo: "Reencontro no Fuji",
      quando: "30/11–02/12",
      quem: "Juntos",
      resumo:
        "Thamandro chega dia 30 (descanso); Felipana no dia 1º (aniversário). Ryokan top em Kawaguchiko.",
    },
    {
      n: 4,
      titulo: "Final em Tóquio",
      quando: "03–12/12",
      quem: "Juntos + dias solo",
      resumo:
        "Disney (Felipana) e dias solo do Thamandro, bairros, teamLab, Nikko e jantar de despedida.",
    },
  ],

  // Rota oeste → leste (para a linha da rota)
  rota: [
    "Nagano",
    "Takayama",
    "Shirakawa-go",
    "Kyoto / China",
    "Hiroshima",
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
      { key: "nikko", nome: "Nikko (bate-volta)", lat: 36.76, lon: 139.60, grupo: "comum" },
      // Japão — clássico (Felipana)
      { key: "kyoto", nome: "Kyoto", lat: 35.01, lon: 135.77, grupo: "felipana" },
      { key: "nara", nome: "Nara (bate-volta)", lat: 34.69, lon: 135.83, grupo: "felipana" },
      { key: "hiroshima", nome: "Hiroshima", lat: 34.39, lon: 132.46, grupo: "felipana" },
      { key: "miyajima", nome: "Miyajima", lat: 34.30, lon: 132.32, grupo: "felipana" },
      { key: "osaka", nome: "Osaka (USJ)", lat: 34.69, lon: 135.50, grupo: "felipana" },
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
      // Felipana — o clássico + oeste (terrestre)
      { grupo: "felipana", pontos: ["takayama", "kyoto", "hiroshima", "osaka", "kawaguchiko"] },
      { grupo: "felipana", pontos: ["kyoto", "nara"] }, // bate-volta
      { grupo: "felipana", pontos: ["hiroshima", "miyajima"] }, // bate-volta
      // Thamandro — China (Nagoya por terra, depois voos)
      { grupo: "thamandro", pontos: ["takayama", "nagoya"] },
      { grupo: "thamandro", pontos: ["nagoya", "pequim"], voo: true },
      { grupo: "thamandro", pontos: ["pequim", "xangai"], voo: true, tbd: true },
      { grupo: "thamandro", pontos: ["pequim", "kawaguchiko"], voo: true }, // volta dia 30
      // Reencontro + final (todos)
      { grupo: "comum", pontos: ["kawaguchiko", "toquio"] },
      { grupo: "comum", pontos: ["toquio", "nikko"] }, // bate-volta
    ],
  },

  /* ----------------------------------------------------------------
   * 4. ROTEIRO DIA A DIA
   * ----------------------------------------------------------------
   * Campo `quem`: "todos" | "felipana" | "thamandro"
   * (usado pelo filtro de abas). Campo `tbd: true` marca "a confirmar".
   */
  roteiro: [
    // 1. ABERTURA NOS ALPES — juntos
    {
      data: "21/11",
      diaSemana: "Sábado",
      local: "Nagano",
      quem: "todos",
      bloco: "Abertura nos Alpes",
      atividades: "Tarde leve por causa do jet lag: templo Zenkō-ji.",
      transporte:
        "Pouso em Haneda (~06:50) → Tokyo Station → Shinkansen até Nagano (~1h30).",
    },
    {
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
      data: "23/11",
      diaSemana: "Segunda",
      local: "Takayama",
      quem: "todos",
      bloco: "Abertura nos Alpes",
      atividades: "Cidade velha de Hida; provar Hida beef. (1 noite)",
      transporte: "Nagano → Takayama via Toyama (~3h).",
    },
    {
      data: "24/11",
      diaSemana: "Terça",
      local: "Shirakawa-go → separação",
      quem: "todos",
      bloco: "Abertura nos Alpes",
      atividades:
        "Manhã: Shirakawa-go (todos, casas gasshō-zukuri). À tarde, a separação: Thamandro segue p/ Nagoya → voo China; Felipana segue p/ Kyoto.",
      transporte: "Bate-volta de Takayama (~50 min); à tarde cada casal segue.",
    },

    // 2. SEMANA SEPARADA — Thamandro (China)
    {
      data: "25/11",
      diaSemana: "Quarta",
      local: "China (Pequim)",
      quem: "thamandro",
      bloco: "Semana separada · China",
      atividades: "Início do capítulo China — Pequim de base (Muralha, Cidade Proibida).",
      transporte:
        "Takayama → Nagoya → voo p/ China (ou pernoite em Nagoya e voo dia 25).",
    },
    {
      data: "26–29/11",
      diaSemana: "Qui–Dom",
      local: "China (Pequim · opc. Xangai)",
      quem: "thamandro",
      bloco: "Semana separada · China",
      atividades:
        "~6 dias na China: Muralha, Cidade Proibida e mais. Opcional emendar Xangai de trem-bala. Brasileiros entram sem visto (até 30 dias — confirmar; levar passagem de volta + hospedagem).",
      transporte: "Trem-bala Pequim ⇄ Xangai (opcional).",
      tbd: true,
    },
    {
      data: "30/11",
      diaSemana: "Segunda",
      local: "Kawaguchiko (volta da China)",
      quem: "thamandro",
      bloco: "Semana separada · China",
      atividades:
        "Volta da China e segue direto pro ryokan do Fuji; descanso no onsen antes do reencontro.",
      transporte: "Voo China → Tóquio → Kawaguchiko.",
    },

    // 2. SEMANA SEPARADA — Felipana (o clássico + oeste)
    {
      data: "25/11",
      diaSemana: "Quarta",
      local: "Kyoto",
      quem: "felipana",
      bloco: "Semana separada · clássico",
      atividades:
        "Fushimi Inari, Arashiyama (bambu cedo), Gion, Kiyomizu. Cabe o ensaio de quimono/pré-wedding.",
      transporte: "Chegada na véspera (24, Takayama → Kyoto ~3h30).",
    },
    {
      data: "26/11",
      diaSemana: "Quinta",
      local: "Nara (bate-volta)",
      quem: "felipana",
      bloco: "Semana separada · clássico",
      atividades: "Grande Buda de Tōdai-ji e os cervos.",
      transporte: "Bate-volta de Kyoto (~45 min).",
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
        "Dotonbori, Castelo de Osaka + Monster Hunter (Hunters Bar Namba / Capcom Store Shinsaibashi). Véspera do reencontro.",
      transporte: "Dia em Osaka.",
    },

    // 3. REENCONTRO — o pico (Kawaguchiko)
    {
      data: "01/12",
      diaSemana: "Terça",
      local: "Kawaguchiko — Aniversário 🎂",
      quem: "todos",
      bloco: "Reencontro no Fuji",
      atividades:
        "Aniversário da Thamires. Felipana chega e todos se reúnem: Pagode Chūreitō (foto Fuji + pagode), lago e Oishi Park. Jantar de aniversário e celebração no ryokan.",
      transporte: "Felipana: Osaka → Kawaguchiko (~4h).",
    },
    {
      data: "02/12",
      diaSemana: "Quarta",
      local: "Kawaguchiko → Tóquio",
      quem: "todos",
      bloco: "Reencontro no Fuji",
      atividades: "Onsen sem pressa, mais Fuji. À tarde, seguir para Tóquio.",
      transporte: "Kawaguchiko → Tóquio (~2h).",
    },

    // 4. FINAL — Tóquio (juntos + dias solo)
    {
      data: "03/12",
      diaSemana: "Quinta",
      local: "Tóquio — Shibuya",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades:
        "Tarde leve em Shibuya + Capcom Store (Shibuya Parco 6F — Monster Hunter).",
      transporte: "Fuji → Tóquio (~2h).",
    },
    {
      data: "04/12",
      diaSemana: "Sexta",
      local: "Tokyo DisneySea",
      quem: "felipana",
      bloco: "Final em Tóquio",
      atividades: "Decoração de Natal. Comprar ingresso com antecedência.",
      transporte: "Trem até Maihama.",
    },
    {
      data: "04/12",
      diaSemana: "Sexta",
      local: "Kawagoe",
      quem: "thamandro",
      bloco: "Final em Tóquio",
      atividades: "Bate-volta à 'pequena Edo'.",
      transporte: "Trem (~30 min de Tóquio).",
    },
    {
      data: "05/12",
      diaSemana: "Sábado",
      local: "Tokyo Disneyland",
      quem: "felipana",
      bloco: "Final em Tóquio",
      atividades: "Dia de parque.",
      transporte: "Trem até Maihama.",
    },
    {
      data: "05/12",
      diaSemana: "Sábado",
      local: "Yokohama",
      quem: "thamandro",
      bloco: "Final em Tóquio",
      atividades:
        "Minato Mirai, Chinatown, museu do Cup Noodle. Alternativa: Monte Takao.",
      transporte: "Trem (~30 min).",
    },
    {
      data: "06/12",
      diaSemana: "Domingo",
      local: "Asakusa / Skytree / Yanaka",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades: "Sensō-ji, Skytree e o bairro retrô de Yanaka.",
      transporte: "Metrô.",
    },
    {
      data: "07/12",
      diaSemana: "Segunda",
      local: "Meiji / Harajuku / Shinjuku",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades: "Meiji Jingu + Harajuku + Omotesando; Shinjuku à noite.",
      transporte: "Metrô / linha Yamanote.",
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
      local: "Nikko",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades: "Bate-volta: Tōshō-gū + outono na montanha. (Novo pra todos.)",
      transporte: "Trem (bate-volta).",
    },
    {
      data: "10/12",
      diaSemana: "Quinta",
      local: "Tóquio (flexível)",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades: "Dia flexível: Odaiba, Toyosu, jardins ou repetir um favorito.",
      transporte: "Metrô.",
    },
    {
      data: "11/12",
      diaSemana: "Sexta",
      local: "Tóquio",
      quem: "todos",
      bloco: "Final em Tóquio",
      atividades: "Último dia inteiro: compras, mala, jantar especial de despedida.",
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
      { item: "Ryokan especial no Fuji (celebração)", valor: "R$1.000–1.600/noite × 2–3 noites." },
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
        "Thamandro chega ao ryokan do Fuji já no dia 30 (volta da China e descansa); Felipana chega no dia 1º para o aniversário. Margem de sobra para o jantar de celebração.",
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
        cidade: "Osaka",
        texto:
          "Hunters Bar Osaka (Namba) — réplicas de armas, consoles com Monster Hunter Wilds, comida/drinks pagos em \"Zenny\". Capcom Store (Shinsaibashi Parco).",
      },
      {
        cidade: "Tóquio",
        texto:
          "Capcom Store (Shibuya Parco 6F) — mural do Rathalos e espada gigante p/ foto. Hunters Bar Akihabara.",
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
    { texto: "Hiroshima na trilha da Felipana — confirmado", feito: true },
    { texto: "USJ confirmado (Felipe), na semana de Osaka", feito: true },
    { texto: "Takayama com 1 noite", feito: true },
    { texto: "Reencontro no dia 1º (Thamandro chega dia 30 pra descansar)", feito: true },
    { texto: "Nikko: conjunto (recomendado) ou Thamandro solo?", feito: false },
    { texto: "China: só Pequim ou Pequim + Xangai (cabe, ~6 dias)?", feito: false },
    { texto: "Reservar USJ (ingresso + passe da Área Nintendo)", feito: false },
    { texto: "Reservar Disney (época de Natal lota)", feito: false },
    { texto: "Reservar Hunters Bar (Osaka e/ou Akihabara)", feito: false },
    { texto: "Confirmar entrada sem visto na China perto da data", feito: false },
    { texto: "Confirmar cidade brasileira de origem (AF545/AF546)", feito: false },
  ],

  // Contagem de noites (resumo) — total 21
  noites: [
    { local: "Nagano", n: 2 },
    { local: "Takayama", n: 1 },
    { local: "Separados", n: 6 },
    { local: "Kawaguchiko", n: 3 },
    { local: "Tóquio", n: 9 },
  ],
};
