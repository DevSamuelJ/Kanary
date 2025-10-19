package io.github.devsamuelj.kanary.repository;

import io.github.devsamuelj.kanary.entity.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuarios, Long> {

    // buscar por email
    Optional<Usuarios> findByEmail(String email);

}
