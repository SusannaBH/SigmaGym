package com.backend.services;

import com.backend.dtos.ClassDto;
import com.backend.entities.ClassEntity;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class ClassConversionService {

    private final ModelMapper modelMapper;

    public ClassConversionService(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public ClassDto convertToDTO(ClassEntity classEntity) {
        return modelMapper.map(classEntity, ClassDto.class);
    }

    public ClassEntity convertToEntity(ClassDto classDto) {
        return modelMapper.map(classDto, ClassEntity.class);
    }
}