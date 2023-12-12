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

import com.backend.entities.UserEntity;
import com.backend.services.UserService;

@RestController
@RequestMapping("users") // localhost:XXXX/users
public class UserController {
	private UserService userService;

	UserController(UserService userService) {
		this.userService = userService;
	}

	// Obtenemos todos los usuarios 
	@GetMapping
	public List<UserEntity> getAllUsers() {
		return userService.findAllUsers();
	}
	
	// Retornamos un user por id:
	@GetMapping("/{id}")
	public ResponseEntity<UserEntity> getUserById(@PathVariable Integer id) {
	    Optional<UserEntity> result = userService.findUserById(id);
	    
	    return result.map(user -> ResponseEntity.ok().body(user))
	                 .orElse(ResponseEntity.notFound().build());
	}
	
	// Inserta un user
	@PutMapping()
	public ResponseEntity<String> insertUser(@RequestBody UserEntity userEntity) {
		System.out.println(userEntity.toString()); //data
		userService.addUser(userEntity);
		return ResponseEntity.ok("Usuario insertado correctamente.");
	}

	// Elimina un usuario
	@DeleteMapping("/{id}")
	public  ResponseEntity<?> deleteUser(@PathVariable Integer id) {
		boolean result = userService.deleteUser(id);
//		return result?true:false;
		return (result) ? ResponseEntity.status(HttpStatus.OK).body("Usuario eliminado") : 
			ResponseEntity.status(HttpStatus.NOT_FOUND).body("No existe ese usuario") ;
	}
}
//el dto pero no se si funciona
/*@RestController
@RequestMapping("users")
public class UserController {
    private final UserService userService;
    private final UserConversionService userConversionService;

    @Autowired
    public UserController(UserService userService, UserConversionService userConversionService) {
        this.userService = userService;
        this.userConversionService = userConversionService;
    }

    // Obtenemos todos los usuarios
    @GetMapping
    public List<UserEntity> getAllUsers() {
        return userService.findAllUsers();
    }

    // Retornamos un user por id:
    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Integer id) {
        Optional<UserEntity> result = userService.findUserById(id);

        return result.map(user -> ResponseEntity.ok().body(user))
                     .orElse(ResponseEntity.notFound().build());
    }

    // Inserta un user
    @PutMapping()
    public ResponseEntity<String> insertUser(@RequestBody UserDTO userDTO) {
        System.out.println(userDTO.toString());
        UserEntity userEntity = userConversionService.convertToEntity(userDTO);
        userService.addUser(userEntity);
        return ResponseEntity.ok("Usuario insertado correctamente");
    }

    // Elimina un usuario
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer id) {
        boolean result = userService.deleteUser(id);

        return (result) ? ResponseEntity.status(HttpStatus.OK).body("Usuario eliminado") :
                          ResponseEntity.status(HttpStatus.NOT_FOUND).body("No existe ese usuario");
    }
}
*/
