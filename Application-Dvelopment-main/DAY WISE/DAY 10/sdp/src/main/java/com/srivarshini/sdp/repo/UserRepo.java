package com.srivarshini.sdp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.srivarshini.sdp.model.Users;

public interface UserRepo extends JpaRepository<Users,Long> {
    Users findByEmail(String email);
}
