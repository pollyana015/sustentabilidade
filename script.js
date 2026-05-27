/* ============================================
   EcoAgro Digital - JavaScript
   Lógica interativa: Simulador, Tecnologias e Quiz
   ============================================ */

// ============================================
// SIMULADOR
// ============================================

// Elementos do simulador
const sliderAgua = document.getElementById('agua');
const sliderTecnologia = document.getElementById('tecnologia');
const sliderPreservacao = document.getElementById('preservacao');

const valueAgua = document.getElementById('agua-value');
const valueTecnologia = document.getElementById('tecnologia-value');
const valuePreservacao = document.getElementById('preservacao-value');

const producaoBar = document.getElementById('producao-bar');
const producaoValor = document.getElementById('producao-valor');
const saudeBar = document.getElementById('saude-bar');
const saudeValor = document.getElementById('saude-valor');
const impactoBar = document.getElementById('impacto-bar');
const impactoValor = document.getElementById('impacto-valor');

// Função para calcular resultados baseado nos sliders
function atualizarSimulador() {
    // Obter valores dos sliders (0-100)
    const agua = parseInt(sliderAgua.value);
    const tecnologia = parseInt(sliderTecnologia.value);
    const preservacao = parseInt(sliderPreservacao.value);

    // Atualizar displays dos sliders
    valueAgua.textContent = agua;
    valueTecnologia.textContent = tecnologia;
    valuePreservacao.textContent = preservacao;

    // Cálculos dos resultados
    // Produção: aumenta com tecnologia e água, mas diminui se preservação é muito baixa
    const producao = Math.min(100, Math.round((tecnologia * 0.5 + agua * 0.3 + preservacao * 0.2)));
    
    // Saúde do Solo: aumenta com preservação e tecnologia (agricultura de precisão), diminui com muito uso de água
    const saudeSolo = Math.min(100, Math.round((preservacao * 0.6 + tecnologia * 0.3 - agua * 0.1)));
    
    // Impacto Ambiental: diminui (melhor) com preservação e tecnologia, piora com muito uso de água
    const impactoAmbiental = Math.max(0, Math.round(100 - (preservacao * 0.5 + tecnologia * 0.3 + agua * 0.2)));

    // Atualizar barras e valores
    producaoBar.style.width = producao + '%';
    producaoValor.textContent = producao;

    saudeBar.style.width = saudeSolo + '%';
    saudeValor.textContent = saudeSolo;

    impactoBar.style.width = impactoAmbiental + '%';
    impactoValor.textContent = impactoAmbiental;
}

// Event listeners para os sliders
sliderAgua.addEventListener('input', atualizarSimulador);
sliderTecnologia.addEventListener('input', atualizarSimulador);
sliderPreservacao.addEventListener('input', atualizarSimulador);

// Inicializar simulador
atualizarSimulador();

// ============================================
// TECNOLOGIAS - Expandir/Colapsar
// ============================================

function toggleTech(button) {
    const card = button.closest('.tech-card');
    const content = card.querySelector('.tech-content');
    
    // Toggle display
    if (content.style.display === 'none') {
        content.style.display = 'block';
        button.textContent = 'Ocultar';
    } else {
        content.style.display = 'none';
        button.textContent = 'Saiba Mais';
    }
}

// ============================================
// QUIZ
// ============================================

// Dados do quiz
const quizData = [
    {
        pergunta: "O que é agricultura de precisão?",
        opcoes: [
            "Aplicação localizada de insumos usando GPS",
            "Plantio manual muito cuidadoso",
            "Uso de muitos agroquímicos",
            "Cultivo apenas em clima frio"
        ],
        resposta: 0
    },
    {
        pergunta: "Qual é o benefício principal dos drones na agricultura?",
        opcoes: [
            "Substituir completamente os agricultores",
            "Monitorar culturas e detectar pragas com câmeras especiais",
            "Aumentar o preço dos produtos",
            "Reduzir a qualidade das colheitas"
        ],
        resposta: 1
    },
    {
        pergunta: "Como a IA ajuda no agronegócio?",
        opcoes: [
            "Apenas para decoração das fazendas",
            "Análise preditiva de dados para otimizar plantio e irrigação",
            "Para substituir os animais da fazenda",
            "Não tem utilidade no campo"
        ],
        resposta: 1
    },
    {
        pergunta: "Qual é o impacto dos sensores IoT na água?",
        opcoes: [
            "Aumentam o consumo de água",
            "Permitem irrigação precisa, economizando até 40% de água",
            "Poluem a água do solo",
            "Não têm relação com água"
        ],
        resposta: 1
    },
    {
        pergunta: "Por que a rotação de culturas é importante?",
        opcoes: [
            "Para confundir os insetos",
            "Mantém a fertilidade do solo e reduz pragas naturalmente",
            "Apenas para decoração visual",
            "Não tem importância"
        ],
        resposta: 1
    },
    {
        pergunta: "Qual é o objetivo do Agrinho?",
        opcoes: [
            "Incentivar o ensino de tecnologia e programação com foco em sustentabilidade agrícola",
            "Vender produtos agrícolas",
            "Apenas para diversão",
            "Ensinar apenas matemática"
        ],
        resposta: 0
    }
];

