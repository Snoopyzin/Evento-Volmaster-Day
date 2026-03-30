# 🔒 Política de Segurança

## 📋 Versões Suportadas

| Versão | Suportada          | Status |
| ------ | ------------------ | ------ |
| 2.0.x  | ✅ Sim             | Atual  |
| 1.5.x  | ⚠️ Parcial         | LTS    |
| < 1.5  | ❌ Não             | EOL    |

---

## 🚨 Reportando Vulnerabilidades

Se você descobriu uma vulnerabilidade de segurança, **NÃO** crie uma issue pública.

### 📧 Entre em contato de forma privada:

**Email de Segurança:** security@volmasterday.com

### 📝 Informações a incluir no relatório:

- 🎯 Descrição detalhada da vulnerabilidade
- 🔍 Passos para reproduzir o problema
- 💥 Impacto potencial da vulnerabilidade
- 🛠️ Sugestões de correção (se tiver)
- 👤 Seu nome/alias para créditos (opcional)

### ⏱️ Tempo de resposta:

- **Primeira resposta:** Dentro de 48 horas
- **Avaliação inicial:** 5 dias úteis
- **Resolução:** Depende da severidade
  - 🔴 Crítica: 7 dias
  - 🟠 Alta: 30 dias
  - 🟡 Média: 90 dias
  - 🟢 Baixa: Próximo release

---

## 🛡️ Práticas de Segurança Implementadas

### ✅ Frontend Security

#### 🔒 Headers de Segurança
```html
<!-- Content Security Policy -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://www.googletagmanager.com; 
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
               font-src 'self' https://fonts.gstatic.com;
               img-src 'self' data: https:;
               connect-src 'self';">

<!-- X-Content-Type-Options -->
<meta http-equiv="X-Content-Type-Options" content="nosniff">

<!-- X-Frame-Options -->
<meta http-equiv="X-Frame-Options" content="DENY">

<!-- Referrer Policy -->
<meta name="referrer" content="strict-origin-when-cross-origin">
```

#### 🚫 Proteções Contra XSS
- ✅ Sanitização de inputs do usuário
- ✅ Uso de `textContent` ao invés de `innerHTML`
- ✅ Validação de dados recebidos
- ✅ Escape de caracteres especiais

#### 🔐 HTTPS Only
- ✅ GitHub Pages usa HTTPS por padrão
- ✅ Links externos usam `https://`
- ✅ Recursos carregados via HTTPS

#### 🎣 Anti-Phishing & Links Seguros
```html
<!-- Links externos com atributos de segurança -->
<a href="https://external-site.com" 
   target="_blank" 
   rel="noopener noreferrer">
   Link Seguro
</a>
```

### 📊 Dados Sensíveis

⚠️ **IMPORTANTE:** Este projeto NÃO coleta dados sensíveis:

- ❌ Não há formulários de pagamento diretos
- ❌ Não há armazenamento de senhas
- ❌ Não há cookies de tracking
- ❌ Não há processamento de dados pessoais

### 🔍 Dependências Externas

#### CDNs Utilizados:
- ✅ `cdn.jsdelivr.net` - Particles.js (Integrity check recomendado)
- ✅ `fonts.googleapis.com` - Google Fonts
- ✅ `fonts.gstatic.com` - Google Fonts CDN
- ✅ `flagcdn.com` - Bandeiras dos países

#### ⚠️ Verificação de Integridade Recomendada:
```html
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" 
        integrity="sha384-..." 
        crossorigin="anonymous" 
        defer></script>
```

### 🎯 Rate Limiting & Proteção DDoS

GitHub Pages fornece:
- ✅ Proteção DDoS automática
- ✅ CDN global via Fastly
- ✅ Cache inteligente

---

## 🔐 Checklist de Segurança

### Para Desenvolvedores:

- ✅ Nunca commitar credenciais ou chaves de API
- ✅ Usar `.gitignore` para arquivos sensíveis
- ✅ Validar e sanitizar todos os inputs
- ✅ Manter dependências atualizadas
- ✅ Revisar código antes de merge
- ✅ Usar HTTPS para todos os recursos
- ✅ Implementar CSP (Content Security Policy)
- ✅ Evitar `eval()` e código dinâmico não validado

### Para Usuários:

- ✅ Verificar URL do site antes de inserir dados
- ✅ Não compartilhar informações sensíveis por email
- ✅ Usar conexões seguras (HTTPS)
- ✅ Manter navegador atualizado
- ✅ Desconfiar de emails suspeitos
- ✅ Verificar selos de segurança

---

## 🚨 Vulnerabilidades Conhecidas

### Atualmente: NENHUMA

Última verificação: 30/03/2026

---

## 📚 Recursos Adicionais

### 🔗 Links Úteis:

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Cheat Sheet](https://cheatsheetseries.owasp.org/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)

### 🛠️ Ferramentas de Segurança:

- [Observatory by Mozilla](https://observatory.mozilla.org/)
- [SecurityHeaders.com](https://securityheaders.com/)
- [Snyk](https://snyk.io/) - Verificação de dependências
- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit)

---

## 🏆 Hall da Fama de Segurança

Agradecemos às seguintes pessoas por relatarem vulnerabilidades de forma responsável:

_Nenhum relatório ainda. Seja o primeiro!_

---

## 📞 Contato de Segurança

**Email:** security@volmasterday.com  
**PGP Key:** (Disponível mediante solicitação)

**Resposta esperada:** 48 horas úteis

---

## 📜 Política de Divulgação Responsável

Seguimos a prática de **Divulgação Coordenada**:

1. 📧 Vulnerabilidade é reportada de forma privada
2. 🔍 Equipe confirma e investiga o problema
3. 🛠️ Correção é desenvolvida e testada
4. 📢 Fix é lançado publicamente
5. 🎖️ Crédito é dado ao pesquisador (se desejado)
6. 📝 Vulnerabilidade é documentada (CVE, se aplicável)

---

**Última atualização:** 30 de Março de 2026  
**Versão da Política:** 1.0
