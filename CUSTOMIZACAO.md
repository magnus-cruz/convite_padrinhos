# 🎨 Guia de Customização do Convite

Este guia ensina como personalizar o convite para diferentes situações e preferências.

---

## 📝 Personalizando Textos

### Arquivo: index.html

#### Título Principal
```html
<!-- Localização: Linha ~34 -->
<h1 class="main-title">
    Danilo e Carla,<br>
    temos uma pergunta especial para vocês.
</h1>
```

**Como personalizar:**
- Troque "Danilo e Carla" pelos nomes desejados
- Mantenha a tag `<br>` para quebra de linha
- Ajuste a mensagem conforme preferir

#### Mensagem do Convite
```html
<!-- Localização: Linha ~62 -->
<p class="message-principal">
    <i class="fas fa-quote-left"></i>
    Depois de tantos momentos juntos, risadas, trabalhos e desafios...
    <strong>vocês aceitam ser nossos padrinhos de sala?</strong>
    <i class="fas fa-quote-right"></i>
</p>
```

**Ideias de mensagens alternativas:**
- "Depois de compartilharmos tantos momentos inesquecíveis..."
- "Pela amizade, parceria e apoio em toda nossa jornada..."
- "Por serem exemplos de dedicação e companheirismo..."

#### Textos Complementares
```html
<!-- Localização: Linha ~69 -->
<div class="message-details">
    <p>
        <i class="fas fa-hands-helping"></i>
        Vocês são peças fundamentais na nossa jornada...
    </p>
</div>
```

**Dicas:**
- Adicione histórias específicas
- Mencione momentos marcantes
- Personalize com referências internas

---

## 🎨 Personalizando Cores

### Arquivo: css/style.css

#### Gradiente Principal
```css
/* Localização: Linha ~12 */
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
}
```

**Paletas sugeridas:**

**Azul Profissional:**
```css
background: linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%);
```

**Rosa Romântico:**
```css
background: linear-gradient(135deg, #f857a6 0%, #ff5858 100%);
```

**Verde Natureza:**
```css
background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
```

**Laranja Energético:**
```css
background: linear-gradient(135deg, #ee0979 0%, #ff6a00 100%);
```

**Roxo Místico:**
```css
background: linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%);
```

#### Cores dos Botões

**Botão Aceitar:**
```css
/* Localização: Linha ~417 */
.btn-aceitar {
    background: linear-gradient(135deg, #11998e, #38ef7d);
}
```

**Botão Negar:**
```css
/* Localização: Linha ~427 */
.btn-negar {
    background: linear-gradient(135deg, #eb3349, #f45c43);
}
```

---

## 🖼️ Personalizando Imagens

### Imagem da Turma

**Formato recomendado:**
- JPG ou PNG
- 800x600px (proporção 4:3)
- Máximo 2MB
- Boa iluminação
- Enquadramento centralizado

**Como substituir:**
1. Prepare sua foto
2. Renomeie para `turma.jpg`
3. Substitua o arquivo em `img/turma.jpg`
4. Atualize a página

**Dica profissional:**
- Use ferramentas como GIMP ou Photoshop
- Aplique leve desfoque no fundo
- Ajuste brilho e contraste
- Adicione moldura (opcional)

---

## ✨ Alterando Animações

### Arquivo: css/style.css

#### Velocidade das Animações

**Bounce (pula-pula):**
```css
/* Localização: Linha ~32 */
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.icon-large {
    animation: bounce 2s infinite;  /* Mude o 2s */
}
```

**Valores sugeridos:**
- `1s` - Muito rápido
- `2s` - Normal (padrão)
- `3s` - Suave
- `4s` - Lento

**Pulse (pulsar):**
```css
/* Localização: Linha ~41 */
.animated-btn {
    animation: pulse 2s infinite;  /* Ajuste aqui */
}
```

#### Desabilitar Animações

Para usuários sensíveis a movimento:
```css
/* Adicione ao final do style.css */
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

---

## 🎯 Personalizando Interatividade

### Arquivo: js/script.js

#### Quantidade de Confete

```javascript
/* Localização: Linha ~77 */
function createConfetti() {
    const confettiCount = 150;  // Mude este número
    // ...
}
```

**Sugestões:**
- `50` - Pouco confete
- `150` - Normal (padrão)
- `300` - Muito confete
- `500` - Tempestade de confete!

#### Cores do Confete

```javascript
/* Localização: Linha ~78 */
const colors = ['#667eea', '#764ba2', '#f093fb', '#38ef7d', '#ffd700', '#ff6b6b'];
```

**Como adicionar cores:**
1. Encontre códigos HEX em [coolors.co](https://coolors.co)
2. Adicione ao array: `'#NOVACOR'`
3. Separe com vírgulas

#### Velocidade da Troca de Botões

```javascript
/* Localização: Linha ~48 */
setTimeout(() => {
    // código da troca
}, 250);  // Mude este número (em milissegundos)
```

**Valores sugeridos:**
- `150` - Muito rápido
- `250` - Normal (padrão)
- `500` - Lento
- `750` - Bem lento

---

## 🔊 Adicionando Sons

### Preparação

1. Crie pasta `sounds/` na raiz
2. Adicione arquivos MP3:
   - `celebration.mp3` (som de celebração)
   - `swap.mp3` (som de troca de botões)
   - `click.mp3` (som de clique)

### Código JavaScript

```javascript
// Adicione ao js/script.js

function playSound(soundName) {
    const audio = new Audio(`sounds/${soundName}.mp3`);
    audio.volume = 0.5;  // Volume (0.0 a 1.0)
    audio.play().catch(e => console.log('Erro ao tocar som:', e));
}

