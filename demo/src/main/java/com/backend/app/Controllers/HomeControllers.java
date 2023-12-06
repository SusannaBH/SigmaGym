package com.backend.app.Controllers;

import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;
import java.util.ArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;


@Controller
public class HomeControllers {
	// Nos lleva a la pagina inicial
	@GetMapping("/")
	public ModelAndView initialPage() {
	        ModelAndView modelAndView = new ModelAndView("index.html");
	        return modelAndView;
	    }
	
	// Metodo para indtroducir un parametro 
	// recoge los datos dado un usuario
    @RequestMapping(value="/api/login", method=RequestMethod.GET)
    @ResponseBody
    public User getUserInfo(@RequestParam(required=false, defaultValue ="unknown") String name, @RequestParam(required=false, defaultValue ="unknown") String password) {
    	ObjectMapper mapper = new ObjectMapper();
        ObjectNode objectNode = mapper.createObjectNode();
        
        // Creamos la Query:
        final String QUERY="SELECT * FROM mydb.users AS user"
        		+ " WHERE name=\"" + name 
        		+ "\" AND pasword= \""
        		+ password + "\";";
        
        // Creamos el json que retornaremos
        
        
        // Retornamos el objeto
        return objectNode;
	}
    
    // Inserta un nuevo usuario
}
