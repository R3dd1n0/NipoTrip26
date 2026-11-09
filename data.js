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
        "Chegam uma semana antes (Tóquio e Nikko), encontram todos no Fuji e fazem o Kansai com a Felipana (Osaka/USJ, Nara, Kyoto). Depois seguem sozinhos pelo sul (Hiroshima e Miyajima), voltam a Tóquio e embarcam em 03/12 (via Paris).",
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
      resumo: "Rafaelo chega antes: Tóquio (Asakusa, Shibuya) e Nikko.",
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
        "Felipana e Rafaelo juntos no Kansai (Osaka/USJ, Nara, Kyoto); Thamandro na China (Hong Kong → Hangzhou → Suzhou).",
    },
    {
      n: 4,
      titulo: "China + reta final",
      quando: "28/11–12/12",
      quem: "🟢 Thamandro + 🔵 Felipana",
      resumo:
        "Xangai (Disneyland + aniversário 01/12) e Pequim; volta a Tóquio (Disney, Nikko, Nagano). Rafaelo faz o sul (Hiroshima/Miyajima) e volta em 03/12.",
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
      { key: "nagano", nome: "Nagano", lat: 36.65, lon: 138.18, grupos: ["thamandro", "felipana"] },
      { key: "karuizawa", nome: "Karuizawa", lat: 36.35, lon: 138.60, grupos: ["thamandro", "felipana"] },
      { key: "kyoto", nome: "Kyoto", lat: 35.01, lon: 135.77, grupos: ["felipana", "rafaelo"] },
      { key: "nara", nome: "Nara", lat: 34.69, lon: 135.83, grupos: ["felipana", "rafaelo"] },
      { key: "osaka", nome: "Osaka (USJ)", lat: 34.69, lon: 135.50, grupos: ["felipana", "rafaelo"] },
      { key: "hiroshima", nome: "Hiroshima", lat: 34.39, lon: 132.46, grupos: ["rafaelo"] },
      { key: "miyajima", nome: "Miyajima", lat: 34.30, lon: 132.32, grupos: ["rafaelo"] },
      { key: "hongkong", nome: "Hong Kong", lat: 22.32, lon: 114.17, grupos: ["thamandro"] },
      { key: "hangzhou", nome: "Hangzhou", lat: 30.27, lon: 120.15, grupos: ["thamandro"] },
      { key: "suzhou", nome: "Suzhou", lat: 31.30, lon: 120.62, grupos: ["thamandro"] },
      { key: "xangai", nome: "Xangai", lat: 31.23, lon: 121.47, grupos: ["thamandro", "felipana"] },
      { key: "pequim", nome: "Pequim", lat: 39.90, lon: 116.40, grupos: ["thamandro", "felipana"] },
      { key: "kawagoe", nome: "Kawagoe (opc.)", lat: 35.92, lon: 139.48, grupos: ["thamandro", "felipana"], tbd: true },
    ],
    rotas: [
      { grupos: ["rafaelo", "thamandro", "felipana"], pontos: ["toquio", "kawaguchiko"] },
      // Pré-viagem do Rafaelo (Tóquio → Nikko)
      { grupos: ["rafaelo"], pontos: ["toquio", "nikko"] },
      // Kansai juntos (Felipana + Rafaelo)
      { grupos: ["felipana", "rafaelo"], pontos: ["kawaguchiko", "osaka", "nara", "kyoto"] },
      // Felipana — segue para a China
      { grupos: ["felipana"], pontos: ["kyoto", "xangai"], voo: true },
      // Rafaelo — sul (Hiroshima/Miyajima) e volta a Tóquio
      { grupos: ["rafaelo"], pontos: ["kyoto", "hiroshima"] },
      { grupos: ["rafaelo"], pontos: ["hiroshima", "miyajima"] },
      { grupos: ["rafaelo"], pontos: ["hiroshima", "toquio"] },
      { grupos: ["rafaelo"], pontos: ["toquio", "kamakura", "enoshima"] },
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
    { data: "15/11", diaSemana: "Domingo", local: "Tóquio — chegada", quem: ["rafaelo"], bloco: "Pré-viagem · Rafaelo", atividades: "Chegada antecipada do Rafaelo em Haneda (19:55, via Paris). Check-in no Hotel Trend Asakusa e jantar leve.", transporte: "✈️ AF274 Paris → Haneda." },
    { data: "16/11", diaSemana: "Segunda", local: "Tóquio — Asakusa", quem: ["rafaelo"], bloco: "Pré-viagem · Rafaelo", atividades: "Sensō-ji e Asakusa, Tsukiji Outer Market e, à tarde, teamLab Planets.", transporte: "Metrô." },
    { data: "17/11", diaSemana: "Terça", local: "Tóquio — Ueno & Akihabara", quem: ["rafaelo"], bloco: "Pré-viagem · Rafaelo", atividades: "Ueno Park, Ameyoko e Akihabara.", transporte: "Metrô." },
    { data: "18/11", diaSemana: "Quarta", local: "Tóquio — Shibuya", quem: ["rafaelo"], bloco: "Pré-viagem · Rafaelo", atividades: "Meiji Jingu, Harajuku e Shibuya (Shibuya Sky).", transporte: "Metrô." },
    { data: "19/11", diaSemana: "Quinta", local: "Tóquio → Nikko", quem: ["rafaelo"], bloco: "Pré-viagem · Rafaelo", atividades: "Trem para Nikko. Villa Imperial Tamozawa, Tōshō-gū e Rinnō-ji.", transporte: "🚄 Limited Express (Revaty/Spacia)." },
    { data: "20/11", diaSemana: "Sexta", local: "Nikko — Oku-Nikko", quem: ["rafaelo"], bloco: "Pré-viagem · Rafaelo", atividades: "Trilha de Senjōgahara e Cataratas de Kegon.", transporte: "Ônibus local." },

    // ---- ENCONTRO NO FUJI (todos) ----
    { data: "21/11", diaSemana: "Sábado", local: "Haneda → Kawaguchiko", quem: ["rafaelo", "thamandro", "felipana"], bloco: "Encontro dos 6 no Fuji", atividades: "Chegada de Thamandro e Felipana em Haneda (~06:50). Encontro dos 6 e seguem para Kawaguchiko (Airbnb em Saiko). Rafaelo/Consuelo chegam de Nikko (Chureito Pagoda no caminho).", transporte: "🚐 Transfer privativo (van) Haneda → Kawaguchiko p/ os 4 — reservado (AF282 rastreado)." },
    { data: "22/11", diaSemana: "Domingo", local: "Monte Fuji (manhã, todos)", quem: ["rafaelo", "thamandro", "felipana"], bloco: "Encontro dos 6 no Fuji", atividades: "Monte Fuji e Oishi Park pela manhã — todos juntos. À tarde cada rumo: Felipana e Rafaelo seguem juntos para Osaka; Thamandro voa à noite p/ Hong Kong (UO623, 23:55).", transporte: "Manhã no lago Kawaguchiko; à tarde Felipana+Rafaelo → Osaka." },

    // ---- KANSAI JUNTOS (Felipana + Rafaelo) ----
    { data: "23/11", diaSemana: "Segunda", local: "Osaka", quem: ["felipana", "rafaelo"], bloco: "Kansai · Felipana + Rafaelo", atividades: "Castelo de Osaka, Amerikamura e Osaka Aquarium Kaiyukan. À noite, Dotonbori.", transporte: "Metrô." },
    { data: "24/11", diaSemana: "Terça", local: "Osaka — Universal Studios", quem: ["felipana", "rafaelo"], bloco: "Kansai · Felipana + Rafaelo", atividades: "USJ 🎢 — Super Nintendo World (Felipana + Rafaelo). Ingressos + Express Pass 7 (Minecart) já comprados.", transporte: "Metrô." },
    { data: "25/11", diaSemana: "Quarta", local: "Nara → Kyoto", quem: ["felipana", "rafaelo"], bloco: "Kansai · Felipana + Rafaelo", atividades: "Bate-volta a Nara (Nara Park e Tōdai-ji) e, à tarde, seguem para Kyoto.", transporte: "Osaka → Nara → Kyoto." },
    { data: "26/11", diaSemana: "Quinta", local: "Kyoto", quem: ["felipana", "rafaelo"], bloco: "Kansai · Felipana + Rafaelo", atividades: "Rurikō-in, Nanzen-ji, cerimônia do chá, Gion e Yasaka. À noite, Pontocho e rio Kamo.", transporte: "Trens locais." },
    { data: "27/11", diaSemana: "Sexta", local: "Kyoto — Arashiyama", quem: ["felipana", "rafaelo"], bloco: "Kansai · Felipana + Rafaelo", atividades: "Floresta de bambu de Arashiyama, Tenryū-ji, trem panorâmico de Sagano e Nishiki Market.", transporte: "Trens locais." },

    // ---- RAFAELO · SUL + VOLTA (sozinhos) ----
    { data: "28/11", diaSemana: "Sábado", local: "Kyoto → Hiroshima", quem: ["rafaelo"], bloco: "Rafaelo · sul + volta", atividades: "Manhã em Kyoto (Fushimi Inari, Kiyomizu-dera) e, à tarde, trem para Hiroshima: Parque Memorial da Paz e Cúpula da Bomba Atômica. (A Felipana segue para a China.)", transporte: "🚄 Kyoto → Hiroshima." },
    { data: "29/11", diaSemana: "Domingo", local: "Miyajima", quem: ["rafaelo"], bloco: "Rafaelo · sul + volta", atividades: "Ilha de Miyajima: santuário Itsukushima, Daishō-in e Monte Misen (trilha + teleférico).", transporte: "Trem + balsa (bate-volta)." },
    { data: "30/11", diaSemana: "Segunda", local: "Hiroshima → Tóquio", quem: ["rafaelo"], bloco: "Rafaelo · sul + volta", atividades: "Castelo de Hiroshima e jardim Shukkei-en pela manhã; à tarde, trem de volta a Tóquio.", transporte: "🚄 Hiroshima → Tóquio." },
    { data: "01/12", diaSemana: "Terça", local: "Tóquio", quem: ["rafaelo"], bloco: "Rafaelo · sul + volta", atividades: "Meiji Jingu, Harajuku, Omotesandō e Shibuya. À noite, Shinjuku iluminada.", transporte: "Metrô." },
    { data: "02/12", diaSemana: "Quarta", local: "Kamakura & Enoshima", quem: ["rafaelo"], bloco: "Rafaelo · sul + volta", atividades: "Bate-volta a Kamakura (Grande Buda) e Enoshima.", transporte: "Trem (~1h de Tóquio)." },
    { data: "03/12", diaSemana: "Quinta", local: "Tóquio → Brasil", quem: ["rafaelo"], bloco: "Rafaelo · sul + volta", atividades: "Jardins Leste do Palácio Imperial, almoço e compras em Ginza. À noite, embarque de volta (via Paris).", transporte: "✈️ AF279 Haneda → Paris → Fortaleza." },

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
    { data: "01/12", diaSemana: "Terça", local: "Xangai — Disneyland 🎂", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Shanghai Disneyland — aniversário da Thamires ❤️. ✅ Ingressos comprados (4 pax, com Disney Premier Access).", transporte: "Metrô." },
    { data: "02/12", diaSemana: "Quarta", local: "Xangai → Pequim", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Dia em Xangai e, à noite, trem-bala para Pequim (hotel Sunworld Wangfujing).", transporte: "🚄 Xangai-Hongqiao → Pequim-Sul 18:50 (2ª classe, 4 pax) — pré-reservado na Trip.com (venda abre 18/11)." },
    { data: "03/12", diaSemana: "Quinta", local: "Pequim — Cidade Proibida", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Cidade Proibida + Parque Jingshan.", transporte: "Metrô." },
    { data: "04/12", diaSemana: "Sexta", local: "Pequim — Muralha", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Muralha da China.", transporte: "Bate-volta." },
    { data: "05/12", diaSemana: "Sábado", local: "Pequim → Tóquio", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Volta ao Japão. Voo Air China CA183 (PEK 17:10 → Haneda 21:30).", transporte: "✈️ Pequim → Tóquio-Haneda." },

    // ---- RETA FINAL · TÓQUIO (Thamandro + Felipana) ----
    { data: "06/12", diaSemana: "Domingo", local: "Tóquio livre", quem: ["thamandro", "felipana"], bloco: "Reta final · Tóquio", atividades: "Bairros à escolha (Shibuya, Asakusa/Sensō-ji, Skytree...).", transporte: "Metrô. Base: COMMA HOUSE (Ikebukuro)." },
    { data: "07/12", diaSemana: "Segunda", local: "Tokyo DisneySea", quem: ["felipana"], bloco: "Reta final · Tóquio", atividades: "Felipana: dia na Tokyo DisneySea. ✅ Ingressos comprados (1-Day Passport, 2 adultos).", transporte: "Trem até Maihama." },
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
    { voo: "AF489", data: "13/11", hora: "21:50", trecho: "🔴 Fortaleza (FOR) → Paris (CDG) — ida Rafaelo" },
    { voo: "AF274", data: "14/11", hora: "22:20", trecho: "🔴 Paris (CDG) → Tóquio-Haneda (chega 15/11 19:55) — Rafaelo" },
    { voo: "AF489", data: "18/11", hora: "21:50", trecho: "🟢🔵 Fortaleza (FOR) → Paris (CDG) — ida Thamandro + Felipana" },
    { voo: "AF282", data: "20/11", hora: "09:50", trecho: "🟢🔵 Paris (CDG) → Tóquio-Haneda (chega 21/11 ~06:50)" },
    { voo: "UO623", data: "22/11", hora: "23:55", trecho: "🟢 Tóquio-Haneda → Hong Kong (chega 23/11 04:15) — Thamandro" },
    { voo: "HX128", data: "25/11", hora: "21:15", trecho: "🟢 Hong Kong → Hangzhou (chega 23:40) — Thamandro" },
    { voo: "HO1338", data: "28/11", hora: "22:10", trecho: "🔵 Osaka (KIX) → Xangai (PVG) (chega 23:40) — Felipana" },
    { voo: "AF279", data: "03/12", hora: "23:30", trecho: "🔴 Tóquio-Haneda → Paris (CDG) — volta Rafaelo" },
    { voo: "AF488", data: "04/12", hora: "14:30", trecho: "🔴 Paris (CDG) → Fortaleza (FOR) (chega 19:40) — volta Rafaelo" },
    { voo: "CA183", data: "05/12", hora: "17:10", trecho: "🟢🔵 Pequim (PEK) → Tóquio-Haneda (chega 21:30) — Thamandro + Felipana" },
    { voo: "NH963", data: "12/12", hora: "17:25", trecho: "🟢🔵 Tóquio-Haneda → Pequim (PEK) — volta" },
    { voo: "AF381", data: "13/12", hora: "00:05", trecho: "🟢🔵 Pequim (PEK) → Paris (CDG) — volta" },
    { voo: "AF488", data: "13/12", hora: "14:30", trecho: "🟢🔵 Paris (CDG) → Fortaleza (FOR) (chega 19:40) — volta" },
  ],
  voosNota:
    "Todos os voos aéreos ✅ comprados (número + data). Tudo via Air France (Paris em stopover). 🔴 Rafaelo viaja antes (13/11–04/12) e faz só o Japão; 🟢🔵 Thamandro e Felipana seguem para a China. Toque no número do voo para ver o status.",

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
      { item: "USJ (Universal Studios Osaka) — 24/11", valor: "✅ comprado (Felipana + Rafaelo): 4× 1-Day Studio Pass + 4× Express Pass 7 (Minecart) = ¥134.800 (~R$4.300 no grupo)." },
      { item: "Disney", valor: "Tóquio DisneySea 07/12 (Felipana): ✅ comprado (¥21.800 / 2 ad.). Xangai 01/12 (os 4): ✅ comprado (¥2.620 / 4 pax, com Premier Access)." },
      { item: "Trem Xangai → Pequim (02/12, os 4)", valor: "2ª classe · ~US$407 no grupo (US$375 + taxas). Pré-reservado na Trip.com — compra automática quando a venda abrir (18/11)." },
      { item: "Hotel Xangai (Atour Bund, 28/11–02/12)", valor: "≈ R$5.692 (2 quartos / 4 diárias). ✅ pago." },
      { item: "Voo Pequim → Tóquio (05/12, CA183)", valor: "≈ R$4.987 (4 pessoas). ✅ pago." },
      { item: "China (Thamandro + Felipana)", valor: "Voos + trens-bala + estadia (~8 dias): R$4.000–7.000/pessoa." },
    ],
    totais: [
      { grupo: "Rafaelo", valor: "Japão ~3 semanas (sem China); volta 03/12 (via Paris)." },
      { grupo: "Thamandro", valor: "~R$16–20 mil/pessoa (China inclusa)." },
      { grupo: "Felipana", valor: "~R$16–20 mil/pessoa (USJ + China + Disney)." },
    ],
  },

  /* ----------------------------------------------------------------
   * 7. ONDE FICAR (reservas confirmadas)
   * ---------------------------------------------------------------- */
  ondeFicar: [
    { cidade: "Kawaguchiko · Fuji (21)", bairro: "✅ Airbnb em Saiko (comporta os 6) — o encontro dos 6." },
    { cidade: "Osaka (22–24)", bairro: "✅ 🔵🔴 Henn na Hotel Express Osaka Namba Nipponbashi (Felipana + Rafaelo)." },
    { cidade: "Kyoto (25–27)", bairro: "✅ 🔵🔴 Tune Stay Kyoto (Felipana + Rafaelo)." },
    { cidade: "Hong Kong (23–24)", bairro: "✅ 🟢 Empire Hotel Kowloon — Tsim Sha Tsui." },
    { cidade: "Hangzhou (25–26)", bairro: "✅ 🟢 Nostalgia S Hotel (West Lake Intime)." },
    { cidade: "Suzhou (27)", bairro: "✅ 🟢 Anyi Hotel (Pingjiang Rd)." },
    { cidade: "Xangai (28–01)", bairro: "✅ 🟢🔵 Atour Hotel Shanghai Bund Land Plaza (2 quartos)." },
    { cidade: "Pequim (02–04)", bairro: "✅ 🟢🔵 Sunworld Hotel Wangfujing (2 quartos)." },
    { cidade: "Tóquio (05–11)", bairro: "✅ 🟢🔵 COMMA HOUSE Nishi-ikebukuro (apto 2 quartos)." },
    { cidade: "🔴 Tóquio (15–19)", bairro: "✅ 🔴 Hotel Trend Asakusa Tawaramachi — pré-viagem do Rafaelo." },
    { cidade: "🔴 Nikko (19–21)", bairro: "✅ 🔴 The Nest Nikko (Airbnb)." },
    { cidade: "🔴 Hiroshima (28–30)", bairro: "✅ 🔴 Hotel Mystays Hiroshima Peace Park (Miyajima é bate-volta)." },
    { cidade: "🔴 Tóquio (30/11–03/12)", bairro: "🔴 Rafaelo: reta final em Tóquio — hospedagem a reservar." },
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
    { texto: "Trem Xangai→Pequim (02/12) pré-reservado na Trip.com — bilhete emitido em 18/11; demais trens da China a reservar", feito: false },
    { texto: "Reservar Fuji Excursion (abre 30 dias antes)", feito: false },
    { texto: "USJ comprado — ingressos + Express Pass 7 (Minecart), Felipana + Rafaelo, dia 24/11", feito: true },
    { texto: "Tokyo DisneySea (07/12, Felipana) comprado · transfer Haneda→Kawaguchiko (21/11) reservado", feito: true },
    { texto: "Disney de Xangai (01/12, os 4) comprado — com Premier Access", feito: true },
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
