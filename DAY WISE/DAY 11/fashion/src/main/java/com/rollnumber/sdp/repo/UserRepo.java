package com.rollnumber.sdp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rollnumber.sdp.model.Users;

public interface UserRepo extends JpaRepository<Users, Long> {
    Users findByUsername(String username);
}
