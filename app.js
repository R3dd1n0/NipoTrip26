/* =================================================================
   app.js — renderiza o site a partir de TRIP (data.js)
   Nada de dados de viagem aqui: só lógica de montagem e interação.
   ================================================================= */

/* Pequeno helper para criar elementos com classe e HTML interno. */
function el(tag, cls, html) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html != null) node.innerHTML = html;
  return node;
}

/* Escapa texto simples para evitar HTML acidental dos dados. */
function esc(str) {
  return String(str ?? "").replace(/[&<>"]/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
  }[c]));
}

/* ---------------- HERO ---------------- */
function renderHero() {
  const m = TRIP.meta;
  document.getElementById("hero-title").textContent = m.titulo;
  document.getElementById("hero-sub").textContent = m.subtitulo;
  document.getElementById("hero-period").textContent = m.periodo;
  document.getElementById("hero-phrase").textContent = m.frase;
  document.getElementById("brand-title").textContent = m.titulo;

  // Viajantes (3 casais)
  const wrap = document.getElementById("hero-travelers");
  (TRIP.grupos || []).forEach((g) => {
    const card = el("div", "traveler");
    card.style.borderLeftColor = g.cor;
    card.innerHTML = `
      <div class="traveler__name">${g.emoji ? g.emoji + " " : ""}${esc(g.nome)}</div>
      <div class="traveler__members" style="color:${g.cor}">${esc(g.membros)}</div>
      <span class="traveler__tag">${esc(g.tag)}</span>
      <p class="traveler__desc">${esc(g.descricao)}</p>`;
    wrap.appendChild(card);
  });
}

// Lookup rápido de grupo por chave (nome, cor, emoji)
const GRUPO_BY_KEY = {};
(typeof TRIP !== "undefined" ? TRIP.grupos || [] : []).forEach((g) => {
  GRUPO_BY_KEY[g.key] = g;
});

/* ---------------- CONTAGEM REGRESSIVA ---------------- */
function startCountdown() {
  const alvo = new Date(TRIP.meta.countdownAlvoISO).getTime();
  const box = document.getElementById("countdown");

  function tick() {
    const agora = Date.now();
    let diff = Math.max(0, alvo - agora);

    const dia = Math.floor(diff / 86400000);
    diff -= dia * 86400000;
    const hora = Math.floor(diff / 3600000);
    diff -= hora * 3600000;
    const min = Math.floor(diff / 60000);
    diff -= min * 60000;
    const seg = Math.floor(diff / 1000);

    const partes = [
      [dia, "dias"],
      [hora, "horas"],
      [min, "min"],
      [seg, "seg"],
    ];
    box.innerHTML = partes
      .map(
        ([n, l]) =>
          `<div class="countdown__box"><span class="countdown__num">${n}</span><span class="countdown__label">${l}</span></div>`
      )
      .join("");
  }
  tick();
  setInterval(tick, 1000);
}

/* ---------------- VISÃO GERAL ---------------- */
function renderOverview() {
  const moments = document.getElementById("moments");
  TRIP.momentos.forEach((mo) => {
    const card = el("div", "card moment");
    card.innerHTML = `
      <div class="moment__n">${mo.n}</div>
      <div class="moment__when">${esc(mo.quando)}</div>
      <h3>${esc(mo.titulo)}</h3>
      <p>${esc(mo.resumo)}</p>
      <span class="moment__quem">${esc(mo.quem)}</span>`;
    moments.appendChild(card);
  });

  // Linha da rota oeste → leste
  const route = document.getElementById("route");
  TRIP.rota.forEach((stop, i) => {
    if (i > 0) route.appendChild(el("span", "route__arrow", "→"));
    route.appendChild(el("span", "route__stop", esc(stop)));
  });
}

/* ---------------- MAPA DA ROTA (Leaflet + OpenStreetMap) ----------------
   Plota as cidades e rotas de TRIP.mapa num mapa real e interativo,
   usando as coordenadas reais (lat/lon). Não precisa de chave de API. */

