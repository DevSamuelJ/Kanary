package io.github.devsamuelj.kanary.dto;

import io.github.devsamuelj.kanary.entity.UserType;
import jakarta.validation.constraints.*;

public class UserRequestDTO {

    @NotBlank(message = "O nome é obrigatório.")
    private String name;

    @NotBlank(message = "O e-mail é obrigatório.")
    @Email
    private String email;

    @NotBlank(message = "Digite uma senha.")
//    @Size(min = 8, max = 20, message = "A senha deve ter entre 8 e 20 caracteres.")
//    @Pattern(
//            regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
//            message = "A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais."
//    )
    private String password;

    @NotNull(message = "O tipo é obrigatório.")
    private UserType role;


    // Getters e Setters
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public UserType getRole() {
        return role;
    }
    public void setRole(UserType role) {
        this.role = role;
    }
}
