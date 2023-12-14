package com.backend.services;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.backend.entities.GymEntity;
import com.backend.entities.NewsEntity;
import com.backend.entities.UserEntity;
import com.backend.repository.GymRepository;
import com.backend.repository.NewsRepository;
import com.backend.repository.UserRepository;

@Service
public class NewsService {
    private final NewsRepository newsRepository;

    public NewsService(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }
    
    /**
     * @author Fernando Alaejos
     * @param  none 
     * @return list of gymentity
     */
    public List<NewsEntity> findAllNews() {
        return newsRepository.findAll();
    }
    
    
    public Optional<NewsEntity> findNewsById(Integer id) {
    	return  newsRepository.findById(id);
    }
    
    // Esta función hay que retocarla
    public boolean addNews(@RequestBody NewsEntity newsEntity) {
    	// guardamos la lista de usuarios
    	List<NewsEntity> listNews = findAllNews();
    	boolean isValidNews = true;
    	
    	// Miramos si hay algun usuario con el mismo dni o username
    	// en ese caso no es valido el usuario introducido 
    	for (NewsEntity news : listNews) {
			if (newsEntity.getTitulo() == news.getTitulo()) {
				isValidNews = false;
				return isValidNews;
			}
		}
    	
    	newsRepository.save(newsEntity);
    	return isValidNews;
    }
  
    
    /**
     * @author David Bernal González
     * @param id it's thSe primary key for the register
     * @return true = deleted or false = not found
     */
    public boolean deleteNews(Integer id) {
    	Optional<NewsEntity> checkIfExistNews = findNewsById(id);
    	newsRepository.deleteById(id);
    	return checkIfExistNews.isPresent();
    }

}
