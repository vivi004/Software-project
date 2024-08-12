package com.srivarshini.sdp.repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.srivarshini.sdp.model.Orders;

public interface OrderRepo extends JpaRepository<Orders, Long> {
}