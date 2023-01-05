package com.example.foodstore.foodstore.menu;


import java.util.Arrays;
import java.util.UUID;

public class Menu {
    private final UUID menuID;
    private final String menuTitle;
    private final String menuIMG;
    private final double menuPrice;
    private final String[] foodList;

    public Menu(UUID menuID, String menuTitle,String menuIMG, double menuPrice, String[] foodList) {
        this.menuID = menuID;
        this.menuTitle = menuTitle;
        this.menuIMG=menuIMG;
        this.menuPrice = menuPrice;
        this.foodList = foodList;
    }

    public UUID getMenuID() {
        return menuID;
    }

    public String getMenuTitle() {
        return menuTitle;
    }
    public String getMenuIMG(){
        return menuIMG;
    }

    public double getMenuPrice() {
        return menuPrice;
    }

    public String[] getFoodList() {
        return foodList;
    }

    @Override
    public String toString() {
        return "Menu{" +
                "menuID=" + menuID +
                ", menuTitle='" + menuTitle + '\'' +
                ", menuIMG = " + menuIMG +
                ", menuPrice=" + menuPrice +
                ", foodList=" + Arrays.toString(foodList) +
                '}';
    }
}
