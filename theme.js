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

document.addEventListener('DOMContentLoaded', initTheme);
