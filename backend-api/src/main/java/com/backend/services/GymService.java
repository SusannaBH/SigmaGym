package com.backend.services;

import java.util.List;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.backend.dtos.GymDto;
import com.backend.entities.GymEntity;
import com.backend.repository.GymDtoRepository;
import com.backend.repository.GymRepository;
import com.backend.entities.UserEntity;
import com.backend.repository.GymDtoRepository;
import com.backend.repository.GymRepository;
import com.backend.repository.UserDtoRepository;
import com.backend.repository.UserRepository;

@Service
public class GymService {
    private final GymRepository gymRepository;
	private GymDtoRepository gymDtoRepository;


    public GymService(GymRepository gymRepository, GymDtoRepository gymDtoRepository) {
        this.gymRepository = gymRepository;
		this.gymDtoRepository = gymDtoRepository;

    private GymDtoRepository gymDtoRepository;

    public GymService(GymRepository gymRepository, GymDtoRepository gymDtoRepository) {
        this.gymRepository = gymRepository;
        this.gymDtoRepository = gymDtoRepository;
    }
    /**
     * @author Fernando Alaejos
     * @param  none 
     * @return list of gymentity
     */
    public List<GymDto> findAllGymsDto() {
        return gymDtoRepository.findAll();
    }
    public List<GymEntity> findAllGyms() {
        return gymRepository.findAll();
    }
    
    public Optional<GymEntity> findGymById(Integer id) {
    	return  gymRepository.findById(id);
    public List<GymDto> findAllGyms() {
        return gymDtoRepository.findAll();
    }
    
    
    public Optional<GymDto> findGymById(Integer id) {
    	return  gymDtoRepository.findById(id);
    }
    
    // Esta función hay que retocarla
    public boolean addGym(@RequestBody GymEntity gymEntity) {
    	// guardamos la lista de usuarios
    	List<GymDto> listGyms = gymDtoRepository.findAll();
    	boolean isValidGym = true;
    	
    	// Miramos si hay algun usuario con el mismo dni o username
    	// en ese caso no es valido el usuario introducido 
    	for (GymDto gym : listGyms) {
			if (gymEntity.getName() == gym.getName()) {
				isValidGym = false;
				System.out.println(isValidGym);
				return isValidGym;
			}
		}
    	
    	gymRepository.save(gymEntity);
    	return isValidGym;
    }
  
    
    /**
     * @author David Bernal González
     * @param id it's thSe primary key for the register
     * @return true = deleted or false = not found
     */
    public boolean deleteGym(Integer id) {
    	Optional<GymEntity> checkIfExistGym = gymRepository.findById(id);;
    	gymRepository.deleteById(id);
    	return checkIfExistGym.isPresent();
    }

}
