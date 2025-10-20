package io.github.devsamuelj.kanary.controller;

import io.github.devsamuelj.kanary.dto.UsuariosDTO;
import io.github.devsamuelj.kanary.entity.Usuarios;
import io.github.devsamuelj.kanary.service.UsuariosService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuariosController {

    @Autowired
    private UsuariosService usuariosService;

    @GetMapping
    public List<Usuarios> listarUsuarios() {
        return usuariosService.listarTodos();
    }

    @PostMapping
    public Usuarios criarUsuario(@Valid @RequestBody UsuariosDTO usuarioDTO) {
        Usuarios usuarios = new Usuarios(); // transformando DTO em entidade
        usuarios.setNome(usuarioDTO.getNome());
        usuarios.setEmail(usuarioDTO.getEmail());
        usuarios.setSenha(usuarioDTO.getSenha());
        usuarios.setTipo(usuarioDTO.getTipo());
        return usuariosService.criar(usuarios);
    }

    @DeleteMapping("/{id}")
    public void excluirUsuario(@PathVariable Long id) {
        usuariosService.excluirPorId(id);
    }

    @PutMapping("/{id}")
    public Usuarios atualizarUsuario(@PathVariable Long id, @Valid @RequestBody UsuariosDTO usuarioDTO) {
        Usuarios usuarios = new Usuarios(); // transformando DTO em entidade
        usuarios.setNome(usuarioDTO.getNome());
        usuarios.setEmail(usuarioDTO.getEmail());
        usuarios.setSenha(usuarioDTO.getSenha());
        usuarios.setTipo(usuarioDTO.getTipo());
        return usuariosService.atualizar(id, usuarios);
    }
}
