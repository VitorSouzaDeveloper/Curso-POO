/* =============================================
   aula.js — Lesson page sidebar navigation + nav buttons
============================================= */
document.addEventListener('DOMContentLoaded', () => {

  // Sidebar lesson active highlight
  const sidebarLinks = document.querySelectorAll('.sidebar-lesson');
  const params = new URLSearchParams(window.location.search);
  const currentAula = params.get('aula') || '3';

  sidebarLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-aula') === currentAula) {
      link.classList.add('active');
    }
  });

  // Prev / Next buttons
  const aulaNum = parseInt(currentAula, 10);
  const moduloNum = parseInt(params.get('modulo') || '2', 10);

  const prevBtn = document.getElementById('prevLesson');
  const nextBtn = document.getElementById('nextLesson');

  if (prevBtn) {
    if (aulaNum > 1) {
      prevBtn.addEventListener('click', () => {
        window.location.href = `aula.html?modulo=${moduloNum}&aula=${aulaNum - 1}`;
      });
    } else {
      prevBtn.style.opacity = '0.4';
      prevBtn.style.cursor = 'default';
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      window.location.href = `aula.html?modulo=${moduloNum}&aula=${aulaNum + 1}`;
    });
  }
});
