package com.example.foodstore.foodstore.food;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.Array;
import java.util.List;
import java.util.UUID;

@Repository
public class FoodDataService {
    private final JdbcTemplate jdbcTemplate;


    public FoodDataService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Food> selectAllFood(){
        String sql = "SELECT * FROM foods";
        return jdbcTemplate.query(sql,getFoodRowMapper());
    };

    private RowMapper<Food> getFoodRowMapper() {
        return(resultSet, i) -> {
            String foodID_Str = resultSet.getString("food_id");
            UUID food_id = UUID.fromString(foodID_Str);
            String title = resultSet.getString("title");
            Array array = resultSet.getArray("ingredients");
            String[] ingredients = (String[]) array.getArray();
            double price = resultSet.getDouble("price");
            Integer count = resultSet.getInt("count");
            String foodCategoryStr = resultSet.getString("category").toUpperCase();
            Food.FoodCategory category = Food.FoodCategory.valueOf(foodCategoryStr);
            String imageURL = resultSet.getString("image");
            return new Food(food_id,title,ingredients,price,count,category,imageURL);
        };
    }

}
