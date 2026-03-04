package com.convite.padrinhos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Classe principal da aplicação Spring Boot
 * Responsável por inicializar o servidor e configurar recursos estáticos
 * 
 * @author Turma
 * @version 1.0
 */
@SpringBootApplication
public class ConviteApplication implements WebMvcConfigurer {
    
    /**
     * Método principal que inicia a aplicação
     * 
     * @param args argumentos da linha de comando
     */
    public static void main(String[] args) {
        System.out.println("========================================");
        System.out.println("🎓 Convite Padrinhos de Sala 🎓");
        System.out.println("========================================");
        System.out.println("Iniciando servidor...");
        System.out.println("");
        
        SpringApplication.run(ConviteApplication.class, args);
        
        System.out.println("");
        System.out.println("✨ Servidor iniciado com sucesso! ✨");
        System.out.println("📍 Acesse: http://localhost:8080");
        System.out.println("========================================");
    }
    
    /**
     * Configura o mapeamento de recursos estáticos
     * Permite servir arquivos CSS, JS e imagens
     * 
     * @param registry registro de manipuladores de recursos
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Mapeia recursos estáticos na raiz do projeto
        registry
            .addResourceHandler("/**")
            .addResourceLocations("file:./", "classpath:/static/");
        
        // Mapeia especificamente CSS
        registry
            .addResourceHandler("/css/**")
            .addResourceLocations("file:./css/", "classpath:/static/css/");
        
        // Mapeia especificamente JavaScript
        registry
            .addResourceHandler("/js/**")
            .addResourceLocations("file:./js/", "classpath:/static/js/");
        
        // Mapeia especificamente imagens
        registry
            .addResourceHandler("/img/**")
            .addResourceLocations("file:./img/", "classpath:/static/img/");
    }
}
