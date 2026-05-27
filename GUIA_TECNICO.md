# EcoAgro Digital - Guia Técnico

## Visão Geral do Projeto

O **EcoAgro Digital** é um site educativo desenvolvido em **HTML5, CSS3 e JavaScript Vanilla** (sem frameworks ou bibliotecas externas) para o Concurso Agrinho 2026.

---

## 1. Estrutura de Arquivos

```
ecoagro-digital/
├── index.html                    # Arquivo HTML principal
├── style.css                     # Folha de estilos
├── script.js                     # Lógica JavaScript
├── DOCUMENTACAO_PEDAGOGICA.md   # Documentação educativa
├── GUIA_TECNICO.md              # Este arquivo
└── assets/                       # (Opcional) Imagens locais
```

---

## 2. Especificações Técnicas

### 2.1 HTML5

**Estrutura Semântica:**
- `<html lang="pt-BR">` - Idioma português brasileiro
- `<meta charset="UTF-8">` - Codificação UTF-8
- `<meta name="viewport">` - Responsividade mobile
- Tags semânticas: `<nav>`, `<section>`, `<footer>`

**Elementos Interativos:**
- `<input type="range">` - Sliders do simulador
- `<button>` - Botões interativos
- `<div>` - Containers para layout

### 2.2 CSS3

**Técnicas Avançadas Utilizadas:**

1. **Gradientes Lineares:**
   ```css
   background: linear-gradient(135deg, #ADFF2F 0%, #00D9FF 100%);
   ```

2. **Flexbox:**
   ```css
   display: flex;
   flex-direction: column;
   gap: 2rem;
   ```

3. **CSS Grid:**
   ```css
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 2rem;
   ```

4. **Transições e Transformações:**
   ```css
   transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
   transform: translateY(-8px);
   ```

5. **Pseudo-elementos:**
   ```css
   .nav-link::after {
       content: '';
       width: 0;
       transition: width 0.3s ease;
   }
   ```

6. **Media Queries:**
   ```css
   @media (max-width: 768px) {
       /* Estilos para tablets */
   }
   ```

7. **Animações Keyframes:**
   ```css
   @keyframes slideInLeft {
       from { opacity: 0; transform: translateX(-50px); }
       to { opacity: 1; transform: translateX(0); }
   }
   ```

### 2.3 JavaScript

**Paradigma:** Programação Procedural com manipulação do DOM

**Conceitos Implementados:**

1. **Seletores DOM:**
   ```javascript
   const elemento = document.getElementById('id');
   const elementos = document.querySelectorAll('.classe');
   ```

2. **Event Listeners:**
   ```javascript
   elemento.addEventListener('input', function(event) {
       // Código executado quando o evento ocorre
   });
   ```

3. **Manipulação de Atributos:**
   ```javascript
   elemento.style.width = valor + '%';
   elemento.classList.add('classe');
   ```

4. **Funções:**
   ```javascript
   function atualizarSimulador() {
       // Lógica da função
   }
   ```

5. **Objetos e Arrays:**
   ```javascript
   const quizData = [
       { pergunta: "...", opcoes: [...], resposta: 0 },
       // Mais perguntas
   ];
   ```

---

## 3. Componentes Principais

### 3.1 Simulador de Equilíbrio

**Arquivo:** `script.js` - Linhas 1-60

**Elementos HTML:**
- 3 sliders (`<input type="range">`)
- 3 cards de resultado

**Lógica:**
1. Captura valores dos sliders (0-100)
2. Calcula resultados usando fórmulas matemáticas
3. Atualiza barras de progresso em tempo real

**Fórmulas:**
```javascript
const producao = Math.min(100, 
    Math.round((tecnologia * 0.5 + agua * 0.3 + preservacao * 0.2))
);
```

### 3.2 Cards de Tecnologias

**Arquivo:** `script.js` - Linhas 62-80

**Funcionalidade:**
- Clique em "Saiba Mais" para expandir/colapsar
- Animação CSS para transição suave
- Conteúdo oculto por padrão

**Implementação:**
```javascript
function toggleTech(button) {
    const content = button.closest('.tech-card').querySelector('.tech-content');
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}
```

### 3.3 Quiz Interativo

**Arquivo:** `script.js` - Linhas 82-200

**Estrutura de Dados:**
```javascript
const quizData = [
    {
        pergunta: "Pergunta?",
        opcoes: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
        resposta: 0  // Índice da resposta correta
    }
];
```

**Fluxo:**
1. Renderizar pergunta
2. Usuário seleciona opção
3. Validar resposta (feedback visual)
4. Próxima pergunta
5. Mostrar resultado final

---

## 4. Paleta de Cores

| Nome | Código | RGB | Uso |
|------|--------|-----|-----|
| Verde-limão | `#ADFF2F` | 173, 255, 47 | Títulos, destaques |
| Ciano | `#00D9FF` | 0, 217, 255 | Bordas, acentos |
| Preto | `#0A0E27` | 10, 14, 39 | Fundo principal |
| Dourado | `#FFD700` | 255, 215, 0 | Sliders, highlights |
| Cinza | `#1a1f3a` | 26, 31, 58 | Fundo secundário |

---

## 5. Tipografia

**Fontes Utilizadas (Google Fonts):**

1. **Poppins** (Bold 700, 800)
   - Títulos
   - Destaque visual
   - Peso: 800 para máximo impacto

2. **Outfit** (Regular 400, Medium 500, Semibold 600)
   - Corpo do texto
   - Descrições
   - Peso: 400 para legibilidade

