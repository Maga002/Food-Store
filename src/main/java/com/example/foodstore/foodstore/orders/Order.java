package com.example.foodstore.foodstore.orders;


import java.util.UUID;

public class Order {
    private final UUID orderID;
    private final double orderPrice;
    private final String orderAddress;
    private final String orderDescription;
    private final Integer[] counts;
    private final String[] orderList;



    public Order(UUID orderID, double orderPrice, String orderAddress, String orderDescription, Integer[] counts, String[] orderList) {
        this.orderID = orderID;
        this.orderPrice = orderPrice;
        this.orderAddress = orderAddress;
        this.orderDescription = orderDescription;
        this.counts = counts;
        this.orderList = orderList;
    }

    public UUID getOrderID() {
        return orderID;
    }

    public double getOrderPrice() {
        return orderPrice;
    }

    public String getOrderAddress() {
        return orderAddress;
    }

    public String getOrderDescription() {
        return orderDescription;
    }

    public String[] getOrderList() {
        return orderList;
    }

    public Integer[] getCounts() {
        return counts;
    }
}
