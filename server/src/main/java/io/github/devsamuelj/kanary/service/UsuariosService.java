package io.github.devsamuelj.kanary.service;

import io.github.devsamuelj.kanary.entity.Usuarios;
import io.github.devsamuelj.kanary.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuariosService {

    @Autowired
    private UsuariosRepository usuariosRepository;
    private BCryptPasswordEncoder passwordEncoder;

    // listar todos os usuários
    public List<Usuarios> listarTodos() {
        return usuariosRepository.findAll();
    }

    // listar usuário por e-mail
    public Usuarios buscarPorEmail(String email) {
        return usuariosRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("Usuário não encontrado."));
    }

    // criar usuário
    public Usuarios criar(Usuarios novoUsuario) {
        String senhaCript = passwordEncoder.encode(novoUsuario.getSenha());
        novoUsuario.setSenha(senhaCript); // apenas sobrescrever a senha com a criptografia
        return usuariosRepository.save(novoUsuario);
    }

    // deletar usuário
    public void excluirPorId(Long id){
        usuariosRepository.deleteById(id);
    }

    // atualizar usuário
    public Usuarios atualizar(Long id, Usuarios usuarioAtualizado) {
        Optional<Usuarios> usuarioExistente = usuariosRepository.findById(id);
        if (usuarioExistente.isPresent()) {
            Usuarios usuario = usuarioExistente.get();
            usuario.setNome(usuarioAtualizado.getNome());
            usuario.setEmail(usuarioAtualizado.getEmail());
            if (usuarioAtualizado.getSenha() != null && !usuarioAtualizado.getSenha().isEmpty()) {
                // Caso haja uma nova senha e ela não retorne null: atualize e criptografe a nova senha
                usuario.setSenha(passwordEncoder.encode(usuarioAtualizado.getSenha()));
            }
            usuario.setTipo(usuarioAtualizado.getTipo());
            return usuariosRepository.save(usuario);
        } else {
            return null;
        }
    }
}
