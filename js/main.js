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

  // --- Update Progress Bars (aulas.html) ---
  const overallProgressEl = document.querySelector('.overall-progress');
  if (overallProgressEl) {
    const completedData = JSON.parse(localStorage.getItem('poo-completed-lessons') || '{}');
    let totalCompleted = 0;
    const totalAulas = 14; // 5 + 3 + 2 + 3 + 1

    const moduleTotals = { 1: 5, 2: 3, 3: 3, 4: 3 };

    document.querySelectorAll('.module-card').forEach(card => {
      const modId = card.getAttribute('data-module');
      if (moduleTotals[modId]) {
        let modCompleted = 0;
        for (let i = 1; i <= moduleTotals[modId]; i++) {
          const lessonLink = card.querySelector(`a[href="aula.html?modulo=${modId}&aula=${i}"]`);
          if (completedData[`${modId}-${i}`]) {
            modCompleted++;
            totalCompleted++;
            if (lessonLink) {
              const iconSpan = lessonLink.querySelector('.lesson-icon');
              if (iconSpan) iconSpan.outerHTML = '<i class="ph-fill ph-check-circle lesson-icon" style="color:#2ecc71;"></i>';
            }
          }
        }
        
        const modPercent = Math.round((modCompleted / moduleTotals[modId]) * 100);
        card.querySelector('.module-lessons').textContent = `${modCompleted}/${moduleTotals[modId]} aulas`;
        card.querySelector('.module-percent').textContent = `${modPercent}%`;
        card.querySelector('.progress-fill').style.width = `${modPercent}%`;
      }
    });

    const overallPercent = Math.round((totalCompleted / totalAulas) * 100);
    overallProgressEl.querySelector('.overall-lessons').textContent = `${totalCompleted}/${totalAulas} aulas`;
    overallProgressEl.querySelector('.overall-percent').textContent = `${overallPercent}%`;
    overallProgressEl.querySelector('.progress-fill').style.width = `${overallPercent}%`;
  }
});
