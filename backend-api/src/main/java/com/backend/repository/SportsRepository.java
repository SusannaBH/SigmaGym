package com.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.entities.SportsEntity;
import com.backend.entities.UserEntity;

@Repository
public interface SportsRepository extends JpaRepository<SportsEntity, Integer>{

}
