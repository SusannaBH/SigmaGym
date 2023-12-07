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

import com.backend.entities.GymEntity;
import com.backend.services.GymService;

@RestController
@RequestMapping("news")
public class NewsController {
	private NewsService newsService;

	NewsController(NewsService newsService) {
		this.newsService = newsService;
	}
	
	// Obtenemos todas las noticias 
	@GetMapping
	public LisNewsEntity> getAllNews() {
		return newsService.findAllNews();
	}
	
	
	// Hace falta hacer metodos para modificar noticias
}
