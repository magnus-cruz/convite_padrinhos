// ====== FUNDO ANIMADO COM CANVAS ======
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('animatedBackground');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.particleCount = 80;
        
        // Configurar canvas
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        
        // Inicializar partículas
        this.createParticles();
        
        // Iniciar animação
        this.animate();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    handleMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        
        // Criar partículas no cursor
        this.createParticlesAtCursor(this.mouseX, this.mouseY);
    }
    
    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                radius: Math.random() * 3 + 1,
                color: this.getRandomColor(),
                opacity: Math.random() * 0.5 + 0.3,
                life: 1,
                maxLife: 1
            });
        }
    }
    
    createParticlesAtCursor(x, y) {
        for (let i = 0; i < 3; i++) {
            this.particles.push({
                x: x + (Math.random() - 0.5) * 30,
                y: y + (Math.random() - 0.5) * 30,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4 - 2,
                radius: Math.random() * 2 + 1,
                color: this.getRandomColor(),
                opacity: 1,
                life: 1,
                maxLife: Math.random() * 60 + 30
            });
        }
        
        // Limitar número de partículas
        if (this.particles.length > 400) {
            this.particles = this.particles.slice(-300);
        }
    }
    
    getRandomColor() {
        const colors = [
            '#667eea', // Azul
            '#764ba2', // Roxo
            '#f093fb', // Rosa
            '#4facfe', // Azul claro
            '#00f2fe'  // Ciano
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    update() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            
            // Atualizar posição
            p.x += p.vx;
            p.y += p.vy;
            
            // Aplicar gravidade leve
            p.vy += 0.05;
            
            // Atração ao mouse
            const dx = this.mouseX - p.x;
            const dy = this.mouseY - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                const angle = Math.atan2(dy, dx);
                const force = (150 - distance) / 150;
                p.vx += Math.cos(angle) * force * 0.5;
                p.vy += Math.sin(angle) * force * 0.5;
            }
            
            // Atualizar vida
            p.life -= 1 / p.maxLife;
            p.opacity = p.life * (Math.random() * 0.7 + 0.3);
            
            // Remover partículas mortas
            if (p.life <= 0) {
                this.particles.splice(i, 1);
            } else {
                // Manter dentro da tela com efeito de onda
                if (p.x < 0) p.x = this.canvas.width;
                if (p.x > this.canvas.width) p.x = 0;
                if (p.y < 0) p.y = this.canvas.height;
                if (p.y > this.canvas.height) p.y = 0;
            }
        }
    }
    
    draw() {
        // Limpar com fade
        this.ctx.fillStyle = 'rgba(102, 126, 234, 0.02)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Desenhar partículas
        for (let particle of this.particles) {
            // Desenhar partícula
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Desenhar aura ao redor
            this.ctx.strokeStyle = particle.color;
            this.ctx.lineWidth = 1;
            this.ctx.globalAlpha = particle.opacity * 0.3;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius + 3, 0, Math.PI * 2);
            this.ctx.stroke();
        }
        
        this.ctx.globalAlpha = 1;
        
        // Desenhar conexões entre partículas próximas
        this.drawConnections();
    }
    
    drawConnections() {
        const maxDistance = 100;
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const p1 = this.particles[i];
                const p2 = this.particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    const opacity = (1 - distance / maxDistance) * 0.2;
                    this.ctx.strokeStyle = p1.color;
                    this.ctx.globalAlpha = opacity;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
        }
        
        this.ctx.globalAlpha = 1;
    }
    
    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new ParticleSystem();
});
