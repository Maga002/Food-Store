package com.example.foodstore.foodstore.orders;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderDataService orderDataService;

    public OrderService(OrderDataService orderDataService) {
        this.orderDataService = orderDataService;
    }

    public List<Order> getAllOrders() {
        return orderDataService.selectAllOrders();
    }
}
