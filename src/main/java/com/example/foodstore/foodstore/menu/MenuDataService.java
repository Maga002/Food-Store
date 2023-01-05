package com.example.foodstore.foodstore.menu;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.Array;
import java.util.List;
import java.util.UUID;

@Repository
public class MenuDataService {

    private JdbcTemplate jdbcTemplate;

    public MenuDataService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    public List<Menu> setAllMenus() {
        String sql = "SELECT * FROM menus";
        return jdbcTemplate.query(sql,getMenuRowMapper());
    }

    private RowMapper<Menu> getMenuRowMapper() {
        return (resultSet,i) -> {
            String menuID_Str = resultSet.getString("menu_id");
            UUID menu_id = UUID.fromString(menuID_Str);
            String menuTitle = resultSet.getString("title");
            String menuIMG = resultSet.getString("menuimg");
            double menuPrice = resultSet.getDouble("menu_price");
            Array array = resultSet.getArray("foodList");
            String[] foodList = (String[]) array.getArray();
            return new Menu(menu_id,menuTitle,menuIMG,menuPrice,foodList);
        };
    }
}
