package com.srivarshini.sdp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srivarshini.sdp.model.Orders;
import com.srivarshini.sdp.model.Product;
import com.srivarshini.sdp.model.Users;
import com.srivarshini.sdp.repo.OrderRepo;
import com.srivarshini.sdp.repo.ProductRepo;
import com.srivarshini.sdp.repo.UserRepo;

@Service
public class OrderService {
    @Autowired
    private UserRepo ur;

    @Autowired
    private ProductRepo pr;

    @Autowired
    private OrderRepo or;
     public Orders createOrder(Long userId, Long productId, String userAddress, String payMethod) {
        Users user = ur.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Product product = pr.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));

        Orders order = new Orders();
        order.setUser(user);
        order.setProduct(product);
        order.setUserAddress(userAddress);
        order.setPayMethod(payMethod);
        order.setOrderConfirmed(false); // Default value for new orders

        return or.save(order);
    }
}
