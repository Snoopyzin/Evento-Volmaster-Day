# 🚀 Landing Page - Imersão Volmaster 2026

Landing page profissional para evento **Imersão Volmaster** - O maior evento de transformação digital para oficinas automotivas do Brasil.

## 📅 Informações do Evento

- **Data:** 12 de Setembro de 2026
- **Local:** Goiânia, GO
- **Público-alvo:** Empresários donos de oficina, Gerentes, Mecânicos e Eletricistas

## 🎯 Estrutura do Projeto

### Arquivos Principais

```
📁 landing page evento volmaster day/
├── 📄 index.html              # Página original (backup)
├── 📄 index-novo.html         # Nova estrutura completa ⭐
├── 📄 ingressos.html          # Página de vendas dedicada ⭐
├── 📁 css/
│   ├── style.css              # Estilos originais
│   ├── style-new.css          # Estilos principais (~1300 linhas)
│   └── style-adicional.css    # Estilos das novas seções (~600 linhas)
├── 📁 js/
│   ├── script.js              # Script original
│   └── script-new.js          # Script principal com todas as funcionalidades
├── 📁 images/                 # Imagens do evento
│   ├── logo volmaster branco.jpg
│   ├── evento 1.jpeg          # Alan Campos
│   ├── evento 3 Kezia.jpeg    # Kezia Campos
│   ├── palestrante lais.jpeg  # Dra. Lais Torres
│   ├── palestrante bruno.jpeg # Dr. Alex Brunno
│   └── DIMSPORT EVENTO.png    # Patrocinador
├── 📄 ESTRUTURA-SITE.md       # Documentação completa
└── 📄 QUICK-START.md          # Guia visual rápido
```

## ✨ Funcionalidades

### Página Principal (index-novo.html)

1. **Hero Section** - Apresentação com countdown
2. **Vídeo Apresentação** - CEO Alan Campos
3. **Texto Explicativo + 1º CTA** - Introdução ao evento
4. **Para Quem É** - Público-alvo específico (empresários e mecânicos)
5. **Palestrantes + 2º CTA** - 4 especialistas em destaque
6. **História CEO** - Alan Campos com estatísticas
6.5. **Alan Diego - Instrutor Técnico** - Especialista Volvo com ênfase na Imersão Volmaster ⭐
7. **Vídeos de Expectativas** - Depoimentos em vídeo
8. **FAQ + 3º CTA** - Dúvidas frequentes com urgência
9. **Patrocinadores** - DIMSPORT e outros
10. **Ingressos** - 3 planos (Individual, Equipe, VIP)

### Página de Vendas (ingressos.html)

- ⏰ **Timer de urgência** (countdown 24h)
- 🔥 **Badge piscando** - "Últimas 12 vagas"
- 💳 **3 Planos de ingressos** com preços e features
- 🎯 **Mega CTA amarelo** - Botão super chamativo com animação
- 🛡️ **Garantia de 30 dias** destacada
- ✨ **Partículas flutuantes** no background

## 🎨 Tecnologias Utilizadas

- **HTML5** - Marcação semântica
- **CSS3** - Gradientes, animações, glassmorphism
- **JavaScript (Vanilla)** - Interatividade sem dependências pesadas
- **Particles.js** - Efeito de partículas no background
- **Google Fonts** - Fonte Inter (400-900)

## 🎭 Funcionalidades JavaScript

- ✅ Preloader animado (800ms - otimizado!)
- ✅ Navegação responsiva com menu hamburguer
- ✅ Smooth scroll para âncoras
- ✅ Countdown timer para o evento
- ✅ Partículas interativas (grab/push)
- ✅ FAQ accordion
- ✅ Custom cursor (desktop)
- ✅ Efeito 3D tilt nos cards
- ✅ Scroll animations (fade, slide)
- ✅ Lazy loading para imagens

## 🎨 Paleta de Cores

