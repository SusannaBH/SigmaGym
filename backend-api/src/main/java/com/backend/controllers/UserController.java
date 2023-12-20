package com.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.dtos.LogginDto;
import com.backend.dtos.UserDto;
import com.backend.entities.UserEntity;
import com.backend.services.UserConversionService;
import com.backend.services.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
	private UserService userService;
	private UserConversionService userConversionService;

	public UserController(UserService userService) {
		this.userService = userService;
	}

	// Obtenemos todos los usuarios
	@GetMapping
	public List<UserDto> getAllUsers() {
		return userService.findAllUsersDto();
	}
	
	// Obtenemos todos los usuarios (retornando una entidad)
	@GetMapping("/entities")
	public List<UserEntity> getAllUsersEntity() {
		return userService.findAllUsers();
	}

	// Verifica el logging:
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestParam String username, @RequestParam String password) {
	    Optional<LogginDto> loginResult = userService.login(username, password);
	    
	    if(loginResult.isEmpty()){
	    	return ResponseEntity.notFound().build();
	    }else {
	    	return ResponseEntity.ok(loginResult);
	    }
//	    return loginResult
//	            .map(logginD -> ResponseEntity.ok().body(logginDto))
//	            .orElse(ResponseEntity.notFound().build());
	}

	
	
	// Retornamos un user por id:
		@GetMapping("/entities/{id}")
		public ResponseEntity<?> getUserByIdEntity(@PathVariable Integer id) {
		    Optional<UserEntity> result = userService.findUserByIdEntity(id);

		    return result.map( user -> ResponseEntity.ok().body(user))
		                 .orElse(ResponseEntity.notFound().build());
		    
	}
		
	// Retornamos un user por id:
	@GetMapping("/{id}")
	public ResponseEntity<?> getUserById(@PathVariable Integer id) {
	    Optional<UserDto> result = userService.findUserById(id);

	    return result.map( user -> ResponseEntity.ok().body(user))
	                 .orElse(ResponseEntity.notFound().build());
	}

	// Inserta un user
	@PostMapping
	public ResponseEntity<String> insertUser(@RequestBody UserEntity user) {
	    boolean response = userService.addUser(user);
			if(response){
	    	return ResponseEntity.status(HttpStatus.CREATED).body("Usuario insertado correctamente.");
			}
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error al crear el usuario.");
	}


	// Elimina un usuario
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable Integer id) {
		boolean result = userService.deleteUser(id);

		return (result) ? ResponseEntity.status(HttpStatus.OK).body("Usuario eliminado")
				: ResponseEntity.status(HttpStatus.NOT_FOUND).body("No existe ese usuario");
	}
	
	// Modifica un usuario
	@PutMapping("/{id}")
	public ResponseEntity<?> updateUser(@PathVariable Integer id, @RequestBody UserEntity updatedUserData) {
	    if (!userService.existsUser(id)) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No existe ese usuario");
	    }
	    boolean result = userService.updateUser(id, updatedUserData);

	    return (result) ? ResponseEntity.status(HttpStatus.OK).body("Usuario modificado exitosamente")
	            : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al modificar el usuario");
	}
	// Cambia el plan de un usuario
	@PostMapping("/{id}/changeplan")
	public ResponseEntity<?> changeUserPlan(@PathVariable Integer id, @RequestParam Integer newPlan) {
	    if (!userService.existsUser(id)) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No existe ese usuario");
	    }

	    boolean result = userService.changeUserPlan(id, newPlan);

	    return (result) ? ResponseEntity.status(HttpStatus.OK).body("Plan de usuario modificado exitosamente")
	            : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al modificar el plan de usuario");
	}


}
