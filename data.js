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
      "Três casais: encontro dos 6 no Fuji, cada um no seu rumo (Kansai, China por Hong Kong, sul do Japão) e o reencontro Thamandro + Felipana na China até Tóquio.",
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
        "Começam uma semana antes (Tóquio, Kamakura & Enoshima, Nikko/Nagano), fazem o Kansai e o sul (Hiroshima/Fukuoka) e voltam ao Brasil mais cedo (02/12).",
    },
    {
      key: "thamandro",
      nome: "Thamandro",
      emoji: "🟢",
      cor: "#2FA36B",
      membros: "Thamires + Leandro",
      tag: "China: Hong Kong → Xangai → Pequim",
      descricao:
        "China por Hong Kong, Hangzhou e Suzhou; encontram a Felipana em Xangai (28/11). Aniversário da Thamires em 01/12.",
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
      resumo: "Chegada em Haneda, Kawaguchiko, Monte Fuji, ryokan e onsen.",
    },
    {
      n: 3,
      titulo: "Separação",
      quando: "22–28/11",
      quem: "3 rumos",
      resumo:
        "Felipana no Kansai (Osaka/USJ, Nara, Kyoto); Rafaelo no Kansai + sul; Thamandro na China (Hong Kong → Xangai).",
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
      // Felipana — Kansai e depois China
      { grupos: ["felipana"], pontos: ["kawaguchiko", "osaka", "nara", "kyoto"] },
      { grupos: ["felipana"], pontos: ["kyoto", "xangai"], voo: true },
      // Rafaelo — Kansai + sul + volta
      { grupos: ["rafaelo"], pontos: ["kawaguchiko", "kyoto", "osaka", "hiroshima", "fukuoka"] },
      { grupos: ["rafaelo"], pontos: ["fukuoka", "toquio"], voo: true },
      // Thamandro — China por Hong Kong
      { grupos: ["thamandro"], pontos: ["toquio", "hongkong"], voo: true },
      { grupos: ["thamandro"], pontos: ["hongkong", "hangzhou"], voo: true },
      { grupos: ["thamandro"], pontos: ["hangzhou", "suzhou", "xangai"] },
      // Thamandro + Felipana — Xangai → Pequim → Tóquio
      { grupos: ["thamandro", "felipana"], pontos: ["xangai", "pequim"] },
      { grupos: ["thamandro", "felipana"], pontos: ["pequim", "toquio"], voo: true },
      { grupos: ["thamandro", "felipana"], pontos: ["toquio", "nikko"] },
      { grupos: ["thamandro", "felipana"], pontos: ["toquio", "nagano"] },
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
    { data: "21/11", diaSemana: "Sábado", local: "Haneda → Kawaguchiko", quem: ["rafaelo", "thamandro", "felipana"], bloco: "Encontro dos 6 no Fuji", atividades: "Chegada dos demais em Haneda (~06:50). Encontro dos 6 e seguem para Kawaguchiko.", transporte: "🚄 Haneda → Kawaguchiko." },
    { data: "22/11", diaSemana: "Domingo", local: "Monte Fuji (manhã, todos)", quem: ["rafaelo", "thamandro", "felipana"], bloco: "Encontro dos 6 no Fuji", atividades: "Monte Fuji, ryokan e onsen pela manhã — todos juntos. À tarde a Felipana segue p/ Osaka; Thamandro e Rafaelo seguem seus rumos.", transporte: "Entorno do lago Kawaguchiko." },

    // ---- FELIPANA · KANSAI ----
    { data: "22/11", diaSemana: "Domingo", local: "Kawaguchiko → Osaka", quem: ["felipana"], bloco: "Felipana · Kansai", atividades: "À tarde, seguem para Osaka.", transporte: "🚄 Kawaguchiko → Osaka." },
    { data: "23/11", diaSemana: "Segunda", local: "Osaka — Universal Studios", quem: ["felipana"], bloco: "Felipana · Kansai", atividades: "Universal Studios Osaka 🎢 — Super Nintendo World. Reservar ingresso + passe da Área Nintendo.", transporte: "Metrô." },
    { data: "24/11", diaSemana: "Terça", local: "Osaka livre", quem: ["felipana"], bloco: "Felipana · Kansai", atividades: "Dia livre (Dotonbori, Castelo). À noite, enviar as malas pelo correio (takkyūbin).", transporte: "Metrô." },
    { data: "25/11", diaSemana: "Quarta", local: "Nara → Kyoto", quem: ["felipana"], bloco: "Felipana · Kansai", atividades: "Café em Osaka, bate-volta a Nara (Grande Buda, cervos) e, à noite, dormir em Kyoto.", transporte: "Osaka → Nara → Kyoto." },
    { data: "26/11", diaSemana: "Quinta", local: "Kyoto livre", quem: ["felipana"], bloco: "Felipana · Kansai", atividades: "Fushimi Inari, Arashiyama, Gion, Kiyomizu.", transporte: "Trens locais." },
    { data: "27/11", diaSemana: "Sexta", local: "Kyoto livre", quem: ["felipana"], bloco: "Felipana · Kansai", atividades: "Mais Kyoto (templos, bairros; cabe o ensaio de quimono).", transporte: "Trens locais." },

    // ---- RAFAELO · KANSAI + SUL ----
    { data: "23/11", diaSemana: "Segunda", local: "Tóquio → Kyoto", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "Seguem para Kyoto.", transporte: "🚄 Kawaguchiko → Kyoto." },
    { data: "24/11", diaSemana: "Terça", local: "Kyoto", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "Fushimi Inari, Gion, Kiyomizu.", transporte: "Trens locais." },
    { data: "25/11", diaSemana: "Quarta", local: "Nara", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "Bate-volta a Nara (Grande Buda e cervos).", transporte: "Bate-volta de Kyoto." },
    { data: "26/11", diaSemana: "Quinta", local: "Kyoto", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "Mais Kyoto (Arashiyama).", transporte: "Trens locais." },
    { data: "27/11", diaSemana: "Sexta", local: "Universal Studios Osaka", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "USJ 🎢.", transporte: "Kyoto → Osaka." },
    { data: "28/11", diaSemana: "Sábado", local: "Osaka livre", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "Dotonbori, Castelo, dia livre.", transporte: "Metrô." },
    { data: "29/11", diaSemana: "Domingo", local: "Osaka → Hiroshima", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "Segue pelo sul; dorme em Hiroshima.", transporte: "🚄 Osaka → Hiroshima." },
    { data: "30/11", diaSemana: "Segunda", local: "Hiroshima → Fukuoka", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "Hiroshima (Parque da Paz / Miyajima) e, no fim da tarde, Fukuoka (dorme lá).", transporte: "🚄 Hiroshima → Fukuoka." },
    { data: "01/12", diaSemana: "Terça", local: "Fukuoka", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "Rafaelo em Fukuoka.", transporte: "Dia na cidade." },
    { data: "02/12", diaSemana: "Quarta", local: "Fukuoka → Brasil", quem: ["rafaelo"], bloco: "Rafaelo · Kansai + sul", atividades: "Fim da viagem do Rafaelo.", transporte: "✈️ Fukuoka → Tóquio → Brasil (madrugada)." },

    // ---- THAMANDRO · CHINA (Hong Kong) ----
    { data: "23/11", diaSemana: "Segunda", local: "Tóquio → Hong Kong", quem: ["thamandro"], bloco: "Thamandro · China (Hong Kong)", atividades: "Início do capítulo China por Hong Kong.", transporte: "✈️ Tóquio → Hong Kong." },
    { data: "24–25/11", diaSemana: "Ter–Qua", local: "Hong Kong", quem: ["thamandro"], bloco: "Thamandro · China (Hong Kong)", atividades: "Explorar Hong Kong.", transporte: "Metrô / balsa." },
    { data: "26/11", diaSemana: "Quinta", local: "Hong Kong → Hangzhou", quem: ["thamandro"], bloco: "Thamandro · China (Hong Kong)", atividades: "Seguem para Hangzhou.", transporte: "✈️/🚄 Hong Kong → Hangzhou." },
    { data: "27/11", diaSemana: "Sexta", local: "Hangzhou → Suzhou → Xangai", quem: ["thamandro"], bloco: "Thamandro · China (Hong Kong)", atividades: "Hangzhou (cedo), Suzhou e chegar a Xangai a tempo do check-in dia 28.", transporte: "🚄." },

    // ---- XANGAI + PEQUIM (Thamandro + Felipana) ----
    { data: "28/11", diaSemana: "Sábado", local: "Xangai — chegada (Atour Bund) ✅", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Check-in no Atour Hotel Shanghai Bund (28/11–02/12). Felipana chega de Kyoto (voo ~22h); Thamandro de Suzhou. Reserva confirmada (Booking 6057.321.176).", transporte: "✈️ Kyoto → Xangai (Felipana)." },
    { data: "29/11", diaSemana: "Domingo", local: "Xangai", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "The Bund, cidade.", transporte: "Metrô." },
    { data: "30/11", diaSemana: "Segunda", local: "Xangai", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Mais Xangai.", transporte: "Metrô." },
    { data: "01/12", diaSemana: "Terça", local: "Xangai — Disneyland 🎂", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Shanghai Disneyland — aniversário da Thamy ❤️.", transporte: "Metrô." },
    { data: "02/12", diaSemana: "Quarta", local: "Xangai → Pequim", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Checkout do Atour e seguir cedo para Pequim.", transporte: "🚄 Xangai → Pequim." },
    { data: "03/12", diaSemana: "Quinta", local: "Pequim — Cidade Proibida", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Cidade Proibida + Parque Jingshan.", transporte: "Metrô." },
    { data: "04/12", diaSemana: "Sexta", local: "Pequim — Muralha", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Muralha da China.", transporte: "Bate-volta." },
    { data: "05/12", diaSemana: "Sábado", local: "Pequim → Tóquio ✅", quem: ["thamandro", "felipana"], bloco: "China · Xangai + Pequim", atividades: "Volta ao Japão. Voo Air China PEK 17:10 → Haneda 21:30 (confirmado).", transporte: "✈️ Pequim (PEK) → Tóquio-Haneda." },

    // ---- RETA FINAL · TÓQUIO (Thamandro + Felipana) ----
    { data: "06/12", diaSemana: "Domingo", local: "Tóquio livre", quem: ["thamandro", "felipana"], bloco: "Reta final · Tóquio", atividades: "Bairros à escolha (Shibuya, Asakusa/Sensō-ji, Skytree...).", transporte: "Metrô." },
    { data: "07/12", diaSemana: "Segunda", local: "Tokyo Disney", quem: ["thamandro", "felipana"], bloco: "Reta final · Tóquio", atividades: "Dia de parque (DisneySea ou Disneyland). Ingresso com antecedência.", transporte: "Trem até Maihama." },
    { data: "08/12", diaSemana: "Terça", local: "Nikko (bate-volta)", quem: ["thamandro", "felipana"], bloco: "Reta final · Tóquio", atividades: "Tōshō-gū e natureza.", transporte: "Trem (bate-volta)." },
    { data: "09/12", diaSemana: "Quarta", local: "Nagano (bate-volta)", quem: ["thamandro", "felipana"], bloco: "Reta final · Tóquio", atividades: "Macacos da neve em Jigokudani.", transporte: "Trem (bate-volta)." },
    { data: "10/12", diaSemana: "Quinta", local: "Tóquio livre", quem: ["thamandro", "felipana"], bloco: "Reta final · Tóquio", atividades: "Compras, teamLab, Akihabara ou favoritos.", transporte: "Metrô." },
    { data: "11/12", diaSemana: "Sexta", local: "Kawagoe ou Tóquio livre", quem: ["thamandro", "felipana"], bloco: "Reta final · Tóquio", atividades: "Bate-volta a Kawagoe (a 'pequena Edo') ou Tóquio livre. Jantar de despedida.", transporte: "Trem (~30 min).", tbd: true },
    { data: "12/12", diaSemana: "Sábado", local: "Retorno ao Brasil", quem: ["thamandro", "felipana"], bloco: "Reta final · Tóquio", atividades: "Tóquio pela manhã, checkout 12h e retorno ao Brasil à tarde.", transporte: "✈️ Haneda → Brasil." },
  ],

  /* ----------------------------------------------------------------
   * 5. VOOS
   * ----------------------------------------------------------------
   * `link: false` desliga o link de status (quando não há código IATA).
   */
  voos: [
    { voo: "AF545", data: "18/11", hora: "21:50", trecho: "Fortaleza (FOR) → Paris (CDG) — ida" },
    { voo: "AF282", data: "20/11", hora: "09:45", trecho: "Paris (CDG) → Tóquio-Haneda (chega 21/11 ~06:50)" },
    { voo: "Kyoto→PVG", data: "28/11", hora: "~22:00", trecho: "Kyoto/Osaka (KIX) → Xangai — Felipana (nº a confirmar)", tbd: true, link: false },
    { voo: "Rafaelo", data: "02/12", hora: "—", trecho: "Fukuoka → Tóquio → Brasil (retorno do Rafaelo)", tbd: true, link: false },
    { voo: "Air China", data: "05/12", hora: "17:10", trecho: "Pequim (PEK) → Tóquio-Haneda (chega 21:30) — Thamandro + Felipana ✅ confirmado", link: false },
    { voo: "Retorno", data: "12/12", hora: "tarde", trecho: "Tóquio → Brasil — Thamandro + Felipana (a confirmar)", tbd: true, link: false },
  ],
  voosNota:
    "✅ Confirmados: voo Pequim → Tóquio (05/12, Air China, 17:10→21:30) e hotel em Xangai (28/11–02/12). Números dos demais voos e retornos ainda a confirmar. Toque no código do voo (quando houver) para ver o status.",

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
      { item: "Hotel Xangai (Atour Bund, 28/11–02/12)", valor: "≈ R$5.692 p/ 2 quartos / 4 diárias (≈ R$1.423/quarto). ✅ pago." },
      { item: "Voo Pequim → Tóquio (05/12)", valor: "≈ R$4.987 p/ 4 pessoas (≈ R$1.247/pessoa). ✅ pago." },
      { item: "China (Thamandro + Felipana, ~8 dias)", valor: "Voos + trens + estadia: R$4.000–7.000/pessoa." },
    ],
    totais: [
      { grupo: "Rafaelo", valor: "Japão ~2,5 semanas (sem China); volta 02/12." },
      { grupo: "Thamandro", valor: "~R$16–20 mil/pessoa (China inclusa)." },
      { grupo: "Felipana", valor: "~R$16–20 mil/pessoa (USJ + China + Disney)." },
    ],
  },

  /* ----------------------------------------------------------------
   * 7. ONDE FICAR
   * ---------------------------------------------------------------- */
  ondeFicar: [
    { cidade: "Kawaguchiko", bairro: "Ryokan com vista do Fuji — o encontro dos 6 (21/11)." },
    { cidade: "Osaka", bairro: "Namba/Dotonbori (perto da linha p/ USJ). Felipana 22–24; Rafaelo 27–28." },
    { cidade: "Kyoto", bairro: "Centro (Kawaramachi/Gion). Felipana 25–27; Rafaelo 23–26." },
    { cidade: "Hiroshima / Fukuoka", bairro: "🔴 Rafaelo: perto das estações (Hiroshima e Hakata)." },
    { cidade: "Hong Kong", bairro: "🟢 Tsim Sha Tsui ou Central." },
    { cidade: "Xangai", bairro: "✅ Atour Hotel Shanghai Bund Land Plaza (409 East Nanjing Rd) — 28/11 a 02/12. Reserva confirmada (Booking 6057.321.176)." },
    { cidade: "Pequim", bairro: "Perto de Wangfujing / Cidade Proibida." },
    { cidade: "Tóquio", bairro: "Shinjuku ou Shibuya (hub de trens). Reta final 05–12/12." },
  ],

  /* ----------------------------------------------------------------
   * 8. LOGÍSTICA & DICAS
   * ---------------------------------------------------------------- */
  logistica: [
    { titulo: "Bagagem (takkyūbin)", texto: "Enviem as malas por correio nas trocas de cidade (ex.: em Osaka, na noite de 24/11) e viajem leves." },
    { titulo: "Trens", texto: "Shinkansen com assento reservado (alta de outono) + Suica/ICOCA. Na China, trem-bala Xangai → Pequim." },
    { titulo: "Voos", texto: "Felipana: Kyoto → Xangai (28/11, ~22h). Thamandro: Tóquio → Hong Kong (23/11). Juntos: Pequim → Tóquio (05/12, Air China 17:10→21:30 ✅). Rafaelo volta 02/12 (Fukuoka → Tóquio → Brasil)." },
    { titulo: "China — vistos e entrada", texto: "Hong Kong tem imigração própria. Para o continente (Hangzhou/Xangai/Pequim), confirmar regras de isenção/trânsito perto da data e levar comprovantes." },
    { titulo: "Clima", texto: "Outono no pico em Kyoto (fim de nov); Tóquio lindo em dez (manhãs ~5–8°C). Pequim no inverno é fria e seca." },
    { titulo: "Aniversário da Thamy (01/12)", texto: "Comemoração na Disneyland de Xangai, com Thamandro + Felipana." },
  ],

  /* ----------------------------------------------------------------
   * 9. TOQUES ESPECIAIS (celebração)
   * ---------------------------------------------------------------- */
  toquesEspeciais: [
    "Encontro dos 6 no Fuji com ryokan e onsen (21–22/11).",
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
    { texto: "Hotel de Xangai confirmado (Atour Bund, 28/11–02/12)", feito: true },
    { texto: "Voo Pequim → Tóquio confirmado (05/12, Air China)", feito: true },
    { texto: "Roteiros separados (Rafaelo / Thamandro / Felipana)", feito: true },
    { texto: "Aniversário da Thamy em Xangai (01/12)", feito: true },
    { texto: "Reservar USJ (ingresso + passe da Área Nintendo)", feito: false },
    { texto: "Reservar Disney (Xangai 01/12 e Tóquio 07/12)", feito: false },
    { texto: "Reservar ryokan do Fuji (os 6, 21/11)", feito: false },
    { texto: "Confirmar voo Kyoto → Xangai (28/11) e retornos ao Brasil", feito: false },
    { texto: "China: visto/trânsito (HK + continente) perto da data", feito: false },
    { texto: "Definir 11/12: Kawagoe ou Tóquio livre", feito: false },
    { texto: "Confirmar plano do Rafaelo e do Thamandro (pré-China)", feito: false },
  ],

  // Contagem de noites (núcleo Thamandro/Felipana ~ 21 noites)
  noites: [
    { local: "Kawaguchiko", n: 1 },
    { local: "Osaka", n: 3 },
    { local: "Kyoto", n: 3 },
    { local: "Xangai", n: 4 },
    { local: "Pequim", n: 3 },
    { local: "Tóquio", n: 7 },
  ],
};
