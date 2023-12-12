package com.backend.services;

import java.util.Iterator;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.backend.entities.FederacionEntity;
import com.backend.entities.GymEntity;
import com.backend.entities.UserEntity;
import com.backend.repository.FederacionRepository;
import com.backend.repository.GymRepository;
import com.backend.repository.UserRepository;

@Service
public class FederacionService {
    private final FederacionRepository federacionRepository;

    public FederacionService(FederacionRepository federacionRepository) {
        this.federacionRepository = federacionRepository;
    }
    
    /**
     * @author Fernando Alaejos
     * @param  none 
     * @return list of gymentity
     */
    public List<FederacionEntity> findAllFederaciones() {
        return federacionRepository.findAll();
    }
    
    
    public Optional<FederacionEntity> findFederacionById(Integer id) {
    	return  federacionRepository.findById(id);
    }
    
    // Esta función hay que retocarla
    public boolean addFederacion(@RequestBody FederacionEntity federacionEntity) {
    	// guardamos la lista de usuarios
    	List<FederacionEntity> listFederaciones = findAllFederaciones();
    	boolean isValidFederacion = true;
    	
    	// Miramos si hay algun usuario con el mismo dni o username
    	// en ese caso no es valido el usuario introducido 
    	for (FederacionEntity federacion : listFederaciones) {
			if (federacionEntity.getName() == federacion.getName()) {
				isValidFederacion = false;
				System.out.println(isValidFederacion);
				return isValidFederacion;
			}
		}
    	
    	federacionRepository.save(federacionEntity);
    	return isValidFederacion;
    }
  
    
    /**
     * @author David Bernal González
     * @param id it's thSe primary key for the register
     * @return true = deleted or false = not found
     */
    public boolean deleteFederacion(Integer id) {
    	Optional<FederacionEntity> checkIfExistGym = findFederacionById(id);
    	federacionRepository.deleteById(id);
    	return checkIfExistGym.isPresent();
    }

}
