package io.github.devsamuelj.kanary.repository;

import io.github.devsamuelj.kanary.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // buscar por email
    Optional<User> findByEmail(String email);

    // se já existe o email
    boolean existsByEmail(String email);

    // se o email já existe em outro id
    boolean existsByEmailAndIdNot(String email, Long id);

}
