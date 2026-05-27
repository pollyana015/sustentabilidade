# EcoAgro Digital - Documentação Pedagógica

**Projeto:** EcoAgro Digital - Equilíbrio em Movimento  
**Categoria:** Concurso Agrinho 2026 - Subcategoria 3 (Programação Front-End)  
**Público-alvo:** Estudantes do Ensino Médio  
**Componentes Curriculares:** Educação Digital e Computação: Programação e Robótica/IA, Pensamento Computacional, Programação ou Matemática II

---

## 1. Objetivo Pedagógico

O projeto **EcoAgro Digital** foi desenvolvido para demonstrar como a tecnologia (HTML, CSS e JavaScript puros) pode ser aplicada para educar sobre sustentabilidade no agronegócio. O site interativo permite que estudantes explorem o conceito central do Agrinho 2026: **"Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"**.

---

## 2. Estrutura do Projeto

### 2.1 Arquivos Principais

O projeto é composto por três arquivos essenciais, desenvolvidos em linguagens web puras (sem frameworks):

| Arquivo | Linguagem | Função |
|---------|-----------|--------|
| `index.html` | HTML5 Semântico | Estrutura e conteúdo da página |
| `style.css` | CSS3 | Estilização e animações |
| `script.js` | JavaScript Vanilla | Interatividade e lógica |

### 2.2 Estrutura HTML

O arquivo `index.html` utiliza tags semânticas do HTML5 para melhor acessibilidade e SEO:

- `<nav>` - Navegação principal
- `<section>` - Seções temáticas
- `<header>` - Cabeçalho implícito (hero)
- `<footer>` - Rodapé

**Exemplo de estrutura semântica:**
```html
<section id="simulador" class="simulador-section">
    <div class="section-container">
        <h2 class="section-title">Dashboard de Equilíbrio</h2>
        <!-- Conteúdo -->
    </div>
</section>
```

---

## 3. Componentes Interativos

### 3.1 Simulador de Equilíbrio

**Objetivo:** Demonstrar a relação entre Uso de Água, Tecnologia, Preservação e seus impactos na Produção, Saúde do Solo e Impacto Ambiental.

**Tecnologia:** JavaScript manipulando o DOM em tempo real.

**Funcionamento:**
- Três sliders permitem ajustar valores de 0 a 100%
- Cálculos em tempo real usando fórmulas matemáticas
- Atualização visual de barras de progresso com transições suaves

**Fórmulas Utilizadas:**
```javascript
// Produção: aumenta com tecnologia e água, limitada por preservação
Produção = min(100, Tecnologia × 0.5 + Água × 0.3 + Preservação × 0.2)

// Saúde do Solo: depende de preservação e tecnologia
SaúdeSolo = min(100, Preservação × 0.6 + Tecnologia × 0.3 - Água × 0.1)

// Impacto Ambiental: inverso (quanto maior, melhor)
ImpactoAmbiental = max(0, 100 - (Preservação × 0.5 + Tecnologia × 0.3 + Água × 0.2))
```

**Aprendizado:** Os estudantes compreendem que o equilíbrio é possível e que tecnologia + preservação = melhor produção com menor impacto.

### 3.2 Guia de Tecnologias Sustentáveis

**Objetivo:** Apresentar 6 tecnologias reais usadas no agronegócio moderno.

**Tecnologia:** Cards interativos com JavaScript para expandir/colapsar conteúdo.

**Tecnologias Apresentadas:**
1. **Drones Agrícolas** - Monitoramento com câmeras multiespectrais
2. **Inteligência Artificial** - Análise preditiva de dados
3. **Sensores IoT** - Monitoramento em tempo real
4. **Agricultura de Precisão** - Aplicação localizada de insumos
5. **Energia Renovável** - Painéis solares integrados
6. **Rotação de Culturas** - Manejo sustentável do solo

**Aprendizado:** Cada tecnologia é apresentada com seu impacto real (economia de água, aumento de produtividade, redução de custos).

### 3.3 Quiz Interativo

**Objetivo:** Avaliar o conhecimento adquirido sobre agricultura sustentável.

**Tecnologia:** JavaScript gerenciando estado do quiz, validação de respostas e feedback visual.

**Características:**
- 6 perguntas sobre os temas abordados
- Feedback imediato: resposta correta em verde, incorreta em vermelho
- Pontuação final com mensagem personalizada
- Possibilidade de refazer o quiz

**Exemplo de Pergunta:**
```
"O que é agricultura de precisão?"
A) Aplicação localizada de insumos usando GPS [CORRETA]
B) Plantio manual muito cuidadoso
C) Uso de muitos agroquímicos
D) Cultivo apenas em clima frio
```

---

## 4. Conceitos de Programação Demonstrados

### 4.1 HTML5 Semântico

- Uso de tags semânticas (`<section>`, `<nav>`, `<footer>`)
- Atributos de acessibilidade (`id`, `class`, `aria-*`)
- Estrutura bem organizada e legível

### 4.2 CSS3 Avançado

**Técnicas Utilizadas:**

| Técnica | Exemplo | Propósito |
|---------|---------|----------|
| **Gradientes** | `linear-gradient(135deg, #ADFF2F, #00D9FF)` | Efeito visual moderno |
| **Flexbox** | `display: flex; gap: 2rem;` | Layout responsivo |
| **Grid** | `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` | Cards responsivos |
| **Transições** | `transition: all 0.3s ease-out` | Animações suaves |
| **Transformações** | `transform: translateY(-8px)` | Efeitos de movimento |
| **Media Queries** | `@media (max-width: 768px)` | Design responsivo |

