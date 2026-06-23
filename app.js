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

  // Viajantes
  const wrap = document.getElementById("hero-travelers");
  TRIP.pessoas.forEach((p) => {
    const card = el("div", "traveler");
    card.style.borderLeftColor = p.cor;
    card.innerHTML = `
      <div class="traveler__name">${esc(p.grupo)}</div>
      <div class="traveler__members">${esc(p.membros)}</div>
      <span class="traveler__tag">${esc(p.tag)}</span>
      <p class="traveler__desc">${esc(p.descricao)}</p>`;
    wrap.appendChild(card);
  });
}

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

/* ---------------- MAPA DA ROTA (SVG) ----------------
   Projeta lat/lon reais no viewBox e desenha contornos decorativos,
   rotas e marcadores a partir de TRIP.mapa. */
function renderMapa() {
  const m = TRIP.mapa;
  if (!m) return;
  const v = m.view;

  // Projeção equiretangular simples (oeste→leste, sul→norte)
  const fx = (lon) =>
    v.padX + ((lon - v.lonMin) / (v.lonMax - v.lonMin)) * (v.w - 2 * v.padX);
  const fy = (lat) =>
    v.padTop +
    ((v.latMax - lat) / (v.latMax - v.latMin)) * (v.h - v.padTop - v.padBottom);

  // Dicionário key -> {x, y, ...}
  const byKey = {};
  m.cidades.forEach((c) => {
    byKey[c.key] = Object.assign({}, c, { x: fx(c.lon), y: fy(c.lat) });
  });

  // Cores por grupo (linhas e marcadores)
  const cor = {
    comum: "#F7F0E4", // creme — trechos compartilhados
    felipana: "#E8A846", // dourado
    thamandro: "#D83A3A", // vermelho torii
    fuji: "#E8A846",
  };

  // --- Rotas (desenhadas antes dos pontos, para ficarem por baixo) ---
  let rotasSVG = "";
  m.rotas.forEach((r) => {
    const pts = r.pontos
      .map((k) => byKey[k])
      .filter(Boolean)
      .map((c) => `${c.x.toFixed(1)},${c.y.toFixed(1)}`)
      .join(" ");
    const c = cor[r.grupo] || "#F7F0E4";
    const dash = r.voo ? 'stroke-dasharray="2 8" stroke-linecap="round"' : "";
    const op = r.tbd ? 0.45 : 0.9;
    const w = r.voo ? 2 : 3;
    rotasSVG += `<polyline points="${pts}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linejoin="round" opacity="${op}" ${dash} />`;
  });

  // --- Marcadores + rótulos ---
  let pontosSVG = "";
  m.cidades.forEach((c) => {
    const p = byKey[c.key];
    const cc = cor[c.grupo] || "#F7F0E4";
    const rot = c.rotulo || { dx: 10, dy: 4, anchor: "start" };
    const dashRing = c.tbd ? 'stroke-dasharray="3 3"' : "";

    // Linha-guia ligando o ponto ao rótulo afastado (cluster do Japão)
    if (rot.linha) {
      pontosSVG += `<line x1="${p.x.toFixed(1)}" y1="${p.y.toFixed(
        1
      )}" x2="${(p.x + rot.dx).toFixed(1)}" y2="${(p.y + rot.dy - 4).toFixed(
        1
      )}" stroke="rgba(247,240,228,0.35)" stroke-width="1" />`;
    }

    if (c.grupo === "fuji") {
      // Marcador especial do reencontro: estrela dourada
      pontosSVG += estrela(p.x, p.y, 9, cc);
    } else {
      pontosSVG += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(
        1
      )}" r="6" fill="${cc}" stroke="#121E36" stroke-width="2" ${dashRing} />`;
    }

    pontosSVG += `<text x="${(p.x + rot.dx).toFixed(1)}" y="${(
      p.y + rot.dy
    ).toFixed(1)}" text-anchor="${rot.anchor}" class="map-label${
      c.tbd ? " is-tbd" : ""
    }">${esc(c.nome)}</text>`;
  });

  // --- Contornos decorativos (ajustados aos limites `view` atuais) ---
  const china =
    '<path d="M120,90 L250,110 L300,250 L330,360 L320,470 L250,510 L140,500 L70,400 L60,260 L90,150 Z" fill="#1d2c4a" stroke="rgba(247,240,228,0.12)" stroke-width="1.5" />';
  const japao =
    '<ellipse cx="747" cy="308" rx="168" ry="52" transform="rotate(-21 747 308)" fill="#1d2c4a" stroke="rgba(247,240,228,0.12)" stroke-width="1.5" />';

  const svg =
    `<svg viewBox="0 0 ${v.w} ${v.h}" class="map-svg" role="img" ` +
    `aria-label="Mapa da rota pelo Japão e China" preserveAspectRatio="xMidYMid meet">` +
    `<rect x="0" y="0" width="${v.w}" height="${v.h}" fill="#16243E" />` +
    china +
    japao +
    `<text x="175" y="300" class="map-region">CHINA</text>` +
    `<text x="770" y="430" class="map-region">JAPÃO</text>` +
    rotasSVG +
    pontosSVG +
    `</svg>`;

  document.getElementById("map-svg").innerHTML = svg;
}

