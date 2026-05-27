# 📁 Estrutura do Repositório GitHub - EcoAgro Digital

Este documento descreve como organizar o repositório no GitHub para o Concurso Agrinho 2026.

---

## Estrutura de Arquivos Recomendada

```
ecoagro-digital/
│
├── 📄 index.html                    # Página principal (HTML5 semântico)
├── 🎨 style.css                     # Estilos (CSS3 avançado)
├── ⚙️ script.js                     # Lógica interativa (JavaScript)
│
├── 📚 README.md                     # Guia principal do projeto
├── 📖 DOCUMENTACAO_PEDAGOGICA.md   # Documentação educativa
├── 🔧 GUIA_TECNICO.md              # Documentação técnica
├── 📋 RELATORIO_FINAL.md           # Relatório para o Agrinho
├── 📝 INSTALACAO.md                # Guia de instalação
├── 🤝 CONTRIBUINDO.md              # Guia de contribuição
│
├── 📜 LICENSE                       # Licença MIT
├── .gitignore                       # Arquivos a ignorar no Git
│
└── 📁 assets/ (opcional)            # Imagens locais (se necessário)
    ├── logo.png
    ├── favicon.ico
    └── ...
```

---

## Passo a Passo: Criar Repositório no GitHub

### Passo 1: Criar Repositório

