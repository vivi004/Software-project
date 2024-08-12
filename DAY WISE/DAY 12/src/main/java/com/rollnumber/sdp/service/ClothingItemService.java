package com.rollnumber.sdp.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rollnumber.sdp.model.ClothingItem;
import com.rollnumber.sdp.repo.ClothingItemRepo;

@Service
public class ClothingItemService {

    @Autowired
    private ClothingItemRepo clothingItemRepository;

    public List<ClothingItem> getAllClothingItems() {
        return clothingItemRepository.findAll();
    }

    public Optional<ClothingItem> getClothingItemById(Long id) {
        return clothingItemRepository.findById(id);
    }

    public ClothingItem saveClothingItem(ClothingItem clothingItem) {
        return clothingItemRepository.save(clothingItem);
    }

    public void deleteClothingItem(Long id) {
        clothingItemRepository.deleteById(id);
    }
}
