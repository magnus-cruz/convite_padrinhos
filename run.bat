@echo off
REM Script para iniciar o servidor Spring Boot no Windows
REM Uso: run.bat

echo ========================================
echo 🎓 Convite Padrinhos de Sala 🎓
echo ========================================
echo.

REM Verifica se Java está instalado
where java >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Java não encontrado!
    echo Por favor, instale o Java 17 ou superior.
    pause
    exit /b 1
)

REM Verifica se Maven está instalado
where mvn >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Maven não encontrado!
    echo Por favor, instale o Maven.
    pause
    exit /b 1
)

echo ✅ Java encontrado
echo ✅ Maven encontrado
echo.

REM Entra na pasta Java
cd java

echo 📦 Compilando projeto...
call mvn clean install -DskipTests

if %errorlevel% equ 0 (
    echo.
    echo ✨ Compilação concluída com sucesso!
    echo.
    echo 🚀 Iniciando servidor...
    echo.
    call mvn spring-boot:run
) else (
    echo.
    echo ❌ Erro na compilação!
    pause
    exit /b 1
)

pause
