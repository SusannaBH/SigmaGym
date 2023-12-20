package com.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.backend.dtos.LogginDto;
import com.backend.dtos.UserDto;
import com.backend.entities.PlanEntity;
import com.backend.entities.UserEntity;
import com.backend.repository.PlanRepository;
import com.backend.repository.UserDtoRepository;
import com.backend.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {
	private UserRepository userRepository;
	private UserDtoRepository userDtoRepository;
    private final PlanRepository planRepository; // Agregado


	public UserService(UserRepository userRepository, UserDtoRepository userDtoRepository, PlanRepository planRepository) {
		this.userRepository = userRepository;
		this.userDtoRepository = userDtoRepository;
		this.planRepository = planRepository;
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
		System.out.print(checkIfExistUser);
		userRepository.deleteById(id);
		return checkIfExistUser.isPresent();
	}

	public Optional<LogginDto> login(String userParam, String passParam) {
		Optional<UserEntity> userOptionalEntity = userRepository.findAll().stream()
				.filter(user -> user.getUsername().equals(userParam) 
						&& user.getPassword().equals(passParam))
				.findFirst();
		
		
		Optional<LogginDto> logginDto = Optional.ofNullable(new LogginDto());
		if(userOptionalEntity.isPresent()) {
			Optional<UserDto> userDto = userDtoRepository.findById(userOptionalEntity.get().getId());
			logginDto.get().setIsLogginSuccessfull(true);
			logginDto.get().setId(userOptionalEntity.get().getId());
			logginDto.get().setPlan(userDto.get().getPlan());
		} 
		return logginDto;
	}

	public boolean updateUser(Integer id, UserEntity updatedUserData) {
		Optional<UserEntity> existingUserOptional = userRepository.findById(id);
		if (existingUserOptional.isPresent()) {
			UserEntity existingUser = existingUserOptional.get();
			existingUser.setName(updatedUserData.getName());
			existingUser.setSurname(updatedUserData.getSurname());
			existingUser.setEmail(updatedUserData.getEmail());
			existingUser.setUsername(updatedUserData.getUsername());
			existingUser.setPassword(updatedUserData.getPassword());
			existingUser.setAddress(updatedUserData.getAddress());
			existingUser.setPhone_num(updatedUserData.getPhone_num());
			userRepository.save(existingUser);

			return true;
		}
		return false;
	}
	
	@Transactional
    public boolean changeUserPlan(Integer userId, Integer newPlanId) {
        Optional<UserDto> optionalUser = userDtoRepository.findById(userId);
        Optional<PlanEntity> optionalNewPlan = planRepository.findById(newPlanId);

        if (optionalUser.isPresent() && optionalNewPlan.isPresent()) {
            UserDto user = optionalUser.get();
            PlanEntity newPlan = optionalNewPlan.get();

            user.setPlan(newPlan); 
            userDtoRepository.save(user);
            return true;
        }
        return false;
    }
}
