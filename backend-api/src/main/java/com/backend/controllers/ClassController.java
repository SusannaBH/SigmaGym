package com.backend.controllers;

import java.util.List;
import java.util.stream.Collectors;

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
import org.springframework.web.bind.annotation.RestController;

import com.backend.dtos.GymDto;
import com.backend.entities.ClassEntity;
import com.backend.entities.GymEntity;
import com.backend.services.ClassService;
import com.backend.services.GymConversionService;
import com.backend.services.GymService;

@RestController
@RequestMapping("classes")
@CrossOrigin(origins = "http://localhost:5173")
public class ClassController {
	private final ClassService classService;

	ClassController(ClassService classService) {
		this.classService = classService;
	}

	@GetMapping
	public List<ClassEntity> getAllGyms() {
		List<ClassEntity> classes = classService.findAllClasses();
		return classes.stream()
				.collect(Collectors.toList());
	}

	@GetMapping("/{id}")
	public ResponseEntity<ClassEntity> getClassById(@PathVariable Integer id) {
	    Optional<ClassEntity> result = classService.findClassById(id);

	    return result.map(resulta -> ResponseEntity.ok(resulta))
	                 .orElse(ResponseEntity.notFound().build());
	}


	@PutMapping
	public ResponseEntity<String> insertClass(@RequestBody ClassEntity classe) {
		boolean result = classService.addClass(classe);

		return result ?
				ResponseEntity.ok("Gym insertado correctamente") :
				ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Classe no válido");
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteGym(@PathVariable Integer id) {
		boolean result = classService.deleteClass(id);
		return result ?
				ResponseEntity.status(HttpStatus.OK).body("Gym eliminado") :
				ResponseEntity.status(HttpStatus.NOT_FOUND).body("No existe esta classe");
	}
	
	@GetMapping("/test/{id}") // ResponseEntity<?>
	public void incrementOneStudent(@PathVariable Integer id) {
		classService.incrementAssistanceToClass(id);
		/*
		return result ?
				ResponseEntity.status(HttpStatus.OK).body("Gym eliminado") :
				ResponseEntity.status(HttpStatus.NOT_FOUND).body("No existe ese gym");
				*/
	}
	
}

