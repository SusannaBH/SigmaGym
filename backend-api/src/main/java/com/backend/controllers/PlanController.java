package com.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import com.backend.entities.PlanEntity;
import com.backend.entities.UserEntity;
import com.backend.services.PlanService;
import com.backend.services.UserConversionService;
import com.backend.services.UserService;

@RestController
@RequestMapping("/plans")
public class PlanController {
	private final PlanService planService;

	public PlanController(PlanService planService) {
		this.planService = planService;
	}

	// Obtenemos todos los usuarios
	@GetMapping
	public List<PlanEntity> getAllUsers() {
		return planService.findAllPlans();
	}

	// Retornamos un user por id:
	@GetMapping("/{id}")
	public ResponseEntity<?> getPlanById(@PathVariable Integer id) {
		Optional<PlanEntity> result = planService.findPlanById(id);

		return result.map(plan -> ResponseEntity.ok().body(plan)).orElse(ResponseEntity.notFound().build());
	}
}
