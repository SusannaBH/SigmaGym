package com.backend.services;

import com.backend.dtos.UserDTO;
import com.backend.entities.UserEntity;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class UserConversionService {

    // Se declara un objeto ModelMapper para manejar las conversiones
    private final ModelMapper modelMapper;

    // Constructor que recibe un ModelMapper como parámetro
    public UserConversionService(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    // Método que convierte una UserEntity a un UserDTO utilizando ModelMapper
    public UserDTO convertToDTO(UserEntity userEntity) {
        // Utiliza el modelMapper para mapear los campos de userEntity a UserDTO
        // y devuelve el objeto UserDTO resultante
        return modelMapper.map(userEntity, UserDTO.class);
    }

    // Método que convierte un UserDTO a una UserEntity utilizando ModelMapper
    public UserEntity convertToEntity(UserDTO userDTO) {
        // Utiliza el modelMapper para mapear los campos de userDTO a UserEntity
        // y devuelve el objeto UserEntity resultante
        return modelMapper.map(userDTO, UserEntity.class);
    }
}
