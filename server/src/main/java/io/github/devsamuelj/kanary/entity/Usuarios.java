package io.github.devsamuelj.kanary.entity;

import jakarta.persistence.*;
//import org.hibernate.type.TrueFalseConverter;

@Entity
@Table(name = "usuarios")
public class Usuarios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false, length = 255)
    private String senha;

    @Column(nullable = true)
    @Enumerated(EnumType.STRING)
    private EnumTipo tipo;


    public Usuarios(){}
    public Usuarios(Long id, String nome, String email, String senha, EnumTipo tipo){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.tipo = tipo;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

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

    public EnumTipo getTipo() { return tipo; }
    public void setTipo(EnumTipo tipo) { this.tipo = tipo; }
}
