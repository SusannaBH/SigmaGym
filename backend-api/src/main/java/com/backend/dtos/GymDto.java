package com.backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GymDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private String name;
    private String address;
    private String phone;
    private String email;
    private String horary;
}