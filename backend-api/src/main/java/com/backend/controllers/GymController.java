package com.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.dtos.GymDto;
import com.backend.entities.GymEntity;
import com.backend.entities.UserEntity;
import com.backend.services.GymConversionService;
import com.backend.services.GymService;
/*
@RestController
@RequestMapping("gyms")
public class GymController {
	private GymService gymService;

	GymController(GymService gymService) {
		this.gymService = gymService;
	}
	
	// Obtenemos todos los usuarios 
	@GetMapping
	public List<GymEntity> getAllGyms() {
		return gymService.findAllGyms();
	}
	
	// Retornamos un gym por id:
	@GetMapping("/{id}")
	public ResponseEntity<GymEntity> getGymById(@PathVariable Integer id) {
	    Optional<GymEntity> result = gymService.findGymById(id);
	    
	    return result.map(gym -> ResponseEntity.ok().body(gym))
	                 .orElse(ResponseEntity.notFound().build());
	}
	
	// Inserta un gym
	@PutMapping()
	public ResponseEntity<String> insertGym(@RequestBody GymEntity gymEntity) {
		System.out.println(gymEntity.toString()); //data
		gymService.addGym(gymEntity);
		return ResponseEntity.ok("Usuario insertado correctamente");
	}

	// Elimina un usuario
	@DeleteMapping("/{id}")
	public  ResponseEntity<?> deleteGym(@PathVariable Integer id) {
		boolean result = gymService.deleteGym(id);
		return (result) ? ResponseEntity.status(HttpStatus.OK).body("Gym eliminado") : 
			ResponseEntity.status(HttpStatus.NOT_FOUND).body("No existe ese gym") ;
	}
}*/

@RestController
@RequestMapping("gyms")
@CrossOrigin(origins = "http://localhost:5173")
public class GymController {
	private final GymService gymService;

	GymController(GymService gymService) {
		this.gymService = gymService;
	}

	@GetMapping
	public List<GymDto> getAllUsers() {
		return gymService.findAllGymsDto();
	}
	@GetMapping("/{id}")
	public ResponseEntity<?> getGymById(@PathVariable Integer id) {
		Optional<GymEntity> result = gymService.findGymById(id);

		return result.map(gym -> ResponseEntity.ok().body(gym)).orElse(ResponseEntity.notFound().build());
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteGym(@PathVariable Integer id) {
		boolean result = gymService.deleteGym(id);
		return (result) ?
				ResponseEntity.status(HttpStatus.OK).body("Gym eliminado") :
				ResponseEntity.status(HttpStatus.NOT_FOUND).body("No existe ese gym");
	}
}

