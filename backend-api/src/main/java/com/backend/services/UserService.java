package com.backend.services;

import java.util.List;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.backend.dtos.UserDto;
import com.backend.entities.UserEntity;
import com.backend.repository.UserDtoRepository;
import com.backend.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {
	private UserRepository userRepository;
	private UserDtoRepository userDtoRepository;

	public UserService(UserRepository userRepository, UserDtoRepository userDtoRepository) {
		this.userRepository = userRepository;
		this.userDtoRepository = userDtoRepository;
	}

	/**
	 * @author Fernando Alaejos
	 * @param none
	 * @return list of userentity
	 */
	public List<UserDto> findAllUsersDto() {
		return userDtoRepository.findAll();
	}
	
	public List<UserEntity> findAllUsers() {
		return userRepository.findAll();
	}

	public Optional<UserDto> findUserById(Integer id) {
		return userDtoRepository.findById(id);
	}
	
	public Optional<UserEntity> findUserByIdEntity(Integer id) {
		return userRepository.findById(id);
	}
	
	public boolean existsUser(Integer id) {
	    return userRepository.existsById(id);
	}

	public boolean addUser(@RequestBody UserEntity userEntity) {
		// guardamos la lista de usuarios
		List<UserEntity> listUsers = findAllUsers();
		boolean isValidUser = true;

		// Miramos si hay algun usuario con el mismo dni o username
		// en ese caso no es valido el usuario introducido
		for (UserEntity user : listUsers) {
			if (userEntity.getDni().equals(user.getDni()) || userEntity.getUsername().equals(user.getUsername())) {
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

	public Optional<UserEntity> login(String userParam, String passParam) {
		return userRepository.findAll().stream()
				.filter(user -> user.getUsername().equals(userParam) && user.getPassword().equals(passParam))
				.findFirst();
	}
	
	public boolean updateUser(Integer id, UserDto updatedUserData) {
	    Optional<UserEntity> existingUserOptional = userRepository.findById(id);
	    if (existingUserOptional.isPresent()) {
	        UserEntity existingUser = existingUserOptional.get();
	        existingUser.setName(updatedUserData.getName());
	        existingUser.setSurname(updatedUserData.getSurname());
	        existingUser.setEmail(updatedUserData.getEmail());
	        userRepository.save(existingUser);
	        
	        return true;
	    }

	    return false;
	}
}
