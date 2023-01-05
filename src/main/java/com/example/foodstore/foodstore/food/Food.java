package com.example.foodstore.foodstore.food;

import java.sql.Array;
import java.util.UUID;

public class Food {
    private final UUID foodID;
    private final String title;
    private final String[] ingredients;
    private final double price;
    private final Integer count;
    private FoodCategory category;
    private String imageURL;



    public Food(UUID foodID, String title, String[] ingredients, double price, Integer count, FoodCategory category, String imageURL) {
        this.foodID = foodID;
        this.title = title;
        this.ingredients = ingredients;
        this.price = price;
        this.count = count;
        this.category = category;
        this.imageURL = imageURL;
    }

    public enum FoodCategory{
        MAIN,SIDE,DESSERT,SALAD
    }

    public UUID getFoodID() {
        return foodID;
    }

    public FoodCategory getCategory() {
        return category;
    }

    public String getTitle() {
        return title;
    }

    public String[] getIngredients() {
        return ingredients;
    }

    public String getImageURL(){
        return imageURL;
    }

    public double getPrice() {
        return price;
    }

    public Integer getCount() {
        return count;
    }

    @Override
    public String toString() {
        return "Food{" +
                "foodID=" + foodID +
                ", title='" + title + '\'' +
                ", ingredients=" + ingredients +
                ", price=" + price +
                ", count=" + count +
                ", category=" + category +
                ", imageURL=" + imageURL +
                '}';
    }
}
