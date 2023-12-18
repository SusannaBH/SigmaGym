package com.backend.dtos;

import java.io.Serializable;
import java.util.List;

import com.backend.entities.ClassEntity;
import com.backend.entities.GymEntity;
import com.backend.entities.PlanEntity;
import com.backend.entities.UserEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "user")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserDto implements Serializable {
	private static final long serialVersionUID = -502753434853358270L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String surname;
	private String username;
	private String address;
	private Integer type;
	private Boolean status;
	private String gender;
	private String email;
	@Column(name = "job_title_worker")
	private String jobTitleWorker;
	@Column(name = "phone_num") // in database the fields it's phone_number
	private String phoneNum;
	private String birthday;
	private String url_img;

  @ManyToMany
	@JoinTable(
	    name = "gym_has_user", // Nombre de la tabla intermedia
	    joinColumns = @JoinColumn(name = "user_id"), // Columna que hace referencia a UserEntity
	    inverseJoinColumns = @JoinColumn(name = "gym_id") // Columna que hace referencia a GymEntity
	)
	List<GymDto> lista_Gyms;
	
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
