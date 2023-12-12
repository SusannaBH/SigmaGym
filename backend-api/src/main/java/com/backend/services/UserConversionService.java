package com.backend.services;

import com.backend.dtos.UserDto;
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
    public UserDto convertToDTO(UserEntity userEntity) {
        // Utiliza el modelMapper para mapear los campos de userEntity a UserDTO
        // y devuelve el objeto UserDTO resultante
        return modelMapper.map(userEntity, UserDto.class);
    }

    // Método que convierte un UserDTO a una UserEntity utilizando ModelMapper
    public UserEntity convertToEntity(UserDto userDto) {
        // Utiliza el modelMapper para mapear los campos de userDTO a UserEntity
        // y devuelve el objeto UserEntity resultante
        return modelMapper.map(userDto, UserEntity.class);
    }
}
