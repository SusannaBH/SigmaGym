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

import com.backend.dtos.UserDto;
import com.backend.entities.UserEntity;
import com.backend.services.UserConversionService;
import com.backend.services.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
	private final UserService userService;
	private final UserConversionService userConversionService;

	public UserController(UserService userService, UserConversionService userConversionService) {
		this.userService = userService;
		this.userConversionService = userConversionService;
	}

	// Obtenemos todos los usuarios
	@GetMapping
	public List<UserEntity> getAllUsers() {
		return userService.findAllUsers();
	}

	// Verifica el logging:
	@PostMapping("/login")
	public Boolean login(@RequestParam String username, @RequestParam String password) {
		return userService.login(username, password).isPresent() ? true : false;
	}

	// Retornamos un user por id:
	@GetMapping("/{id}")
	public ResponseEntity<?> getUserById(@PathVariable Integer id) {
		Optional<UserEntity> result = userService.findUserById(id);

		return result.map(user -> ResponseEntity.ok().body(user)).orElse(ResponseEntity.notFound().build());
	}

	// Inserta un user
	@PutMapping
	public ResponseEntity<String> insertUser(@RequestBody UserDto userDto) {
		System.out.println(userDto.toString());
		UserEntity userEntity = userConversionService.convertToEntity(userDto);
		userService.addUser(userEntity);
		return ResponseEntity.ok("Usuario insertado correctamente");
	}

	// Elimina un usuario
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable Integer id) {
		boolean result = userService.deleteUser(id);

		return (result) ? ResponseEntity.status(HttpStatus.OK).body("Usuario eliminado")
				: ResponseEntity.status(HttpStatus.NOT_FOUND).body("No existe ese usuario");
	}
}
