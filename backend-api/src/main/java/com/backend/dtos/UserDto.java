package com.backend.dtos;

import java.io.Serializable;
import java.util.List;

import com.backend.entities.ClassEntity;
import com.backend.entities.GymEntity;
import com.backend.entities.PlanEntity;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto implements Serializable {
    private static final long serialVersionUID = -502753434853358270L;

    private String name;
    private String surname;
    private String username;
    private String address;
    private Boolean type;
    private Boolean status;
    private String gender;
    private String email;
    private String jobTitleWorker;
    private String phoneNum;
    private String birthday;
    private String url_img;
    
    @ManyToMany
	@JoinTable(
	    name = "gym_has_user", // Nombre de la tabla intermedia
	    joinColumns = @JoinColumn(name = "user_id"), // Columna que hace referencia a UserEntity
	    inverseJoinColumns = @JoinColumn(name = "gym_id") // Columna que hace referencia a GymEntity
	)
	List<GymEntity> lista_Gyms;
	
	@ManyToOne
	@JoinColumn(name = "plan_id") // Nombre de la columna que contiene la clave foránea en la tabla GymEntity
	private PlanEntity plan;
	
	// Para saber las clases de un usuario
	@ManyToMany
	@JoinTable(
	    name = "class_has_user", // Nombre de la tabla intermedia
	    joinColumns = @JoinColumn(name = "user_id"), // Columna que hace referencia a UserEntity
	    inverseJoinColumns = @JoinColumn(name = "class_id") // Columna que hace referencia a GymEntity
	)
	List<ClassEntity> lista_classes;

}
