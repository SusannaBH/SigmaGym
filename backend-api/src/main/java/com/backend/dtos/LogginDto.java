package com.backend.dtos;

import java.io.Serializable;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.backend.entities.PlanEntity;
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
@Table(name = "user")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LogginDto implements Serializable{
    private static final long serialVersionUID = 1L;

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Boolean isLogginSuccessfull = false;
    private Integer id;

    @ManyToOne
	@JoinColumn(name = "plan_id") // Nombre de la columna que contiene la clave foránea en la tabla GymEntity
	private PlanEntity plan;
}
