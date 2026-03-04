# 🎓 Convite Interativo - Padrinhos de Sala

Um site interativo e divertido para convidar Danilo e Carla para serem padrinhos da sala!

## 🎯 Descrição

Este projeto é um convite digital especial, desenvolvido com HTML, CSS, JavaScript e Java (Spring Boot), que cria uma experiência interativa e surpreendente para os convidados.

### ✨ Características Principais

- **Interface Romântica e Divertida**: Design moderno com gradientes e animações suaves
- **Interatividade Única**: Botões que trocam de posição quando tentam recusar
- **Efeitos Visuais**: Animações de confete e fogos de artifício ao aceitar
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Backend Java**: Estrutura profissional com Spring Boot
- **Ícones Font Awesome**: Visual enriquecido com ícones modernos

---

## 📁 Estrutura do Projeto

```
convite/
│
├── index.html              # Página principal do convite
│
├── css/
│   └── style.css           # Estilos e animações
│
├── js/
│   └── script.js           # Interatividade e efeitos
│
├── img/
│   └── turma.jpg           # Imagem da turma (adicionar)
│
└── java/                   # Backend Spring Boot
    ├── pom.xml             # Dependências Maven
    │
    └── src/
        └── main/
            ├── java/
            │   └── com/convite/padrinhos/
            │       ├── ConviteApplication.java
            │       └── controller/
            │           └── ConviteController.java
            │
            └── resources/
                └── application.properties
```

---

## 🚀 Como Executar o Projeto

### Opção 1: Executar Apenas o Frontend (HTML/CSS/JS)

Para uma visualização rápida sem Java:

1. **Adicione a imagem da turma:**
   - Coloque uma imagem chamada `turma.jpg` na pasta `img/`

2. **Abra o arquivo:**
   - Clique duas vezes em `index.html`
   - Ou abra com um navegador de sua preferência

3. **Ou use um servidor local simples:**
   ```bash
   # Com Python 3
   python3 -m http.server 8000
   
   # Com Node.js (se tiver http-server instalado)
   npx http-server -p 8000
   
   # Com PHP
   php -S localhost:8000
   ```
   
   Depois acesse: `http://localhost:8000`

---

### Opção 2: Executar com Backend Java Spring Boot

#### Pré-requisitos

- **Java 17 ou superior**
- **Maven 3.6+**

#### Passos para Execução

1. **Navegue até a pasta Java:**
   ```bash
   cd java
   ```

2. **Compile e execute com Maven:**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

   Ou, se preferir executar o JAR compilado:
   ```bash
   mvn clean package
   java -jar target/convite-padrinhos-1.0.0.jar
   ```

3. **Acesse no navegador:**
   ```
   http://localhost:8080
   ```

4. **Endpoints disponíveis:**
   - **Página principal:** `http://localhost:8080`
   - **Status da API:** `http://localhost:8080/api/status`
   - **Registrar aceitação:** `http://localhost:8080/api/aceitar`

---

## 🎮 Como Funciona o Convite

### 1️⃣ Página Inicial
- Apresentação visual com logo e identidade da turma
- Imagem destacada da turma
- Título chamativo convidando para saber mais
- Botão "Saiba mais" com animação

### 2️⃣ Seção do Convite
- Mensagem principal do convite
- Explicação sobre a importância dos padrinhos
- Dois botões de decisão:
  - **Verde "Eu aceito"**: Confirma a aceitação
  - **Vermelho "Não aceito"**: Impossível de clicar!

### 3️⃣ Interatividade Divertida
- **Troca de botões**: Quando o mouse se aproxima do botão "Não aceito", os botões trocam de posição
- **Impossível recusar**: A brincadeira torna praticamente impossível clicar em "Não aceito"
- **Efeito de celebração**: Ao clicar em "Eu aceito", aparece:
  - Modal de confirmação
  - Chuva de confete colorido
  - Fogos de artifício na tela
  - Mensagem oficial de confirmação

### 🎁 Easter Eggs
- **Konami Code**: Digite a sequência ↑ ↑ ↓ ↓ ← → ← → B A para um efeito surpresa!
- **Console de estatísticas**: Acompanha quantas vezes tentaram fugir do botão "Aceitar"

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos, gradientes, flexbox, animações
- **JavaScript ES6+**: Interatividade, manipulação DOM, eventos
- **Font Awesome 6.5**: Ícones vetoriais
- **Google Fonts (Poppins)**: Tipografia moderna

### Backend
- **Java 17**: Linguagem de programação
- **Spring Boot 3.2**: Framework web
- **Maven**: Gerenciador de dependências
- **Spring Web**: Para servir conteúdo web
- **Spring DevTools**: Desenvolvimento com hot reload

---

## 🎨 Personalizações Possíveis

### Cores
Edite o arquivo `css/style.css` e modifique os gradientes:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
```

### Textos
Modifique diretamente no arquivo `index.html`:
- Título principal
- Mensagem do convite
- Textos complementares

### Animações
Ajuste as velocidades em `css/style.css`:
```css
animation: bounce 2s infinite;  /* Mude o 2s para ajustar velocidade */
```

### Confete
Controle a quantidade no arquivo `js/script.js`:
```javascript
const confettiCount = 150;  // Aumente ou diminua
```

---

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout completo com todos os efeitos
- **Tablet**: Ajuste de tamanhos e espaçamentos
- **Mobile**: Layout otimizado com botões empilhados

---

## 🐛 Solução de Problemas

### Imagem não aparece
- Verifique se o arquivo `turma.jpg` está na pasta `img/`
- Confirme que o nome está correto (case-sensitive no Linux)

### Servidor Java não inicia
- Verifique se o Java 17+ está instalado: `java -version`
- Verifique se o Maven está instalado: `mvn -version`
- Confira se a porta 8080 não está em uso

### Animações não funcionam
- Verifique se o JavaScript está habilitado no navegador
- Teste em um navegador moderno (Chrome, Firefox, Edge)

### Botões não respondem em mobile
- O evento `touchstart` está implementado para dispositivos touch
- Teste em um dispositivo real ou use o modo responsivo do navegador

---

## 📝 Próximas Melhorias

Se quiser expandir o projeto:

- [ ] Adicionar banco de dados para registrar aceitação
- [ ] Sistema de notificação por email
- [ ] Galeria de fotos da turma
- [ ] Cronograma de eventos
- [ ] Área de mensagens dos colegas
- [ ] Sistema de upload de fotos
- [ ] Integração com redes sociais

---

## 👥 Créditos

Desenvolvido com ❤️ pela turma para Danilo e Carla

### Tecnologias e Recursos
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

---

## 📄 Licença

Este projeto é de uso livre para fins educacionais e pessoais.

---

## 💡 Dicas Finais

- **Apresentação**: Faça Danilo e Carla abrirem o site juntos para uma experiência compartilhada
- **Brincadeira**: Deixe-os tentar clicar em "Não aceito" algumas vezes antes de explicar a brincadeira
- **Captura**: Grave a reação deles ao descobrir que os botões trocam de lugar!
- **Celebração**: A explosão de confete virtual simboliza a alegria da turma com a aceitação

---

**Agora é só apresentar o convite e torcer para que eles aceitem! 🎉**

(Mas com os botões trocando de lugar, eles não têm muita escolha! 😄)