// Cores por grupo (boa leitura sobre as tiles claras)
const CORES = {
  rafaelo: "#D83A3A", // vermelho
  thamandro: "#2FA36B", // verde
  felipana: "#3E78C9", // azul
  compart: "#E8A846", // dourado — 2+ casais / todos
};

// Cor de uma lista de grupos: 1 casal → cor dele; 2+ → dourado.
function corGrupos(grupos) {
  const g = (grupos || []).filter((x) => CORES[x]);
  return g.length === 1 ? CORES[g[0]] : CORES.compart;
}

let leafletMap = null;
// Lista plana de camadas do mapa: { layer, grupos } — o filtro liga/
// desliga conforme os grupos de cada camada.
let mapLayerList = [];

// Direção do rótulo por cidade, para "abrir em leque" os clusters e
// evitar sobreposição.
const LABEL_DIR = {
  toquio: "right",
  nagano: "top",
  nikko: "right",
  karuizawa: "top",
  kamakura: "bottom",
  enoshima: "left",
  kyoto: "top",
  nara: "bottom",
  osaka: "left",
  hiroshima: "left",
  fukuoka: "left",
  kawaguchiko: "bottom",
  hongkong: "left",
  hangzhou: "right",
  suzhou: "top",
  xangai: "right",
  pequim: "right",
};
const TIP_OFFSET = {
  right: [8, 0],
  left: [-8, 0],
  top: [0, -8],
  bottom: [0, 10],
};

function renderMapa() {
  const m = TRIP.mapa;
  if (!m || typeof L === "undefined") return; // Leaflet ainda não carregou

  const byKey = {};
  m.cidades.forEach((c) => (byKey[c.key] = c));

  leafletMap = L.map("trip-map", {
    scrollWheelZoom: false, // evita "prender" o scroll da página
    zoomControl: true,
  });

  // Tiles SEM rótulos (CARTO Voyager) — assim não aparecem nomes em
  // japonês; as cidades ficam só nos nossos marcadores (em português).
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png",
    {
      subdomains: "abcd",
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }
  ).addTo(leafletMap);

  mapLayerList = [];

  // --- Rotas (linhas) ---
  m.rotas.forEach((r) => {
    const latlngs = r.pontos
      .filter((k) => byKey[k])
      .map((k) => [byKey[k].lat, byKey[k].lon]);
    const pl = L.polyline(latlngs, {
      color: corGrupos(r.grupos),
      weight: r.voo ? 3 : 4,
      opacity: r.tbd ? 0.45 : 0.9,
      dashArray: r.voo ? "6 10" : null, // tracejado = voo
    });
    pl.addTo(leafletMap);
    mapLayerList.push({ layer: pl, grupos: r.grupos || [] });
  });

  // --- Marcadores (com rótulo fixo) ---
  m.cidades.forEach((c) => {
    const mk = L.circleMarker([c.lat, c.lon], {
      radius: c.star ? 9 : 7,
      color: "#ffffff",
      weight: 2,
      fillColor: corGrupos(c.grupos),
      fillOpacity: 1,
    });
    const dir = LABEL_DIR[c.key] || "right";
    mk.bindTooltip(c.nome, {
      permanent: true,
      direction: dir,
      offset: TIP_OFFSET[dir] || [8, 0],
      className: "map-tip" + (c.tbd ? " is-tbd" : ""),
    });
    mk.bindPopup("<strong>" + esc(c.nome) + "</strong>");
    mk.addTo(leafletMap);
    mapLayerList.push({ layer: mk, grupos: c.grupos || [] });
  });

  // Zoom inicial focado no JAPÃO (lon ≥ 128). As cidades da China
  // (Pequim/Xangai) e as linhas de voo continuam no mapa — basta
  // diminuir o zoom ou arrastar para vê-las.
  const japao = m.cidades.filter((c) => c.lon >= 128);
  const bounds = L.latLngBounds(
    (japao.length ? japao : m.cidades).map((c) => [c.lat, c.lon])
  );
  leafletMap.fitBounds(bounds, { padding: [30, 30], maxZoom: 8 });

  // Recalcula o tamanho após o layout assentar
  setTimeout(() => leafletMap.invalidateSize(), 250);

  // Mantém o mapa responsivo a mudanças de tamanho/orientação
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (leafletMap) leafletMap.invalidateSize();
    }, 200);
  });

  aplicarFiltroMapa();
}

