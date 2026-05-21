// ── State ─────────────────────────────────────────────────────────────────────
let deck         = [];
let currentIndex = 0;
let sessionRated = 0;
let isFlipped    = false;
let activeExam   = 'core1';
let activeDomain = 'all';
let activeMode   = 'due';   // 'due' | 'weak' | 'all'

// ── DOM ───────────────────────────────────────────────────────────────────────
const cardEl         = document.getElementById('fc-card');
const questionEl     = document.getElementById('fc-question');
const answerEl       = document.getElementById('fc-answer');
const detailEl       = document.getElementById('fc-detail');
const badgeFrontEl   = document.getElementById('fc-badge-front');
const badgeBackEl    = document.getElementById('fc-badge-back');
const cardNumEl      = document.getElementById('fc-card-num');
const cardTotalEl    = document.getElementById('fc-card-total');
const progressFillEl = document.getElementById('fc-progress-fill');
const ratingAreaEl   = document.getElementById('fc-rating-area');
const flipHintEl     = document.getElementById('fc-flip-hint');
const sessionDoneEl  = document.getElementById('fc-session-done');
const sessionCountEl = document.getElementById('fc-session-count');
const stageEl        = document.getElementById('fc-stage');
const examSelectEl   = document.getElementById('fc-exam-select');
const domainSelectEl = document.getElementById('fc-domain-select');
const modeSelectEl   = document.getElementById('fc-mode-select');

// ── Domain select ─────────────────────────────────────────────────────────────
function populateDomainSelect(exam) {
  const cards = exam === 'core1' ? CORE1_CARDS : CORE2_CARDS;
  const domains = [];
  const seen = new Set();
  cards.forEach(c => { if (!seen.has(c.domain)) { seen.add(c.domain); domains.push(c.domain); } });
  domainSelectEl.innerHTML = '<option value="all">All domains</option>';
  domains.forEach(d => {
    const opt = document.createElement('option');
    opt.value = d; opt.textContent = d;
    domainSelectEl.appendChild(opt);
  });
  domainSelectEl.value = seen.has(activeDomain) ? activeDomain : 'all';
}

// ── Build deck ────────────────────────────────────────────────────────────────
function buildDeck() {
  const sourceCards = activeExam === 'core1' ? CORE1_CARDS : CORE2_CARDS;
  const filtered = activeDomain === 'all'
    ? sourceCards
    : sourceCards.filter(c => c.domain === activeDomain);

  const now = Date.now();
  const progress = getCardProgress();

  if (activeMode === 'due') {
    deck = filtered.filter(c => (progress[c.id]?.nextReview || 0) <= now);
    if (deck.length === 0) deck = filtered.slice(); // fallback: show all
  } else if (activeMode === 'weak') {
    deck = filtered.filter(c => (progress[c.id]?.confidence || 0) <= 1);
    if (deck.length === 0) deck = filtered.slice(); // fallback
  } else {
    deck = filtered.slice();
  }

  // Shuffle for variety
  deck = deck.sort(() => Math.random() - 0.5);

  currentIndex = 0;
  sessionRated = 0;
  showCard();
}

// ── Show card ─────────────────────────────────────────────────────────────────
function showCard() {
  if (currentIndex >= deck.length) { showSessionComplete(); return; }
  const card = deck[currentIndex];

  isFlipped = false;
  cardEl.classList.remove('flipped');
  ratingAreaEl.classList.add('hidden');
  flipHintEl.classList.remove('hidden');
  stageEl.classList.remove('hidden');
  sessionDoneEl.classList.add('hidden');

  questionEl.textContent = card.question;
  answerEl.textContent   = card.answer;
  detailEl.textContent   = card.detail || '';

  const color = domainColor(card.domain);
  const badge = `<span style="background:${color}22;color:${color};border:1px solid ${color}44">${card.domain}</span>`;
  badgeFrontEl.innerHTML = badge;
  badgeBackEl.innerHTML  = badge;

  cardNumEl.textContent   = currentIndex + 1;
  cardTotalEl.textContent = deck.length;
  progressFillEl.style.width = (currentIndex / deck.length * 100) + '%';
}

function flipCard() {
  if (isFlipped) return;
  isFlipped = true;
  cardEl.classList.add('flipped');
  ratingAreaEl.classList.remove('hidden');
  flipHintEl.classList.add('hidden');
}

function handleRating(rating) {
  if (!isFlipped) return;
  rateCard(deck[currentIndex].id, rating);
  sessionRated++;
  currentIndex++;
  showCard();
}

function showSessionComplete() {
  if (sessionRated > 0) updateStreak();
  stageEl.classList.add('hidden');
  sessionDoneEl.classList.remove('hidden');
  sessionCountEl.textContent = sessionRated;
  progressFillEl.style.width = '100%';
}

// ── Events ────────────────────────────────────────────────────────────────────
cardEl.addEventListener('click', flipCard);

document.querySelectorAll('.rate-btn').forEach(btn => {
  btn.addEventListener('click', e => { e.stopPropagation(); handleRating(btn.dataset.rating); });
});

examSelectEl.addEventListener('change', () => {
  activeExam   = examSelectEl.value;
  activeDomain = 'all';
  populateDomainSelect(activeExam);
  buildDeck();
});

domainSelectEl.addEventListener('change', () => {
  activeDomain = domainSelectEl.value;
  buildDeck();
});

if (modeSelectEl) {
  modeSelectEl.addEventListener('change', () => {
    activeMode = modeSelectEl.value;
    buildDeck();
  });
}

document.getElementById('fc-restart-btn').addEventListener('click', buildDeck);

document.addEventListener('keydown', e => {
  if (sessionDoneEl && !sessionDoneEl.classList.contains('hidden')) return;
  if (e.code === 'Space') { e.preventDefault(); flipCard(); }
  else if (e.key === '1') handleRating('again');
  else if (e.key === '2') handleRating('hard');
  else if (e.key === '3') handleRating('good');
  else if (e.key === '4') handleRating('easy');
});

// ── Init — read URL params ────────────────────────────────────────────────────
const params = new URLSearchParams(window.location.search);
activeExam   = params.get('exam')   || 'core1';
activeDomain = params.get('domain') || 'all';
activeMode   = params.get('mode')   || 'due';

examSelectEl.value = activeExam;
if (modeSelectEl) modeSelectEl.value = activeMode;
populateDomainSelect(activeExam);
domainSelectEl.value = activeDomain;
buildDeck();
