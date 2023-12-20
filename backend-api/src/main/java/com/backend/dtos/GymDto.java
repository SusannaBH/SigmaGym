package com.backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

import com.backend.entities.ClassEntity;
import com.backend.entities.GymEntity;
import com.backend.entities.PlanEntity;
import com.backend.entities.UserEntity;

import jakarta.persistence.AssociationOverride;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "gym")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class GymDto implements Serializable {
    private static final long serialVersionUID = 1L;
    
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
    private String name;
    private String address;
    private String phone;
    private String email;
    private String horary;
    
    @ManyToMany
    @JoinTable(
        name = "gym_has_class", // Nombre de la primera tabla intermedia
        joinColumns = @JoinColumn(name = "gym_id"), // Columna que hace referencia a UserEntity
        inverseJoinColumns = @JoinColumn(name = "class_id") // Columna que hace referencia a ClassEntity
    )
    List<ClassDto> lista_classes_gym;

   
}