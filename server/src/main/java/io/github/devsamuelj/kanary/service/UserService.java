package io.github.devsamuelj.kanary.service;

import io.github.devsamuelj.kanary.entity.User;
import io.github.devsamuelj.kanary.exception.EmailAlreadyExistsException;
import io.github.devsamuelj.kanary.exception.UserNotFoundException;
import io.github.devsamuelj.kanary.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


    // listar todos os usuários
    public List<User> listAll() {
        return userRepository.findAll();
    }


    // listar usuário por e-mail
    public User searchByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("Usuário não encontrado!"));
    }


    // criar usuário
    @Transactional
    public User create(User newUser) {
        // verificar se o email já existe em outro id
        if (userRepository.existsByEmail(newUser.getEmail())) {
            // caso haja, lança uma exceção
            throw new EmailAlreadyExistsException("E-mail já existente para outro usuário! Tente outro.");
        }
        // caso o email não seja duplicado, criptografe a senha
        String passCript = passwordEncoder.encode(newUser.getPassword());
        newUser.setPassword(passCript); // apenas sobrescrever a senha com a criptografia

        // salvar novo usuário
        return userRepository.save(newUser);
    }


    // deletar usuário
    @Transactional
    public void deleteById(Long id){
        // verificar se id existe
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException("Usuário não encontrado!");
        }
        // caso ache o id, exclua o usuário pelo id
        userRepository.deleteById(id);
    }


    // atualizar usuário
    @Transactional
    public User update(Long id, User updateUser) {
        // buscar usuário via id
        User user = userRepository.findById(id)
                // se não encontrar o usuário, lança uma exceção
                .orElseThrow(() -> new UserNotFoundException("Usuário não encontrado!"));

        // caso ache o usuário, atualize o nome
        user.setName(updateUser.getName());

        // verifica se o email já existe em outro id
        if (userRepository.existsByEmailAndIdNot(updateUser.getEmail(), id)) {
            // se existir, lança uma exceção de email existente para outro usuário
            throw new EmailAlreadyExistsException("E-mail já existente para outro usuário! Tente outro.");
        }
        // caso email não exista em outro id, atualize o email
        user.setEmail(updateUser.getEmail());

        // verifica se a senha não está nula e nem vazia
        if (updateUser.getPassword() != null && !updateUser.getPassword().isEmpty()) {
            // se o campo senha for preenchido, atualize a senha já criptografando-a
            user.setPassword(passwordEncoder.encode(updateUser.getPassword()));
        }

        // atualizar o tipo
        user.setRole(updateUser.getRole());

        // salvar as alterações do usuário
        return userRepository.save(user);
    }

}