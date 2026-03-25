# 📤 Guia Rápido - Upload Manual para GitHub

## ✅ Checklist Pré-Upload

- [x] Preloader otimizado (reduzido para 800ms)
- [x] Todas as imagens dos palestrantes corrigidas
- [x] Links de CTA apontando para ingressos.html
- [x] README.md atualizado com documentação completa
- [x] .gitignore configurado
- [x] Arquivos principais validados

## 🚀 Passos para Upload Manual

### 1️⃣ Preparar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"New"** (ou sinal de +) > **New repository**
3. Configure:
   - **Nome:** `landing-page-imersao-volmaster`
   - **Descrição:** `Landing page profissional para o evento Imersão Volmaster 2026`
   - **Visibilidade:** Public (ou Private se preferir)
   - ✅ **Marque:** "Add a README file" (ou deixe desmarcado, já temos o README.md)
4. Clique em **"Create repository"**

### 2️⃣ Via Interface Web (Navegador)

**Opção mais simples se você não usa Git localmente:**

1. No seu novo repositório, clique em **"Add file"** > **"Upload files"**

2. **Arraste e solte** ou clique em "choose your files":
   - Todos os arquivos `.html` (index.html, index-novo.html, ingressos.html)
   - Todos os arquivos `.md` (README.md, ESTRUTURA-SITE.md, QUICK-START.md)
   - Pasta `css/` completa
   - Pasta `js/` completa
   - Pasta `images/` completa
   - Arquivo `.gitignore`

3. Adicione uma mensagem de commit:
   ```
   Initial commit - Landing page completa
   ```

4. Clique em **"Commit changes"**

### 3️⃣ Via Git Local (Linha de Comando)

**Se você tem Git instalado:**

```powershell
# Navegue até a pasta do projeto
cd "C:\Users\Volmaster T.I\Desktop\projetos vscode\projetos volmaster\teste volmaster day\landing page evento volmaster day"

# Inicialize o Git (se ainda não foi inicializado)
git init

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "Initial commit - Landing page Imersão Volmaster 2026"

# Conecte ao repositório remoto (substitua SEU-USUARIO pelo seu nome de usuário)
git remote add origin https://github.com/SEU-USUARIO/landing-page-imersao-volmaster.git

# Configure a branch principal
git branch -M main

# Envie para o GitHub
git push -u origin main
```

**Se pedir autenticação:**
- Use seu **username** do GitHub
- Use um **Personal Access Token** (não a senha)
  - Crie em: Settings > Developer settings > Personal access tokens > Generate new token

### 4️⃣ Ativar GitHub Pages

1. No repositório, vá em **Settings** (engrenagem)
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione:
   - Branch: `main`
   - Folder: `/ (root)`
4. Clique em **Save**
5. Aguarde 1-2 minutos
6. Seu site estará disponível em:
   ```
   https://SEU-USUARIO.github.io/landing-page-imersao-volmaster/index-novo.html
   ```

### 5️⃣ Configurar Página Inicial (Opcional)

Para que `index-novo.html` seja a página padrão:

**Opção A:** Renomeie os arquivos
- Renomeie `index.html` para `index-old.html` (backup)
- Renomeie `index-novo.html` para `index.html`

**Opção B:** Crie um redirect simples
- Edite `index.html` e adicione no `<head>`:
```html
<meta http-equiv="refresh" content="0;url=index-novo.html">
```

## 📝 Estrutura Final no GitHub

```
📁 repositório/
├── 📄 README.md
├── 📄 .gitignore
├── 📄 ESTRUTURA-SITE.md
├── 📄 QUICK-START.md
├── 📄 index.html (ou index-old.html)
├── 📄 index-novo.html (ou renomeado para index.html)
├── 📄 ingressos.html
├── 📁 css/
│   ├── style.css
│   ├── style-new.css
│   └── style-adicional.css
├── 📁 js/
│   ├── script.js
│   └── script-new.js
└── 📁 images/
    ├── logo volmaster branco.jpg
    ├── evento 1.jpeg
    ├── evento 3 Kezia.jpeg
    ├── palestrante lais.jpeg
    ├── palestrante bruno.jpeg
    └── DIMSPORT EVENTO.png
```

## ✅ Verificações Pós-Upload

- [ ] Todos os arquivos foram enviados
- [ ] Imagens aparecem corretamente
- [ ] Links de navegação funcionam
- [ ] Página de ingressos abre corretamente
- [ ] Countdown funciona
- [ ] Preloader aparece rapidamente (800ms)
- [ ] Design responsivo funciona no mobile

## 🔗 Links Importantes Após Deploy

- **Repositório:** `https://github.com/SEU-USUARIO/landing-page-imersao-volmaster`
- **Site ao vivo:** `https://SEU-USUARIO.github.io/landing-page-imersao-volmaster/index-novo.html`
- **Página de vendas:** `https://SEU-USUARIO.github.io/landing-page-imersao-volmaster/ingressos.html`

## 💡 Dicas Extras

1. **Domínio Customizado:** Configure em Settings > Pages > Custom domain
2. **HTTPS:** Ativado automaticamente pelo GitHub Pages
3. **Updates:** Novos commits serão implantados automaticamente
4. **Analytics:** Adicione Google Analytics no código HTML

## 🆘 Problemas Comuns

**Erro: "Support for password authentication was removed"**
- Solução: Use um Personal Access Token ao invés da senha

**CSS/JS não carrega**
- Verifique os caminhos relativos nos arquivos HTML
- Todos os caminhos devem começar com `css/`, `js/`, `images/`

**404 Not Found**
- Aguarde alguns minutos após o primeiro deploy
- Limpe o cache do navegador (Ctrl + Shift + Del)

---

✅ **Tudo pronto para subir!** O projeto está otimizado e documentado.
