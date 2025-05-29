package com.email_assistant.email.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.Data;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/Email/predict/")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class EmailgeneratorController {

    private final EmailService emailService;

    @GetMapping("path")
    public String getMethodName() {
        return new String("HELLO ");
    }

    @PostMapping()
    private ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest) {
        System.out.println(emailRequest.getEmailcontent() + " \n " + emailRequest.getTone());

        String response = emailService.generateEmailReply(emailRequest);
        System.out.println(response);
        return ResponseEntity.ok(response);
    }
}