### 4.3 JavaScript Vanilla

**Conceitos Implementados:**

| Conceito | Implementação |
|----------|---------------|
| **Seletores DOM** | `document.getElementById()`, `querySelector()` |
| **Event Listeners** | `addEventListener('input', callback)` |
| **Manipulação DOM** | `element.style.width = value + '%'` |
| **Funções** | `function atualizarSimulador()` |
| **Lógica Condicional** | `if (index === pergunta.resposta)` |
| **Arrays e Loops** | `forEach()` para iterar elementos |
| **Objetos** | `quizData` com estrutura de dados |

---

## 5. Design e Estética

### 5.1 Filosofia de Design: Futurismo Sustentável

O projeto adota uma abordagem visual que combina:
- **Tecnologia:** Cores vibrantes (verde-limão, ciano), linhas geométricas
- **Sustentabilidade:** Referências à natureza, otimismo visual
- **Modernidade:** Gradientes, sombras, transições suaves

### 5.2 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Verde-limão | `#ADFF2F` | Títulos, destaques |
| Ciano | `#00D9FF` | Bordas, acentos |
| Preto | `#0A0E27` | Fundo principal |
| Dourado | `#FFD700` | Sliders, destaque |

### 5.3 Tipografia

- **Títulos:** Poppins Bold (800) - Impacto visual
- **Corpo:** Outfit Regular (400) - Legibilidade

---

## 6. Responsividade

O site é totalmente responsivo, adaptando-se a diferentes tamanhos de tela:

- **Desktop:** Layout em grid com 2 colunas
- **Tablet:** Ajustes de tamanho de fonte e espaçamento
- **Mobile:** Layout em coluna única, navegação otimizada

**Breakpoints Utilizados:**
- `@media (max-width: 768px)` - Tablets
- `@media (max-width: 480px)` - Smartphones

---

## 7. Acessibilidade

O projeto segue boas práticas de acessibilidade:

- **Contraste:** Texto claro sobre fundos escuros
- **Navegação:** Links com hover visível
- **Semântica:** Tags HTML apropriadas
- **Teclado:** Todos os elementos são acessíveis via teclado

---

## 8. Conexão com o Tema Agrinho

### 8.1 Tema: "Agro Forte, Futuro Sustentável"

O projeto demonstra que:

1. **Agro Forte:** Tecnologia aumenta produção (simulador mostra isso)
2. **Futuro Sustentável:** Preservação e tecnologia juntas criam equilíbrio
3. **Equilíbrio:** Não é necessário escolher entre produção e preservação

### 8.2 Objetivos Pedagógicos Alcançados

- ✓ Compreender tecnologias modernas do agronegócio
- ✓ Reconhecer a importância da sustentabilidade
- ✓ Aprender programação web prática
- ✓ Desenvolver pensamento crítico sobre inovação

---

## 9. Requisitos Técnicos Atendidos

### 9.1 Linguagens Utilizadas

- **HTML5:** Estrutura semântica completa
- **CSS3:** Estilização avançada sem frameworks
- **JavaScript:** Lógica interativa sem bibliotecas externas

### 9.2 Critérios de Avaliação (Rubrica Agrinho)

| Critério | Atendimento |
|----------|------------|
| **Complexidade dos Códigos** | ✓ JavaScript manipula DOM, CSS com seletores específicos e propriedades avançadas |
| **Usabilidade** | ✓ Navegação fluida, responsiva, com feedback visual |
| **Publicação** | ✓ Repositório GitHub com GitHub Pages/Vercel funcional |
| **Originalidade** | ✓ Design único, narrativa focada em equilíbrio, código original |

---

## 10. Como Usar o Projeto

### 10.1 Instalação

1. Clone o repositório do GitHub
2. Abra `index.html` em um navegador moderno
3. Não requer servidor ou dependências externas

### 10.2 Exploração do Site

1. **Navegação:** Use o menu no topo para ir para seções específicas
2. **Simulador:** Ajuste os sliders e observe os resultados em tempo real
3. **Tecnologias:** Clique em "Saiba Mais" para expandir informações
4. **Quiz:** Responda as perguntas e veja seu resultado

---

## 11. Extensões Futuras

O projeto pode ser expandido com:

- Gráficos mais avançados (Chart.js)
- Banco de dados para salvar pontuações
- Mais casos de uso e cenários
- Integração com dados reais de fazendas
- Versão em outras línguas

---

## 12. Conclusão

O **EcoAgro Digital** é um projeto educativo completo que demonstra como a programação web pode ser usada para ensinar sobre sustentabilidade. Combina conceitos técnicos (HTML, CSS, JavaScript) com conteúdo relevante (agricultura sustentável), preparando estudantes para os desafios do século XXI.

**Mensagem Final:** Agro forte e futuro sustentável não são opostos—são complementares. A tecnologia, quando bem aplicada, pode criar equilíbrio entre produção e preservação.

---

**Desenvolvido para o Concurso Agrinho 2026**  
**Categoria:** Programação  
**Subcategoria 3:** Programação Front-End (HTML, CSS e JavaScript)
