# 🚀 Guia de Instalação - EcoAgro Digital

Este guia fornece instruções passo a passo para instalar e executar o projeto **EcoAgro Digital** localmente.

## Pré-requisitos

- Um navegador moderno (Chrome, Firefox, Safari, Edge)
- Git (opcional, para clonar o repositório)
- Um editor de texto ou IDE (opcional, para editar o código)

**Nota:** O projeto não requer Node.js, Python ou qualquer servidor especial. É 100% front-end!

---

## Opção 1: Clonar do GitHub (Recomendado)

### Passo 1: Abra o Terminal

No seu computador, abra o terminal/prompt de comando.

### Passo 2: Clone o Repositório

```bash
git clone https://github.com/seu-usuario/ecoagro-digital.git
cd ecoagro-digital
```

Substitua `seu-usuario` pelo seu nome de usuário do GitHub.

### Passo 3: Abra o Arquivo

#### No Windows:
```bash
start index.html
```

#### No macOS:
```bash
open index.html
```

#### No Linux:
```bash
xdg-open index.html
```

Pronto! O site abrirá em seu navegador padrão.

---

## Opção 2: Download Direto

### Passo 1: Baixe os Arquivos

1. Acesse o repositório no GitHub
2. Clique em "Code" (botão verde)
3. Clique em "Download ZIP"
4. Extraia o arquivo ZIP em uma pasta

### Passo 2: Abra o Arquivo

Navegue até a pasta extraída e clique duas vezes em `index.html`.

---

## Opção 3: Usar um Servidor Local

Se você quiser usar um servidor local (recomendado para desenvolvimento):

### Com Python 3:

```bash
# Navegue até a pasta do projeto
cd ecoagro-digital

# Inicie o servidor
python -m http.server 8000

# Abra no navegador
# http://localhost:8000
```

### Com Node.js (http-server):

```bash
# Instale globalmente (uma única vez)
npm install -g http-server

# Navegue até a pasta do projeto
cd ecoagro-digital

# Inicie o servidor
http-server

# Abra no navegador
# http://localhost:8080
```

### Com Live Server (VS Code):

1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"
4. O site abrirá automaticamente em seu navegador

---

## Verificando a Instalação

Após abrir o site, verifique se:

- ✅ A página carrega sem erros
- ✅ O menu de navegação funciona
- ✅ Os sliders do simulador respondem
- ✅ Os cards de tecnologia expandem/colapsam
- ✅ O quiz funciona corretamente
- ✅ O site é responsivo (teste em diferentes tamanhos)

Se tudo funciona, parabéns! 🎉

---

## Solução de Problemas

### "Arquivo não encontrado"
- Certifique-se de que todos os arquivos (index.html, style.css, script.js) estão na mesma pasta
- Verifique se os nomes dos arquivos estão corretos (sensível a maiúsculas/minúsculas em Linux/Mac)

### "Estilos não aparecem"
- Limpe o cache do navegador (Ctrl+Shift+Delete ou Cmd+Shift+Delete)
- Recarregue a página (F5 ou Cmd+R)
- Verifique se o arquivo `style.css` está na mesma pasta

### "JavaScript não funciona"
- Abra o console do navegador (F12)
- Procure por mensagens de erro
- Certifique-se de que `script.js` está na mesma pasta

### "Imagens não carregam"
- As imagens são carregadas de URLs externas (CDN)
- Verifique sua conexão com a internet
- Verifique se o navegador permite carregar recursos externos

---

## Editar o Projeto

Se você quiser modificar o projeto:

### Editar HTML:
```bash
# Abra index.html em seu editor favorito
code index.html        # VS Code
nano index.html        # Terminal
```

### Editar CSS:
```bash
# Abra style.css em seu editor
code style.css
```

### Editar JavaScript:
```bash
# Abra script.js em seu editor
code script.js
```

### Recarregar no Navegador:
Após fazer mudanças, pressione **F5** ou **Cmd+R** para recarregar.

---

## Publicar no GitHub Pages

Para publicar seu projeto online:

### Passo 1: Crie um Repositório GitHub

1. Acesse [github.com](https://github.com)
2. Clique em "New repository"
3. Nomeie como `ecoagro-digital`
4. Clique em "Create repository"

### Passo 2: Faça Upload dos Arquivos

```bash
# Navegue até a pasta do projeto
cd ecoagro-digital

# Inicialize o git (se não estiver inicializado)
git init

# Adicione todos os arquivos
git add .

# Faça commit
git commit -m "Initial commit: EcoAgro Digital"

# Adicione o repositório remoto
git remote add origin https://github.com/seu-usuario/ecoagro-digital.git

# Faça push
git branch -M main
git push -u origin main
```

### Passo 3: Ative GitHub Pages

1. Vá para as configurações do repositório
2. Vá para "Pages"
3. Selecione "main" como branch
4. Clique em "Save"
5. Seu site estará disponível em: `https://seu-usuario.github.io/ecoagro-digital`

---

## Publicar no Vercel

Para publicar no Vercel (ainda mais fácil):

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione seu repositório GitHub
4. Clique em "Deploy"
5. Seu site estará online em minutos!

---

## Próximos Passos

- Leia a [DOCUMENTACAO_PEDAGOGICA.md](./DOCUMENTACAO_PEDAGOGICA.md) para entender o projeto
- Consulte o [GUIA_TECNICO.md](./GUIA_TECNICO.md) para detalhes técnicos
- Veja o [README.md](./README.md) para mais informações

---

## Suporte

Se tiver dúvidas:

1. Verifique o [README.md](./README.md)
2. Abra uma issue no GitHub
3. Consulte a [DOCUMENTACAO_PEDAGOGICA.md](./DOCUMENTACAO_PEDAGOGICA.md)

---

**Divirta-se explorando o EcoAgro Digital!** 🌱🚀
