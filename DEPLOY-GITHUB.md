# 🚀 GUIA RÁPIDO: Como Subir para o GitHub

## ✅ Checklist Pré-Deploy

Antes de fazer o push, certifique-se de que:

- ✅ Todos os arquivos estão salvos
- ✅ Não há credenciais ou dados sensíveis no código
- ✅ As imagens estão otimizadas
- ✅ Os links relativos estão corretos
- ✅ O .gitignore está configurado

---

## 📝 Passo a Passo Completo

### 1️⃣ Inicializar Repositório Git (se ainda não foi feito)

```bash
git init
```

### 2️⃣ Adicionar Todos os Arquivos

```bash
git add .
```

### 3️⃣ Fazer o Primeiro Commit

```bash
git commit -m "🚀 v2.0.0: Landing page Imersão Volmaster Tech completa

✨ Funcionalidades:
- Sistema de internacionalização (PT, EN, ES)
- Animações premium e efeitos visuais avançados
- Design responsivo mobile-first
- SEO otimizado com meta tags completas
- Contador regressivo dinâmico
- Preview de tickets interativo
- FAQ accordion animado
- Carrossel de depoimentos

📦 Documentação:
- README.md completo com badges
- CHANGELOG.md versionado
- LICENSE.md (MIT)
- SECURITY.md com políticas
- package.json com metadados

🔧 Otimizações:
- Performance otimizada (Lighthouse 95+)
- Acessibilidade WCAG AA
- robots.txt e sitemap.xml
- Schema.org markup para eventos
- Open Graph e Twitter Cards"
```

### 4️⃣ Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Nome do repositório: `landing-page-volmaster` (ou outro nome)
3. Descrição: `Landing page profissional para o evento Imersão Volmaster Tech 2026`
4. Público ou Privado: **Público** (para GitHub Pages gratuito)
5. **NÃO** inicialize com README, .gitignore ou license
6. Clique em **Create repository**

### 5️⃣ Conectar ao Repositório Remoto

```bash
# Substitua SEU-USUARIO pelo seu username do GitHub
git remote add origin https://github.com/SEU-USUARIO/landing-page-volmaster.git
```

### 6️⃣ Verificar Conexão

```bash
git remote -v
```

Deve mostrar algo como:
```
origin  https://github.com/SEU-USUARIO/landing-page-volmaster.git (fetch)
origin  https://github.com/SEU-USUARIO/landing-page-volmaster.git (push)
```

### 7️⃣ Renomear Branch para Main (se necessário)

```bash
git branch -M main
```

### 8️⃣ Fazer o Push

```bash
git push -u origin main
```

**Nota:** Você será solicitado a fazer login no GitHub.

---

## 🌐 Configurar GitHub Pages

### Método 1: Via Interface Web (Recomendado)

1. Acesse seu repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Clique em **Save**
6. Aguarde 2-5 minutos
7. Seu site estará em: `https://SEU-USUARIO.github.io/landing-page-volmaster/`

### Método 2: GitHub Actions (Já Configurado)

O projeto já possui `.github/workflows/static.yml` configurado.  
O deploy acontecerá automaticamente a cada push para `main`.

---

## 🔄 Atualizações Futuras

Quando fizer alterações no projeto:

```bash
# 1. Adicionar arquivos modificados
git add .

# 2. Commit com mensagem descritiva
git commit -m "✨ Adiciona [descrição da mudança]"

# 3. Push para o GitHub
git push origin main
```

### 📝 Exemplos de Mensagens de Commit

```bash
# Novas funcionalidades
git commit -m "✨ Adiciona integração com sistema de pagamento"

# Correções de bugs
git commit -m "🐛 Corrige menu mobile não fechando"

# Documentação
git commit -m "📝 Atualiza README com novas instruções"

# Melhorias de UI
git commit -m "💄 Melhora contraste dos botões"

# Performance
git commit -m "⚡ Otimiza carregamento de imagens"

# Acessibilidade
git commit -m "♿ Adiciona labels ARIA nos formulários"
```

---

## ⚙️ Configurações Importantes Pós-Deploy

### 1. Atualizar URLs no Código

Após o deploy, atualize as URLs nos seguintes arquivos:

#### **index.html** (linha ~32-60)
```html
<!-- Altere de: -->
<meta property="og:url" content="https://seu-usuario.github.io/landing-page-volmaster/">

<!-- Para: -->
<meta property="og:url" content="https://SEU-USUARIO-REAL.github.io/landing-page-volmaster/">
```

#### **sitemap.xml** (todas as tags `<loc>`)
```xml
<!-- Altere SEU-USUARIO para seu username real -->
<loc>https://SEU-USUARIO-REAL.github.io/landing-page-volmaster/</loc>
```

#### **robots.txt** (linha ~28)
```
# Altere a URL do sitemap
Sitemap: https://SEU-USUARIO-REAL.github.io/landing-page-volmaster/sitemap.xml
```

### 2. Configurar Domínio Customizado (Opcional)

Se você tem um domínio próprio (ex: `volmasterday.com`):

1. No GitHub: Settings → Pages → Custom domain
2. Digite seu domínio: `www.volmasterday.com`
3. Marque **Enforce HTTPS**
4. No seu provedor de DNS, adicione:
   ```
   CNAME www SEU-USUARIO.github.io
   ```

---

## 🔍 Testar Localmente Antes do Push

```bash
# Opção 1: Python
python -m http.server 8000

# Opção 2: Node.js
npx http-server -p 8000

# Opção 3: VS Code Live Server
# Clique com botão direito em index.html → Open with Live Server
```

Acesse: `http://localhost:8000`

---

## 🐛 Problemas Comuns

### ❌ Erro: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/SEU-USUARIO/landing-page-volmaster.git
```

### ❌ Erro: "Permission denied (publickey)"
```bash
# Use HTTPS ao invés de SSH:
git remote set-url origin https://github.com/SEU-USUARIO/landing-page-volmaster.git
```

### ❌ Erro: "Updates were rejected"
```bash
git pull origin main --allow-unrelated-histories
git push origin main
```

### ❌ GitHub Pages não está funcionando
- Verifique se o repositório é **público**
- Aguarde 5-10 minutos após configurar
- Limpe o cache do navegador (Ctrl+Shift+R)
- Verifique em Settings → Pages se está ativado

---

## 📊 Validar Deploy

Após o deploy, teste:

- ✅ Site carrega corretamente
- ✅ Todas as imagens aparecem
- ✅ Links funcionam
- ✅ Animações estão suaves
- ✅ Responsividade mobile/tablet/desktop
- ✅ Meta tags corretas (view-source)
- ✅ Performance (Lighthouse DevTools)

---

## 🔗 Links Úteis

- 📖 [GitHub Pages Docs](https://docs.github.com/en/pages)
- 🚀 [GitHub Actions Docs](https://docs.github.com/en/actions)
- 🎯 [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- 🔍 [Google Search Console](https://search.google.com/search-console)
- ⚡ [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

---

## 🎉 Tudo Pronto!

Seu projeto está completo e otimizado para deploy no GitHub Pages!

**Próximos passos:**
1. ✅ Fazer push seguindo este guia
2. ✅ Configurar GitHub Pages
3. ✅ Compartilhar o link do site
4. ✅ Monitorar analytics e performance
5. ✅ Coletar feedback dos usuários

---

**Boa sorte com o evento Imersão Volmaster Tech 2026! 🚀**

Se precisar de ajuda, consulte a [documentação completa](README.md).