```css
--color-bg: #000000          /* Preto puro */
--color-accent: #0ea5e9      /* Sky Blue */
--color-accent-2: #3b82f6    /* Indigo Blue */
--color-cyan: #06b6d4        /* Cyan */
--color-deep: #1d4ed8        /* Deep Blue */
--color-warning: #fbbf24     /* Amarelo (CTA) */
--color-orange: #f97316      /* Laranja (CTA) */
```

## 📱 Design Responsivo

- **Desktop:** Layout completo com todas as funcionalidades
- **Tablet (≤768px):** Grid adaptativo, navegação colapsável
- **Mobile (≤480px):** Layout single-column otimizado

## 🚀 Como Usar

### 1. Desenvolvimento Local

Abra o arquivo direto no navegador:
```
index-novo.html
```

Ou use um servidor local:
```bash
# Python 3
python -m http.server 8000

# Node.js (live-server)
npx live-server
```

### 2. Personalização

**Vídeos:**
- Substitua os URLs do YouTube nos iframes (seções 2 e 7)

**Imagens:**
- As imagens dos palestrantes já estão configuradas
- Adicione mais logos de patrocinadores na pasta `images/`

**Pagamento:**
- Configure os links de checkout nos botões de CTA
- Recomendado: Mercado Pago, Stripe ou Hotmart

**Contato:**
- Atualize email e telefone no rodapé

## 🎯 Estratégia de Conversão

### Funil de 3 CTAs

1. **CTA 1 (Soft)** - Após introdução do evento
   - "Quero Meu Ingresso Agora"
   
2. **CTA 2 (Authority)** - Após apresentar palestrantes
   - "Quero Aprender com Esses Especialistas"
   
3. **CTA 3 (Urgency)** - Após FAQ + banner de urgência
   - "Garantir Minha Vaga Agora" (com animação pulse)

Todos os CTAs direcionam para: **ingressos.html**

## 📊 Planos de Ingressos

| Plano | Preço | Destaque |
|-------|-------|----------|
| Individual | R$ 497 | 1 ingresso básico |
| Equipe | R$ 1.197 | 3 ingressos + bônus (POPULAR) |
| VIP | R$ 997 | Experiência completa + jantar |

## 🔧 Otimizações Implementadas

- ⚡ Preloader reduzido para 800ms
- 🖼️ Lazy loading em todas as imagens
- 📦 CSS modular (style-new.css + style-adicional.css)
- 🎨 Particles.js com 80 partículas (performance otimizada)
- 📱 Media queries eficientes

## 📝 Pendências (Para Produção)

- [ ] Substituir URLs de vídeo do YouTube por vídeos reais
- [ ] Adicionar fotos profissionais dos palestrantes (opcional)
- [ ] Configurar gateway de pagamento
- [ ] Adicionar tracking (Google Analytics, Facebook Pixel)
- [ ] Configurar captura de emails
- [ ] Integrar WhatsApp para suporte
- [ ] Adicionar mais logos de patrocinadores

## 🌐 Deploy

### GitHub Pages

1. Suba o projeto para um repositório
2. Vá em Settings > Pages
3. Selecione a branch `main` e pasta `root`
4. Acesse: `https://seuusuario.github.io/nome-do-repo`

### Netlify/Vercel

1. Arraste a pasta do projeto para o site
2. Deploy automático
3. Domínio customizado disponível

## 📄 Licença

Projeto proprietário - Volmaster Tech © 2026

## 👨‍💻 Suporte

Para dúvidas sobre o código ou customizações, consulte:
- `ESTRUTURA-SITE.md` - Documentação técnica detalhada
- `QUICK-START.md` - Guia visual com diagramas

---

**Desenvolvido com 💙 para o Imersão Volmaster 2026**

