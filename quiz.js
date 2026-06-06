const ALL_QUIZ = [
  ...(typeof QUIZ_CORE1 !== 'undefined' ? QUIZ_CORE1 : []),
  ...(typeof QUIZ_CORE2 !== 'undefined' ? QUIZ_CORE2 : []),
  ...(typeof QUIZ_NETPLUS_WEEK1 !== 'undefined' ? QUIZ_NETPLUS_WEEK1 : []),
];
const LS_QUIZ  = 'comptia_quiz_scores';

function getQuizScores() { return JSON.parse(localStorage.getItem(LS_QUIZ) || '{}'); }
function saveQuizScores(d) { localStorage.setItem(LS_QUIZ, JSON.stringify(d)); }

// --- State ---
let quizDeck        = [];
let qIndex          = 0;
let score           = 0;
let answered        = false;
let activeExam      = 'both';
let activeDomain    = 'all';
let totalQuestions  = 10;
let questionResults = []; // tracks { domain, correct } for each answered question

// --- DOM references ---
const configView    = document.getElementById('quiz-config');
const activeView    = document.getElementById('quiz-active');
const resultsView   = document.getElementById('quiz-results');

const examSel       = document.getElementById('q-exam-select');
const domainSel     = document.getElementById('q-domain-select');
const countSel      = document.getElementById('q-count-select');
const startBtn      = document.getElementById('q-start-btn');

const qNum          = document.getElementById('q-num');
const qTotal        = document.getElementById('q-total');
const qDomain       = document.getElementById('q-domain-badge');
const qText         = document.getElementById('q-text');
const qOptions      = document.getElementById('q-options');
const qExplain      = document.getElementById('q-explanation');
const qExplainBox   = document.getElementById('q-explanation-box');
const qNextBtn      = document.getElementById('q-next-btn');
const qProgressFill = document.getElementById('q-progress-fill');

const rScore        = document.getElementById('r-score');
const rTotal        = document.getElementById('r-total');
const rPct          = document.getElementById('r-pct');
const rBar          = document.getElementById('r-bar');
const rBreakdown    = document.getElementById('r-breakdown');
const rRestartBtn   = document.getElementById('r-restart-btn');
const rConfigBtn    = document.getElementById('r-config-btn');

// --- Domain select ---
// Rebuilds the domain dropdown whenever the exam selection changes
function getQuizSource(exam) {
  if (exam === 'core1') return typeof QUIZ_CORE1 !== 'undefined' ? QUIZ_CORE1 : [];
  if (exam === 'core2') return typeof QUIZ_CORE2 !== 'undefined' ? QUIZ_CORE2 : [];
  if (exam === 'netplus') return typeof QUIZ_NETPLUS_WEEK1 !== 'undefined' ? QUIZ_NETPLUS_WEEK1 : [];
  return ALL_QUIZ;
}

function populateDomains() {
  const exam = examSel.value;
  const source = getQuizSource(exam);
  const domains = [...new Set(source.map(q => q.domain))].sort();

  domainSel.innerHTML = '<option value="all">All domains</option>';
  domains.forEach(d => {
    const opt = document.createElement('option');
    opt.value = d;
    opt.textContent = d;
    domainSel.appendChild(opt);
  });
}

examSel.addEventListener('change', populateDomains);
populateDomains();

// --- Start quiz ---
startBtn.addEventListener('click', () => {
  activeExam     = examSel.value;
  activeDomain   = domainSel.value;
  totalQuestions = parseInt(countSel.value, 10);

  const source = getQuizSource(activeExam);
  let pool = activeDomain === 'all' ? source : source.filter(q => q.domain === activeDomain);
  if (pool.length === 0) pool = source;

  // Shuffle and limit to requested count
  quizDeck        = pool.slice().sort(() => Math.random() - 0.5).slice(0, totalQuestions);
  qIndex          = 0;
  score           = 0;
  questionResults = [];

  configView.classList.add('hidden');
  resultsView.classList.add('hidden');
  activeView.classList.remove('hidden');
  showQuestion();
});

// --- Show question ---
function showQuestion() {
  if (qIndex >= quizDeck.length) {
    showResults();
    return;
  }

  answered = false;
  const q  = quizDeck[qIndex];

  qNum.textContent  = qIndex + 1;
  qTotal.textContent = quizDeck.length;
  qText.textContent  = q.question;

  const color = domainColor(q.domain);
  qDomain.textContent = q.domain;
  qDomain.style.cssText = `background:${color}22;color:${color};border:1px solid ${color}44;`;

  qExplainBox.classList.add('hidden');
  qNextBtn.classList.add('hidden');
  qProgressFill.style.width = (qIndex / quizDeck.length * 100) + '%';

  // Build answer buttons for this question
  qOptions.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className   = 'option-btn';
    btn.textContent = `${String.fromCharCode(65 + i)}. ${opt}`;
    btn.addEventListener('click', () => selectAnswer(i, btn));
    qOptions.appendChild(btn);
  });

  document.onkeydown = handleKey;
}