let quizAtual = 0;
let pontuacao = 0;
let respostasUsuario = [];

// Função para renderizar pergunta do quiz
function renderizarPergunta() {
    const quizContent = document.getElementById('quiz-content');
    const pergunta = quizData[quizAtual];

    let html = `
        <div class="quiz-question">
            <h4>Pergunta ${quizAtual + 1} de ${quizData.length}</h4>
            <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">${pergunta.pergunta}</p>
            <div class="quiz-options">
    `;

    pergunta.opcoes.forEach((opcao, index) => {
        html += `
            <button class="quiz-option" onclick="selecionarOpcao(${index})" id="opcao-${index}">
                ${opcao}
            </button>
        `;
    });

    html += `
            </div>
            <div class="quiz-buttons">
                <button class="quiz-btn" onclick="proximaPergunta()" id="proximo-btn" disabled>
                    ${quizAtual === quizData.length - 1 ? 'Finalizar' : 'Próxima'}
                </button>
            </div>
        </div>
    `;

    quizContent.innerHTML = html;
}

// Função para selecionar uma opção
function selecionarOpcao(index) {
    const pergunta = quizData[quizAtual];
    const botoes = document.querySelectorAll('.quiz-option');
    
    // Remover seleções anteriores
    botoes.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
    });

    // Marcar opção selecionada
    const opcaoSelecionada = document.getElementById(`opcao-${index}`);
    opcaoSelecionada.classList.add('selected');

    // Verificar se está correta
    if (index === pergunta.resposta) {
        opcaoSelecionada.classList.add('correct');
        if (!respostasUsuario[quizAtual]) {
            pontuacao++;
        }
    } else {
        opcaoSelecionada.classList.add('incorrect');
        // Mostrar a resposta correta
        document.getElementById(`opcao-${pergunta.resposta}`).classList.add('correct');
    }

    // Registrar resposta
    respostasUsuario[quizAtual] = index;

    // Habilitar botão próxima
    document.getElementById('proximo-btn').disabled = false;
}

// Função para próxima pergunta
function proximaPergunta() {
    if (quizAtual < quizData.length - 1) {
        quizAtual++;
        renderizarPergunta();
    } else {
        finalizarQuiz();
    }
}

// Função para finalizar quiz
function finalizarQuiz() {
    const quizContent = document.getElementById('quiz-content');
    const quizResultado = document.getElementById('quiz-resultado');
    
    quizContent.style.display = 'none';
    quizResultado.style.display = 'block';

    // Atualizar valores
    document.getElementById('score-value').textContent = pontuacao;
    document.getElementById('total-questions').textContent = quizData.length;

    // Mensagem baseada na pontuação
    let mensagem = '';
    const percentual = (pontuacao / quizData.length) * 100;

    if (percentual === 100) {
        mensagem = "🌟 Perfeito! Você é um especialista em agricultura sustentável!";
    } else if (percentual >= 80) {
        mensagem = "🎉 Excelente! Você tem um ótimo conhecimento sobre tecnologias agrícolas!";
    } else if (percentual >= 60) {
        mensagem = "👍 Bom trabalho! Você compreendeu bem os conceitos principais.";
    } else if (percentual >= 40) {
        mensagem = "📚 Continue estudando! Há muito a aprender sobre agricultura sustentável.";
    } else {
        mensagem = "🌱 Comece do início! Releia o material e tente novamente.";
    }

    document.getElementById('resultado-mensagem').textContent = mensagem;
}

// Função para reiniciar quiz
function reiniciarQuiz() {
    quizAtual = 0;
    pontuacao = 0;
    respostasUsuario = [];

    document.getElementById('quiz-content').style.display = 'block';
    document.getElementById('quiz-resultado').style.display = 'none';

    renderizarPergunta();
}

// Inicializar quiz quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    renderizarPergunta();
});

// ============================================
// EFEITOS VISUAIS ADICIONAIS
// ============================================

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito de aparição dos elementos ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cards de tecnologia
document.querySelectorAll('.tech-card').forEach(card => {
    observer.observe(card);
});

// ============================================
// COMENTÁRIOS EXPLICATIVOS DO CÓDIGO
// ============================================

/*
 * SIMULADOR:
 * - Os sliders controlam três variáveis: Água, Tecnologia e Preservação
 * - A Produção aumenta com Tecnologia e Água, mas é limitada por Preservação
 * - A Saúde do Solo depende principalmente de Preservação e Tecnologia
 * - O Impacto Ambiental é o inverso: quanto maior Preservação e Tecnologia, menor o impacto
 * - Os valores são atualizados em tempo real com transições suaves
 *
 * TECNOLOGIAS:
 * - Cada card pode ser expandido/colapsado para revelar mais informações
 * - Usa animação CSS para transição suave
 *
 * QUIZ:
 * - 6 perguntas sobre agricultura sustentável e tecnologias
 * - Feedback imediato: resposta correta em verde, incorreta em vermelho
 * - Pontuação final com mensagem personalizada
 * - Possibilidade de refazer o quiz
 *
 * ACESSIBILIDADE:
 * - Navegação por teclado funciona
 * - Cores contrastantes para legibilidade
 * - Transições suaves respeitam preferências de movimento reduzido (em navegadores modernos)
 */
