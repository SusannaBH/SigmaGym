package com.backend.entities;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
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
public class UserEntity implements Serializable{
	private static final long serialVersionUID = -502753434853358270L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String surname;
	private String username;
	private String password;
	private String address;
	private Boolean type;
	private Boolean status;
	private String gender;
	private String email;
	private Integer worker_id;
	private String dni;
	private String job_title_worker;
	private String phone_num;
	private Integer client_id;
	private String credit_card;
	private String birthday;
	private String url_img;
	
	//private Integer plan_id; // Foreing Key hara falta hacer un join para obtener el id
	
	
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
	
	
}
