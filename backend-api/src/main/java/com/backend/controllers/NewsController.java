
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

import com.backend.entities.NewsEntity;
import com.backend.services.NewsService;



@RestController
@RequestMapping("/news")
@CrossOrigin(origins = "http://localhost:5173")
public class NewsController {
	private NewsService newsService;

	NewsController(NewsService newsService) {
		this.newsService = newsService;
	}
	
	// Obtenemos todos los usuarios 
	@GetMapping
	public List<NewsEntity> getAllNews() {
		return newsService.findAllNews();
	}
	
	// Retornamos un gym por id:
	@GetMapping("/{id}")
	public ResponseEntity<NewsEntity> getNewsById(@PathVariable Integer id) {
	    Optional<NewsEntity> result = newsService.findNewsById(id);
	    
	    return result.map(news -> ResponseEntity.ok().body(news))
	                 .orElse(ResponseEntity.notFound().build());
	}
	
	// Inserta un gym
	@PutMapping()
	public ResponseEntity<String> insertNews(@RequestBody NewsEntity newsEntity) {
		System.out.println(newsEntity.toString()); //data
		newsService.addNews(newsEntity);
		return ResponseEntity.ok("Noticia insertado correctamente");
	}

	// Elimina un usuario
	@DeleteMapping("/{id}")
	public  ResponseEntity<?> deleteGym(@PathVariable Integer id) {
		boolean result = newsService.deleteNews(id);
		return (result) ? ResponseEntity.status(HttpStatus.OK).body("News eliminado") : 
			ResponseEntity.status(HttpStatus.NOT_FOUND).body("No existe esta noticia") ;
	}
}