// Use nas funções:
btnAceitar.addEventListener('click', () => {
    playSound('celebration');
    // ... resto do código
});

btnNegar.addEventListener('mouseenter', () => {
    playSound('swap');
    swapButtons();
});
```

### Onde encontrar sons gratuitos:
- [Freesound.org](https://freesound.org)
- [Zapsplat.com](https://www.zapsplat.com)
- [Mixkit.co](https://mixkit.co/free-sound-effects/)

---

## 📱 Ajustando Responsividade

### Arquivo: css/style.css

#### Breakpoints Personalizados

```css
/* Localização: Linha ~535 */

/* Tablets */
@media (max-width: 768px) {
    .main-title {
        font-size: 2rem;  /* Ajuste */
    }
}

/* Celulares */
@media (max-width: 480px) {
    .main-title {
        font-size: 1.5rem;  /* Ajuste */
    }
}
```

**Criar novo breakpoint:**
```css
/* Tablets grandes */
@media (max-width: 1024px) {
    .container {
        max-width: 700px;
    }
}
```

---

## 🌐 Mudando o Idioma

### Traduzir para outro idioma

**Arquivo: index.html**
```html
<!-- Trocar o atributo lang -->
<html lang="en">  <!-- Inglês -->
<html lang="es">  <!-- Espanhol -->
<html lang="fr">  <!-- Francês -->
```

**Exemplos de tradução:**

**Inglês:**
```html
<h1>Danilo and Carla,<br>we have a special question for you.</h1>
<button>I accept!</button>
<button>I don't accept</button>
```

**Espanhol:**
```html
<h1>Danilo y Carla,<br>tenemos una pregunta especial para ustedes.</h1>
<button>¡Acepto!</button>
<button>No acepto</button>
```

---

## 🎭 Temas Alternativos

### Tema Escuro

Adicione ao final do `style.css`:

```css
body {
    background: linear-gradient(135deg, #141E30 0%, #243B55 100%);
}

.container {
    background: rgba(30, 30, 30, 0.95);
    color: white;
}

.main-title,
.convite-title {
    color: #f093fb;
}
```

### Tema Minimalista

```css
body {
    background: #f5f5f5;
}

.container {
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.btn-primary {
    background: #333;
    border-radius: 5px;
}
```

---

## 🔧 Customizações Avançadas

### Adicionar Música de Fundo

```html
<!-- Adicione antes do </body> no index.html -->
<audio id="bgMusic" loop>
    <source src="sounds/background.mp3" type="audio/mpeg">
</audio>

<script>
    const music = document.getElementById('bgMusic');
    music.volume = 0.3;
    
    // Iniciar ao clicar em qualquer lugar
    document.addEventListener('click', () => {
        music.play();
    }, { once: true });
</script>
```

### Adicionar Contador Regressivo

```html
<!-- Adicione no index.html -->
<div id="countdown">
    <h3>Tempo para decidir:</h3>
    <p id="timer">5:00</p>
</div>
```

```javascript
// Adicione no script.js
let timeLeft = 300; // 5 minutos em segundos

function updateCountdown() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateCountdown, 1000);
    }
}

updateCountdown();
```

### Adicionar Partículas Flutuantes

```html
<!-- Adicione no <head> do index.html -->
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
```

```javascript
// Adicione no script.js
particlesJS('home', {
    particles: {
        number: { value: 80 },
        color: { value: '#ffffff' },
        opacity: { value: 0.5 },
        size: { value: 3 }
    }
});
```

---

## 📊 Testando Customizações

### Checklist de Teste

- [ ] Testar em Chrome
- [ ] Testar em Firefox
- [ ] Testar em Safari
- [ ] Testar em mobile (Android)
- [ ] Testar em mobile (iOS)
- [ ] Verificar animações
- [ ] Testar troca de botões
- [ ] Verificar confete
- [ ] Testar responsividade
- [ ] Verificar carregamento de imagens

### Ferramentas Úteis

**DevTools do Navegador:**
- F12 para abrir
- Ctrl+Shift+M para modo responsivo
- Performance para medir velocidade

**Validadores:**
- [W3C HTML Validator](https://validator.w3.org)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [JSHint](https://jshint.com) para JavaScript

---

## 💾 Salvando Alterações

### Backup Antes de Customizar

```bash
# Linux/Mac
cp -r convite convite-backup

# Windows
xcopy convite convite-backup /E /I
```

### Versionamento com Git

```bash
git init
git add .
git commit -m "Versão original do convite"

# Após customizar
git add .
git commit -m "Customizações aplicadas"
```

---

## 🆘 Revertendo Mudanças

Se algo der errado:

1. **Restaurar do backup:**
   ```bash
   cp -r convite-backup/* convite/
   ```

2. **Git:**
   ```bash
   git checkout .
   ```

3. **Manual:**
   - Baixe os arquivos originais novamente
   - Substitua apenas os arquivos modificados

---

## 📚 Recursos de Aprendizado

Para aprender mais sobre customização:

- **HTML/CSS:** [MDN Web Docs](https://developer.mozilla.org)
- **JavaScript:** [JavaScript.info](https://javascript.info)
- **Design:** [Dribbble](https://dribbble.com)
- **Cores:** [Coolors](https://coolors.co)
- **Ícones:** [Font Awesome](https://fontawesome.com)
- **Fontes:** [Google Fonts](https://fonts.google.com)

---

**Divirta-se customizando! 🎨**

_Lembre-se: teste cada alteração antes de apresentar o convite final!_