/* Gera o path de uma estrela de 5 pontas centrada em (cx, cy). */
function estrela(cx, cy, r, fill) {
  let pts = "";
  for (let i = 0; i < 10; i++) {
    const raio = i % 2 === 0 ? r : r * 0.45;
    const ang = (Math.PI / 5) * i - Math.PI / 2;
    pts += `${(cx + raio * Math.cos(ang)).toFixed(1)},${(
      cy +
      raio * Math.sin(ang)
    ).toFixed(1)} `;
  }
  return `<polygon points="${pts.trim()}" fill="${fill}" stroke="#121E36" stroke-width="1.5" />`;
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
    item.dataset.quem = dia.quem;

    const badgeQuem =
      dia.quem === "todos"
        ? '<span class="badge badge--todos">Todos</span>'
        : dia.quem === "felipana"
        ? '<span class="badge badge--felipana">Felipana</span>'
        : '<span class="badge badge--thamandro">Thamandro</span>';
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
  document.querySelectorAll(".tl-item").forEach((item) => {
    const quem = item.dataset.quem;
    let mostra = true;
    if (filtroAtual === "felipana") mostra = quem !== "thamandro";
    else if (filtroAtual === "thamandro") mostra = quem !== "felipana";
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

function setupFiltros() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      filtroAtual = btn.dataset.filter;
      aplicarFiltro();
    });
  });
}

/* ---------------- VOOS ---------------- */
function renderVoos() {
  const tbody = document.getElementById("voos-body");
  TRIP.voos.forEach((v) => {
    const tr = el("tr");
    const tbd = v.tbd ? ' <span class="badge badge--tbd">TBD</span>' : "";
    tr.innerHTML = `
      <td><strong>${esc(v.voo)}</strong></td>
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
   Estado salvo em localStorage para persistir entre visitas. */
function renderPendencias() {
  const ul = document.getElementById("pendencias-list");
  const salvos = JSON.parse(localStorage.getItem("nipo-checklist") || "{}");

  TRIP.pendencias.forEach((texto, i) => {
    const li = el("li", "check-item");
    const id = "chk-" + i;
    const marcado = !!salvos[i];
    if (marcado) li.classList.add("is-done");
    li.innerHTML = `
      <input type="checkbox" id="${id}" ${marcado ? "checked" : ""}>
      <label class="check-item__label" for="${id}">${esc(texto)}</label>`;
    const input = li.querySelector("input");
    input.addEventListener("change", () => {
      li.classList.toggle("is-done", input.checked);
      const atual = JSON.parse(localStorage.getItem("nipo-checklist") || "{}");
      atual[i] = input.checked;
      localStorage.setItem("nipo-checklist", JSON.stringify(atual));
    });
    ul.appendChild(li);
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
  renderToques();
  renderPendencias();
  renderNoites();
  setupNav();
  setupPrint();
});
