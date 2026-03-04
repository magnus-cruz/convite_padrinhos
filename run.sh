#!/bin/bash

# Script para iniciar o servidor Spring Boot
# Uso: ./run.sh

echo "========================================"
echo "🎓 Convite Padrinhos de Sala 🎓"
echo "========================================"
echo ""

# Verifica se Java está instalado
if ! command -v java &> /dev/null; then
    echo "❌ Java não encontrado!"
    echo "Por favor, instale o Java 17 ou superior."
    exit 1
fi

# Verifica se Maven está instalado
if ! command -v mvn &> /dev/null; then
    echo "❌ Maven não encontrado!"
    echo "Por favor, instale o Maven."
    exit 1
fi

echo "✅ Java encontrado: $(java -version 2>&1 | head -n 1)"
echo "✅ Maven encontrado: $(mvn -version | head -n 1)"
echo ""

# Entra na pasta Java
cd java

echo "📦 Compilando projeto..."
mvn clean install -DskipTests

if [ $? -eq 0 ]; then
    echo ""
    echo "✨ Compilação concluída com sucesso!"
    echo ""
    echo "🚀 Iniciando servidor..."
    echo ""
    mvn spring-boot:run
else
    echo ""
    echo "❌ Erro na compilação!"
    exit 1
fi
