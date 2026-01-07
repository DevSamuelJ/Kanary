package io.github.devsamuelj.kanary.dto;

import io.github.devsamuelj.kanary.entity.UserType;

public class UserResponseDTO {

    private Long id;
    private String name;
    private String email;
    private UserType role;

    // getters e setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public UserType getRole() { return role; }
    public void setRole(UserType role) { this.role = role; }
}