// Keyboard support: A-D or 1-4 to select, Enter/Space to advance
function handleKey(e) {
  const keys = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, '1': 0, '2': 1, '3': 2, '4': 3 };
  const key  = e.key.toLowerCase();

  if (key in keys && !answered) {
    const btn = qOptions.children[keys[key]];
    if (btn) selectAnswer(keys[key], btn);
  } else if ((key === 'enter' || key === ' ') && answered) {
    e.preventDefault();
    nextQuestion();
  }
}

// --- Handle answer selection ---
function selectAnswer(idx, btn) {
  if (answered) return;
  answered = true;

  const q       = quizDeck[qIndex];
  const correct = q.correct;
  const isRight = idx === correct;

  // Track result for the domain breakdown on the results screen
  questionResults.push({ domain: q.domain, correct: isRight });

  if (isRight) score++;

  // Highlight correct answer green, wrong answer red
  Array.from(qOptions.children).forEach((b, i) => {
    b.disabled = true;
    if (i === correct) b.classList.add('option-correct');
    if (i === idx && !isRight) b.classList.add('option-wrong');
  });

  qExplain.textContent = q.explanation;
  qExplainBox.classList.remove('hidden');
  qNextBtn.classList.remove('hidden');
  qNextBtn.textContent = qIndex + 1 < quizDeck.length ? 'Next Question →' : 'See Results';
  qProgressFill.style.width = ((qIndex + 1) / quizDeck.length * 100) + '%';
}

qNextBtn.addEventListener('click', nextQuestion);
function nextQuestion() { qIndex++; showQuestion(); }

// --- Results screen ---
function showResults() {
  activeView.classList.add('hidden');
  resultsView.classList.remove('hidden');
  document.onkeydown = null;

  const pct = Math.round((score / quizDeck.length) * 100);

  rScore.textContent     = score;
  rTotal.textContent     = quizDeck.length;
  rPct.textContent       = pct + '%';
  rPct.style.color       = scoreColor(pct);
  rBar.style.width       = pct + '%';
  rBar.style.background  = scoreColor(pct);

  // Build per-domain breakdown using the results we tracked during the quiz
  const perDomain = {};
  questionResults.forEach(({ domain, correct }) => {
    if (!perDomain[domain]) perDomain[domain] = { correct: 0, total: 0 };
    perDomain[domain].total++;
    if (correct) perDomain[domain].correct++;
  });

  rBreakdown.innerHTML = '';
  Object.entries(perDomain).forEach(([domain, { correct, total }]) => {
    const domPct  = Math.round((correct / total) * 100);
    const color   = domainColor(domain);
    const div     = document.createElement('div');
    div.className = 'r-domain-row';
    div.innerHTML = `
      <span style="color:${color}">${domain}</span>
      <span style="color:${scoreColor(domPct)}">${correct}/${total} &nbsp;(${domPct}%)</span>`;
    rBreakdown.appendChild(div);
  });

  saveQuizResult(pct);
}

// Returns green/yellow/red based on percentage
function scoreColor(pct) {
  if (pct >= 70) return '#5aaa7a';
  if (pct >= 50) return '#c9a030';
  return '#c85a5a';
}

// Save last 10 quiz scores per exam+domain key
function saveQuizResult(pct) {
  const scores = getQuizScores();
  const key    = `${activeExam}_${activeDomain}`;
  if (!scores[key]) scores[key] = [];
  scores[key].push({ date: new Date().toISOString().slice(0, 10), pct, total: quizDeck.length, scored: score });
  if (scores[key].length > 10) scores[key] = scores[key].slice(-10);
  saveQuizScores(scores);
}

// --- Restart / New Quiz ---
rRestartBtn.addEventListener('click', () => {
  resultsView.classList.add('hidden');
  activeView.classList.remove('hidden');
  quizDeck        = quizDeck.sort(() => Math.random() - 0.5);
  qIndex          = 0;
  score           = 0;
  questionResults = [];
  showQuestion();
});

rConfigBtn.addEventListener('click', () => {
  resultsView.classList.add('hidden');
  configView.classList.remove('hidden');
  document.onkeydown = null;
});
