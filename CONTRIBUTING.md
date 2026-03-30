# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com o projeto **Landing Page Imersão Volmaster Tech**! 🎉

---

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Posso Contribuir?](#como-posso-contribuir)
- [Diretrizes de Desenvolvimento](#diretrizes-de-desenvolvimento)
- [Processo de Pull Request](#processo-de-pull-request)
- [Padrões de Código](#padrões-de-código)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Melhorias](#sugerir-melhorias)

---

## 📜 Código de Conduta

Este projeto adere a um Código de Conduta. Ao participar, você concorda em seguir suas diretrizes:

- ✅ Seja respeitoso e inclusivo
- ✅ Use linguagem acolhedora
- ✅ Aceite críticas construtivas graciosamente
- ✅ Foque no que é melhor para a comunidade
- ❌ Não use linguagem ou imagens sexualizadas
- ❌ Não faça comentários insultuosos/depreciativos
- ❌ Não assédio público ou privado

---

## 🎯 Como Posso Contribuir?

### 1. 🐛 Reportar Bugs

Encontrou um bug? Ajude-nos a corrigi-lo:

1. Verifique se já não foi reportado em [Issues](../../issues)
2. Crie uma nova issue com o template de bug
3. Descreva o problema claramente
4. Inclua passos para reproduzir
5. Adicione screenshots se aplicável

### 2. 💡 Sugerir Funcionalidades

Tem uma ideia legal?

1. Verifique se já não foi sugerida
2. Crie uma issue com o template de feature
3. Explique o problema que resolve
4. Descreva a solução proposta
5. Considere alternativas

### 3. 📝 Melhorar Documentação

Documentação nunca é demais:

- Corrigir erros de digitação
- Melhorar explicações
- Adicionar exemplos
- Traduzir conteúdo
- Atualizar informações desatualizadas

### 4. 🛠️ Contribuir com Código

Quer codar? Perfeito!

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m '✨ Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 🛠️ Diretrizes de Desenvolvimento

### Configurando o Ambiente

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/landing-page-volmaster.git
cd landing-page-volmaster

# Não há dependências npm, mas você pode usar um servidor local
python -m http.server 8000
# ou
npx http-server -p 8000
```

### Estrutura de Branches

- `main` - Branch de produção (protegida)
- `develop` - Branch de desenvolvimento
- `feature/*` - Novas funcionalidades
- `bugfix/*` - Correções de bugs
- `hotfix/*` - Correções urgentes
- `docs/*` - Apenas documentação

### Exemplo:
```bash
git checkout -b feature/contador-regressivo
git checkout -b bugfix/menu-mobile
git checkout -b docs/atualiza-readme
```

---

## 🎨 Padrões de Código

### HTML

```html
<!-- ✅ BOM -->
<section class="hero" id="home">
    <div class="container">
        <h1 class="hero-title">Título</h1>
        <p class="hero-description">Descrição</p>
    </div>
</section>

<!-- ❌ RUIM -->
<div class="hero" id="home"><div class="container"><h1>Título</h1><p>Descrição</p></div></div>
```

**Regras:**
- Use indentação de 4 espaços
- Use aspas duplas para atributos
- Sempre feche tags
- Use IDs únicos
- Classes semânticas e descritivas

### CSS

```css
/* ✅ BOM */
.hero-title {
    font-size: 3rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
}

/* ❌ RUIM */
.hero-title{font-size:3rem;color:#fff;margin-bottom:1rem;}
```

**Regras:**
- Use variáveis CSS (`:root`)
- BEM ou nomenclatura semântica
- Mobile-first (min-width)
- Organize por seções
- Comente seções importantes

### JavaScript

```javascript
// ✅ BOM
const calculateCountdown = (targetDate) => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    };
};

// ❌ RUIM
function calc(d){var n=new Date().getTime();return Math.floor((d-n)/(1000*60*60*24));}
```

**Regras:**
- Use ES6+ (const, let, arrow functions)
- Nomes descritivos
- Comente lógica complexa
- Evite variáveis globais
- Use strict equality (===)

---

## 🔄 Processo de Pull Request

### Checklist Antes de Enviar

- ✅ Código segue os padrões do projeto
- ✅ Comentários úteis foram adicionados
- ✅ Documentação foi atualizada
- ✅ Não há console.logs de debug
- ✅ Testado em diferentes navegadores
- ✅ Testado em mobile/tablet/desktop
- ✅ Nenhuma quebra de funcionalidade existente
- ✅ Commit messages seguem o padrão

### Template de Pull Request

```markdown
## Descrição
Breve descrição das mudanças

## Tipo de Mudança
- [ ] 🐛 Bug fix
- [ ] ✨ Nova feature
- [ ] 💄 UI/Style
- [ ] 📝 Documentação
- [ ] ⚡ Performance
- [ ] ♿ Acessibilidade

## Como Testar
Passos para testar as mudanças

## Screenshots (se aplicável)
[Adicione screenshots ou GIFs]

## Checklist
- [ ] Código testado
- [ ] Documentação atualizada
- [ ] Sem console.logs
- [ ] Responsivo testado
```

---

## 📝 Padrões de Commit

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Formato
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos de Commit

| Emoji | Tipo | Descrição |
|-------|------|-----------|
| ✨ | `feat` | Nova funcionalidade |
| 🐛 | `fix` | Correção de bug |
| 📝 | `docs` | Documentação |
| 💄 | `style` | Formatação/UI |
| ♻️ | `refactor` | Refatoração de código |
| ⚡ | `perf` | Performance |
| ✅ | `test` | Testes |
| 🔧 | `chore` | Manutenção |
| ♿ | `a11y` | Acessibilidade |
| 🌐 | `i18n` | Internacionalização |

### Exemplos

```bash
✨ feat(hero): adiciona contador regressivo animado
🐛 fix(menu): corrige menu mobile não fechando
📝 docs(readme): atualiza instruções de instalação
💄 style(buttons): melhora contraste dos botões CTA
⚡ perf(images): adiciona lazy loading nas imagens
♿ a11y(forms): adiciona labels ARIA nos inputs
```

---

## 🐛 Reportar Bugs

Use o template abaixo ao criar uma issue de bug:

```markdown
## 🐛 Descrição do Bug
Descrição clara do problema

## 📋 Como Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

## ✅ Comportamento Esperado
O que deveria acontecer

## ❌ Comportamento Atual
O que está acontecendo

## 📸 Screenshots
Se aplicável

## 🖥️ Ambiente
- OS: [Windows 10, macOS, Linux]
- Navegador: [Chrome 120, Firefox 115]
- Versão: [1.0.0]
- Dispositivo: [Desktop, Mobile, Tablet]

## 📌 Contexto Adicional
Qualquer outra informação relevante
```

---

## 💡 Sugerir Melhorias

Template para sugestões de features:

```markdown
## 💡 Descrição da Feature
Descrição clara e concisa

## 🎯 Problema que Resolve
Explique o problema ou necessidade

## 💬 Solução Proposta
Descreva como você imagina a solução

## 🔄 Alternativas Consideradas
Outras abordagens que você pensou

## 📸 Mockups/Exemplos
Se tiver, adicione imagens ou links

## 📊 Impacto
- Performance: [Alto/Médio/Baixo]
- Complexidade: [Alto/Médio/Baixo]
- Prioridade: [Alta/Média/Baixa]
```

---

## 📞 Contato

Dúvidas? Entre em contato:

- 📧 Email: contato@volmasterday.com
- 💬 Discussions: [GitHub Discussions](../../discussions)
- 🐛 Issues: [GitHub Issues](../../issues)

---

## 🙏 Agradecimentos

Obrigado por contribuir! Toda ajuda é bem-vinda. 🎉

Contribuidores são reconhecidos no [README.md](README.md).

---

**Última atualização:** 30 de Março de 2026
