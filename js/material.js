/* =============================================
   material.js — Filter tabs + Video/Material modals
============================================= */
document.addEventListener('DOMContentLoaded', () => {

  // --- Filter tabs ---
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.material-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-filter');
      cards.forEach(card => {
        if (filter === 'todos' || card.getAttribute('data-type') === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- Video modal ---
  const videoModal = document.getElementById('videoModal');
  const closeVideoBtn = document.getElementById('closeVideoModal');
  const videoIframe = document.getElementById('modalVideoIframe');
  const videoTitle = document.getElementById('videoModalTitle');

  if (closeVideoBtn) {
    closeVideoBtn.addEventListener('click', () => {
      videoModal.classList.remove('open');
      videoIframe.src = '';
    });
  }
  if (videoModal) {
    videoModal.addEventListener('click', e => {
      if (e.target === videoModal) {
        videoModal.classList.remove('open');
        videoIframe.src = '';
      }
    });
  }

  // --- Material modal ---
  const matModal = document.getElementById('materialModal');
  const closeMatBtn = document.getElementById('closeMaterialModal');

  if (closeMatBtn) {
    closeMatBtn.addEventListener('click', () => matModal.classList.remove('open'));
  }
  if (matModal) {
    matModal.addEventListener('click', e => {
      if (e.target === matModal) matModal.classList.remove('open');
    });
  }
});

// Global functions for onclick handlers
function openVideo(url, title) {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('modalVideoIframe');
  const titleEl = document.getElementById('videoModalTitle');
  iframe.src = url;
  titleEl.textContent = title || 'Vídeo';
  modal.classList.add('open');
}

function openMaterial(id) {
  const modal = document.getElementById('materialModal');
  const content = document.getElementById('materialModalContent');

  const materials = {
    artigo1: `<h2>O que é programação orientada à objetos?</h2>
      <p>A Programação Orientada a Objetos (POO) é um paradigma de programação baseado no conceito de <strong>"objetos"</strong>, que podem conter dados (atributos) e código (métodos).</p>
      <h3>Os 4 Pilares da POO</h3>
      <ul><li><strong>Encapsulamento</strong> – Proteger os dados internos de um objeto.</li>
      <li><strong>Herança</strong> – Reutilizar código através de hierarquias de classes.</li>
      <li><strong>Polimorfismo</strong> – Permitir que objetos diferentes respondam ao mesmo método.</li>
      <li><strong>Abstração</strong> – Simplificar a complexidade mostrando apenas o necessário.</li></ul>`,
    artigo2: `<h2>Interfaces em POO</h2>
      <p>Uma <strong>interface</strong> define um contrato que as classes devem seguir, especificando quais métodos devem ser implementados sem fornecer a implementação.</p>
      <p>Interfaces são essenciais para criar sistemas flexíveis e desacoplados, facilitando a manutenção e testes.</p>`,
    ebook1: `<h2>POO com Java para iniciantes</h2>
      <p>Este e-book cobre desde os conceitos mais básicos até exemplos práticos completos em Java.</p>
      <p><em>Em breve disponível para download.</em></p>`,
    ebook2: `<h2>Boas práticas e clean code</h2>
      <p>Aprenda a escrever código limpo, sustentável e fácil de manter seguindo princípios como SOLID, DRY e KISS.</p>`,
    exercicio1: `<h2>Exercícios de POO com resolução</h2>
      <p><strong>Exercício 1:</strong> Crie uma classe <code>Veiculo</code> com atributos marca e modelo. Em seguida, crie uma classe <code>Carro</code> que herda de <code>Veiculo</code> e adiciona o atributo <code>numPortas</code>.</p>
      <p><strong>Exercício 2:</strong> Implemente uma interface <code>Autenticavel</code> com o método <code>autenticar(senha)</code> e crie classes que a implementem.</p>`,
    exercicio2: `<h2>Desafio: Refatore este código</h2>
      <p>Analise o código abaixo e aplique princípios de clean code para torná-lo mais legível e manutenível.</p>
      <pre style="background:#1E2A38;color:#C8D0DA;padding:16px;border-radius:8px;overflow-x:auto;font-family:monospace">
public class D {
  int x; String n;
  void p(){ System.out.println(n+": "+x); }
}</pre>
      <p><strong>Dica:</strong> Use nomes descritivos, encapsule os atributos e siga o princípio da responsabilidade única.</p>`
  };

  content.innerHTML = materials[id] || '<p>Conteúdo não encontrado.</p>';
  modal.classList.add('open');
}
