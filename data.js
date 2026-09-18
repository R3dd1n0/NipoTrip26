/*
 * data.js — FONTE DE VERDADE da viagem ao Japão 2026
 * ---------------------------------------------------
 * Edite SOMENTE este arquivo para atualizar o site.
 * Roteiros SEPARADOS por casal. `quem` (roteiro) e `grupos` (mapa) são
 * LISTAS de casais ("rafaelo" | "thamandro" | "felipana"); lista com os
 * 3 = todos juntos. 1 casal → cor do casal; 2+ → dourado (compartilhado).
 */

const TRIP = {
  /* ----------------------------------------------------------------
   * 1. METADADOS / HERO
   * ---------------------------------------------------------------- */
  meta: {
    titulo: "Japão 2026",
    subtitulo: "Três casais · roteiros separados · 15/11 – 12/12",
    periodo: "15/11 – 12/12 de 2026",
    countdownAlvoISO: "2026-11-21T06:50:00+09:00",
    frase:
      "Três casais: encontro dos 6 no Fuji, e depois cada um no seu rumo — o clássico do Japão, a China por Hong Kong e o sul — com o aniversário da Thamy em Xangai.",
  },

  /* ----------------------------------------------------------------
   * 2. GRUPOS (casais)
   * ---------------------------------------------------------------- */
  grupos: [
    {
      key: "rafaelo",
      nome: "Rafaelo",
      emoji: "🔴",
      cor: "#D83A3A",
      membros: "Rafael + Consuelo",
      tag: "Chegam antes (15/11)",
      descricao:
        "Começam uma semana antes (Tóquio, Kamakura & Enoshima, Nikko/Nagano), fazem o Kansai (Kyoto/Nara/Osaka/USJ) e o sul (Hiroshima/Fukuoka), e voltam ao Brasil em 02/12.",
    },
    {
      key: "thamandro",
      nome: "Thamandro",
      emoji: "🟢",
      cor: "#2FA36B",
      membros: "Thamires + Leandro",
      tag: "China: Hong Kong → Xangai → Pequim",
      descricao:
        "China por Hong Kong, Hangzhou e Suzhou; encontram a Felipana em Xangai (28/11). Aniversário da Thamires em 01/12 (Disneyland de Xangai).",
    },
    {
      key: "felipana",
      nome: "Felipana",
      emoji: "🔵",
      cor: "#3E78C9",
      membros: "Felipe + Mariana",
      tag: "Kansai + China + Tóquio",
      descricao:
        "Fuji → Osaka (USJ) → Nara → Kyoto → Xangai → Pequim → Tóquio (Disney e bate-voltas). Na China e em Tóquio, com o Thamandro.",
    },
  ],

  /* ----------------------------------------------------------------
   * 3. VISÃO GERAL — os momentos da viagem
   * ---------------------------------------------------------------- */
  momentos: [
    {
      n: 1,
      titulo: "Pré-viagem (Rafaelo)",
      quando: "15–20/11",
      quem: "🔴 Rafaelo",
      resumo: "Rafaelo chega antes: Tóquio, Kamakura & Enoshima, Nikko/Nagano.",
    },
    {
      n: 2,
      titulo: "Encontro dos 6 no Fuji",
      quando: "21–22/11",
      quem: "Todos",
      resumo: "Chegada em Haneda, Kawaguchiko, Monte Fuji e onsen. À tarde do 22, cada casal segue seu rumo.",
    },
    {
      n: 3,
      titulo: "Separação",
      quando: "22–28/11",
      quem: "3 rumos",
      resumo:
        "Felipana no Kansai (Osaka/USJ, Nara, Kyoto); Rafaelo no Kansai + sul; Thamandro na China (Hong Kong → Hangzhou → Suzhou).",
    },
    {
      n: 4,
      titulo: "China + reta final",
      quando: "28/11–12/12",
      quem: "🟢 Thamandro + 🔵 Felipana",
      resumo:
        "Xangai (Disneyland + aniversário 01/12) e Pequim; volta a Tóquio (Disney, Nikko, Nagano). Rafaelo volta antes (02/12).",
    },
  ],

  // Rota (visão macro)
  rota: [
    "Tóquio",
    "Kawaguchiko (Fuji)",
    "Osaka",
    "Kyoto",
    "Hong Kong",
    "Xangai",
    "Pequim",
    "Tóquio",
  ],

  /* ----------------------------------------------------------------
   * 3.1. MAPA — cidades (lat/lon reais) e rotas
   * ---------------------------------------------------------------- */
  mapa: {
    cidades: [
      { key: "toquio", nome: "Tóquio (Haneda)", lat: 35.68, lon: 139.76, grupos: ["rafaelo", "thamandro", "felipana"] },
      { key: "kawaguchiko", nome: "Kawaguchiko · Fuji", lat: 35.50, lon: 138.77, grupos: ["rafaelo", "thamandro", "felipana"], star: true },
      { key: "kamakura", nome: "Kamakura", lat: 35.32, lon: 139.55, grupos: ["rafaelo"] },
      { key: "enoshima", nome: "Enoshima", lat: 35.30, lon: 139.48, grupos: ["rafaelo"] },
      { key: "nikko", nome: "Nikko", lat: 36.76, lon: 139.60, grupos: ["rafaelo", "thamandro", "felipana"] },
      { key: "nagano", nome: "Nagano", lat: 36.65, lon: 138.18, grupos: ["rafaelo", "thamandro", "felipana"] },
      { key: "karuizawa", nome: "Karuizawa", lat: 36.35, lon: 138.60, grupos: ["thamandro", "felipana"] },
      { key: "kyoto", nome: "Kyoto", lat: 35.01, lon: 135.77, grupos: ["felipana", "rafaelo"] },
      { key: "nara", nome: "Nara", lat: 34.69, lon: 135.83, grupos: ["felipana", "rafaelo"] },
      { key: "osaka", nome: "Osaka (USJ)", lat: 34.69, lon: 135.50, grupos: ["felipana", "rafaelo"] },
      { key: "hiroshima", nome: "Hiroshima", lat: 34.39, lon: 132.46, grupos: ["rafaelo"] },
      { key: "fukuoka", nome: "Fukuoka", lat: 33.59, lon: 130.40, grupos: ["rafaelo"] },
      { key: "hongkong", nome: "Hong Kong", lat: 22.32, lon: 114.17, grupos: ["thamandro"] },
      { key: "hangzhou", nome: "Hangzhou", lat: 30.27, lon: 120.15, grupos: ["thamandro"] },
      { key: "suzhou", nome: "Suzhou", lat: 31.30, lon: 120.62, grupos: ["thamandro"] },
      { key: "xangai", nome: "Xangai", lat: 31.23, lon: 121.47, grupos: ["thamandro", "felipana"] },
      { key: "pequim", nome: "Pequim", lat: 39.90, lon: 116.40, grupos: ["thamandro", "felipana"] },
      { key: "kawagoe", nome: "Kawagoe (opc.)", lat: 35.92, lon: 139.48, grupos: ["thamandro", "felipana"], tbd: true },
    ],
    rotas: [
      { grupos: ["rafaelo", "thamandro", "felipana"], pontos: ["toquio", "kawaguchiko"] },
      // Pré-viagem do Rafaelo
      { grupos: ["rafaelo"], pontos: ["toquio", "kamakura", "enoshima"] },
      { grupos: ["rafaelo"], pontos: ["toquio", "nikko"] },
      { grupos: ["rafaelo"], pontos: ["toquio", "nagano"], tbd: true },
      // Felipana — Kansai (Osaka-first) e depois China
      { grupos: ["felipana"], pontos: ["kawaguchiko", "osaka", "nara", "kyoto"] },
      { grupos: ["felipana"], pontos: ["kyoto", "xangai"], voo: true },
      // Rafaelo — Kansai (Kyoto-first) + sul + volta
      { grupos: ["rafaelo"], pontos: ["kawaguchiko", "kyoto", "osaka", "hiroshima", "fukuoka"] },
      { grupos: ["rafaelo"], pontos: ["fukuoka", "toquio"], voo: true },
      // Thamandro — China por Hong Kong
      { grupos: ["thamandro"], pontos: ["toquio", "hongkong"], voo: true },
      { grupos: ["thamandro"], pontos: ["hongkong", "hangzhou"], voo: true },
      { grupos: ["thamandro"], pontos: ["hangzhou", "suzhou", "xangai"] },
      // Thamandro + Felipana — Xangai → Pequim → Tóquio + bate-voltas
      { grupos: ["thamandro", "felipana"], pontos: ["xangai", "pequim"] },
      { grupos: ["thamandro", "felipana"], pontos: ["pequim", "toquio"], voo: true },
      { grupos: ["thamandro", "felipana"], pontos: ["toquio", "nikko"] },
      { grupos: ["thamandro", "felipana"], pontos: ["toquio", "nagano"] },
      { grupos: ["thamandro", "felipana"], pontos: ["toquio", "karuizawa"] },
      { grupos: ["thamandro", "felipana"], pontos: ["toquio", "kawagoe"], tbd: true },
    ],
  },

  /* ----------------------------------------------------------------
   * 4. ROTEIRO DIA A DIA
   * ---------------------------------------------------------------- */
  roteiro: [
    // ---- PRÉ-VIAGEM (Rafaelo) ----
    { data: "15/11", diaSemana: "Domingo", local: "Tóquio", quem: ["rafaelo"], bloco: "Pré-viagem · Rafaelo", atividades: "Chegada antecipada do Rafaelo. Tóquio: bairros e comida.", transporte: "Pouso em Haneda/Narita." },
    { data: "16/11", diaSemana: "Segunda", local: "Kamakura & Enoshima", quem: ["rafaelo"], bloco: "Pré-viagem · Rafaelo", atividades: "Grande Buda de Kamakura e Enoshima — no mesmo dia.", transporte: "Trem (~1h de Tóquio)." },
    { data: "17–20/11", diaSemana: "Ter–Sex", local: "Nikko e/ou Nagano", quem: ["rafaelo"], bloco: "Pré-viagem · Rafaelo", atividades: "Nikko (Tōshō-gū) e/ou Nagano. Depois, volta a Tóquio para o encontro dos 6.", transporte: "Trem.", tbd: true },

    // ---- ENCONTRO NO FUJI (todos) ----
    { data: "21/11", diaSemana: "Sábado", local: "Haneda → Kawaguchiko", quem: ["rafaelo", "thamandro", "felipana"], bloco: "Encontro dos 6 no Fuji", atividades: "Chegada de Marlipe e Thamandro em Haneda (~06:50). Encontro dos 6 na estação e seguem para Kawaguchiko (Airbnb em Saiko).", transporte: "🚄 Haneda → Kawaguchiko." },
    { data: "22/11", diaSemana: "Domingo", local: "Monte Fuji (manhã, todos)", quem: ["rafaelo", "thamandro", "felipana"], bloco: "Encontro dos 6 no Fuji", atividades: "Monte Fuji e onsen pela manhã — todos juntos. À tarde cada casal segue: Felipana → Osaka; Rafaelo → Kyoto; Thamandro voa à noite p/ Hong Kong (UO623, 23:55).", transporte: "Manhã no lago Kawaguchiko; à tarde cada rumo." },

    // ---- FELIPANA · KANSAI (Osaka-first) ----
    { data: "23/11", diaSemana: "Segunda", local: "Osaka — Universal Studios", quem: ["felipana"], bloco: "Felipana · Kansai", atividades: "Universal Studios Osaka 🎢 — Super Nintendo World. Reservar ingresso + passe da Área Nintendo.", transporte: "Chegou véspera (22, Kawaguchiko → Osaka)." },
    { data: "24/11", diaSemana: "Terça", local: "Osaka livre", quem: ["felipana"], bloco: "Felipana · Kansai", atividades: "Dia livre (Dotonbori, Castelo). À noite, enviar as malas por takkyūbin.", transporte: "Metrô." },
    { data: "25/11", diaSemana: "Quarta", local: "Nara → Kyoto", quem: ["felipana"], bloco: "Felipana · Kansai", atividades: "Café em Osaka, bate-volta a Nara (Grande Buda e cervos) e, à noite, dormir em Kyoto.", transporte: "Osaka → Nara → Kyoto." },
    { data: "26/11", diaSemana: "Quinta", local: "Kyoto livre", quem: ["felipana"], bloco: "Felipana · Kansai", atividades: "Fushimi Inari, Arashiyama, Gion, Kiyomizu.", transporte: "Trens locais." },
    { data: "27/11", diaSemana: "Sexta", local: "Kyoto livre", quem: ["felipana"], bloco: "Felipana · Kansai", atividades: "Mais Kyoto (templos, bairros; cabe o ensaio de quimono).", transporte: "Trens locais." },

    // ---- RAFAELO · KANSAI + SUL (Kyoto-first) ----
    { data: "23/11", diaSemana: "Segunda", local: "Kyoto livre", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "Fushimi Inari, Gion, Kiyomizu.", transporte: "Chegou véspera (22, Kawaguchiko → Kyoto)." },
    { data: "24/11", diaSemana: "Terça", local: "Kyoto livre", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "Arashiyama e mais Kyoto.", transporte: "Trens locais." },
    { data: "25/11", diaSemana: "Quarta", local: "Nara", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "Bate-volta a Nara (Grande Buda e cervos).", transporte: "Bate-volta de Kyoto." },
    { data: "26/11", diaSemana: "Quinta", local: "Kyoto → Osaka", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "Manhã: seguem para Osaka.", transporte: "Kyoto → Osaka (~30 min)." },
    { data: "27/11", diaSemana: "Sexta", local: "Universal Studios Osaka", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "USJ 🎢.", transporte: "Metrô." },
    { data: "28/11", diaSemana: "Sábado", local: "Osaka livre", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "Dotonbori, Castelo, dia livre.", transporte: "Metrô." },
    { data: "29/11", diaSemana: "Domingo", local: "Osaka → Hiroshima", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "Segue pelo sul; dorme em Hiroshima.", transporte: "🚄 Osaka → Hiroshima." },
    { data: "30/11", diaSemana: "Segunda", local: "Hiroshima → Fukuoka", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "Hiroshima (Parque da Paz / Miyajima) e, no fim da tarde, Fukuoka (dorme lá).", transporte: "🚄 Hiroshima → Fukuoka." },
    { data: "01/12", diaSemana: "Terça", local: "Fukuoka", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "Rafaelo em Fukuoka.", transporte: "Dia na cidade." },
    { data: "02/12", diaSemana: "Quarta", local: "Fukuoka → Brasil", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "Fim da viagem do Rafaelo.", transporte: "✈️ Fukuoka → Tóquio → Brasil (madrugada)." },

    // ---- THAMANDRO · CHINA (Hong Kong) ----
    { data: "23/11", diaSemana: "Segunda", local: "Hong Kong", quem: ["thamandro"], bloco: "Thamandro · China (Hong Kong)", atividades: "Chegada em Hong Kong (04:15). Mandar mala por delivery do aeroporto p/ o hotel (Empire Kowloon, TST).", transporte: "✈️ chegou de madrugada (UO623)." },
    { data: "24/11", diaSemana: "Terça", local: "Hong Kong", quem: ["thamandro"], bloco: "Thamandro · China (Hong Kong)", atividades: "Hong Kong (talvez Disney).", transporte: "Metrô / balsa." },
    { data: "25/11", diaSemana: "Quarta", local: "Hong Kong → Hangzhou", quem: ["thamandro"], bloco: "Thamandro · China (Hong Kong)", atividades: "Manhã livre em HK; à noite, voo p/ Hangzhou (HX128, 21:15).", transporte: "✈️ Hong Kong → Hangzhou (chega 23:40)." },
    { data: "26/11", diaSemana: "Quinta", local: "Hangzhou", quem: ["thamandro"], bloco: "Thamandro · China (Hong Kong)", atividades: "Hangzhou livre (Lago Oeste).", transporte: "Metrô." },
    { data: "27/11", diaSemana: "Sexta", local: "Hangzhou → Suzhou", quem: ["thamandro"], bloco: "Thamandro · China (Hong Kong)", atividades: "Trem cedo p/ Suzhou (jardins, canais).", transporte: "🚄 Hangzhou → Suzhou." },

    // ---- XANGAI + PEQUIM (Thamandro + Felipana) ----
    { data: "28/11", diaSemana: "Sábado", local: "Xangai — chegada (Atour Bund)", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Check-in no Atour Hotel Shanghai Bund (28/11–02/12). Thamandro chega de Suzhou (último trem); Felipana voa de Osaka (HO1338, 22:10 → 23:40).", transporte: "🚄 Suzhou → Xangai · ✈️ Osaka → Xangai." },
    { data: "29/11", diaSemana: "Domingo", local: "Xangai", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "The Bund, cidade.", transporte: "Metrô." },
    { data: "30/11", diaSemana: "Segunda", local: "Xangai", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Mais Xangai.", transporte: "Metrô." },
    { data: "01/12", diaSemana: "Terça", local: "Xangai — Disneyland 🎂", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Shanghai Disneyland — aniversário da Thamires ❤️.", transporte: "Metrô." },
    { data: "02/12", diaSemana: "Quarta", local: "Xangai → Pequim", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Checkout do Atour e seguir cedo para Pequim (hotel Sunworld Wangfujing).", transporte: "🚄 Xangai → Pequim (Fuxing)." },
    { data: "03/12", diaSemana: "Quinta", local: "Pequim — Cidade Proibida", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Cidade Proibida + Parque Jingshan.", transporte: "Metrô." },
    { data: "04/12", diaSemana: "Sexta", local: "Pequim — Muralha", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Muralha da China.", transporte: "Bate-volta." },
    { data: "05/12", diaSemana: "Sábado", local: "Pequim → Tóquio", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Volta ao Japão. Voo Air China CA183 (PEK 17:10 → Haneda 21:30).", transporte: "✈️ Pequim → Tóquio-Haneda." },

    // ---- RETA FINAL · TÓQUIO (Thamandro + Felipana) ----
    { data: "06/12", diaSemana: "Domingo", local: "Tóquio livre", quem: ["thamandro", "felipana"], bloco: "Reta final · Tóquio", atividades: "Bairros à escolha (Shibuya, Asakusa/Sensō-ji, Skytree...).", transporte: "Metrô. Base: COMMA HOUSE (Ikebukuro)." },
    { data: "07/12", diaSemana: "Segunda", local: "Tokyo Disney", quem: ["felipana"], bloco: "Reta final · Tóquio", atividades: "Felipana: dia de parque (DisneySea ou Disneyland).", transporte: "Trem até Maihama." },
    { data: "07/12", diaSemana: "Segunda", local: "Karuizawa (bate-volta)", quem: ["thamandro"], bloco: "Reta final · Tóquio", atividades: "Thamandro: bate-volta a Karuizawa (ou Tóquio livre).", transporte: "Trem.", tbd: true },
    { data: "08/12", diaSemana: "Terça", local: "Nikko (bate-volta)", quem: ["thamandro", "felipana"], bloco: "Reta final · Tóquio", atividades: "Tōshō-gū e natureza.", transporte: "Trem (bate-volta)." },
    { data: "09/12", diaSemana: "Quarta", local: "Nagano (bate-volta)", quem: ["thamandro", "felipana"], bloco: "Reta final · Tóquio", atividades: "Macacos da neve em Jigokudani.", transporte: "Trem (bate-volta)." },
    { data: "10/12", diaSemana: "Quinta", local: "Tóquio livre", quem: ["thamandro", "felipana"], bloco: "Reta final · Tóquio", atividades: "Compras, teamLab, Akihabara ou favoritos.", transporte: "Metrô." },
    { data: "11/12", diaSemana: "Sexta", local: "Kawagoe ou Tóquio livre", quem: ["thamandro", "felipana"], bloco: "Reta final · Tóquio", atividades: "Bate-volta a Kawagoe (a 'pequena Edo') ou Tóquio livre. Jantar de despedida.", transporte: "Trem (~30 min).", tbd: true },
    { data: "12/12", diaSemana: "Sábado", local: "Retorno ao Brasil", quem: ["thamandro", "felipana"], bloco: "Reta final · Tóquio", atividades: "Tóquio pela manhã, checkout 12h e retorno ao Brasil à tarde (via Pequim/Paris).", transporte: "✈️ NH963 Haneda → Pequim → Paris → Fortaleza." },
  ],

  /* ----------------------------------------------------------------
   * 5. VOOS (todos confirmados, com número)
   * ---------------------------------------------------------------- */
  voos: [
    { voo: "AF489", data: "18/11", hora: "21:50", trecho: "Fortaleza (FOR) → Paris (CDG) — ida (os 6)" },
    { voo: "AF282", data: "20/11", hora: "09:50", trecho: "Paris (CDG) → Tóquio-Haneda (chega 21/11 ~06:50)" },
    { voo: "UO623", data: "22/11", hora: "23:55", trecho: "🟢 Tóquio-Haneda → Hong Kong (chega 23/11 04:15) — Thamandro" },
    { voo: "HX128", data: "25/11", hora: "21:15", trecho: "🟢 Hong Kong → Hangzhou (chega 23:40) — Thamandro" },
    { voo: "HO1338", data: "28/11", hora: "22:10", trecho: "🔵 Osaka (KIX) → Xangai (PVG) (chega 23:40) — Felipana" },
    { voo: "CA183", data: "05/12", hora: "17:10", trecho: "🟢🔵 Pequim (PEK) → Tóquio-Haneda (chega 21:30) — Thamandro + Felipana" },
    { voo: "NH963", data: "12/12", hora: "17:25", trecho: "Tóquio-Haneda → Pequim (PEK) — volta" },
    { voo: "AF381", data: "13/12", hora: "00:05", trecho: "Pequim (PEK) → Paris (CDG) — volta" },
    { voo: "AF488", data: "13/12", hora: "14:30", trecho: "Paris (CDG) → Fortaleza (FOR) (chega 19:40) — volta" },
  ],
  voosNota:
    "Todos os voos aéreos ✅ comprados (número + data). Ida/volta Air France (PNRs XOOM5W · X3QBBE); 🔴 Rafaelo volta antes (02/12, Fukuoka → Tóquio → Brasil). Toque no número do voo para ver o status.",

  /* ----------------------------------------------------------------
   * 6. ORÇAMENTO
   * ---------------------------------------------------------------- */
  orcamento: {
    cambioBase: 0.032,
    cambioCartao: 0.034,
    diaria: [
      { categoria: "Hospedagem", iene: 7000, real: 225 },
      { categoria: "Comida", iene: 4000, real: 130 },
      { categoria: "Transporte", iene: 2700, real: 90 },
      { categoria: "Lazer/atrações", iene: 2500, real: 80 },
    ],
    diariaTotal: { iene: 16200, real: 525 },
    base22dias: "≈ R$11–14 mil/pessoa no Japão (fora a passagem internacional).",
    pontuais: [
      { item: "USJ (Universal Studios Osaka)", valor: "Ingresso ~¥8.600–10.400/dia (~R$275–335). Área Nintendo pede passe de horário/Express — reservar." },
      { item: "Disney (Xangai 01/12 e Tóquio 07/12)", valor: "~R$250–320/dia por parque (Thamandro + Felipana)." },
      { item: "Hotel Xangai (Atour Bund, 28/11–02/12)", valor: "≈ R$5.692 (2 quartos / 4 diárias). ✅ pago." },
      { item: "Voo Pequim → Tóquio (05/12, CA183)", valor: "≈ R$4.987 (4 pessoas). ✅ pago." },
      { item: "China (Thamandro + Felipana)", valor: "Voos + trens-bala + estadia (~8 dias): R$4.000–7.000/pessoa." },
    ],
    totais: [
      { grupo: "Rafaelo", valor: "Japão ~2,5 semanas (sem China); volta 02/12." },
      { grupo: "Thamandro", valor: "~R$16–20 mil/pessoa (China inclusa)." },
      { grupo: "Felipana", valor: "~R$16–20 mil/pessoa (USJ + China + Disney)." },
    ],
  },

  /* ----------------------------------------------------------------
   * 7. ONDE FICAR (reservas confirmadas)
   * ---------------------------------------------------------------- */
  ondeFicar: [
    { cidade: "Kawaguchiko · Fuji (21)", bairro: "✅ Airbnb em Saiko (comporta os 6) — o encontro dos 6." },
    { cidade: "Osaka (22–24)", bairro: "✅ 🔵 Henn na Hotel Express Osaka Namba Nipponbashi." },
    { cidade: "Kyoto (25–27)", bairro: "✅ 🔵 Tune Stay Kyoto (Quarto Duplo)." },
    { cidade: "Hong Kong (23–24)", bairro: "✅ 🟢 Empire Hotel Kowloon — Tsim Sha Tsui." },
    { cidade: "Hangzhou (25–26)", bairro: "✅ 🟢 Nostalgia S Hotel (West Lake Intime)." },
    { cidade: "Suzhou (27)", bairro: "✅ 🟢 Anyi Hotel (Pingjiang Rd)." },
    { cidade: "Xangai (28–01)", bairro: "✅ 🟢🔵 Atour Hotel Shanghai Bund Land Plaza (2 quartos)." },
    { cidade: "Pequim (02–04)", bairro: "✅ 🟢🔵 Sunworld Hotel Wangfujing (2 quartos)." },
    { cidade: "Tóquio (05–11)", bairro: "✅ 🟢🔵 COMMA HOUSE Nishi-ikebukuro (apto 2 quartos)." },
    { cidade: "Sul (29–01)", bairro: "🔴 Rafaelo: Hiroshima e Fukuoka (perto das estações)." },
  ],

  /* ----------------------------------------------------------------
   * 8. LOGÍSTICA & DICAS
   * ---------------------------------------------------------------- */
  logistica: [
    { titulo: "Bagagem (takkyūbin)", texto: "Enviar as malas por correio nas trocas de cidade (ex.: em Osaka, na noite de 24/11; e delivery do aeroporto → hotel em Hong Kong) e viajar leve." },
    { titulo: "Trens — reservar na janela!", texto: "Fuji Excursion (Haneda ⇄ Kawaguchiko) abre 30 dias antes. Trens-bala da China (Hangzhou→Suzhou→Xangai→Pequim) abrem 14 dias antes (Trip.com)." },
    { titulo: "Voos", texto: "Todos comprados. Internos: Tóquio→HK (UO623), HK→Hangzhou (HX128), Osaka→Xangai (HO1338), Pequim→Tóquio (CA183). Ida/volta Air France." },
    { titulo: "China — vistos e entrada", texto: "Hong Kong tem imigração própria. Para o continente (Hangzhou/Xangai/Pequim), confirmar regras de isenção/trânsito perto da data e levar comprovantes." },
    { titulo: "Clima", texto: "Outono no pico em Kyoto (fim de nov); Tóquio lindo em dez (manhãs ~5–8°C). Pequim no inverno é fria e seca." },
    { titulo: "Aniversário da Thamy (01/12)", texto: "Comemoração na Disneyland de Xangai, com Thamandro + Felipana." },
  ],

  /* ----------------------------------------------------------------
   * 9. TOQUES ESPECIAIS (celebração)
   * ---------------------------------------------------------------- */
  toquesEspeciais: [
    "Encontro dos 6 no Fuji (21–22/11) — Airbnb em Saiko com vista para o lago.",
    "Aniversário da Thamires na Disneyland de Xangai (01/12).",
    "Ensaio de quimono / pré-wedding pra Felipana (Kyoto).",
    "Jantar de despedida em Tóquio (11–12/12).",
  ],

  /* ----------------------------------------------------------------
   * 10. THAMANDRO JÁ CONHECE (não repetir)
   * ---------------------------------------------------------------- */
  jaForam: ["Nara", "Kyoto (e Uji)", "Osaka", "Kanazawa", "Kamakura", "Enoshima"],

  /* ----------------------------------------------------------------
   * 11. DECISÕES / CHECKLIST
   * ---------------------------------------------------------------- */
  pendencias: [
    { texto: "Todos os voos comprados (com número/data)", feito: true },
    { texto: "Hospedagem dos 4 completa (Fuji → Osaka/Kyoto/HK/Hangzhou/Suzhou/Xangai/Pequim/Tóquio)", feito: true },
    { texto: "Ryokan: cancelado (Fuji é só o Airbnb)", feito: true },
    { texto: "Aniversário da Thamy em Xangai (01/12)", feito: true },
    { texto: "Reservar trens da China (abrem 14 dias antes — Trip.com)", feito: false },
    { texto: "Reservar Fuji Excursion (abre 30 dias antes)", feito: false },
    { texto: "Reservar USJ (ingresso + passe da Área Nintendo)", feito: false },
    { texto: "Reservar Disney (Xangai 01/12 e Tóquio 07/12)", feito: false },
    { texto: "07/12: Thamandro em Karuizawa ou Tóquio livre?", feito: false },
    { texto: "11/12: Kawagoe ou Tóquio livre?", feito: false },
  ],

  // Contagem de noites (núcleo Thamandro/Felipana = 21 noites)
  noites: [
    { local: "Fuji", n: 1 },
    { local: "Osaka", n: 3 },
    { local: "Kyoto", n: 3 },
    { local: "Xangai", n: 4 },
    { local: "Pequim", n: 3 },
    { local: "Tóquio", n: 7 },
  ],
};
