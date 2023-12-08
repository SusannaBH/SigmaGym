package com.backend.app.entities;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Sport {
	Integer id;
	String name;
	String description;
	
	// Foreing Keys de la clase
	Integer sports_id;
	Integer federation_id;
}
