package com.backend.app.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Gym {
	Integer id;
	String name;
	String address;
	String phone;
	String email;
	String horary;
	String gym_roll;
	
	// Foraing Key:
	Integer sports_id;
	Integer gym_id;
}
