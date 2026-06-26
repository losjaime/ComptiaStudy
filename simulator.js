const LS_SIM = 'comptia_sim_scores';

function getSimScores() { return JSON.parse(localStorage.getItem(LS_SIM) || '{}'); }
function saveSimScores(d) { localStorage.setItem(LS_SIM, JSON.stringify(d)); }

function saveSimResult(scenarioId, correct, total) {
  const scores = getSimScores();
  if (!scores[scenarioId]) scores[scenarioId] = [];
  scores[scenarioId].push({ date: new Date().toISOString().slice(0, 10), correct, total });
  if (scores[scenarioId].length > 10) scores[scenarioId] = scores[scenarioId].slice(-10);
  saveSimScores(scores);
}

function bestSimScore(scenarioId) {
  const runs = getSimScores()[scenarioId];
  if (!runs || runs.length === 0) return null;
  return runs.reduce((best, r) => (r.correct > best.correct ? r : best), runs[0]);
}

// --- State ---
let activeScenario = null;
let stepIndex       = 0;
let score           = 0;
let stepResults     = []; // tracks { osiLayer, correct } per step

// --- DOM references ---
const selectView   = document.getElementById('sim-select');
const activeView   = document.getElementById('sim-active');
const resultsView  = document.getElementById('sim-results');
const scenarioGrid = document.getElementById('scenario-grid');

const stepNumEl     = document.getElementById('sim-step-num');
const stepTotalEl   = document.getElementById('sim-step-total');
const scenarioTitleEl = document.getElementById('sim-scenario-title');
const progressFillEl  = document.getElementById('sim-progress-fill');
const promptEl      = document.getElementById('sim-prompt');
const optionsEl     = document.getElementById('sim-options');
const feedbackBoxEl = document.getElementById('sim-feedback-box');
const feedbackEl    = document.getElementById('sim-feedback');
const osiTagEl      = document.getElementById('sim-osi-tag');
const nextBtn       = document.getElementById('sim-next-btn');

const rScoreEl      = document.getElementById('sim-r-score');
const rTotalEl      = document.getElementById('sim-r-total');
const rPctEl        = document.getElementById('sim-r-pct');
const rBarEl        = document.getElementById('sim-r-bar');
const rBreakdownEl  = document.getElementById('sim-r-breakdown');
const retryBtn      = document.getElementById('sim-retry-btn');
const backBtn       = document.getElementById('sim-back-btn');

// --- Score color helper (matches quiz.js) ---
function scoreColor(pct) {
  if (pct >= 70) return '#5aaa7a';
  if (pct >= 50) return '#c9a030';
  return '#c85a5a';
}

// --- Scenario select screen ---
function renderScenarioGrid() {
  scenarioGrid.innerHTML = '';
  SIM_SCENARIOS.forEach(scenario => {
    const best = bestSimScore(scenario.id);
    const card = document.createElement('div');
    card.className = 'scenario-card';
    card.innerHTML = `
      <div class="scenario-card-header">
        <h3>${scenario.title}</h3>
        <span class="difficulty-badge difficulty-${scenario.difficulty.toLowerCase()}">${scenario.difficulty}</span>
      </div>
      <p class="scenario-summary">${scenario.summary}</p>
      <div class="scenario-best">${best ? `Best score: <strong>${best.correct}/${best.total}</strong>` : 'Not attempted yet'}</div>`;
    card.addEventListener('click', () => startScenario(scenario));
    scenarioGrid.appendChild(card);
  });
}

// --- Run a scenario ---
function startScenario(scenario) {
  activeScenario = scenario;
  stepIndex      = 0;
  score          = 0;
  stepResults    = [];

  selectView.classList.add('hidden');
  resultsView.classList.add('hidden');
  activeView.classList.remove('hidden');
  renderStep();
}

function renderStep() {
  if (stepIndex >= activeScenario.steps.length) {
    showResults();
    return;
  }

  const step = activeScenario.steps[stepIndex];

  scenarioTitleEl.textContent = activeScenario.title;
  stepNumEl.textContent   = stepIndex + 1;
  stepTotalEl.textContent = activeScenario.steps.length;
  promptEl.textContent    = step.prompt;

  feedbackBoxEl.classList.add('hidden');
  nextBtn.classList.add('hidden');
  progressFillEl.style.width = (stepIndex / activeScenario.steps.length * 100) + '%';

  optionsEl.innerHTML = '';
  step.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className   = 'option-btn';
    btn.textContent = `${String.fromCharCode(65 + i)}. ${opt}`;
    btn.addEventListener('click', () => selectOption(i, step));
    optionsEl.appendChild(btn);
  });
}

function selectOption(idx, step) {
  const isRight = idx === step.correct;
  stepResults.push({ osiLayer: step.osiLayer, correct: isRight });
  if (isRight) score++;

  Array.from(optionsEl.children).forEach((b, i) => {
    b.disabled = true;
    if (i === step.correct) b.classList.add('option-correct');
    if (i === idx && !isRight) b.classList.add('option-wrong');
  });

  feedbackEl.textContent = step.feedback;
  osiTagEl.textContent   = step.osiLayer;
  feedbackBoxEl.classList.remove('hidden');
  nextBtn.classList.remove('hidden');
  nextBtn.textContent = stepIndex + 1 < activeScenario.steps.length ? 'Next Step →' : 'See Results';
  progressFillEl.style.width = ((stepIndex + 1) / activeScenario.steps.length * 100) + '%';
}

nextBtn.addEventListener('click', () => { stepIndex++; renderStep(); });

// --- Results screen ---
function showResults() {
  activeView.classList.add('hidden');
  resultsView.classList.remove('hidden');

  const total = activeScenario.steps.length;
  const pct   = Math.round((score / total) * 100);

  rScoreEl.textContent    = score;
  rTotalEl.textContent    = total;
  rPctEl.textContent      = pct + '%';
  rPctEl.style.color      = scoreColor(pct);
  rBarEl.style.width      = pct + '%';
  rBarEl.style.background = scoreColor(pct);

  rBreakdownEl.innerHTML = '';
  stepResults.forEach(({ osiLayer, correct }) => {
    const div = document.createElement('div');
    div.className = 'r-domain-row';
    div.innerHTML = `
      <span>${osiLayer}</span>
      <span style="color:${correct ? '#5aaa7a' : '#c85a5a'}">${correct ? 'Correct' : 'Missed'}</span>`;
    rBreakdownEl.appendChild(div);
  });

  saveSimResult(activeScenario.id, score, total);
}

retryBtn.addEventListener('click', () => startScenario(activeScenario));

backBtn.addEventListener('click', () => {
  resultsView.classList.add('hidden');
  selectView.classList.remove('hidden');
  renderScenarioGrid();
});

renderScenarioGrid();