/* Liga/desliga camadas do mapa conforme o filtro de casal.
   Mostra a camada se o filtro é "todos" ou se o casal participa dela. */
function aplicarFiltroMapa() {
  if (!leafletMap) return;
  mapLayerList.forEach(({ layer, grupos }) => {
    const mostra = filtroAtual === "todos" || (grupos || []).includes(filtroAtual);
    const visivel = leafletMap.hasLayer(layer);
    if (mostra && !visivel) layer.addTo(leafletMap);
    else if (!mostra && visivel) leafletMap.removeLayer(layer);
  });
}

/* ---------------- ROTEIRO (timeline + filtro) ---------------- */
let filtroAtual = "todos";

function renderRoteiro() {
  const tl = document.getElementById("timeline");
  tl.innerHTML = "";

  let blocoAtual = null;
  TRIP.roteiro.forEach((dia) => {
    // Título de bloco quando muda
    if (dia.bloco !== blocoAtual) {
      blocoAtual = dia.bloco;
      tl.appendChild(el("li", "tl-block-title", esc(blocoAtual)));
    }

    const item = el("li", "tl-item");
    // quem é uma lista de casais; deriva um "tipo" para cor do marcador
    const quem = Array.isArray(dia.quem) ? dia.quem : [dia.quem];
    const tipo = quem.length >= 3 ? "todos" : quem.length === 1 ? quem[0] : "misto";
    item.dataset.quem = tipo;
    item.dataset.grupos = quem.join(" ");

    const badgeQuem =
      quem.length >= 3
        ? '<span class="badge badge--todos">Todos</span>'
        : quem
            .map((k) => {
              const g = GRUPO_BY_KEY[k];
              return `<span class="badge badge--${k}">${g ? esc(g.nome) : esc(k)}</span>`;
            })
            .join(" ");
    const badgeTbd = dia.tbd
      ? '<span class="badge badge--tbd">A confirmar</span>'
      : "";

    item.innerHTML = `
      <div class="tl-item__head">
        <span class="tl-item__date">${esc(dia.data)}</span>
        <span class="tl-item__dow">${esc(dia.diaSemana)}</span>
        <span class="tl-item__local">${esc(dia.local)}</span>
        ${badgeQuem} ${badgeTbd}
      </div>
      <p class="tl-item__activities">${esc(dia.atividades)}</p>
      ${dia.transporte ? `<p class="tl-item__transport">${esc(dia.transporte)}</p>` : ""}`;
    tl.appendChild(item);
  });

  aplicarFiltro();
}

/* Mostra/esconde itens conforme o filtro selecionado.
   "Todos" mostra tudo; "felipana"/"thamandro" mostram itens "todos"
   + os do casal escolhido (esconde apenas o caminho do outro casal). */
function aplicarFiltro() {
  // Marca o estado no container para o CSS realçar/atenuar os dias
  const tl = document.getElementById("timeline");
  if (tl) tl.dataset.filtro = filtroAtual;

  document.querySelectorAll(".tl-item").forEach((item) => {
    const grupos = (item.dataset.grupos || "").split(" ").filter(Boolean);
    const mostra = filtroAtual === "todos" || grupos.includes(filtroAtual);
    item.hidden = !mostra;
  });

  // Esconde títulos de bloco que ficaram sem itens visíveis
  document.querySelectorAll(".tl-block-title").forEach((title) => {
    let next = title.nextElementSibling;
    let temVisivel = false;
    while (next && next.classList.contains("tl-item")) {
      if (!next.hidden) {
        temVisivel = true;
        break;
      }
      next = next.nextElementSibling;
    }
    title.hidden = !temVisivel;
  });
}

