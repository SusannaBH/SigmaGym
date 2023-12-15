package com.backend.repository;


import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.dtos.ClassDto;


@Repository
public interface ClassDtoRepository extends JpaRepository<ClassDto, Integer>{

}
