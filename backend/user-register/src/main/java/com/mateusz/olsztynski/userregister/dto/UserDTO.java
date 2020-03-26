package com.mateusz.olsztynski.userregister.dto;

import com.mateusz.olsztynski.userregister.entity.User;

public class UserDTO {
    private Integer id;
    private String email;
    private String username;

    public UserDTO(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.username = user.getUsername();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
