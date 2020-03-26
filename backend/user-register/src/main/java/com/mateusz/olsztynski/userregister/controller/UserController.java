package com.mateusz.olsztynski.userregister.controller;

import com.mateusz.olsztynski.userregister.dto.UserDTO;
import com.mateusz.olsztynski.userregister.entity.User;
import com.mateusz.olsztynski.userregister.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<UserDTO> retrieveUsers(){
        List<User> users = userRepository.findAll();
        List<UserDTO> usersDTO = new ArrayList<>();
        for(User user: users){
            usersDTO.add(new UserDTO(user));
        }
        return usersDTO;
    }

    @PostMapping("/user")
    public ResponseEntity<?> registerUser(@RequestBody User user){
        if(userRepository.findByUsername(user.getUsername())!=null){
            return new ResponseEntity<>("Username already used",HttpStatus.BAD_REQUEST);
        }
        if(userRepository.findByEmail(user.getEmail())!=null){
            return new ResponseEntity<>("Email already used",HttpStatus.BAD_REQUEST);
        }
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
