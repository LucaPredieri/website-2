/* ================================================================
   ME PAGE — me.js
   Open spiral, counter-clockwise, from center to outer edge.
   ────────────────────────────────────────────────────────────────
   ✏️  TO EDIT YOUR CHECKPOINTS:
       Modify the CHECKPOINTS array below.
       Fields:
         year    — string
         title   — { en, it }
         desc    — { en, it }  (short label shown on spiral)
         size    — planet diameter in px  (default 56)
         color   — CSS colour             (default inherits --border)
         details — { en, it }  (array of strings for the detail panel)
   ================================================================ */

const CHECKPOINTS = [
  {
    year: '2013 – 2018',
    title: { en: 'Liceo Scientifico L. Lanfranconi', it: 'Liceo Scientifico L. Lanfranconi' },
    desc: { en: 'High School Diploma, 81/100.', it: 'Diploma di Maturità Scientifica, 81/100.' },
    size: 40,
    color: '#a3a3b0',
    details: {
      en: [
        'Curriculum emphasizing the link between humanistic tradition and scientific culture.',
        'Disciplines: Italian literature, mathematics, physics, chemistry, biology, history, philosophy, Latin, English.',
      ],
      it: [
        'Curriculum incentrato sul legame tra tradizione umanistica e cultura scientifica.',
        'Discipline: letteratura italiana, matematica, fisica, chimica, biologia, storia, filosofia, latino, inglese.',
      ],
    },
  },
  {
    year: '2016 – 2017',
    title: { en: 'Santa Cruz High School', it: 'Santa Cruz High School' },
    desc: { en: 'Exchange Student Program, California.', it: 'Programma di Scambio Studentesco, California.' },
    size: 58,
    color: '#6e8898',
    details: {
      en: [
        'Exchange student program in Santa Cruz, California.',
        'Reached proficiency English language level through full immersion.',
        'Spent almost one year living and studying in the US.',
      ],
      it: [
        'Programma di scambio studentesco a Santa Cruz, California.',
        'Raggiunta la padronanza della lingua inglese tramite immersione totale.',
        'Quasi un anno di vita e studio negli Stati Uniti.',
      ],
    },
  },
  {
    year: '2018 – 2021',
    title: { en: 'B.Sc. Biomedical Engineering', it: 'Laurea Ing. Biomedica' },
    desc: { en: 'Università di Genova, 100/110.', it: 'Università di Genova, 100/110.' },
    size: 66,
    color: '#7a8fa6',
    details: {
      en: [
        'Information engineering discipline dealing with generation, distribution, analysis, and use of data.',
        'Focused on information processing and elaboration for medical purposes.',
      ],
      it: [
        'Ingegneria dell\'informazione applicata alla generazione, analisi e uso dei dati.',
        'Focus sull\'elaborazione delle informazioni per scopi medici.',
      ],
    },
  },
  {
    year: '2022',
    title: { en: 'Norges Teknisk-Naturvitenskapelige Universitet (NTNU)', it: 'Erasmus @ NTNU' },
    desc: { en: 'Erasmus+ Exchange Program, Trondheim.', it: 'Programma Erasmus+, Trondheim.' },
    size: 56,
    color: '#9494a4',
    details: {
      en: [
        'In-depth study in the Cybernetics Department.',
        'Courses: Industrial Embedded Systems and Optical Remote Sensing.',
      ],
      it: [
        'Studio approfondito presso il Dipartimento di Cibernetica.',
        'Corsi: Sistemi Embedded Industriali e Tele-rilevamento Ottico.',
      ],
    },
  },
  {
    year: '2021 – 2023',
    title: { en: 'M.Sc. Robotics Engineering', it: 'Laurea Robotics Eng.' },
    desc: { en: 'Università di Genova, 110/110.', it: 'Università di Genova, 110/110.' },
    size: 78,
    color: '#6a7fa8',
    details: {
      en: [
        'Interdisciplinary field combining computer science, programming, AI, and robotics.',
        'Creating, designing, and managing robotic equipment and machinery.',
      ],
      it: [
        'Campo interdisciplinare che unisce informatica, programmazione, AI e robotica.',
        'Progettazione e gestione di apparati e macchinari robotici.',
      ],
    },
  },
  {
    year: '2023',
    title: { en: 'Esaote S.p.A.', it: 'Esaote S.p.A.' },
    desc: { en: 'Software Engineer Internship.', it: 'Stage Ingegnere Software.' },
    size: 54,
    color: '#7b92a8',
    details: {
      en: [
        'Master thesis at a global leader in diagnostic imaging.',
        'Assisted experienced colleagues in completing team objectives.',
        'Research on Matlab\'s feasibility for deep learning.',
        'Created a framework for inference on final product.',
        'Libraries: TensorFlow, ClearML, tf2onnx, ONNX Runtime, Matlab DL Toolbox.',
      ],
      it: [
        'Tesi magistrale presso un leader mondiale nella diagnostica per immagini.',
        'Supporto al team per il raggiungimento degli obiettivi di sviluppo.',
        'Analisi della fattibilità di Matlab per il deep learning.',
        'Sviluppo di un framework di inferenza per il prodotto finale.',
        'Librerie: TensorFlow, ClearML, tf2onnx, ONNX Runtime, Matlab DL Toolbox.',
      ],
    },
  },
  {
    year: '2023 – Present',
    title: { en: 'Moog Inc.', it: 'Moog Inc.' },
    desc: { en: 'Embedded Software Engineer.', it: 'Ingegnere Software Embedded.' },
    size: 86,
    color: '#5c6e8a',
    details: {
      en: [
        'Embedded software engineer at a world leader in automation engineering.',
        'Responsibilities: software development, research, and HW-SW integration.',
        'Focus on mechanical control and latest product development.',
        'Working with Texas Instruments DSP families (C2000) for servo-drives and PSUs.',
        'Peripheral development: SPI, SCI, I2C, DMA, GPIO, Timers, UART, DAC, ADC, PWM.',
        'On-hand lab testing with oscilloscopes, multi-meters, and DC supplies.',
        'Cyber Resilience Act (CRA) analysis and solutions.',
        'Moog Italy AI Ambassador for code development (Codex, Antigravity, Claude).',
      ],
      it: [
        'Ingegnere software embedded presso un leader mondiale dell\'automazione.',
        'Sviluppo software, ricerca e integrazione software-hardware.',
        'Focus sul controllo meccanico e sviluppo di prodotti di ultima generazione.',
        'Lavoro su famiglie DSP Texas Instruments (C2000) per servo-azionamenti e PSU.',
        'Sviluppo periferiche: SPI, SCI, I2C, DMA, GPIO, Timer, UART, DAC, ADC, PWM.',
        'Test in laboratorio con oscilloscopi, multimetri e alimentatori DC.',
        'Analisi e soluzioni per il Cyber Resilience Act (CRA).',
        'AI Ambassador per Moog Italia (utilizzo di Codex, Antigravity, Claude).',
      ],
    },
  },
];

