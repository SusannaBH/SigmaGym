package com.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.dtos.UserDto;
import com.backend.entities.UserEntity;

@Repository
public interface UserDtoRepository extends JpaRepository<UserDto, Integer>{

}
