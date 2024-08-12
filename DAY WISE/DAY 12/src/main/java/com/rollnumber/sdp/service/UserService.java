package com.rollnumber.sdp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rollnumber.sdp.model.Users;
import com.rollnumber.sdp.repo.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepository;

    public List<Users> getUsers() {
        return userRepository.findAll();
    }

    public Users addUsers(Users user) {
        return userRepository.save(user);
    }

    public String deleteUser(Long uid) {
        userRepository.deleteById(uid);
        return "User deleted with id: " + uid;
    }

    public Users loginUser(String username, String password) {
        Users user = userRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
}
