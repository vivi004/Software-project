package com.srivarshini.sdp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.srivarshini.sdp.model.Product;

public interface ProductRepo extends JpaRepository<Product,Long>{

    
} 