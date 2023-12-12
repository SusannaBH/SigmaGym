package com.backend.dtos;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO implements Serializable {
    private static final long serialVersionUID = -502753434853358270L;

    private String name;
    private String surname;
    private String username;
    private String address;
    private Boolean type;
    private Boolean status;
    private String gender;
    private String email;
    private String jobTitleWorker;
    private String phoneNum;
    private String birthday;
}
}