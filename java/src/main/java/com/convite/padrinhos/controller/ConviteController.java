package com.convite.padrinhos.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * Controller responsável por servir as páginas do convite
 * 
 * @author Turma
 * @version 1.0
 */
@Controller
@RequestMapping("/")
public class ConviteController {
    
    /**
     * Serve a página inicial do convite
     * 
     * @return conteúdo HTML da página principal
     */
    @GetMapping(value = {"/", "/index.html"}, produces = "text/html")
    @ResponseBody
    public String index() {
        try {
            // Lê o arquivo index.html da raiz do projeto
            Path indexPath = Paths.get("index.html");
            
            if (Files.exists(indexPath)) {
                String content = Files.readString(indexPath);
                System.out.println("✅ Página index.html servida com sucesso!");
                return content;
            } else {
                System.err.println("❌ Arquivo index.html não encontrado!");
                return getErrorPage();
            }
            
        } catch (Exception e) {
            System.err.println("❌ Erro ao carregar página: " + e.getMessage());
            e.printStackTrace();
            return getErrorPage();
        }
    }
    
    /**
     * Endpoint de teste para verificar se o servidor está funcionando
     * 
     * @return mensagem de status
     */
    @GetMapping("/api/status")
    @ResponseBody
    public String status() {
        return """
                {
                    "status": "online",
                    "message": "Servidor funcionando corretamente! 🎉",
                    "projeto": "Convite Padrinhos de Sala",
                    "tecnologias": ["Java", "Spring Boot", "HTML", "CSS", "JavaScript"]
                }
                """;
    }
    
    /**
     * Endpoint de teste para registrar aceitação (simulação)
     * Em um projeto real, isso salvaria no banco de dados
     * 
     * @return mensagem de confirmação
     */
    @GetMapping("/api/aceitar")
    @ResponseBody
    public String aceitar() {
        System.out.println("🎉 ACEITAÇÃO REGISTRADA! 🎉");
        System.out.println("Danilo e Carla aceitaram ser padrinhos!");
        
        return """
                {
                    "status": "success",
                    "message": "Parabéns! Vocês agora são oficialmente padrinhos de sala! 🎓👏",
                    "timestamp": "%s"
                }
                """.formatted(java.time.LocalDateTime.now());
    }
    
    /**
     * Página de erro personalizada
     * 
     * @return HTML da página de erro
     */
    private String getErrorPage() {
        return """
                <!DOCTYPE html>
                <html lang="pt-BR">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Erro - Convite Padrinhos</title>
                    <style>
                        body {
                            font-family: 'Arial', sans-serif;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 100vh;
                            margin: 0;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            text-align: center;
                            padding: 2rem;
                        }
                        .error-container {
                            background: rgba(255, 255, 255, 0.1);
                            padding: 3rem;
                            border-radius: 20px;
                            backdrop-filter: blur(10px);
                        }
                        h1 { font-size: 4rem; margin: 0; }
                        p { font-size: 1.2rem; margin-top: 1rem; }
                    </style>
                </head>
                <body>
                    <div class="error-container">
                        <h1>😔 Oops!</h1>
                        <p>Não foi possível carregar o convite.</p>
                        <p>Verifique se o arquivo index.html está na raiz do projeto.</p>
                    </div>
                </body>
                </html>
                """;
    }
}
