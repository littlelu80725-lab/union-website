// ===== theme.js — Union Website Dark/Light Mode =====

const THEME_KEY = 'union-theme';
let currentTheme = localStorage.getItem(THEME_KEY) || 'light';

function applyTheme(theme, animate) {
  const html = document.documentElement;
  const body = document.body;

  if (animate) {
    body.style.transition = 'background-color 0.35s ease, color 0.35s ease';
    document.querySelectorAll('nav, section, footer, .case-card, .insight-card, .capability-card, .form-input, .service-tag, .lang-toggle, .theme-toggle, .success-card, #contact-form').forEach(el => {
      el.style.transition = 'background-color 0.35s ease, color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease';
    });
  }

  if (theme === 'dark') {
    html.classList.add('dark');
    html.classList.remove('light');
  } else {
    html.classList.remove('dark');
    html.classList.add('light');
  }

  // Update toggle icon
  document.querySelectorAll('.theme-toggle-icon').forEach(icon => {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  });

  // Update map tile layer if it exists
  if (window._mapTileLayer) {
    window._mapTileLayer.setUrl(
      theme === 'dark'
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
    );
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem(THEME_KEY, currentTheme);
  applyTheme(currentTheme, true);
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => applyTheme(currentTheme, false));

// Expose for onclick
window.toggleTheme = toggleTheme;
