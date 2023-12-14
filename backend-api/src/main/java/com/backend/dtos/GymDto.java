package com.backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

import com.backend.entities.ClassEntity;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GymDto implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private String name;
    private String address;
    private String phone;
    private String email;
    private String horary;
    
    @ManyToMany
	@JoinTable(
	    name = "gym_has_class", // Nombre de la tabla intermedia
	    joinColumns = @JoinColumn(name = "gym_id"), // Columna que hace referencia a UserEntity
	    inverseJoinColumns = @JoinColumn(name = "class_id") // Columna que hace referencia a GymEntity
	)
	List<ClassEntity> lista_classes;
}