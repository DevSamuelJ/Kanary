package io.github.devsamuelj.kanary.controller;

import io.github.devsamuelj.kanary.dto.UserRequestDTO;
import io.github.devsamuelj.kanary.dto.UserResponseDTO;
import io.github.devsamuelj.kanary.entity.User;
import io.github.devsamuelj.kanary.mapper.UserMapper;
import io.github.devsamuelj.kanary.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    // usar Response Entity para controlar a resposta HTTP
    public ResponseEntity<List<UserResponseDTO>> listUsers() {
        List<UserResponseDTO> users = userService.listAll()
                .stream()
                .map(UserMapper::toResponseDTO)
                .toList();
        // se a resposta HTTP for 200 OK, retorne a lista de usuários
        return ResponseEntity.ok(users);
    }

    @PostMapping
    public ResponseEntity<UserResponseDTO> createUser(
            @Valid @RequestBody UserRequestDTO dto
    ) {
        // transformando em entidade e mapeando
        User user = UserMapper.toEntity(dto);
        // criando o novo usuário
        User savedUser = userService.create(user);
        // criando o corpo da resposta HTTP
        UserResponseDTO response = UserMapper.toResponseDTO(savedUser);
        // retornando o status 201 CREATED
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        // deletando o usuário via id
        userService.deleteById(id);
        // retornando o status de 204 NO CONTENT após deletar
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserResponseDTO> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UserRequestDTO dto
    ) {
        // transformando em entidade
        User user = UserMapper.toEntity(dto);
        // atualizando usuário pelo id
        User updatedUser = userService.update(id, user);
        // criando o corpo da resposta HTTP
        UserResponseDTO response = UserMapper.toResponseDTO(updatedUser);
        // retornando o status 200 OK
        return ResponseEntity.ok(response);
    }
}