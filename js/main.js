/* =============================================
   main.js — Theme Toggle + Hamburger + Module expand
============================================= */

// Theme toggle
(function initTheme() {
  const saved = localStorage.getItem('poo-theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
})();

document.addEventListener('DOMContentLoaded', () => {

  // --- Theme toggle ---
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('poo-theme', next);
    });
  }

  // --- Hamburger ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // --- Module card expand (aulas page) ---
  document.querySelectorAll('.module-card').forEach(card => {
    card.addEventListener('click', e => {
      // Don't toggle if clicking a lesson link
      if (e.target.closest('.lesson-item')) return;
      card.classList.toggle('expanded');
    });
  });

  // --- Code tabs (aula page) ---
  document.querySelectorAll('.code-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const lang = tab.getAttribute('data-lang');
      const container = tab.closest('.code-block-container');
      // Tabs
      container.querySelectorAll('.code-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      // Code blocks
      container.querySelectorAll('.code-content').forEach(c => c.classList.remove('active'));
      const target = container.querySelector('#code-' + lang);
      if (target) target.classList.add('active');
    });
  });
});
