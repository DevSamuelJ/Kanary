package io.github.devsamuelj.kanary.mapper;

import io.github.devsamuelj.kanary.dto.UserRequestDTO;
import io.github.devsamuelj.kanary.dto.UserResponseDTO;
import io.github.devsamuelj.kanary.entity.User;

public class UserMapper {

    // mapper de entrada de dados (DTO -> Entity)
    public static User toEntity(UserRequestDTO requestDTO) {
        User user = new User();
        user.setName(requestDTO.getName());
        user.setEmail(requestDTO.getEmail());
        user.setPassword(requestDTO.getPassword());
        user.setRole(requestDTO.getRole());
        return user;
    }

    // mapper de saída de dados (Entity -> DTO)
    public static UserResponseDTO toResponseDTO(User user) {
        UserResponseDTO responseDTO = new UserResponseDTO();
        responseDTO.setId(user.getId());
        responseDTO.setName(user.getName());
        responseDTO.setEmail(user.getEmail());
        responseDTO.setRole(user.getRole());
        return responseDTO;
    }
}
