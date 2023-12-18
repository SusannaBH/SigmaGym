package com.backend.dtos;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.backend.entities.UserEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "class")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClassDto implements Serializable{
    private static final long serialVersionUID = 1L;

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String coach;
    private String horary;
    private String sport;
    private Integer num_students_on_class = getNumStudentsOnClass();
    private Integer max_students;

    @ManyToMany
    @JoinTable(
        name = "class_has_user",
        joinColumns = @JoinColumn(name = "class_id"),
        inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    
    List<UserEntity> lista_usuarios_por_clase;
    
    // Contamos el numero de alumnos en una classe
    public Integer getNumStudentsOnClass() {
        return lista_usuarios_por_clase != null ? lista_usuarios_por_clase.size() : 0;
    }



//    @Query("SELECT NEW com.backend.dtos.CombinedDto(u.id, u.name, g.id, g.name, c.id, c.name) " +
//            "FROM UserEntity u " +
//            "JOIN u.listaGyms g " +
//            "JOIN g.listaClasses c")
//    List<UserEntity> lista_test;
}

