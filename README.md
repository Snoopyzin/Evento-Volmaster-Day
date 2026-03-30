# 🚀 Imersão Volmaster Tech - Landing Page

<div align="center">

![Imersão Volmaster Tech](images/VOLMASTER%2001.png)

### Landing page moderna e interativa para o maior evento de tecnologia automotiva do Brasil

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-brightgreen)](https://pages.github.com/)
[![HTML5](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)

[🌐 Ver Demo](#) • [📖 Documentação](#features) • [🚀 Deploy](#deploy) • [📝 Changelog](CHANGELOG.md)

</div>

---

## 📋 Sobre o Projeto

Landing page profissional desenvolvida para o evento **Imersão Volmaster Tech** - O primeiro e maior evento para profissionais em manutenção de caminhões da linha Volvo. O projeto conta com design moderno, animações premium e suporte multilíngue.

### 🎯 Objetivo

Apresentar o evento de forma atrativa e profissional, destacando palestrantes, programação, depoimentos e facilitando a compra de ingressos com uma experiência de usuário excepcional.

---

## ✨ Features

### 🎨 Design Premium
- ✅ Interface moderna com partículas animadas em dourado
- ✅ Gradientes premium em azul escuro e dourado (#000814, #001529, #FFD700)
- ✅ Efeitos visuais impactantes com glow e animações suaves
- ✅ Layout 100% responsivo (Mobile First)
- ✅ Modo de preferência de movimento reduzido (acessibilidade)

### 🎬 Animações & Interatividade
- ✅ Preloader personalizado com animação da logo
- ✅ Títulos com efeito glitch de entrada
- ✅ Partículas interativas com linhas conectadas (particles.js)
- ✅ Tickets flutuantes com hover 3D
- ✅ Badges pulsantes e bounces nos CTAs
- ✅ Parallax suave em elementos específicos
- ✅ Transições GPU-accelerated
- ✅ Micro-interações em botões (ripple, magnetic, shine)

### 🌐 Internacionalização (i18n)
- 🇧🇷 Português (Brasil) - Padrão
- 🇺🇸 Inglês (Estados Unidos)
- 🇪🇸 Espanhol (Espanha)

### 📊 Funcionalidades Principais
- ⏱️ **Contador regressivo** dinâmico para o evento
- 🎟️ **Preview de tickets** clicável com efeitos dramáticos
- 👥 **Cards de palestrantes** com fotos e informações
- 📅 **Programação completa** do evento
- ⭐ **Carrossel de depoimentos** automático
- ❓ **FAQ interativo** com accordion animado
- 🤝 **Galeria de patrocinadores** com logos
- 📧 **Informações de contato** no footer
- 🎨 **3 lotes de ingressos** com preços diferenciados

### 🚀 Performance & SEO
- ✅ SEO otimizado com meta tags completas
- ✅ Open Graph e Twitter Cards configurados
- ✅ Carregamento lazy de imagens
- ✅ Preconnect para fontes Google
- ✅ Performance otimizada para Core Web Vitals
- ✅ Robots.txt e Sitemap.xml incluídos
- ✅ Schema.org markup para eventos

### ♿ Acessibilidade
- ✅ Semântica HTML5 correta
- ✅ Atributos ARIA apropriados
- ✅ Navegação por teclado funcional
- ✅ Prefers-reduced-motion respeitado
- ✅ Contraste de cores adequado (WCAG AA)

---

## 📁 Estrutura do Projeto

```
landing-page-volmaster/
├── 📄 index.html                    # Página principal do evento
├── 📄 ingressos-novo.html           # Página de compra de ingressos
├── 📄 README.md                     # Documentação principal
├── 📄 CHANGELOG.md                  # Histórico de versões
├── 📄 LICENSE.md                    # Licença do projeto
├── 📄 SECURITY.md                   # Políticas de segurança
├── 📄 robots.txt                    # Instruções para crawlers
├── 📄 sitemap.xml                   # Mapa do site para SEO
├── 📄 .gitignore                    # Arquivos ignorados pelo Git
│
├── 📂 css/
│   ├── style-new.css                # Estilos principais (~61 KB)
│   ├── premium-enhancements.css     # Efeitos premium (~18 KB)
│   └── ingressos-style.css          # Estilos página ingressos (~11 KB)
│
├── 📂 js/
│   ├── script-new.js                # JavaScript principal
│   ├── premium-effects.js           # Efeitos visuais avançados
│   └── i18n.js                      # Sistema de internacionalização
│
├── 📂 images/
│   ├── VOLMASTER 01.png             # Logo principal
│   ├── trucks.jpg          # Background hero
│   ├── ticket evento.jpg   # Imagem do ticket
│   └── ...                 # Fotos de palestrantes e evento
└── .github/
    └── workflows/
        └── static.yml      # GitHub Pages deploy automation
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica otimizada
- **CSS3** - Animações, gradientes, flexbox e grid
- **JavaScript ES6+** - Funcionalidades interativas

### Bibliotecas
- [Particles.js](https://vincentgarreau.com/particles.js/) - Efeitos de partículas animadas
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll
- [Google Fonts](https://fonts.google.com/) - Tipografia Inter

### Deploy
- **GitHub Pages** - Hospedagem automática
- **GitHub Actions** - CI/CD pipeline

## 🚀 Como Executar Localmente

### Opção 1: Abrir Diretamente
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/landing-page-volmaster.git

# Navegue até a pasta
cd landing-page-volmaster

# Abra o index.html no navegador
start index.html  # Windows
open index.html   # Mac
xdg-open index.html  # Linux
```

### Opção 2: Servidor Local
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js (npx http-server)
npx http-server -p 8000

# Acesse: http://localhost:8000
```

## 🌐 Deploy

O projeto está configurado para deploy automático no GitHub Pages via GitHub Actions.

### Como fazer deploy:
1. Faça push para a branch `main`
2. O GitHub Actions executará automaticamente
3. O site estará disponível em: `https://seu-usuario.github.io/landing-page-volmaster/`

### Configurar GitHub Pages:
1. Acesse: Repositório → Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / folder: `root`
4. Save

## 📱 Responsividade

Totalmente otimizado para todos os dispositivos:
- 📱 **Mobile**: 320px - 767px
- 📱 **Tablet**: 768px - 1023px
- 💻 **Desktop**: 1024px+
- 🖥️ **Wide Screen**: 1920px+

## 🎨 Paleta de Cores

```css
--color-blue: #0047ab      /* Azul principal */
--color-yellow: #FFD700    /* Dourado/Amarelo */
--color-bg-dark: #000814   /* Fundo escuro */
--color-bg-darker: #001529 /* Fundo mais escuro */
--gradient-primary: linear-gradient(135deg, #FFD700 0%, #FFA500 100%)
```

## 📊 Informações do Evento

- **Nome:** Imersão Volmaster Tech
- **Data:** 12 de Setembro de 2026
- **Local:** Goiânia, GO, Brasil
- **Duração:** 12 horas de imersão total
- **Formato:** Presencial
- **Público esperado:** 1000+ participantes
- **Palestrantes:** 8+ especialistas
- **Networking:** 100% garantido

### 💰 Investimento (3 lotes)
- **1º Lote:** R$ 1.297,00 à vista ou 2x R$ 648,50
- **2º Lote:** R$ 1.527,00 à vista ou 2x R$ 763,50
- **3º Lote:** R$ 1.827,00 à vista ou 2x R$ 913,50

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, siga estas diretrizes:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m '✨ Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

### Commits Semânticos
- ✨ `:sparkles:` - Nova feature
- 🐛 `:bug:` - Correção de bug
- 📝 `:memo:` - Documentação
- 💄 `:lipstick:` - UI/Style
- ⚡ `:zap:` - Performance
- ♿ `:wheelchair:` - Acessibilidade

---

## 📝 Changelog

Veja [CHANGELOG.md](CHANGELOG.md) para histórico de versões e mudanças.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.

---

## 👨‍💻 Autor & Créditos

**Volmaster Tech**
- 🌐 Website: [volmaster.com.br](https://volmaster.com.br)
- 📧 Email: contato@volmasterday.com
- 📱 Instagram: [@volmaster.tech](https://instagram.com/volmaster.tech)

### 🙏 Agradecimentos
- [Particles.js](https://vincentgarreau.com/particles.js/) - Vincent Garreau
- [Google Fonts](https://fonts.google.com/) - Tipografia Inter
- [Flagcdn](https://flagcdn.com/) - Bandeiras dos idiomas

---

## 📞 Suporte

Encontrou um bug ou tem alguma sugestão?
- 🐛 [Reportar um bug](../../issues/new?labels=bug)
- 💡 [Sugerir uma feature](../../issues/new?labels=enhancement)
- 📧 Email: suporte@volmasterday.com

---

<div align="center">

### ⭐ Star este repositório se ele foi útil para você! ⭐

[![GitHub stars](https://img.shields.io/github/stars/seu-usuario/landing-page-volmaster?style=social)](https://github.com/seu-usuario/landing-page-volmaster/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/seu-usuario/landing-page-volmaster?style=social)](https://github.com/seu-usuario/landing-page-volmaster/network/members)

---

✨ **Desenvolvido com dedicação para transformar a gestão automotiva no Brasil** ✨

**© 2026 Imersão Volmaster Tech - Todos os direitos reservados**

</div>
