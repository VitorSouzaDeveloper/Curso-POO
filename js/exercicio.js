/* =============================================
   exercicio.js — Interactive Quiz Logic
============================================= */

const QUIZ_DATA = {
  1: {
    title: "Módulo 1 - Introdução",
    questions: [
      {
        question: "1. O que é uma classe?",
        options: [
          "a) Um valor armazenado na memória",
          "b) Um molde para criar objetos",
          "c) Um método de impressão",
          "d) Uma função da linguagem"
        ],
        correct: 1, // index of option 'b'
        correctReason: "Correto! Uma classe é essencialmente um molde ou planta que define as características (atributos) e os comportamentos (métodos) que seus objetos terão.",
        incorrectReason: "Incorreto. A classe funciona como um molde/planta para criar objetos, definindo a estrutura e o comportamento deles."
      },
      {
        question: "2. O que é um objeto?",
        options: [
          "a) Uma instância criada a partir de uma classe",
          "b) Uma repetição de código",
          "c) Uma função da linguagem",
          "d) Um comentário no programa"
        ],
        correct: 0,
        correctReason: "Exato! Um objeto é a concretização (instância) de uma classe na memória do computador.",
        incorrectReason: "Incorreto. O objeto é sempre uma instância (materialização) criada a partir de uma classe existente."
      },
      {
        question: "3. Qual alternativa melhor representa um atributo?",
        options: [
          "a) ligar()",
          "b) acelerar()",
          "c) cor",
          "d) imprimir()"
        ],
        correct: 2,
        correctReason: "Correto! Atributos representam estados ou características de um objeto (geralmente descritos por substantivos ou adjetivos, como 'cor', 'tamanho', 'peso').",
        incorrectReason: "Incorreto. Lembre-se que métodos (ações) geralmente são verbos (ex: ligar()), enquanto atributos são características (ex: cor)."
      },
      {
        question: "4. Qual alternativa melhor representa um método?",
        options: [
          "a) falar()",
          "b) idade",
          "c) tamanho",
          "d) nome"
        ],
        correct: 0,
        correctReason: "Perfeito! Métodos representam ações ou comportamentos do objeto, e por isso são descritos geralmente por verbos seguidos de parênteses.",
        incorrectReason: "Incorreto. Ações e comportamentos são métodos (ex: falar()), enquanto características (idade, nome) são atributos."
      },
      {
        question: "5. Qual a principal função dos métodos getters e setters?",
        options: [
          "a) Criar laços de repetição",
          "b) Controlar o acesso aos atributos",
          "c) Fazer cálculos matemáticos",
          "d) Instanciar objetos"
        ],
        correct: 1,
        correctReason: "Muito bem! Eles garantem o encapsulamento, permitindo que os atributos privados sejam acessados (get) e modificados (set) de maneira segura.",
        incorrectReason: "Incorreto. Getters e Setters são métodos utilizados para ler e alterar o valor de atributos privados, controlando o acesso a eles."
      }
    ]
  },
  2: {
    title: "Módulo 2 - Aprofundando em POO",
    questions: [
      {
        question: "1. O encapsulamento em POO tem como principal objetivo:",
        options: [
          "a) Deixar todas as variáveis públicas",
          "b) Facilitar o acesso direto aos atributos",
          "c) Proteger os dados e controlar o acesso",
          "d) Eliminar a necessidade de métodos"
        ],
        correct: 2,
        correctReason: "Correto! O encapsulamento oculta detalhes internos e protege o estado do objeto contra modificações indevidas ou não autorizadas.",
        incorrectReason: "Incorreto. O objetivo do encapsulamento é exatamente o oposto: proteger e esconder o acesso direto aos dados da classe."
      },
      {
        question: "2. Qual das alternativas representa uma boa prática relacionada ao encapsulamento?",
        options: [
          "a) Permitir alteração direta de qualquer atributo",
          "b) Utilizar getters e setters para controlar alterações",
          "c) Transformar todos os métodos em públicos",
          "d) Evitar validações de dados"
        ],
        correct: 1,
        correctReason: "Certo! O uso de getters e setters garante que a alteração de dados passe por regras ou validações antes de ser efetivada no objeto.",
        incorrectReason: "Incorreto. A boa prática é manter os atributos privados e expor seu acesso apenas via métodos controlados (getters/setters)."
      },
      {
        question: "3. Qual é a principal finalidade de uma interface?",
        options: [
          "a) Armazenar atributos privados",
          "b) Definir comportamentos que outras classes devem implementar",
          "c) Substituir completamente a herança",
          "d) Criar objetos automaticamente"
        ],
        correct: 1,
        correctReason: "Exato! Interfaces estabelecem um 'contrato' de métodos. Qualquer classe que implemente a interface é obrigada a fornecer o código para aqueles métodos.",
        incorrectReason: "Incorreto. Uma interface funciona como um contrato, definindo quais métodos uma classe precisa implementar."
      },
      {
        question: "4. Na herança, a classe que fornece características para outras classes é chamada de:",
        options: [
          "a) Subclasse",
          "b) Classe filha",
          "c) Superclasse",
          "d) Classe derivada"
        ],
        correct: 2,
        correctReason: "Correto! A superclasse (ou classe mãe/base) cede seus atributos e métodos para as subclasses herdeiras.",
        incorrectReason: "Incorreto. A classe original que fornece as características é a Superclasse (ou classe mãe). As que recebem são subclasses."
      }
    ]
  },
  3: {
    title: "Módulo 3 - Estruturas Avançadas em POO",
    questions: [
      {
        question: "1. O que é polimorfismo em Programação Orientada a Objetos?",
        options: [
          "a) Capacidade de uma classe herdar atributos",
          "b) Capacidade de um método ter diferentes comportamentos",
          "c) Processo de esconder atributos",
          "d) Técnica para criar variáveis globais"
        ],
        correct: 1,
        correctReason: "Isso mesmo! O polimorfismo (muitas formas) permite que diferentes objetos respondam ao mesmo método de formas específicas para cada um.",
        incorrectReason: "Incorreto. Polimorfismo é a capacidade de um mesmo método possuir múltiplas formas de ser executado, dependendo de quem o chama."
      },
      {
        question: "2. Qual alternativa representa um exemplo de polimorfismo?",
        options: [
          "a) Uma variável recebendo números",
          "b) Diferentes classes utilizando o mesmo método com comportamentos diferentes",
          "c) Um objeto acessando atributos privados",
          "d) Um método sem parâmetros"
        ],
        correct: 1,
        correctReason: "Certo! O exemplo clássico é um método emitirSom() que, ao ser chamado, faz um Cachorro latir e um Gato miar.",
        incorrectReason: "Incorreto. O polimorfismo ocorre quando o mesmo método (ex: falar()) se comporta de maneira diferente em classes filhas distintas."
      },
      {
        question: "3. O que é abstração em POO?",
        options: [
          "a) Técnica para repetir código",
          "b) Processo de ocultar detalhes complexos e mostrar apenas o essencial",
          "c) Método para criar variáveis",
          "d) Processo de excluir atributos"
        ],
        correct: 1,
        correctReason: "Exato! A abstração foca em expor apenas as partes importantes de um objeto para o uso, escondendo toda a complexidade interna desnecessária.",
        incorrectReason: "Incorreto. Abstrair significa simplificar, exibindo apenas as características fundamentais e ocultando os detalhes complexos do funcionamento."
      },
      {
        question: "4. Qual alternativa melhor representa abstração?",
        options: [
          "a) Mostrar apenas funcionalidades importantes ao usuário",
          "b) Tornar todos os atributos públicos",
          "c) Criar várias variáveis iguais",
          "d) Remover métodos da classe"
        ],
        correct: 0,
        correctReason: "Perfeito! Assim como ao dirigir um carro: você sabe usar o volante e o pedal (essencial), sem precisar entender como a injeção eletrônica funciona (detalhe oculto).",
        incorrectReason: "Incorreto. A melhor representação de abstração é manter o foco no que é essencial para o uso, ocultando a lógica complexa por trás."
      }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const moduloNum = parseInt(params.get('modulo')) || 1;
  const quizData = QUIZ_DATA[moduloNum];

  if (!quizData) {
    document.getElementById('quizContainer').innerHTML = "<p>Exercícios não encontrados para este módulo.</p>";
    return;
  }

  // Set titles
  const breadcrumbTitle = document.getElementById('breadcrumbModuleTitle');
  if (breadcrumbTitle) breadcrumbTitle.textContent = `Exercícios - ${quizData.title}`;
  
  const quizTitle = document.getElementById('quizTitle');
  if (quizTitle) quizTitle.textContent = `Exercícios de Fixação: ${quizData.title}`;

  // Render Sidebar for Navigation context
  const sidebar = document.getElementById('lessonSidebar');
  if (sidebar) {
    let sidebarHTML = '';
    Object.keys(QUIZ_DATA).forEach(modKey => {
      const isActive = parseInt(modKey) === moduloNum ? 'active' : '';
      sidebarHTML += `
        <a href="exercicio.html?modulo=${modKey}" class="sidebar-lesson ${isActive}" style="font-weight: bold; margin-bottom: 8px; border-radius: 8px;">
          <i class="ph-fill ph-pencil-simple"></i> Exercícios do Módulo ${modKey}
        </a>
      `;
    });
    sidebarHTML = `
      <div class="sidebar-module-title" style="padding: 0 20px; font-size: 1rem; margin-bottom: 16px;">Listas de Exercícios</div>
      <nav class="sidebar-lessons">${sidebarHTML}</nav>
    `;
    sidebar.innerHTML = sidebarHTML;
  }

  // Render Quiz
  const container = document.getElementById('quizContainer');
  let quizHTML = "";

  quizData.questions.forEach((q, qIndex) => {
    quizHTML += `
      <div class="quiz-question-container" data-question-index="${qIndex}">
        <h3 class="quiz-question">${q.question}</h3>
        <div class="quiz-options">
    `;
    q.options.forEach((opt, oIndex) => {
      quizHTML += `
          <button class="quiz-option" data-option-index="${oIndex}">
            ${opt}
          </button>
      `;
    });
    quizHTML += `
        </div>
        <div class="quiz-feedback hidden"></div>
      </div>
    `;
  });

  container.innerHTML = quizHTML;

  // Add Interaction Logic
  const questionContainers = document.querySelectorAll('.quiz-question-container');
  questionContainers.forEach(qc => {
    const qIndex = parseInt(qc.getAttribute('data-question-index'));
    const questionData = quizData.questions[qIndex];
    const options = qc.querySelectorAll('.quiz-option');
    const feedbackBox = qc.querySelector('.quiz-feedback');

    options.forEach(optBtn => {
      optBtn.addEventListener('click', () => {
        // If already answered, do nothing
        if (qc.classList.contains('answered')) return;
        
        qc.classList.add('answered');
        const selectedIndex = parseInt(optBtn.getAttribute('data-option-index'));
        const isCorrect = selectedIndex === questionData.correct;

        // Highlight options
        options.forEach((btn, idx) => {
          btn.disabled = true; // disable all
          if (idx === questionData.correct) {
            btn.classList.add('correct');
          } else if (idx === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
          }
        });

        // Show feedback
        feedbackBox.classList.remove('hidden');
        if (isCorrect) {
          feedbackBox.classList.add('correct-feedback');
          feedbackBox.innerHTML = `<strong><i class="ph-fill ph-check-circle"></i> Acertou!</strong> <br> ${questionData.correctReason}`;
        } else {
          feedbackBox.classList.add('incorrect-feedback');
          feedbackBox.innerHTML = `<strong><i class="ph-fill ph-x-circle"></i> Errou.</strong> <br> ${questionData.incorrectReason}`;
        }
      });
    });
  });
});
