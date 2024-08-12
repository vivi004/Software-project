package com.rollnumber.sdp.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rollnumber.sdp.model.ClothingItem;
import com.rollnumber.sdp.service.ClothingItemService;

@RestController
@RequestMapping("/api/clothingitems")
public class ClothingItemController {

    @Autowired
    private ClothingItemService clothingItemService;

    @GetMapping
    public List<ClothingItem> getAllClothingItems() {
        return clothingItemService.getAllClothingItems();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClothingItem> getClothingItemById(@PathVariable Long id) {
        Optional<ClothingItem> clothingItem = clothingItemService.getClothingItemById(id);
        return clothingItem.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ClothingItem createClothingItem(@RequestBody ClothingItem clothingItem) {
        return clothingItemService.saveClothingItem(clothingItem);
    }

    @DeleteMapping("/{id}")
    public void deleteClothingItem(@PathVariable Long id) {
        clothingItemService.deleteClothingItem(id);
    }
}

