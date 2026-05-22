const LS_CARDS  = 'comptia_cards';
const LS_STREAK = 'comptia_streak';
const LS_THEME  = 'comptia_theme';

// --- Theme ---
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'light' ? '🌙' : '☀';
  localStorage.setItem(LS_THEME, theme);
}

function initTheme() {
  const saved = localStorage.getItem(LS_THEME) || 'light';
  applyTheme(saved);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'light' ? 'dark' : 'light');
  });
}

// Defined after data scripts load
const ALL_CARDS = [...CORE1_CARDS, ...CORE2_CARDS];

// ── LocalStorage ──────────────────────────────────────────────────────────────
function getCardProgress() { return JSON.parse(localStorage.getItem(LS_CARDS) || '{}'); }
function saveCardProgress(d) { localStorage.setItem(LS_CARDS, JSON.stringify(d)); }
function getStreak() { return JSON.parse(localStorage.getItem(LS_STREAK) || '{"current":0,"longest":0,"lastDate":""}'); }
function saveStreak(d) { localStorage.setItem(LS_STREAK, JSON.stringify(d)); }

function todayString() { return new Date().toISOString().slice(0, 10); }

function updateStreak() {
  const today = todayString();
  const streak = getStreak();
  if (streak.lastDate === today) return streak;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  streak.current = (streak.lastDate === yesterday) ? streak.current + 1 : 1;
  streak.longest = Math.max(streak.longest, streak.current);
  streak.lastDate = today;
  saveStreak(streak);
  return streak;
}

// ── Spaced repetition ─────────────────────────────────────────────────────────
function rateCard(id, rating) {
  const progress = getCardProgress();
  const card = progress[id] || { confidence: 0, interval: 1, nextReview: 0, seen: 0 };
  const DAY = 86400000;
  card.seen++;
  switch (rating) {
    case 'again': card.interval = 1; card.confidence = Math.max(0, card.confidence - 1); break;
    case 'hard':  card.interval = Math.max(1, Math.round(card.interval * 1.2)); break;
    case 'good':  card.interval = Math.max(1, Math.round(card.interval * 2)); card.confidence = Math.min(5, card.confidence + 1); break;
    case 'easy':  card.interval = Math.max(1, Math.round(card.interval * 3)); card.confidence = Math.min(5, card.confidence + 2); break;
  }
  card.nextReview = Date.now() + card.interval * DAY;
  progress[id] = card;
  saveCardProgress(progress);
}

// ── Stats helpers ─────────────────────────────────────────────────────────────
function getDueCards(cards, exam) {
  const now = Date.now();
  const progress = getCardProgress();
  return cards.filter(c => {
    if (exam && c.exam !== exam) return false;
    return (progress[c.id]?.nextReview || 0) <= now;
  });
}

function getDomainStats(cards, exam) {
  const examCards = cards.filter(c => c.exam === exam);
  const domains = [];
  const seen = new Set();
  examCards.forEach(c => { if (!seen.has(c.domain)) { seen.add(c.domain); domains.push({ name: c.domain, num: c.domainNum }); } });
  domains.sort((a, b) => a.num - b.num);
  const progress = getCardProgress();
  return domains.map(({ name }) => {
    const dc = examCards.filter(c => c.domain === name);
    const mastered = dc.filter(c => (progress[c.id]?.confidence || 0) >= 4).length;
    return { domain: name, total: dc.length, mastered };
  });
}

function getTotalStats(cards) {
  const progress = getCardProgress();
  const mastered = cards.filter(c => (progress[c.id]?.confidence || 0) >= 4).length;
  return { total: cards.length, mastered };
}

// ── Exam readiness score (weighted by domain %) ───────────────────────────────
const DOMAIN_WEIGHTS = {
  core1: {
    'Mobile Devices': 0.13,
    'Networking': 0.23,
    'Hardware': 0.25,
    'Virtualization & Cloud': 0.11,
    'Hardware & Network Troubleshooting': 0.28,
  },
  core2: {
    'Operating Systems': 0.28,
    'Security': 0.28,
    'Software Troubleshooting': 0.23,
    'Operational Procedures': 0.21,
  }
};

function getReadinessScore(exam) {
  const weights = DOMAIN_WEIGHTS[exam];
  if (!weights) return 0;
  const progress = getCardProgress();
  let score = 0;
  Object.entries(weights).forEach(([domain, weight]) => {
    const dc = ALL_CARDS.filter(c => c.exam === exam && c.domain === domain);
    if (!dc.length) return;
    const mastered = dc.filter(c => (progress[c.id]?.confidence || 0) >= 4).length;
    score += (mastered / dc.length) * weight;
  });
  return Math.round(score * 100);
}

// ── Domain colors ─────────────────────────────────────────────────────────────
const DOMAIN_COLORS = {
  'Mobile Devices':                     'var(--c-mobile)',
  'Networking':                         'var(--c-network)',
  'Hardware':                           'var(--c-hardware)',
  'Virtualization & Cloud':             'var(--c-virt)',
  'Hardware & Network Troubleshooting': 'var(--c-trouble)',
  'Operating Systems':                  'var(--c-os)',
  'Security':                           'var(--c-security)',
  'Software Troubleshooting':           'var(--c-softtroub)',
  'Operational Procedures':             'var(--c-ops)',
};
function domainColor(name) { return DOMAIN_COLORS[name] || 'var(--accent)'; }

// Runs on every page once the DOM is ready
document.addEventListener('DOMContentLoaded', initTheme);

// ── Dashboard rendering ───────────────────────────────────────────────────────
function renderDashboard() {
  const streak = getStreak();
  const stats = getTotalStats(ALL_CARDS);
  document.getElementById('stat-mastered').textContent = stats.mastered;
  document.getElementById('stat-total').textContent    = stats.total;
  document.getElementById('stat-streak').textContent   = streak.current;
  document.getElementById('streak-badge').textContent  = `🔥 ${streak.current} day streak`;
  renderExamCard('core1');
  renderExamCard('core2');
}

function renderExamCard(exam) {
  const due      = getDueCards(ALL_CARDS, exam).length;
  const stats    = getDomainStats(ALL_CARDS, exam);
  const readiness = getReadinessScore(exam);

  document.getElementById(`${exam}-due`).textContent = `${due} due today`;

  const rv = document.getElementById(`${exam}-readiness`);
  if (rv) {
    rv.textContent = readiness + '%';
    rv.style.color = readiness >= 70 ? '#5aaa7a' : readiness >= 35 ? '#c9a030' : 'var(--muted)';
  }

  const btn = document.getElementById(`${exam}-study-btn`);
  btn.textContent = due === 0 ? 'All caught up! Review anyway' : `Study Now — ${due} cards due`;

  const listEl = document.getElementById(`${exam}-domains`);
  listEl.innerHTML = '';
  stats.forEach(({ domain, total, mastered }) => {
    const pct   = total > 0 ? Math.round((mastered / total) * 100) : 0;
    const color = domainColor(domain);
    const row   = document.createElement('div');
    row.className = 'domain-row';
    row.innerHTML = `
      <div class="domain-row-header">
        <span class="domain-name">${domain}</span>
        <span>${mastered}/${total}</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width:${pct}%;background:${color}"></div>
      </div>`;
    listEl.appendChild(row);
  });
}
