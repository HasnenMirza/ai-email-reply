package com.email_assistant.email.app;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {

    // @Bean
    // public WebClient webClient() {
    // return WebClient.builder().build();
    // }
    @Bean
    public WebClient webClient(WebClient.Builder builder) {
        return builder
                .baseUrl("https://generativelanguage.googleapis.com")
                .build();
    }

}
