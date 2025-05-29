// package com.email_assistant.email.app;

// import java.util.*;

// import org.springframework.stereotype.Service;
// import org.springframework.web.reactive.function.client.WebClient;

// import com.fasterxml.jackson.databind.JsonNode;
// import com.fasterxml.jackson.databind.ObjectMapper;

// import org.springframework.beans.factory.annotation.Value;

// @Service
// public class EmailService {
//     private final WebClient webclient;

//     // constructor
//     public EmailService(WebClient webclient) {
//         this.webclient = webclient;
//     }

//     @Value("${gemini.api.url}")
//     private String geminiApiURL;

//     @Value("${gemini.api.key}")
//     private String geminiApiKey;

//     public String generateEmailReply(EmailRequest emailRequest) {
//         // Build the prompt
//         String prompt = buildPrompt(emailRequest);
//         // Craft a request
//         Map<String, Object> requestbody = Map.of(
//                 "content", new Object[] {
//                         Map.of("parts", new Object[] {
//                                 Map.of("text", prompt)
//                         })
//                 });
//         // Do request and get response
//         String response = webclient.post()
//                 // .uri(geminiApiURL + geminiApiKey)
//                 .uri(uriBuilder -> uriBuilder
//                         .path(geminiApiURL)
//                         .queryParam("key", geminiApiKey)
//                         .build())
//                 .header("Content-Type", "application/json")
//                 .bodyValue(requestbody)
//                 .retrieve()
//                 .bodyToMono(String.class)
//                 .block();
//         // Return response
//         return extractResponseContent(response);
//     }

//     private String extractResponseContent(String response) {
//         // TODO Auto-generated method stub
//         try {
//             ObjectMapper mapper = new ObjectMapper();
//             JsonNode rootnode = mapper.readTree(response);
//             return rootnode.path("candidates")
//                     .get(0)
//                     .path("content")
//                     .path("parts")
//                     .get(0)
//                     .path("text")
//                     .asText();
//         } catch (Exception e) {
//             return "Error found in processing request" + e.getMessage();
//         }
//     }

//     private String buildPrompt(EmailRequest emailRequest) {
//         // TODO Auto-generated method stub
//         // throw new UnsupportedOperationException("Unimplemented method
//         // 'buildPrompt'");
//         StringBuilder prompt = new StringBuilder();

//         prompt.append("Generate a proffessional email reply for the following email. Don't generate a subject line ");

//         if (emailRequest.getTone() != null && !emailRequest.getTone().isEmpty()) {
//             prompt.append("Use a").append(emailRequest.getTone()).append(" tone ");
//         }
//         prompt.append("\n Original email: \n").append(emailRequest.getEmailcontent());
//         return prompt.toString();
//     }
// }
package com.email_assistant.email.app;

import java.util.*;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;

@Service
public class EmailService {
    private final WebClient webclient;

    public EmailService(WebClient webclient) {
        this.webclient = webclient;
    }

    @Value("${gemini.api.url}")
    private String geminiApiURL;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    // @Value("${gemini.api.baseurl}")
    // private String geminiBaseURL;

    // @Value("${gemini.api.path}")
    // private String geminiPath;

    public String generateEmailReply(EmailRequest emailRequest) {
        try {
            // build prompt
            String prompt = buildPrompt(emailRequest);
            System.out.println("Prompt Sent to Gemini:\n" + prompt);

            // Craft the request
            Map<String, Object> requestbody = Map.of(
                    "contents", new Object[] {
                            Map.of("parts", new Object[] {
                                    Map.of("text", prompt)
                            })
                    });

            // Do request and return response
            String response = webclient.post()
                    // .uri(uriBuilder -> uriBuilder
                    // .path(geminiApiURL)
                    // .queryParam("key", geminiApiKey)
                    // .build())
                    .uri(geminiApiURL + "?key=" + geminiApiKey)
                    .header("Content-Type", "application/json")
                    .bodyValue(requestbody)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();
            // String response = WebClient.builder()
            // .baseUrl(geminiBaseURL)
            // .build()
            // .post()
            // .uri(uriBuilder -> uriBuilder
            // .path(geminiPath)
            // .queryParam("key", geminiApiKey)
            // .build())
            // .header("Content-Type", "application/json")
            // .bodyValue(requestbody)
            // .retrieve()
            // .bodyToMono(String.class)
            // .block();

            System.out.println("Raw Gemini Response: " + response);
            return extractResponseContent(response);
        } catch (Exception e) {
            e.printStackTrace();
            return "Error calling Gemini API: " + e.getMessage();
        }
    }

    // return response
    private String extractResponseContent(String response) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode rootnode = mapper.readTree(response);
            return rootnode.path("candidates")
                    .get(0)
                    .path("content")
                    .path("parts")
                    .get(0)
                    .path("text")
                    .asText();
        } catch (Exception e) {
            return "Error processing Gemini API response: " + e.getMessage();
        }
    }

    // method for prompt
    private String buildPrompt(EmailRequest emailRequest) {
        StringBuilder prompt = new StringBuilder();
        prompt.append("You are an AI assistant. Write a reply to the following email. Keep the tone ");
        if (emailRequest.getTone() != null && !emailRequest.getTone().isEmpty()) {
            prompt.append("Use a ").append(emailRequest.getTone()).append(" tone. ");
        } else {
            prompt.append("Use a neutral tone. ");
        }
        prompt.append("Do not include a subject line. ");
        prompt.append("Keep it concise, relevant, and professional.\n\n");
        prompt.append("\nOriginal email:\n  ").append(emailRequest.getEmailcontent());
        return prompt.toString();
    }
}
