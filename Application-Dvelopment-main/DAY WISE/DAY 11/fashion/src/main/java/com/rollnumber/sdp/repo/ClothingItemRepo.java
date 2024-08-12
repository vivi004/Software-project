package com.rollnumber.sdp.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rollnumber.sdp.model.ClothingItem;

@Repository
public interface ClothingItemRepo extends JpaRepository<ClothingItem, Long> {
}

