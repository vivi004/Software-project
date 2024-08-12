package com.rollnumber.sdp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rollnumber.sdp.model.Users;
import com.rollnumber.sdp.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService uservice;

    @GetMapping("/getusers")
    public List<Users> getUsers() {
        return uservice.getUsers();
    }

    @PostMapping("/register")
    public Users addUsers(@RequestBody Users user) {
        return uservice.addUsers(user);
    }

    @DeleteMapping("/delete/{uid}")
    public String deleteUser(@PathVariable Long uid) {
        return uservice.deleteUser(uid);
    }

    @PostMapping("/login")
    public Users loginUser(@RequestBody Users user) {
        return uservice.loginUser(user.getUsername(), user.getPassword());
    }
}
