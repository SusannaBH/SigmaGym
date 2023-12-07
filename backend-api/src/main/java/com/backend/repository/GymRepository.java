package com.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.entities.GymEntity;
import com.backend.entities.UserEntity;

@Repository
public interface GymRepository extends JpaRepository<GymEntity, Integer>{


}