/* Define o filtro atual e sincroniza TUDO: estado dos botões (todos os
   grupos de abas), timeline e mapa. */
function setFilter(value) {
  filtroAtual = value;
  document.querySelectorAll(".filter-btn").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.filter === value);
  });
  aplicarFiltro();
  aplicarFiltroMapa();
}

function setupFiltros() {
  // Vale para as abas do roteiro e as do mapa (mesmas classes)
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => setFilter(btn.dataset.filter));
  });
}

/* ---------------- VOOS ---------------- */
function renderVoos() {
  const tbody = document.getElementById("voos-body");
  TRIP.voos.forEach((v) => {
    const tr = el("tr");
    const tbd = v.tbd ? ' <span class="badge badge--tbd">TBD</span>' : "";
    // Link de status do voo (Flightradar24, por código IATA)
    const url =
      "https://www.flightradar24.com/data/flights/" +
      encodeURIComponent(v.voo.toLowerCase());
    tr.innerHTML = `
      <td><a class="voo-link" href="${url}" target="_blank" rel="noopener" title="Ver status do voo">${esc(v.voo)} ↗</a></td>
      <td>${esc(v.data)}</td>
      <td>${esc(v.hora)}</td>
      <td>${esc(v.trecho)}${tbd}</td>`;
    tbody.appendChild(tr);
  });
  document.getElementById("voos-nota").textContent = TRIP.voosNota;
}

/* ---------------- ORÇAMENTO ---------------- */
function renderOrcamento() {
  const o = TRIP.orcamento;
  const tbody = document.getElementById("orc-body");
  o.diaria.forEach((c) => {
    const tr = el("tr");
    tr.innerHTML = `
      <td>${esc(c.categoria)}</td>
      <td>¥${c.iene.toLocaleString("pt-BR")}</td>
      <td>R$${c.real.toLocaleString("pt-BR")}</td>`;
    tbody.appendChild(tr);
  });
  document.getElementById("orc-total").innerHTML = `
    <td>Total</td>
    <td>¥${o.diariaTotal.iene.toLocaleString("pt-BR")}</td>
    <td>≈ R$${o.diariaTotal.real.toLocaleString("pt-BR")}/dia</td>`;

  document.getElementById("orc-base").textContent = o.base22dias;

  // Custos pontuais
  const pont = document.getElementById("orc-pontuais");
  o.pontuais.forEach((p) => {
    pont.appendChild(el("li", null, `<strong>${esc(p.item)}:</strong> ${esc(p.valor)}`));
  });

  // Totais por casal
  const tot = document.getElementById("orc-totais");
  o.totais.forEach((t) => {
    tot.appendChild(el("li", null, `<strong>${esc(t.grupo)}:</strong> ${esc(t.valor)}`));
  });

  // Conversor de câmbio
  const input = document.getElementById("fx-input");
  const result = document.getElementById("fx-result");
  const taxaInfo = document.getElementById("fx-taxa");
  taxaInfo.textContent = `Câmbio base ¥1 ≈ R$${o.cambioBase
    .toLocaleString("pt-BR", { minimumFractionDigits: 3 })} · no cartão ~R$${o.cambioCartao
    .toLocaleString("pt-BR", { minimumFractionDigits: 3 })}`;

  function converter() {
    const ienes = parseFloat(input.value) || 0;
    const base = ienes * o.cambioBase;
    const cartao = ienes * o.cambioCartao;
    result.textContent = `R$${base.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}  (cartão ~R$${cartao.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })})`;
  }
  input.addEventListener("input", converter);
  converter();
}

/* ---------------- ONDE FICAR ---------------- */
function renderOndeFicar() {
  const wrap = document.getElementById("onde-ficar");
  TRIP.ondeFicar.forEach((c) => {
    const card = el("div", "card");
    card.innerHTML = `<h3>${esc(c.cidade)}</h3><p>${esc(c.bairro)}</p>`;
    wrap.appendChild(card);
  });
}

