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
import com.backend.entities.SportsEntity;
import com.backend.entities.UserEntity;
import com.backend.services.SportsService;
import com.backend.services.UserConversionService;
import com.backend.services.UserService;

@RestController
@RequestMapping("/sports")
@CrossOrigin(origins = "http://localhost:5173")
public class SportsController {
	private final SportsService sportsService;

	public SportsController(SportsService sportsService) {
		this.sportsService = sportsService;
	}

	// Obtenemos todos los usuarios
	@GetMapping
	public List<SportsEntity> getAllUsers() {
		return sportsService.findAllSports();
	}

	// Retornamos un user por id:
	@GetMapping("/{id}")
	public ResponseEntity<?> getSportsById(@PathVariable Integer id) {
		Optional<SportsEntity> result = sportsService.findSportsById(id);

		return result.map(sport -> ResponseEntity.ok().body(sport)).orElse(ResponseEntity.notFound().build());
	}

	// Inserta un deporte
//	@PutMapping
//	public ResponseEntity<String> insertSport(@RequestBody SportsEntity sport) {
//		System.out.println(sport.toString());
//		SportsService.addSports(sport);
//		return ResponseEntity.ok("Usuario insertado correctamente");
//	}

	// Elimina un deporte
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteSport(@PathVariable Integer id) {
		boolean result = sportsService.deleteSport(id);

		return (result) ? ResponseEntity.status(HttpStatus.OK).body("Deporte eliminado")
				: ResponseEntity.status(HttpStatus.NOT_FOUND).body("No existe ese usuario");
	}
}