1. Acesse [github.com](https://github.com)
2. Clique no ícone `+` no canto superior direito
3. Selecione "New repository"
4. Preencha os dados:
   - **Repository name:** `ecoagro-digital`
   - **Description:** `Projeto Agrinho 2026 - Programação Front-End: HTML, CSS e JavaScript`
   - **Visibility:** Public
   - **Initialize with README:** Não (vamos usar o nosso)
5. Clique em "Create repository"

### Passo 2: Clonar Repositório Localmente

```bash
git clone https://github.com/seu-usuario/ecoagro-digital.git
cd ecoagro-digital
```

### Passo 3: Adicionar Arquivos

Copie todos os arquivos do projeto para a pasta `ecoagro-digital`:

```
index.html
style.css
script.js
README.md
DOCUMENTACAO_PEDAGOGICA.md
GUIA_TECNICO.md
RELATORIO_FINAL.md
INSTALACAO.md
CONTRIBUINDO.md
LICENSE
.gitignore
```

### Passo 4: Fazer Commit e Push

```bash
# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Initial commit: EcoAgro Digital - Agrinho 2026"

# Fazer push
git push -u origin main
```

---

## Configurações Importantes do Repositório

### 1. Adicionar Descrição

1. Vá para "Settings" do repositório
2. Na seção "About", adicione:
   - **Description:** "Plataforma web educativa sobre sustentabilidade no agronegócio"
   - **Website:** (deixe em branco ou adicione URL do GitHub Pages)
   - **Topics:** Adicione as tags: `agrinho`, `programacao`, `html`, `css`, `javascript`, `sustentabilidade`, `educacao`

### 2. Ativar GitHub Pages

1. Vá para "Settings" → "Pages"
2. Em "Source", selecione "main" branch
3. Clique em "Save"
4. Seu site estará disponível em: `https://seu-usuario.github.io/ecoagro-digital`

### 3. Adicionar Tag "agrinho"

Conforme requisitos do Agrinho, adicione a tag `agrinho` ao repositório:

1. Vá para "Settings" → "About"
2. Em "Topics", adicione `agrinho`
3. Clique em "Save"

---

## Arquivo .gitignore

O arquivo `.gitignore` já está configurado para ignorar:

```
node_modules/
.DS_Store
.vscode/
.idea/
dist/
build/
*.log
.env
```

---

## Estrutura de Branches

Para manter o repositório organizado:

```
main (branch principal)
├── development (branch de desenvolvimento)
├── feature/simulador
├── feature/quiz
└── feature/documentacao
```

### Criar uma Branch de Feature

```bash
# Criar e mudar para nova branch
git checkout -b feature/nome-da-feature

# Fazer mudanças, commit e push
git add .
git commit -m "Add: descrição da mudança"
git push -u origin feature/nome-da-feature

# Criar Pull Request no GitHub
# Fazer merge para main após aprovação
```

---

## Checklist para Submissão no Agrinho

Antes de submeter, verifique:

### Repositório GitHub
- ✅ Repositório público
- ✅ Tag "agrinho" adicionada
- ✅ GitHub Pages ativado e funcional
- ✅ README.md completo e bem formatado
- ✅ Todos os arquivos presentes

### Arquivos do Projeto
- ✅ index.html - HTML5 semântico
- ✅ style.css - CSS3 avançado
- ✅ script.js - JavaScript funcional
- ✅ Sem frameworks (React, Vue, Angular)
- ✅ Sem bibliotecas externas
- ✅ Código comentado e bem organizado

### Funcionalidades
- ✅ Simulador funcionando
- ✅ Tecnologias expandíveis
- ✅ Quiz funcional
- ✅ Responsividade testada
- ✅ Acessibilidade verificada

### Documentação
- ✅ README.md
- ✅ DOCUMENTACAO_PEDAGOGICA.md
- ✅ GUIA_TECNICO.md
- ✅ RELATORIO_FINAL.md
- ✅ INSTALACAO.md

---

## Links Importantes

| Item | Link |
|------|------|
| Repositório | `https://github.com/seu-usuario/ecoagro-digital` |
| GitHub Pages | `https://seu-usuario.github.io/ecoagro-digital` |
| Issues | `https://github.com/seu-usuario/ecoagro-digital/issues` |
| Pull Requests | `https://github.com/seu-usuario/ecoagro-digital/pulls` |

---

## Exemplo de README.md (Seção de Submissão)

```markdown
# EcoAgro Digital - Concurso Agrinho 2026

**Categoria:** Programação  
**Subcategoria:** 3 - Programação Front-End (HTML, CSS e JavaScript)  
**Tema:** "Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"

## 🌐 Acesso Online

[Visite o projeto](https://seu-usuario.github.io/ecoagro-digital)

## 📚 Documentação

- [README](./README.md) - Guia principal
- [Documentação Pedagógica](./DOCUMENTACAO_PEDAGOGICA.md) - Objetivos e conceitos
- [Guia Técnico](./GUIA_TECNICO.md) - Especificações técnicas
- [Relatório Final](./RELATORIO_FINAL.md) - Análise completa
- [Guia de Instalação](./INSTALACAO.md) - Como executar localmente

## 🚀 Início Rápido

1. Clone o repositório
2. Abra `index.html` em seu navegador
3. Explore o simulador, tecnologias e quiz

## 📋 Requisitos Atendidos

- ✅ HTML5, CSS3, JavaScript Vanilla
- ✅ Sem frameworks ou bibliotecas externas
- ✅ Responsivo e acessível
- ✅ Tema Agrinho 2026
- ✅ Código original

## 📄 Licença

MIT License - veja [LICENSE](./LICENSE) para detalhes
```

---

## Dicas para GitHub

### 1. Commit Messages Boas

```
✨ Add: Simulador interativo
🎨 Style: Melhorar responsividade
🐛 Fix: Corrigir cálculo do simulador
📚 Docs: Atualizar documentação
```

### 2. README Bem Formatado

- Use headings (`#`, `##`, `###`)
- Adicione badges/shields
- Inclua imagens/screenshots
- Organize com índice
- Use tabelas para informações estruturadas

### 3. Manter Repositório Limpo

- Não adicione `node_modules/`
- Não adicione arquivos temporários
- Use `.gitignore` adequadamente
- Mantenha histórico de commits limpo

---

## Suporte

Para dúvidas sobre GitHub:

1. Consulte a [documentação oficial do GitHub](https://docs.github.com)
2. Veja o [GitHub Guides](https://guides.github.com)
3. Abra uma issue no repositório

---

**Pronto para submeter no Agrinho!** 🎉🌱
