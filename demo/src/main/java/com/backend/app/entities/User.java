package com.backend.app.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
	
	// Atributos
	Integer id;
	String name;
	String surename;
	String username;
	String password;
	String address;
	boolean type;
	boolean status;
	String gender;
	String email;
	Integer worker_id;
	String dni;
	String job_title_worker;
	String phone_num;
	Integer client_id;
	String credit_card;
	String birthday;
	Integer plan_id; // Foreing Key hara falta hacer un join para obtener el id
	

}
