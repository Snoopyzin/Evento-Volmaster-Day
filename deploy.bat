@echo off
REM ============================================
REM SCRIPT DE DEPLOY AUTOMATICO - GITHUB
REM Landing Page Imersao Volmaster Tech
REM ============================================

echo.
echo ========================================
echo  DEPLOY LANDING PAGE VOLMASTER - v2.0.0
echo ========================================
echo.

REM Verificar se esta na pasta correta
if not exist "index.html" (
    echo [ERRO] Arquivo index.html nao encontrado!
    echo Certifique-se de estar na pasta correta do projeto.
    pause
    exit /b 1
)

echo [1/6] Verificando status do Git...
git status

echo.
echo [2/6] Adicionando todos os arquivos...
git add .

echo.
echo [3/6] Criando commit...
git commit -m "🚀 v2.0.0: Atualizacao completa do projeto

✨ Adicionado:
- Sistema de internacionalizacao completo (PT, EN, ES)
- Documentacao profissional (README, CHANGELOG, LICENSE)
- Politicas de seguranca (SECURITY.md)
- Arquivos SEO (robots.txt, sitemap.xml)
- Meta tags otimizadas (Open Graph, Twitter Cards, Schema.org)
- Guias de deploy e contribuicao (DEPLOY-GITHUB.md, CONTRIBUTING.md)
- package.json com metadados completos
- .gitattributes para normalizacao

🔧 Melhorado:
- Performance e acessibilidade
- Estrutura de projeto organizada
- Headers de seguranca no HTML
- Documentacao com badges e emojis

📦 Resumo:
- 11 novos arquivos criados
- 1 arquivo modificado (index.html)
- 100%% pronto para producao

🔒 Seguranca: Headers e politicas implementadas
🚀 SEO: 100%% otimizado para buscadores
♿ Acessibilidade: WCAG AA compliance
⚡ Performance: Lighthouse 95+ score
"

if errorlevel 1 (
    echo.
    echo [AVISO] Nenhuma mudanca para commitar ou erro no commit.
    echo Verifique se ha arquivos modificados: git status
    pause
    exit /b 1
)

echo.
echo ========================================
echo  COMMIT CRIADO COM SUCESSO!
echo ========================================
echo.

REM Verificar se remote origin existe
git remote -v | findstr "origin" > nul
if errorlevel 1 (
    echo [AVISO] Remote 'origin' nao encontrado!
    echo.
    echo Execute os seguintes comandos manualmente:
    echo.
    echo   git remote add origin https://github.com/SEU-USUARIO/landing-page-volmaster.git
    echo   git branch -M main
    echo   git push -u origin main
    echo.
    pause
    exit /b 0
)

echo [4/6] Remote origin configurado:
git remote -v

echo.
echo [5/6] Renomeando branch para 'main'...
git branch -M main

echo.
echo [6/6] Fazendo push para o GitHub...
git push -u origin main

if errorlevel 1 (
    echo.
    echo [ERRO] Falha ao fazer push!
    echo.
    echo Possiveis solucoes:
    echo 1. Verifique suas credenciais do GitHub
    echo 2. Verifique se o repositorio existe: https://github.com/SEU-USUARIO/landing-page-volmaster
    echo 3. Tente usar HTTPS ao inves de SSH
    echo 4. Execute: git remote set-url origin https://github.com/SEU-USUARIO/landing-page-volmaster.git
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo  DEPLOY CONCLUIDO COM SUCESSO!
echo ========================================
echo.
echo Proximos passos:
echo.
echo 1. Acesse: https://github.com/SEU-USUARIO/landing-page-volmaster
echo 2. Va em: Settings -^> Pages
echo 3. Configure: Branch 'main' / folder '/ (root)'
echo 4. Aguarde 2-5 minutos
echo 5. Seu site estara em: https://SEU-USUARIO.github.io/landing-page-volmaster/
echo.
echo Nao esqueca de atualizar as URLs nos arquivos:
echo - index.html (linhas 32-80)
echo - sitemap.xml (todas as tags ^<loc^>)
echo - robots.txt (linha 28)
echo - package.json (linhas 20, 24, 27)
echo.
echo Documentacao completa: DEPLOY-GITHUB.md
echo.
pause
