package com.mateusz.olsztynski.userregister.service;

import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class ServiceEncoder {

    @Bean
    public PasswordEncoder passwordEncoder() {
        //bcrypt has salts built into the generated hashes
        return new BCryptPasswordEncoder();
    }
}
