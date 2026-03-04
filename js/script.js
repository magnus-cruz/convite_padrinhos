// ====== ELEMENTOS DO DOM ======
const btnSaibaMais = document.getElementById('btnSaibaMais');
const homeSection = document.getElementById('home');
const conviteSection = document.getElementById('convite');
const btnAceitar = document.getElementById('btnAceitar');
const btnNegar = document.getElementById('btnNegar');
const buttonsContainer = document.getElementById('buttonsContainer');
const celebration = document.getElementById('celebration');
const confettiContainer = document.getElementById('confettiContainer');

// ====== VARIÁVEIS DE CONTROLE ======
let swapCount = 0;
let isSwapping = false;

// ====== NAVEGAÇÃO ENTRE SEÇÕES ======
btnSaibaMais.addEventListener('click', () => {
    homeSection.classList.remove('active');
    
    setTimeout(() => {
        conviteSection.classList.add('active');
        // Rola para o topo suavemente
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
});

// ====== TROCA DE BOTÕES ======
// Função para trocar a posição dos botões no DOM
function swapButtons() {
    if (isSwapping) return;
    
    isSwapping = true;
    swapCount++;
    
    // Adiciona animação
    btnAceitar.classList.add('button-swap');
    btnNegar.classList.add('button-swap');
    
    // Troca a ordem dos botões
    setTimeout(() => {
        if (btnAceitar.nextElementSibling === btnNegar) {
            // Se "Aceitar" vem antes, move "Negar" para antes
            buttonsContainer.insertBefore(btnNegar, btnAceitar);
        } else {
            // Se "Negar" vem antes, move "Aceitar" para antes
            buttonsContainer.insertBefore(btnAceitar, btnNegar);
        }
        
        // Remove animação
        btnAceitar.classList.remove('button-swap');
        btnNegar.classList.remove('button-swap');
        
        isSwapping = false;
    }, 250);
}

// ====== EVENTO DE HOVER NO BOTÃO "NÃO ACEITO" ======
btnNegar.addEventListener('mouseenter', swapButtons);

// Evento alternativo para dispositivos touch
btnNegar.addEventListener('touchstart', (e) => {
    e.preventDefault();
    swapButtons();
}, { passive: false });

// ====== TENTATIVA DE CLICAR NO BOTÃO "NÃO ACEITO" ======
btnNegar.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Extra: Se conseguir clicar (o que é improvável), troca novamente
    swapButtons();
    
    // Mensagem engraçada no console para desenvolvedores
    console.log('Nice try! 😄 Mas não será tão fácil assim...');
});

// ====== BOTÃO ACEITAR ======
btnAceitar.addEventListener('click', () => {
    // Esconde os botões
    buttonsContainer.style.display = 'none';
    
    // Mostra a celebração
    celebration.classList.add('active');
    
    // Cria confete
    createConfetti();
    
    // Toca uma animação extra
    setTimeout(() => {
        playFireworks();
    }, 500);
});

// ====== CRIAÇÃO DE CONFETE ======
function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#38ef7d', '#ffd700', '#ff6b6b'];
    const confettiCount = 150;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Posição aleatória
            confetti.style.left = Math.random() * 100 + '%';
            
            // Cor aleatória
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            // Tamanho aleatório
            const size = Math.random() * 10 + 5;
            confetti.style.width = size + 'px';
            confetti.style.height = size + 'px';
            
            // Formato aleatório (círculo ou quadrado)
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            }
            
            // Duração da animação aleatória
            const duration = Math.random() * 2 + 2;
            confetti.style.animationDuration = duration + 's';
            
            // Delay aleatório
            const delay = Math.random() * 0.5;
            confetti.style.animationDelay = delay + 's';
            
            confettiContainer.appendChild(confetti);
            
            // Remove o confete após a animação
            setTimeout(() => {
                confetti.remove();
            }, (duration + delay) * 1000);
        }, i * 10);
    }
}

// ====== FOGOS DE ARTIFÍCIO (EFEITO EXTRA) ======
function playFireworks() {
    const fireworksCount = 20;
    const colors = ['#667eea', '#764ba2', '#f093fb', '#38ef7d', '#ffd700', '#ff6b6b'];
    
    for (let i = 0; i < fireworksCount; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.style.position = 'fixed';
            firework.style.left = Math.random() * 100 + '%';
            firework.style.top = Math.random() * 100 + '%';
            firework.style.width = '10px';
            firework.style.height = '10px';
            firework.style.borderRadius = '50%';
            firework.style.background = colors[Math.floor(Math.random() * colors.length)];
            firework.style.zIndex = '1000';
            firework.style.pointerEvents = 'none';
            firework.style.boxShadow = `0 0 20px ${colors[Math.floor(Math.random() * colors.length)]}`;
            
            document.body.appendChild(firework);
            
            // Animação de explosão
            let scale = 1;
            let opacity = 1;
            const interval = setInterval(() => {
                scale += 0.5;
                opacity -= 0.05;
                firework.style.transform = `scale(${scale})`;
                firework.style.opacity = opacity;
                
                if (opacity <= 0) {
                    clearInterval(interval);
                    firework.remove();
                }
            }, 50);
        }, i * 100);
    }
}

// ====== ANIMAÇÃO DE ENTRADA ======
window.addEventListener('load', () => {
    // Adiciona classe fade-in aos elementos
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// ====== EFEITOS SONOROS (OPCIONAL - COMENTADO) ======
// Se quiser adicionar sons, descomente e adicione arquivos de áudio

/*
function playSound(soundName) {
    const audio = new Audio(`sounds/${soundName}.mp3`);
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Erro ao tocar som:', e));
}

// Chame playSound('celebration') no botão aceitar
// Chame playSound('swap') na troca de botões
*/

// ====== EASTER EGG - KONAMI CODE ======
// Sequência: cima, cima, baixo, baixo, esquerda, direita, esquerda, direita, B, A
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    
    if (key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
            // Easter egg ativado!
            console.log('🎮 KONAMI CODE ATIVADO! 🎮');
            console.log('Você desbloqueou um segredo! 🌟');
            
            // Efeito especial
            document.body.style.animation = 'rainbow 2s infinite';
            
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
            
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Animação rainbow para o easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ====== CONTADOR DE TENTATIVAS ======
// Mostra no console quantas vezes tentaram evitar o botão "Aceitar"
function showSwapStats() {
    if (swapCount > 0) {
        console.log(`%c🎯 Estatísticas 🎯`, 'font-size: 20px; font-weight: bold; color: #667eea;');
        console.log(`Tentativas de fugir do "Aceitar": ${swapCount}`);
        console.log(`Persistência: ${swapCount > 10 ? 'IMPRESSIONANTE! 🏆' : swapCount > 5 ? 'Muito boa! 👏' : 'Boa! 👍'}`);
    }
}

// Mostra estatísticas quando aceitar
const originalAceitarClick = btnAceitar.onclick;
btnAceitar.addEventListener('click', () => {
    showSwapStats();
});

// ====== MENSAGEM DE BOAS-VINDAS ======
console.log('%c🎓 Convite de Padrinhos de Sala 🎓', 'font-size: 24px; font-weight: bold; color: #667eea; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);');
console.log('%cBem-vindos, Danilo e Carla! 💜', 'font-size: 16px; color: #764ba2;');
console.log('%cEste é um convite especial feito com muito carinho! ✨', 'font-size: 14px; color: #f093fb;');
console.log('');
console.log('💡 Dica: Tente o Konami Code para um easter egg surpresa! 🎮');
