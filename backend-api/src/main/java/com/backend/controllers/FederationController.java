package com.backend.controllers;

import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.dtos.FederacionDto;
import com.backend.entities.FederacionEntity;
import com.backend.services.FederacionConversionService;
import com.backend.services.FederacionService;

/*@RestController
@RequestMapping("federations")
public class FederationController {
	private FederacionService federacionService;

	FederationController(FederacionService federacionService) {
		this.federacionService = federacionService;
	}
	
	// Obtenemos todos los usuarios 
	@GetMapping
	public List<FederacionEntity> getAllFederations() {
		return federacionService.findAllFederaciones();
	}
	
	// Retornamos un gym por id:
	@GetMapping("/{id}")
	public ResponseEntity<FederacionEntity> getFederationById(@PathVariable Integer id) {
	    Optional<FederacionEntity> result = federacionService.findFederacionById(id);
	    
	    return result.map(federation -> ResponseEntity.ok().body(federation))
	                 .orElse(ResponseEntity.notFound().build());
	}
	
	// Inserta un federation
	@PutMapping()
	public ResponseEntity<String> insertFederation(@RequestBody FederacionEntity federationEntity) {
		System.out.println(federationEntity.toString()); //data
		federacionService.addFederacion(federationEntity);
		return ResponseEntity.ok("Usuario insertado correctamente");
	}

	// Elimina un usuario
	@DeleteMapping("/{id}")
	public  ResponseEntity<?> deleteFederation(@PathVariable Integer id) {
		boolean result = federacionService.deleteFederacion(id);
		return (result) ? ResponseEntity.status(HttpStatus.OK).body("Federación eliminado") : 
			ResponseEntity.status(HttpStatus.NOT_FOUND).body("No existe esta federación") ;
	}
}*/


@RestController
@RequestMapping("federations")
public class FederationController {
	private final FederacionService federacionService;
	private final FederacionConversionService federacionConversionService;

	FederationController(FederacionService federacionService, FederacionConversionService federacionConversionService) {
		this.federacionService = federacionService;
		this.federacionConversionService = federacionConversionService;
	}

	// Obtenemos todas las federaciones
	@GetMapping
	public List<FederacionDto> getAllFederations() {
		List<FederacionEntity> federaciones = federacionService.findAllFederaciones();
		return federaciones.stream()
				.map(federacionConversionService::convertToDTO)
				.collect(Collectors.toList());
	}

	// Retornamos una federación por id
	@GetMapping("/{id}")
	public ResponseEntity<FederacionDto> getFederationById(@PathVariable Integer id) {
		Optional<FederacionEntity> result = federacionService.findFederacionById(id);

		return result.map(federacion -> ResponseEntity.ok().body(federacionConversionService.convertToDTO(federacion)))
				.orElse(ResponseEntity.notFound().build());
	}

	// Inserta una federación
	@PutMapping
	public ResponseEntity<String> insertFederation(@RequestBody FederacionDto federacionDto) {
		FederacionEntity federacionEntity = federacionConversionService.convertToEntity(federacionDto);
		boolean result = federacionService.addFederacion(federacionEntity);

		return result ?
				ResponseEntity.ok("Federación insertada correctamente") :
				ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Federación no válida");
	}

	// Elimina una federación
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteFederation(@PathVariable Integer id) {
		boolean result = federacionService.deleteFederacion(id);
		return result ?
				ResponseEntity.status(HttpStatus.OK).body("Federación eliminada") :
				ResponseEntity.status(HttpStatus.NOT_FOUND).body("No existe esta federación");
	}
}
