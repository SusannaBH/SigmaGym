package com.backend.app.entities;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Federation {
	Integer id;
	String name;
	String region;
	Integer num_members;
	String type_sport_federation;

}