**Hierarquia de Tamanhos:**
- Hero Title: 3.5rem
- Section Title: 2.8rem
- Card Title: 1.3rem
- Body Text: 1rem
- Small Text: 0.9rem

---

## 6. Responsividade

### 6.1 Breakpoints

```css
/* Desktop (padrão) */
/* Sem media query */

/* Tablet */
@media (max-width: 768px) {
    /* Ajustes para tablets */
}

/* Mobile */
@media (max-width: 480px) {
    /* Ajustes para smartphones */
}
```

### 6.2 Estratégia Mobile-First

O CSS é escrito para mobile primeiro, depois expandido para telas maiores:

1. Estilos base (mobile)
2. Media queries para tablets
3. Media queries para desktop

---

## 7. Performance

### 7.1 Otimizações

- **Sem dependências externas:** Reduz tempo de carregamento
- **CSS minificado:** Possível com ferramentas de build
- **JavaScript otimizado:** Sem loops desnecessários
- **Imagens otimizadas:** URLs de CDN com compressão

### 7.2 Métricas

- **Tamanho HTML:** ~11.7 KB
- **Tamanho CSS:** ~16.4 KB
- **Tamanho JS:** ~11.7 KB
- **Total:** ~40 KB (sem imagens)

---

## 8. Acessibilidade

### 8.1 Conformidade WCAG 2.1

- **Contraste:** Razão mínima 4.5:1 para texto
- **Navegação:** Todos os elementos acessíveis via teclado
- **Semântica:** HTML semântico para leitores de tela
- **Cores:** Não é o único meio de transmitir informação

### 8.2 Implementações

```html
<!-- Atributo lang para idioma -->
<html lang="pt-BR">

<!-- Meta viewport para mobile -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- IDs para navegação interna -->
<section id="simulador">
```

---

## 9. Compatibilidade de Navegadores

### 9.1 Navegadores Suportados

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

### 9.2 Recursos Utilizados

| Recurso | Suporte |
|---------|---------|
| CSS Grid | 95%+ |
| Flexbox | 98%+ |
| CSS Gradients | 99%+ |
| CSS Transforms | 99%+ |
| Input Range | 95%+ |
| Fetch API | 95%+ |

---

## 10. Como Estender o Projeto

### 10.1 Adicionar Mais Perguntas ao Quiz

```javascript
quizData.push({
    pergunta: "Nova pergunta?",
    opcoes: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
    resposta: 2  // Índice da resposta correta
});
```

### 10.2 Adicionar Mais Tecnologias

```html
<div class="tech-card">
    <div class="tech-icon">🆕</div>
    <h3>Nova Tecnologia</h3>
    <p class="tech-short">Descrição curta</p>
    <button class="expand-btn" onclick="toggleTech(this)">Saiba Mais</button>
    <div class="tech-content" style="display: none;">
        <p>Descrição detalhada...</p>
    </div>
</div>
```

### 10.3 Modificar Fórmulas do Simulador

```javascript
// Editar as fórmulas em atualizarSimulador()
const producao = Math.min(100, 
    Math.round((tecnologia * 0.6 + agua * 0.2 + preservacao * 0.2))
);
```

---

## 11. Debugging

### 11.1 Console do Navegador

Abra o DevTools (F12) e vá para a aba "Console" para ver:
- Erros de JavaScript
- Logs de debug
- Valores de variáveis

### 11.2 Inspecionar Elementos

Use a aba "Elements" para:
- Visualizar estrutura HTML
- Editar CSS em tempo real
- Debugar layout

### 11.3 Ferramentas Úteis

- **Lighthouse:** Auditar performance e acessibilidade
- **WAVE:** Verificar acessibilidade
- **ColorOracle:** Simular daltonismo

---

## 12. Publicação

### 12.1 GitHub Pages

1. Criar repositório no GitHub
2. Fazer upload dos arquivos
3. Ativar GitHub Pages nas configurações
4. URL: `https://usuario.github.io/ecoagro-digital`

### 12.2 Vercel

1. Conectar repositório GitHub
2. Fazer deploy automático
3. URL: `https://ecoagro-digital.vercel.app`

### 12.3 Netlify

1. Conectar repositório GitHub
2. Configurar build (não necessário para HTML puro)
3. URL: `https://ecoagro-digital.netlify.app`

---

## 13. Requisitos Agrinho Atendidos

### 13.1 Subcategoria 3: Programação Front-End

- ✓ **HTML:** Estrutura semântica, tags apropriadas
- ✓ **CSS:** Seletores específicos, propriedades avançadas, layout responsivo
- ✓ **JavaScript:** Manipulação do DOM, event listeners, lógica interativa
- ✓ **Sem Frameworks:** Código puro, sem React, Vue, Angular
- ✓ **Sem Remix:** Código original, desenvolvido do zero
- ✓ **Tema:** "Agro forte, futuro sustentável"

### 13.2 Rubrica de Avaliação

| Item | Nível 4 | Atendimento |
|------|---------|------------|
| Complexidade | JavaScript manipula DOM, CSS avançado | ✓ |
| Usabilidade | Navegação fluida, responsivo | ✓ |
| Publicação | GitHub Pages/Vercel funcional | ✓ |
| Originalidade | Design único, código original | ✓ |

---

## 14. Contato e Suporte

Para dúvidas ou sugestões sobre o código:

1. Verifique a documentação pedagógica
2. Consulte comentários no código
3. Teste no console do navegador
4. Verifique compatibilidade do navegador

---

**Desenvolvido para o Concurso Agrinho 2026**  
**Versão:** 1.0  
**Data:** Maio 2026
