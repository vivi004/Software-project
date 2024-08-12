package com.srivarshini.sdp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srivarshini.sdp.model.Product;
import com.srivarshini.sdp.model.Users;
import com.srivarshini.sdp.repo.ProductRepo;
import com.srivarshini.sdp.repo.UserRepo;

@Service
public class UserService {
    
    @Autowired
    private UserRepo urepo;

    @Autowired
    private ProductRepo prepo;

    public Users addUsers(Users user){
         return urepo.save(user);
    }
    public String deleteUser(Long uid){
        urepo.deleteById(uid);
        return "User Deleted Successfully" + uid;
    }
    public List<Users> getUsers(){
        return urepo.findAll();
    }
    public Users findUserByEmail(String email) {
        return urepo.findByEmail(email);
    }
    
    
    // <--------------------------->
    
    public List<Product> getproduct(){
        return prepo.findAll();
    }
    public Product addproducts(Product product){
        return prepo.save(product);
    }
    public String deleteproduct(Long id){
        prepo.deleteById(id);
        return "User Deleted Successfully" + id;
    }
}
