package com.example.foodstore.foodstore.food;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodService {

    private FoodDataService foodDataService;

    @Autowired
    public FoodService(FoodDataService foodDataService) {
        this.foodDataService = foodDataService;
    }

    public List<Food> getAllFoods() {
        return foodDataService.selectAllFood();
    }
}
