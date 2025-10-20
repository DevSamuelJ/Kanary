package io.github.devsamuelj.kanary.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityFilterConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // forma atual de desabilitar CSRF
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll() // libera todos os endpoints
                );

        return http.build();
    }
}
