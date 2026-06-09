/* =============================================
   aula.js — Dynamic Lesson Rendering & Progress
============================================= */

const COURSE_DATA = {
  1: {
    title: "Introdução",
    aulas: [
      { id: "1", title: "Aula 1 - Módulo 1 | POO", videoId: "CZnFXGVxy6A" },
      { id: "2", title: "Aula 2 - Módulo 1 | POO", videoId: "o_qkq9UNaJk" },
      { id: "3", title: "Aula 3 - Módulo 1 | POO", videoId: "ZEfO7f3pEGs" },
      { id: "4", title: "Aula 4 - Módulo 1 | POO", videoId: "c0wftTbOBX8" }
    ]
  },
  2: {
    title: "Aprofundando em POO",
    aulas: [
      { id: "1", title: "Aula 1 - Módulo 2 | POO", videoId: "6luHR4jb6bI" },
      { id: "2", title: "Aula 2 - Módulo 2 | POO", videoId: "j7sj6W6ecv4" },
      { id: "3", title: "Aula 3 - Módulo 2 | POO", videoId: "t_RbXAdYJyY" }
    ]
  },
  3: {
    title: "Estruturas Avançadas em POO",
    aulas: [
      { id: "1", title: "Aula 1 - Módulo 3 | POO", videoId: "qkF91uYZONA" },
      { id: "2", title: "Aula 2 - Módulo 3 | POO", videoId: "uWHa-2jgHMo" }
    ]
  }
};

function getCompletedLessons() {
  return JSON.parse(localStorage.getItem('poo-completed-lessons') || '{}');
}

function setCompletedLesson(mod, aula, completed) {
  const data = getCompletedLessons();
  if (completed) {
    data[`${mod}-${aula}`] = true;
  } else {
    delete data[`${mod}-${aula}`];
  }
  localStorage.setItem('poo-completed-lessons', JSON.stringify(data));
}

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const moduloNum = parseInt(params.get('modulo')) || 1;
  const aulaNum = parseInt(params.get('aula')) || 1;

  const moduleData = COURSE_DATA[moduloNum];
  if (!moduleData) return;

  const currentLesson = moduleData.aulas.find(a => parseInt(a.id) === aulaNum);
  if (!currentLesson) return;

  // 1. Preencher Breadcrumb
  const breadcrumb = document.querySelector('.breadcrumb');
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="aulas.html">Módulo ${moduloNum}</a>
      <span class="breadcrumb-sep">→</span>
      <span>${moduleData.title}</span>
      <span class="breadcrumb-sep">→</span>
      <span>Aula ${aulaNum}</span>
    `;
  }

  // 2. Preencher Sidebar com TODOS os módulos
  const sidebar = document.getElementById('lessonSidebar');
  const renderSidebar = () => {
    if (!sidebar) return;
    const completedLessons = getCompletedLessons();
    let sidebarHTML = '';

    Object.keys(COURSE_DATA).forEach(modKey => {
      const mod = COURSE_DATA[modKey];
      sidebarHTML += `<div class="sidebar-module-label" style="${modKey > 1 ? 'margin-top:24px;' : ''}">Módulo ${modKey}</div>`;
      sidebarHTML += `<div class="sidebar-module-title">${mod.title}</div>`;
      sidebarHTML += `<nav class="sidebar-lessons">`;
      
      mod.aulas.forEach(aula => {
        const isActive = (parseInt(modKey) === moduloNum && parseInt(aula.id) === aulaNum) ? 'active' : '';
        const isCompleted = completedLessons[`${modKey}-${aula.id}`] ? '<i class="ph-fill ph-check-circle" style="color:#2ecc71;"></i>' : '<i class="ph ph-circle"></i>';
        sidebarHTML += `<a href="aula.html?modulo=${modKey}&aula=${aula.id}" class="sidebar-lesson ${isActive}" data-aula="${aula.id}">
          <span style="margin-right: 8px;">${isCompleted}</span>
          ${aula.id}. ${aula.title.split(' - ')[0]}
        </a>`;
      });
      sidebarHTML += `</nav>`;
    });
    sidebar.innerHTML = sidebarHTML;
  };
  renderSidebar();

  // 3. Preencher Conteúdo da Aula
  const lessonContent = document.getElementById('dynamicLessonContent');
  if (lessonContent) {
    const isCurrentCompleted = getCompletedLessons()[`${moduloNum}-${aulaNum}`];
    
    lessonContent.innerHTML = `
      <div class="lesson-block">
        <h1 class="lesson-title">${currentLesson.title}</h1>
        <div class="video-container">
          <div class="video-wrapper">
            <iframe
              id="lessonVideo"
              src="https://www.youtube.com/embed/${currentLesson.videoId}"
              title="${currentLesson.title}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="lesson-actions" style="margin-top: 20px;">
          <button id="btnComplete" class="btn-outline" style="border-radius: 6px; display: flex; align-items: center; gap: 8px;">
            <span class="status-icon">${isCurrentCompleted ? '<i class="ph-fill ph-check-circle" style="color:#2ecc71;"></i>' : '<i class="ph ph-circle"></i>'}</span> 
            <span class="status-text">${isCurrentCompleted ? 'Aula Concluída' : 'Marcar como concluída'}</span>
          </button>
        </div>
      </div>
    `;

    // Toggle completion
    const btnComplete = document.getElementById('btnComplete');
    btnComplete.addEventListener('click', () => {
      const currentlyCompleted = getCompletedLessons()[`${moduloNum}-${aulaNum}`];
      setCompletedLesson(moduloNum, aulaNum, !currentlyCompleted);
      
      // Update UI
      const nowCompleted = !currentlyCompleted;
      btnComplete.querySelector('.status-icon').innerHTML = nowCompleted ? '<i class="ph-fill ph-check-circle" style="color:#2ecc71;"></i>' : '<i class="ph ph-circle"></i>';
      btnComplete.querySelector('.status-text').textContent = nowCompleted ? 'Aula Concluída' : 'Marcar como concluída';
      
      // Re-render sidebar to update checks
      renderSidebar();
    });
  }

  // 4. Configurar Botões Prev/Next
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
    if (aulaNum < moduleData.aulas.length) {
      nextBtn.addEventListener('click', () => {
        window.location.href = `aula.html?modulo=${moduloNum}&aula=${aulaNum + 1}`;
      });
    } else {
      nextBtn.style.opacity = '0.4';
      nextBtn.style.cursor = 'default';
    }
  }
});
