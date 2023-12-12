package com.backend.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "gym")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class GymEntity implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	String name;
	String address;
	String phone;
	String email;
	String horary;
	//String gym_roll;
	
	// Foraing Key:
	//Integer sports_id;
	//Integer gym_id;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
