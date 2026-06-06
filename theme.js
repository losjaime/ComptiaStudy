const LS_THEME = 'comptia_theme';

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

function initNavDropdown() {
  const toggle = document.querySelector('.nav-brand-dropdown .nav-brand');
  if (!toggle) return;
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    toggle.closest('.nav-brand-dropdown').classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.nav-brand-dropdown.open').forEach(d => {
      if (!d.contains(e.target)) d.classList.remove('open');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => { initTheme(); initNavDropdown(); });
