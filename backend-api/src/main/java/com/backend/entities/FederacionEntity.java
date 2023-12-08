package com.backend.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "federation")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FederacionEntity implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	String name;
	String region;
	Integer num_members;
	String type_sport_federation;
	//String gym_roll;
	
	// Foraing Key:
	//Integer sports_id;
	//Integer gym_id;
}
