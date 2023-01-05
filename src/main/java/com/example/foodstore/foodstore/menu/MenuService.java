package com.example.foodstore.foodstore.menu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {
    private final MenuDataService menuDataService;

    @Autowired
    public MenuService(MenuDataService menuDataService) {
        this.menuDataService = menuDataService;
    }

    public List<Menu> getAllMenusService() {
        return menuDataService.setAllMenus();
    }
}