✨ Transforme sua oficina em referência!
│   └── style-new.css    # CSS moderno (ativo)
├── js/
│   ├── script.js        # JS antigo (backup)
│   └── script-new.js    # JS moderno (ativo)
├── images/
│   ├── logo volmaster branco.jpg
│   ├── evento 1.jpeg
│   ├── evento 3 Kezia.jpeg
│   ├── palestrante lais.jpeg
│   ├── palestrante bruno.jpeg
│   └── DIMSPORT EVENTO.png
└── README.md
```

---

## 🎯 Funcionalidades

### JavaScript Moderno

1. **Navegação Mobile**
   - Toggle do menu hambúrguer
   - Animação dos spans
   - Fechamento ao clicar fora

2. **Navbar com Scroll**
   - Adiciona classe 'scrolled' após 50px
   - Efeito de blur e opacidade

3. **Smooth Scroll**
   - Scroll suave para âncoras
   - Considera altura do navbar

4. **Countdown Timer**
   - Contagem regressiva para 12/09/2026
   - Atualização em tempo real
   - Formato tabular-nums

5. **Intersection Observer**
   - Animações ao entrar na viewport
   - Data-aos attributes
   - Fade in + translate

6. **Active Navigation**
   - Destaque da seção ativa
   - Baseado na posição do scroll

---

## 🎨 Sistema de Cores

```css
--color-bg: #000000           # Fundo principal
--color-text: #ffffff         # Texto principal
--color-text-muted: #9ca3af  # Texto secundário
--color-accent: #0ea5e9       # Azul primário
--color-secondary: #3b82f6    # Azul secundário
```

### Gradientes - Tema Azul

- **Azul Sky**: `#0ea5e9 → #0284c7`
- **Azul Índigo**: `#3b82f6 → #2563eb`
- **Cyan**: `#06b6d4 → #0891b2`
- **Azul Escuro**: `#1d4ed8 → #1e40af`

---

## 📐 Espaçamento

```css
--space-xs: 0.25rem    # 4px
--space-sm: 0.5rem     # 8px
--space-md: 1rem       # 16px
--space-lg: 1.5rem     # 24px
--space-xl: 2rem       # 32px
--space-2xl: 3rem      # 48px
--space-3xl: 4rem      # 64px
```

---

## 🔧 Como Usar

### 1. Abrir o Projeto

Basta abrir o arquivo `index.html` em qualquer navegador moderno.

### 2. Personalizar Conteúdo

**Palestrantes**: Edite as imagens e informações em `index.html` na seção `#palestrantes`

**Programação**: Atualize os horários e títulos na seção `#schedule`

**Patrocinadores**: Adicione logos na seção `#sponsors`

### 3. Ajustar Cores

Modifique as variáveis CSS em `style-new.css`:

```css
:root {
    --color-bg: #000000;
    --color-text: #ffffff;
    /* ... outras variáveis */
}
```

---

## 🌐 Fontes

**Google Fonts - Inter**
- Weights: 400, 500, 600, 700, 900
- Excelente legibilidade
- Suporte a números tabulares

---

## ✅ Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Chrome/Safari

---

## 📝 Notas de Desenvolvimento

### Removido

- ❌ Font Awesome icons
- ❌ jQuery dependencies
- ❌ Seção de vídeos (placeholder removido)
- ❌ Chat button

### Adicionado

- ✅ CSS moderno com custom properties
- ✅ Intersection Observer API
- ✅ Lazy loading nativo
- ✅ Smooth scroll nativo
- ✅ SVG icons inline

---

## 🚀 Próximos Passos (Sugestões)

1. **Adicionar Formulário de Inscrição**
   - Form de registro
   - Validação de campos
   - Integração com backend

2. **Galeria de Fotos**
   - Lightbox para imagens
   - Grid de fotos do evento

3. **Depoimentos**
   - Carousel de testimonials
   - Avaliações de participantes

4. **FAQ Section**
   - Accordion com perguntas frequentes
   - Respostas colapsáveis

5. **Newsletter**
   - Signup form
   - Integração com email marketing

---

## 📧 Contato

**Email**: contato@volmasterday.com  
**Local**: Goiânia, GO  
**Data**: 12 de Setembro 2026

---

## 📄 Licença

© 2026 Imersão Volmaster. Todos os direitos reservados.

---

**Desenvolvido com ❤️ pela equipe Volmaster**
