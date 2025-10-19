package io.github.devsamuelj.kanary.dto;

import io.github.devsamuelj.kanary.entity.EnumTipo;
import jakarta.validation.constraints.*;

public class UsuariosDTO {

    @NotBlank(message = "O nome é obrigatório.")
    private String nome;

    @NotBlank(message = "O e-mail é obrigatório.")
    @Email
    private String email;

    @NotBlank(message = "Digite uma senha.")
    @Size(min = 2, max = 20, message = "A senha deve ter entre 8 e 20 caracteres.")
//    @Pattern(
//            regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
//            message = "A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais."
//    )
    private String senha;

    @NotNull(message = "O tipo é obrigatório.")
    private EnumTipo tipo;


    // Getters e Setters
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }
    public void setSenha(String senha) {
        this.senha = senha;
    }

    public EnumTipo getTipo() {
        return tipo;
    }
    public void setTipo(EnumTipo tipo) {
        this.tipo = tipo;
    }
}
