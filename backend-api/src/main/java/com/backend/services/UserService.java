package com.backend.services;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.backend.entities.UserEntity;
import com.backend.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    /**
     * @author Fernando Alaejos
     * @param  none 
     * @return list of userentity
     */
    public List<UserEntity> findAllUsers() {
        return userRepository.findAll();
    }
    
    
    public Optional<UserEntity> findUserById(Integer id) {
    	return  userRepository.findById(id);
    }
    
    public boolean addUser(@RequestBody UserEntity userEntity) {
    	// guardamos la lista de usuarios
    	List<UserEntity> listUsers = findAllUsers();
    	boolean isValidUser = true;
    	
    	// Miramos si hay algun usuario con el mismo dni o username
    	// en ese caso no es valido el usuario introducido 
    	for (UserEntity user : listUsers) {
			if (userEntity.getDni() == user.getDni() || userEntity.getUsername() == user.getUsername()) {
				isValidUser = false;
				System.out.println(isValidUser);
				return isValidUser;
			}
		}
    	
    	userRepository.save(userEntity);
    	return isValidUser;
    }
  
    
    /**
     * @author David Bernal González
     * @param id it's thSe primary key for the register
     * @return true = deleted or false = not found
     */
    public boolean deleteUser(Integer id) {
    	Optional<UserEntity> checkIfExistUser = userRepository.findById(id);
    	userRepository.deleteById(id);
    	return checkIfExistUser.isPresent();
    }
}
