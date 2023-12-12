package com.backend.services;

import com.backend.dtos.FederacionDto;

import com.backend.entities.FederacionEntity;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class FederacionConversionService {

    private final ModelMapper modelMapper;

    public FederacionConversionService(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public FederacionDto convertToDTO(FederacionEntity federacionEntity) {
        return modelMapper.map(federacionEntity, FederacionDto.class);
    }

    public FederacionEntity convertToEntity(FederacionDto federacionDto) {
        return modelMapper.map(federacionDto, FederacionEntity.class);
    }
}
