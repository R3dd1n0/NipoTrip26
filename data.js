/*
 * data.js — FONTE DE VERDADE da viagem ao Japão 2026
 * ---------------------------------------------------
 * Edite SOMENTE este arquivo para atualizar o site.
 * O layout (index.html / styles.css / app.js) lê tudo daqui.
 *
 * GRUPOS (3 casais): use as chaves em `quem` (roteiro) e `grupos`
 * (mapa). "quem" e "grupos" são LISTAS — um dia/rota pode pertencer
 * a mais de um casal. Se a lista tem os 3, é "todos".
 */

const TRIP = {
  /* ----------------------------------------------------------------
   * 1. METADADOS / HERO
   * ---------------------------------------------------------------- */
  meta: {
    titulo: "Japão 2026",
    subtitulo: "Três casais · 15/11 – 12/12",
    periodo: "15/11 – 12/12 de 2026",
    // Alvo da contagem regressiva (chegada dos 6 em Haneda, 21/11)
    countdownAlvoISO: "2026-11-21T06:50:00+09:00",
    frase:
      "Três casais, uma viagem: o encontro dos 6 no Fuji, o Japão clássico, a China (Hong Kong, Xangai, Pequim) e o aniversário da Thamy.",
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
        "Começam a viagem uma semana antes (Tóquio, Kamakura & Enoshima, Nikko/Nagano) e voltam ao Brasil mais cedo (02/12). No oeste, seguem com a Felipana.",
    },
    {
      key: "thamandro",
      nome: "Thamandro",
      emoji: "🟢",
      cor: "#2FA36B",
      membros: "Thamires + Leandro",
      tag: "China: Hong Kong → Xangai → Pequim",
      descricao:
        "O capítulo China: Hong Kong, Hangzhou, Suzhou, Xangai e Pequim. Aniversário da Thamires em 01/12 (em Xangai).",
    },
    {
      key: "felipana",
      nome: "Felipana",
      emoji: "🔵",
      cor: "#3E78C9",
      membros: "Felipe + Mariana",
      tag: "Clássico + China (Xangai/Pequim)",
      descricao:
        "O Japão clássico (Kyoto, Nara, Osaka/USJ) e depois emenda a China com o Thamandro (Xangai e Pequim).",
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
      quando: "23/11–02/12",
      quem: "3 rumos",
      resumo:
        "Felipana + Rafaelo no clássico/oeste; Thamandro na China. Reencontro Thamandro + Felipana em Xangai; Rafaelo volta antes (02/12).",
    },
    {
      n: 4,
      titulo: "China + reta final",
      quando: "03–12/12",
      quem: "🟢 Thamandro + 🔵 Felipana",
      resumo:
        "Pequim (Cidade Proibida, Muralha) e volta ao Japão: Nagano, Karuizawa, Nikko, Tóquio, Disney.",
    },
  ],

  // Rota (visão macro, oeste → leste → China → volta)
  rota: [
    "Tóquio",
    "Kawaguchiko (Fuji)",
    "Kyoto",
    "Osaka",
    "Hong Kong",
    "Xangai",
    "Pequim",
    "Nagano",
    "Tóquio",
  ],

  /* ----------------------------------------------------------------
   * 3.1. MAPA — cidades (lat/lon reais) e rotas
   * ----------------------------------------------------------------
   * `grupos`: LISTA de casais que passam pela cidade/rota
   * ("rafaelo" | "thamandro" | "felipana"). 1 casal → cor do casal;
   * 2+ casais → cor dourada (compartilhado). `voo: true` = tracejado.
   * `star: true` marca o ponto do Fuji.
   */
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
    ],
    rotas: [
      // Encontro / Fuji (todos)
      { grupos: ["rafaelo", "thamandro", "felipana"], pontos: ["toquio", "kawaguchiko"] },
      // Pré-viagem do Rafaelo
      { grupos: ["rafaelo"], pontos: ["toquio", "kamakura", "enoshima"] },
      { grupos: ["rafaelo"], pontos: ["toquio", "nikko"] },
      { grupos: ["rafaelo"], pontos: ["toquio", "nagano"], tbd: true },
      // Oeste (Felipana + Rafaelo)
      { grupos: ["felipana", "rafaelo"], pontos: ["kawaguchiko", "kyoto", "osaka"] },
      { grupos: ["felipana", "rafaelo"], pontos: ["kyoto", "nara"] },
      // Felipana emenda a China
      { grupos: ["felipana"], pontos: ["osaka", "xangai"], voo: true },
      // Rafaelo desce e volta antes
      { grupos: ["rafaelo"], pontos: ["osaka", "hiroshima", "fukuoka"] },
      { grupos: ["rafaelo"], pontos: ["fukuoka", "toquio"], voo: true },
      // Thamandro — China
      { grupos: ["thamandro"], pontos: ["toquio", "hongkong"], voo: true },
      { grupos: ["thamandro"], pontos: ["hongkong", "hangzhou"], voo: true },
      { grupos: ["thamandro"], pontos: ["hangzhou", "suzhou", "xangai"] },
      // Thamandro + Felipana — Pequim e volta
      { grupos: ["thamandro", "felipana"], pontos: ["xangai", "pequim"] },
      { grupos: ["thamandro", "felipana"], pontos: ["pequim", "nagano"], voo: true },
      { grupos: ["thamandro", "felipana"], pontos: ["nagano", "karuizawa", "nikko", "toquio"] },
    ],
  },

  /* ----------------------------------------------------------------
   * 4. ROTEIRO DIA A DIA
   * ----------------------------------------------------------------
   * `quem`: LISTA de casais ("rafaelo" | "thamandro" | "felipana").
   * Lista com os 3 = todos juntos. `tbd: true` marca "a confirmar".
   */
  roteiro: [
    // ---- PRÉ-VIAGEM (Rafaelo) ----
    {
      data: "15/11",
      diaSemana: "Domingo",
      local: "Tóquio",
      quem: ["rafaelo"],
      bloco: "Pré-viagem · Rafaelo",
      atividades: "Chegada antecipada do Rafaelo. Tóquio: bairros e comida.",
      transporte: "Pouso em Haneda/Narita.",
    },
    {
      data: "16/11",
      diaSemana: "Segunda",
      local: "Kamakura & Enoshima",
      quem: ["rafaelo"],
      bloco: "Pré-viagem · Rafaelo",
      atividades: "Grande Buda de Kamakura e Enoshima — no mesmo dia.",
      transporte: "Trem (~1h de Tóquio).",
    },
    {
      data: "17–20/11",
      diaSemana: "Ter–Sex",
      local: "Nikko e/ou Nagano",
      quem: ["rafaelo"],
      bloco: "Pré-viagem · Rafaelo",
      atividades:
        "Nikko (Tōshō-gū) e/ou Nagano. Depois, volta a Tóquio para o encontro dos 6.",
      transporte: "Trem.",
      tbd: true,
    },

    // ---- ENCONTRO NO FUJI (todos) ----
    {
      data: "21/11",
      diaSemana: "Sábado",
      local: "Haneda → Kawaguchiko",
      quem: ["rafaelo", "thamandro", "felipana"],
      bloco: "Encontro dos 6 no Fuji",
      atividades:
        "Chegada dos demais em Haneda (~06:50). Encontro dos 6 e seguem para Kawaguchiko.",
      transporte: "Haneda → Kawaguchiko.",
    },
    {
      data: "22/11",
      diaSemana: "Domingo",
      local: "Monte Fuji · Ryokan · Onsen",
      quem: ["rafaelo", "thamandro", "felipana"],
      bloco: "Encontro dos 6 no Fuji",
      atividades: "Dia todos juntos: Monte Fuji, ryokan e onsen.",
      transporte: "Entorno do lago Kawaguchiko.",
    },

    // ---- SEPARAÇÃO · OESTE (Felipana + Rafaelo) ----
    {
      data: "23/11",
      diaSemana: "Segunda",
      local: "Tóquio → Kyoto",
      quem: ["felipana", "rafaelo"],
      bloco: "Separação · Oeste (Felipana + Rafaelo)",
      atividades: "Seguem para Kyoto.",
      transporte: "🚄 Kawaguchiko → Tóquio → Kyoto.",
    },
    {
      data: "24/11",
      diaSemana: "Terça",
      local: "Kyoto",
      quem: ["felipana", "rafaelo"],
      bloco: "Separação · Oeste (Felipana + Rafaelo)",
      atividades: "Fushimi Inari, Arashiyama, Gion, Kiyomizu.",
      transporte: "Trens locais.",
    },
    {
      data: "25/11",
      diaSemana: "Quarta",
      local: "Nara",
      quem: ["felipana", "rafaelo"],
      bloco: "Separação · Oeste (Felipana + Rafaelo)",
      atividades: "Bate-volta a Nara: Grande Buda de Tōdai-ji e os cervos.",
      transporte: "Bate-volta de Kyoto (~45 min).",
    },
    {
      data: "26/11",
      diaSemana: "Quinta",
      local: "Kyoto",
      quem: ["felipana", "rafaelo"],
      bloco: "Separação · Oeste (Felipana + Rafaelo)",
      atividades:
        "Mais Kyoto. Enviar as malas por takkyūbin (correio) para o próximo destino.",
      transporte: "Trens locais.",
    },
    {
      data: "27/11",
      diaSemana: "Sexta",
      local: "Universal Studios Osaka",
      quem: ["felipana", "rafaelo"],
      bloco: "Separação · Oeste (Felipana + Rafaelo)",
      atividades: "USJ 🎢 — Super Nintendo World. Reservar ingresso + passe da Área Nintendo.",
      transporte: "Kyoto → Osaka (~30 min).",
    },
    {
      data: "28/11",
      diaSemana: "Sábado",
      local: "Osaka livre",
      quem: ["felipana", "rafaelo"],
      bloco: "Separação · Oeste (Felipana + Rafaelo)",
      atividades: "Dotonbori, Castelo de Osaka, dia livre.",
      transporte: "Metrô.",
    },
    {
      data: "29/11",
      diaSemana: "Domingo",
      local: "Osaka → Xangai",
      quem: ["felipana"],
      bloco: "Separação · Oeste (Felipana + Rafaelo)",
      atividades: "Felipana emenda a China.",
      transporte: "✈️ Osaka (KIX) → Xangai.",
    },
    {
      data: "29/11",
      diaSemana: "Domingo",
      local: "Osaka → Hiroshima",
      quem: ["rafaelo"],
      bloco: "Separação · Oeste (Felipana + Rafaelo)",
      atividades: "Rafaelo segue sozinho pelo sul; dorme em Hiroshima.",
      transporte: "🚄 Osaka → Hiroshima.",
    },
    {
      data: "30/11",
      diaSemana: "Segunda",
      local: "Hiroshima → Fukuoka",
      quem: ["rafaelo"],
      bloco: "Separação · Oeste (Felipana + Rafaelo)",
      atividades: "Hiroshima (Parque da Paz / Miyajima) e, no fim da tarde, Fukuoka (dorme lá).",
      transporte: "🚄 Hiroshima → Fukuoka.",
    },
    {
      data: "01/12",
      diaSemana: "Terça",
      local: "Fukuoka",
      quem: ["rafaelo"],
      bloco: "Separação · Oeste (Felipana + Rafaelo)",
      atividades: "Rafaelo em Fukuoka.",
      transporte: "Dia na cidade.",
    },
    {
      data: "02/12",
      diaSemana: "Quarta",
      local: "Fukuoka → Brasil",
      quem: ["rafaelo"],
      bloco: "Separação · Oeste (Felipana + Rafaelo)",
      atividades: "Fim da viagem do Rafaelo.",
      transporte: "✈️ Fukuoka → Tóquio → voo para o Brasil de madrugada.",
    },

    // ---- SEPARAÇÃO · CHINA (Thamandro; depois + Felipana) ----
    {
      data: "23/11",
      diaSemana: "Segunda",
      local: "Tóquio → Hong Kong",
      quem: ["thamandro"],
      bloco: "Separação · China",
      atividades: "Início do capítulo China por Hong Kong.",
      transporte: "✈️ Tóquio → Hong Kong.",
    },
    {
      data: "24–25/11",
      diaSemana: "Ter–Qua",
      local: "Hong Kong",
      quem: ["thamandro"],
      bloco: "Separação · China",
      atividades: "Explorar Hong Kong.",
      transporte: "Metrô / balsa.",
    },
    {
      data: "26/11",
      diaSemana: "Quinta",
      local: "Hong Kong → Hangzhou",
      quem: ["thamandro"],
      bloco: "Separação · China",
      atividades: "Seguem para Hangzhou.",
      transporte: "✈️/🚄 Hong Kong → Hangzhou.",
    },
    {
      data: "27/11",
      diaSemana: "Sexta",
      local: "Hangzhou → Suzhou",
      quem: ["thamandro"],
      bloco: "Separação · China",
      atividades: "Hangzhou (sair cedo) e seguir para Suzhou.",
      transporte: "🚄 Hangzhou → Suzhou.",
    },
    {
      data: "28/11",
      diaSemana: "Sábado",
      local: "Suzhou → Xangai",
      quem: ["thamandro"],
      bloco: "Separação · China",
      atividades: "Suzhou e seguir para Xangai.",
      transporte: "🚄 Suzhou → Xangai.",
    },
    {
      data: "29/11",
      diaSemana: "Domingo",
      local: "Xangai — Disneyland",
      quem: ["thamandro"],
      bloco: "Separação · China",
      atividades: "Shanghai Disneyland.",
      transporte: "Metrô.",
    },
    {
      data: "30/11",
      diaSemana: "Segunda",
      local: "Reencontro em Xangai 🤝",
      quem: ["thamandro", "felipana"],
      bloco: "Separação · China",
      atividades: "Thamandro + Felipana se reencontram em Xangai.",
      transporte: "Cidade.",
    },
    {
      data: "01/12",
      diaSemana: "Terça",
      local: "Xangai — Aniversário 🎂",
      quem: ["thamandro", "felipana"],
      bloco: "Separação · China",
      atividades: "Aniversário da Thamires ❤️ em Xangai.",
      transporte: "Cidade.",
    },
    {
      data: "02/12",
      diaSemana: "Quarta",
      local: "Xangai → Pequim",
      quem: ["thamandro", "felipana"],
      bloco: "Separação · China",
      atividades: "Seguem para Pequim.",
      transporte: "🚄 Xangai → Pequim.",
    },

    // ---- CHINA · PEQUIM ----
    {
      data: "03/12",
      diaSemana: "Quinta",
      local: "Pequim — Cidade Proibida",
      quem: ["thamandro", "felipana"],
      bloco: "China · Pequim",
      atividades: "Cidade Proibida + Parque Jingshan.",
      transporte: "Metrô.",
    },
    {
      data: "04/12",
      diaSemana: "Sexta",
      local: "Pequim — Muralha",
      quem: ["thamandro", "felipana"],
      bloco: "China · Pequim",
      atividades: "Muralha da China.",
      transporte: "Bate-volta da cidade.",
    },
    {
      data: "05/12",
      diaSemana: "Sábado",
      local: "Pequim → Japão (Nagano)",
      quem: ["thamandro", "felipana"],
      bloco: "China · Pequim",
      atividades: "Volta ao Japão.",
      transporte: "✈️ Pequim → Japão / Nagano.",
    },

    // ---- RETA FINAL NO JAPÃO ----
    {
      data: "06/12",
      diaSemana: "Domingo",
      local: "Nagano",
      quem: ["thamandro", "felipana"],
      bloco: "Reta final no Japão",
      atividades: "Nagano (macacos da neve / onsen).",
      transporte: "Trem.",
    },
    {
      data: "07/12",
      diaSemana: "Segunda",
      local: "Karuizawa",
      quem: ["thamandro", "felipana"],
      bloco: "Reta final no Japão",
      atividades: "Karuizawa (natureza, outlets, cafés).",
      transporte: "Trem.",
    },
    {
      data: "08/12",
      diaSemana: "Terça",
      local: "Nikko",
      quem: ["thamandro", "felipana"],
      bloco: "Reta final no Japão",
      atividades: "Nikko — Tōshō-gū.",
      transporte: "Trem.",
    },
    {
      data: "09/12",
      diaSemana: "Quarta",
      local: "Tóquio",
      quem: ["thamandro", "felipana"],
      bloco: "Reta final no Japão",
      atividades: "De volta a Tóquio.",
      transporte: "Trem.",
    },
    {
      data: "10/12",
      diaSemana: "Quinta",
      local: "Kawagoe",
      quem: ["thamandro"],
      bloco: "Reta final no Japão",
      atividades: "Thamandro: Kawagoe (a 'pequena Edo').",
      transporte: "Trem (~30 min).",
    },
    {
      data: "10/12",
      diaSemana: "Quinta",
      local: "Tokyo Disney",
      quem: ["felipana"],
      bloco: "Reta final no Japão",
      atividades: "Felipana: Tokyo Disney.",
      transporte: "Trem até Maihama.",
    },
    {
      data: "11/12",
      diaSemana: "Sexta",
      local: "Tóquio",
      quem: ["thamandro", "felipana"],
      bloco: "Reta final no Japão",
      atividades: "Últimos passeios, chá, cafés e compras.",
      transporte: "Metrô.",
    },
    {
      data: "12/12",
      diaSemana: "Sábado",
      local: "Retorno ao Brasil",
      quem: ["thamandro", "felipana"],
      bloco: "Reta final no Japão",
      atividades: "Fim da viagem.",
      transporte: "✈️ Retorno ao Brasil.",
    },
  ],

  /* ----------------------------------------------------------------
   * 5. VOOS (base internacional)
   * ---------------------------------------------------------------- */
  voos: [
    { voo: "AF545", data: "18/11", hora: "21:50", trecho: "Fortaleza (FOR) → Paris (CDG)" },
    { voo: "AF282", data: "20/11", hora: "09:45", trecho: "Paris (CDG) → Tóquio-Haneda (chega 21/11 ~06:50)" },
    { voo: "NH963", data: "12/12", hora: "17:25", trecho: "Tóquio-Haneda → Pequim (PEK)" },
    { voo: "AF381", data: "13/12", hora: "00:05", trecho: "Pequim (PEK) → Paris (CDG)" },
    { voo: "AF546", data: "13/12", hora: "10:55", trecho: "Paris (CDG) → Fortaleza (FOR)" },
  ],
  voosNota:
    "Trechos internacionais base (ida/volta). 🔴 Rafaelo chega antes (15/11) e retorna mais cedo (02/12: Fukuoka → Tóquio → Brasil de madrugada). Voos internos e retornos por casal a confirmar. Toque no número do voo para ver o status.",

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
    base22dias: "≈ R$11–14 mil/pessoa no Japão (fora a passagem internacional).",
    pontuais: [
      { item: "USJ (Universal Studios Osaka)", valor: "Ingresso ~¥8.600–10.400/dia (~R$275–335). Área Nintendo pede passe de horário/Express — reservar." },
      { item: "Disney (Shanghai e/ou Tóquio)", valor: "~R$250–320/dia por parque." },
      { item: "Ryokan no Fuji (os 6, 21–22)", valor: "R$700–1.400/noite × 1–2 noites." },
      { item: "China (Thamandro + Felipana)", valor: "Voos Japão⇄China + trens internos + ~10 dias: R$4.000–7.000/pessoa." },
      { item: "Ensaio quimono (Felipana)", valor: "R$300–800." },
      { item: "🔴 Rafaelo", valor: "Semana extra antes (15–20/11) + retorno próprio (02/12)." },
    ],
    totais: [
      { grupo: "Rafaelo", valor: "Japão ~2 semanas (sem China); somar a semana extra inicial." },
      { grupo: "Thamandro", valor: "~R$16–20 mil/pessoa (China inclusa)." },
      { grupo: "Felipana", valor: "~R$16–20 mil/pessoa (USJ + China + Disney)." },
    ],
  },

  /* ----------------------------------------------------------------
   * 7. ONDE FICAR
   * ---------------------------------------------------------------- */
  ondeFicar: [
    { cidade: "Tóquio", bairro: "Shinjuku ou Shibuya (hub de trens e vida noturna)." },
    { cidade: "Kawaguchiko", bairro: "Ryokan com vista do Fuji (lado norte do lago) — o encontro dos 6." },
    { cidade: "Kyoto", bairro: "Centro (Kawaramachi/Gion) — a pé de comida e templos." },
    { cidade: "Osaka", bairro: "Namba/Dotonbori (e perto da linha p/ USJ)." },
    { cidade: "Hiroshima / Fukuoka", bairro: "🔴 Rafaelo: perto das estações (Hiroshima e Hakata)." },
    { cidade: "Hong Kong", bairro: "🟢 Tsim Sha Tsui ou Central." },
    { cidade: "Xangai", bairro: "The Bund / Jing'an — perto de metrô." },
    { cidade: "Pequim", bairro: "Perto de Wangfujing / Cidade Proibida." },
    { cidade: "Nagano / Karuizawa", bairro: "Perto da estação (reta final)." },
  ],

  /* ----------------------------------------------------------------
   * 8. LOGÍSTICA & DICAS
   * ---------------------------------------------------------------- */
  logistica: [
    {
      titulo: "Bagagem (takkyūbin)",
      texto:
        "Serviço porta a porta em toda troca de cidade. No oeste, enviem as malas por correio (ex.: Kyoto → próximo destino) e viajem leves.",
    },
    {
      titulo: "Trens",
      texto:
        "Shinkansen com assento reservado (alta de outono) + Suica/ICOCA no celular. Na China, trens-bala entre Hangzhou/Suzhou/Xangai/Pequim.",
    },
    {
      titulo: "Voos",
      texto:
        "Internacionais Japão⇄China: Tóquio→Hong Kong (Thamandro) e Osaka→Xangai (Felipana); volta Pequim→Japão. 🔴 Rafaelo: Fukuoka→Tóquio→Brasil (02/12).",
    },
    {
      titulo: "China — vistos e entrada",
      texto:
        "Hong Kong tem imigração própria (entrada tranquila p/ brasileiros). Para o continente (Hangzhou/Xangai/Pequim), confirmar regras de isenção/trânsito perto da data e levar comprovantes.",
    },
    {
      titulo: "Clima",
      texto:
        "Outono no pico em Kyoto (fim de nov); Tóquio lindo em dez. Manhãs de dezembro ~5–8°C — casaco. China no inverno é fria (Pequim seca e gelada).",
    },
    {
      titulo: "Aniversário da Thamy (01/12)",
      texto:
        "Comemoração em Xangai, com Thamandro + Felipana já reunidos (reencontro dia 30). Rafaelo, nessa data, está em Fukuoka.",
    },
  ],

  /* ----------------------------------------------------------------
   * 9. TOQUES ESPECIAIS (celebração)
   * ---------------------------------------------------------------- */
  toquesEspeciais: [
    "Encontro dos 6 no Fuji com ryokan e onsen (21–22/11).",
    "Aniversário da Thamires em Xangai (01/12) — jantar especial.",
    "Ensaio de quimono / pré-wedding pra Felipana (Kyoto).",
    "Jantar marcante de despedida em Tóquio (11/12).",
  ],

  /* ----------------------------------------------------------------
   * 10. THAMANDRO JÁ CONHECE (não repetir)
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
   * 11. DECISÕES / CHECKLIST (`feito: true` já marcado)
   * ---------------------------------------------------------------- */
  pendencias: [
    { texto: "Entrou o 3º casal (Rafaelo)", feito: true },
    { texto: "Rafaelo chega 15/11 e volta 02/12", feito: true },
    { texto: "Thamandro: China por Hong Kong → Xangai → Pequim", feito: true },
    { texto: "Felipana emenda a China (Xangai/Pequim) com o Thamandro", feito: true },
    { texto: "Encontro dos 6 no Fuji (21–22)", feito: true },
    { texto: "Confirmar voos internacionais e retornos por casal", feito: false },
    { texto: "China: regras de visto/trânsito (HK + continente) perto da data", feito: false },
    { texto: "Reservar USJ (ingresso + passe da Área Nintendo)", feito: false },
    { texto: "Reservar Disney (Shanghai 29/11 e/ou Tóquio 10/12)", feito: false },
    { texto: "Reservar ryokan do Fuji (os 6, 21–22)", feito: false },
    { texto: "Enviar malas por takkyūbin no oeste", feito: false },
    { texto: "Confirmar cidade brasileira de origem/retorno", feito: false },
  ],

  // Contagem de noites (núcleo Thamandro/Felipana ~ 21 noites)
  noites: [
    { local: "Fuji", n: 2 },
    { local: "Oeste (Fe)", n: 6 },
    { local: "China (HK/Xangai)", n: 4 },
    { local: "Pequim", n: 3 },
    { local: "Japão final", n: 6 },
  ],
};