/* ─────────────────── Spiral parameters ─────────────────── */
const SPIRAL = {
  turns: 1,                 // how many turns the spiral makes
  rMinFactor: 0.30,           // inner radius as fraction of maxR
  rMaxFactor: 1.5,           // outer radius as fraction of maxR
  startAngle: 0,              // start from the right
  textMargin: 150,            // px reserved for text labels
  yOffset: -60,               // px to shift center vertically (negative = up)
};

/* ─────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  const container = document.getElementById('solarSystem');
  const wrapper = document.getElementById('journeyWrapper');
  const svg = document.getElementById('spiralSvg');
  if (!container || !wrapper || !svg) return;

  const NS = 'http://www.w3.org/2000/svg';
  const planetNodes = [];
  let spiralPath = null;
  let activeIndex = -1;

  /* ── Detail panel (injected once) ── */
  const panel = document.createElement('aside');
  panel.className = 'detail-panel';
  panel.innerHTML = `
    <div class="detail-content">
      <button class="detail-close" aria-label="Close">&times;</button>
      <h2 class="detail-title"></h2>
      <p class="detail-year"></p>
      <ul class="detail-list"></ul>
    </div>
  `;
  wrapper.appendChild(panel);

  const panelTitle = panel.querySelector('.detail-title');
  const panelYear = panel.querySelector('.detail-year');
  const panelList = panel.querySelector('.detail-list');
  const panelClose = panel.querySelector('.detail-close');

  function openPanel(i) {
    const cp = CHECKPOINTS[i];
    if (!cp.details) return;

    const lang = document.documentElement.getAttribute('lang') || 'en';
    const items = cp.details[lang] || cp.details.en || [];
    const title = cp.title[lang] || cp.title.en || '';

    panelTitle.textContent = title;
    panelYear.textContent = cp.year;
    panelList.innerHTML = items.map(item => `<li>${item}</li>`).join('');

    // Highlight active planet
    planetNodes.forEach((n, j) => n.classList.toggle('active', j === i));
    activeIndex = i;

    panel.classList.add('open');

    // Smooth layout update during transition
    const start = performance.now();
    const duration = 400;
    function smooth(now) {
      layout();
      if (now - start < duration) requestAnimationFrame(smooth);
    }
    requestAnimationFrame(smooth);
  }

  function closePanel() {
    panel.classList.remove('open');
    planetNodes.forEach(n => n.classList.remove('active'));
    activeIndex = -1;

    // Smooth layout update during transition
    const start = performance.now();
    const duration = 400;
    function smooth(now) {
      layout();
      if (now - start < duration) requestAnimationFrame(smooth);
    }
    requestAnimationFrame(smooth);
  }

  panelClose.addEventListener('click', (e) => {
    e.stopPropagation();
    closePanel();
  });

  /* ── Build planet DOM nodes ── */
  CHECKPOINTS.forEach((cp, i) => {
    const node = document.createElement('div');
    node.className = 'planet-node';
    node.style.setProperty('--delay', `${0.3 + i * 0.12}s`);

    const planet = document.createElement('div');
    planet.className = 'planet';
    planet.style.setProperty('--planet-size', `${cp.size || 56}px`);
    planet.style.setProperty('--float-dur', `${3.5 + (i % 3) * 0.7}s`);
    planet.style.setProperty('--float-delay', `${i * 0.45}s`);
    if (cp.color) planet.style.backgroundColor = cp.color;
    if (cp.details) planet.style.cursor = 'pointer';

    const info = document.createElement('div');
    info.className = 'planet-info';

    const titleEl = document.createElement('div');
    titleEl.className = 'planet-info-title';
    titleEl.innerHTML = langSpans(cp.title);
    info.appendChild(titleEl);

    const yearEl = document.createElement('div');
    yearEl.className = 'planet-info-year';
    yearEl.textContent = cp.year;
    info.appendChild(yearEl);

    if (cp.desc) {
      const descEl = document.createElement('div');
      descEl.className = 'planet-info-desc';
      descEl.innerHTML = langSpans(cp.desc);
      info.appendChild(descEl);
    }

    node.appendChild(planet);
    node.appendChild(info);
    container.appendChild(node);
    planetNodes.push(node);

    // Click to open detail panel
    node.addEventListener('click', () => {
      if (activeIndex === i) {
        closePanel();
      } else {
        openPanel(i);
      }
    });
  });

  /* ── Spiral position helper ── */
  function spiralPoint(t, cx, cy, rMin, rMax, totalAngle) {
    const angle = SPIRAL.startAngle + t * totalAngle;
    const r = rMin + t * (rMax - rMin);
    return {
      x: cx + r * Math.cos(angle),
      y: cy - r * Math.sin(angle),   // minus for counter-clockwise on screen
      angle: angle,
    };
  }

  /* ── Layout ── */
  function layout() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (w < 700) return; // CSS handles mobile

    const cx = w / 2;
    const cy = h / 2 + (SPIRAL.yOffset || 0);
    const maxR = Math.min(w / 2, h / 2) - SPIRAL.textMargin;
    const rMin = Math.max(45, maxR * SPIRAL.rMinFactor);
    const rMax = maxR * SPIRAL.rMaxFactor;
    const totalAngle = SPIRAL.turns * 2 * Math.PI;

    /* — Draw SVG spiral path — */
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.setAttribute('width', w);
    svg.setAttribute('height', h);

    const samples = 300;
    let d = '';
    for (let i = 0; i <= samples; i++) {
      const t = i / samples;
      const pt = spiralPoint(t, cx, cy, rMin, rMax, totalAngle);
      d += (i === 0 ? 'M' : ' L') + ` ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`;
    }

    if (!spiralPath) {
      spiralPath = document.createElementNS(NS, 'path');
      spiralPath.classList.add('spiral-line');
      svg.appendChild(spiralPath);
    }
    spiralPath.setAttribute('d', d);

    // Set dasharray length for draw animation
    const len = spiralPath.getTotalLength();
    spiralPath.style.setProperty('--spiral-len', len);

    /* — Position planets along the spiral — */
    const n = CHECKPOINTS.length;
    planetNodes.forEach((node, i) => {
      const t = i / (n - 1);
      const pt = spiralPoint(t, cx, cy, rMin, rMax, totalAngle);

      node.style.left = pt.x + 'px';
      node.style.top = pt.y + 'px';

      // Text extends away from center (radially outward)
      const side = pt.x >= cx ? 'right' : 'left';
      node.setAttribute('data-side', side);
    });
  }

  layout();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layout, 80);
  });

  /* ── Helper ── */
  function langSpans(obj) {
    if (obj.en && obj.it)
      return `<span class="lang-en">${obj.en}</span><span class="lang-it">${obj.it}</span>`;
    return obj.en || obj.it || '';
  }

  /* ── Starfield Animation ── */
  function initStarfield() {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = [];
    const count = 150;

    function resize() {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      generate();
    }

    function generate() {
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5,
          opacity: Math.random(),
          speed: 0.005 + Math.random() * 0.015
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      ctx.fillStyle = isDark ? '#ffffff' : '#000000';

      stars.forEach(s => {
        s.opacity += s.speed;
        if (s.opacity > 1 || s.opacity < 0.1) s.speed = -s.speed;
        ctx.globalAlpha = Math.max(0.1, s.opacity);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    resize();
    draw();
  }

  initStarfield();
})();
