package com.backend.services;

import com.backend.dtos.GymDto;
import com.backend.entities.GymEntity;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class GymConversionService {

    private final ModelMapper modelMapper;

    public GymConversionService(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public GymDto convertToDTO(GymEntity gymEntity) {
        return modelMapper.map(gymEntity, GymDto.class);
    }

    public GymEntity convertToEntity(GymDto gymDto) {
        return modelMapper.map(gymDto, GymEntity.class);
    }
}