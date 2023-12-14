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
@Table(name = "federation")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class FederacionEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String region;
    private Integer num_members;
    private String type_sport_federation;
    //String gym_roll;

    // Foraing Key:
    private Integer sports_id;
    private Integer gym_id;
}