/* ---------------- LOGÍSTICA & DICAS ---------------- */
function renderLogistica() {
  const wrap = document.getElementById("logistica-cards");
  TRIP.logistica.forEach((d) => {
    const card = el("div", "card");
    card.innerHTML = `<div class="tip__title">${esc(d.titulo)}</div><p>${esc(d.texto)}</p>`;
    wrap.appendChild(card);
  });
}

/* ---------------- TOQUES ESPECIAIS ---------------- */
function renderToques() {
  const ul = document.getElementById("toques");
  TRIP.toquesEspeciais.forEach((t) => ul.appendChild(el("li", null, esc(t))));
}

/* ---------------- PENDÊNCIAS (checklist) ----------------
   Estado salvo em localStorage para persistir entre visitas.
   Os acessos são protegidos: se o navegador bloquear o armazenamento,
   o checklist continua funcionando (só não persiste). */
const storage = {
  ler() {
    try {
      return JSON.parse(localStorage.getItem("nipo-checklist") || "{}");
    } catch (e) {
      return {};
    }
  },
  gravar(obj) {
    try {
      localStorage.setItem("nipo-checklist", JSON.stringify(obj));
    } catch (e) {
      /* armazenamento indisponível — ignora */
    }
  },
};

function renderPendencias() {
  const ul = document.getElementById("pendencias-list");
  const salvos = storage.ler();

  TRIP.pendencias.forEach((item, i) => {
    // Aceita string ou objeto { texto, feito }
    const texto = typeof item === "string" ? item : item.texto;
    const padrao = typeof item === "object" && item.feito;
    const li = el("li", "check-item");
    const id = "chk-" + i;
    // localStorage tem prioridade; senão usa o padrão do dado (feito)
    const marcado = i in salvos ? !!salvos[i] : !!padrao;
    if (marcado) li.classList.add("is-done");
    li.innerHTML = `
      <input type="checkbox" id="${id}" ${marcado ? "checked" : ""}>
      <label class="check-item__label" for="${id}">${esc(texto)}</label>`;
    const input = li.querySelector("input");
    input.addEventListener("change", () => {
      li.classList.toggle("is-done", input.checked);
      const atual = storage.ler();
      atual[i] = input.checked;
      storage.gravar(atual);
    });
    ul.appendChild(li);
  });
}

/* ---------------- THAMANDRO JÁ CONHECE ---------------- */
function renderJaForam() {
  const wrap = document.getElementById("ja-foram");
  if (!wrap || !TRIP.jaForam) return;
  TRIP.jaForam.forEach((lugar) => {
    wrap.appendChild(el("span", "chip", esc(lugar)));
  });
}

/* ---------------- NOITES (resumo) ---------------- */
function renderNoites() {
  const wrap = document.getElementById("nights");
  let total = 0;
  TRIP.noites.forEach((n) => {
    total += n.n;
    const box = el("div", "night");
    box.innerHTML = `<span class="night__n">${n.n}</span><span class="night__local">${esc(n.local)}</span>`;
    wrap.appendChild(box);
  });
  const box = el("div", "night");
  box.innerHTML = `<span class="night__n">${total}</span><span class="night__local">noites no total</span>`;
  wrap.appendChild(box);
}

/* ---------------- NAVEGAÇÃO MOBILE ---------------- */
function setupNav() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  toggle.addEventListener("click", () => links.classList.toggle("is-open"));
  // Fecha o menu ao clicar num link (mobile)
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("is-open"))
  );
}

/* ---------------- IMPRIMIR ---------------- */
function setupPrint() {
  const btn = document.getElementById("print-btn");
  if (btn) btn.addEventListener("click", () => window.print());
}

/* ---------------- INICIALIZAÇÃO ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  startCountdown();
  renderOverview();
  renderMapa();
  renderRoteiro();
  setupFiltros();
  renderVoos();
  renderOrcamento();
  renderOndeFicar();
  renderLogistica();
  renderJaForam();
  renderToques();
  renderPendencias();
  renderNoites();
  setupNav();
  setupPrint();
});
