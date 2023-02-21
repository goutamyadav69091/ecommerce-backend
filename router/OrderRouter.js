const express = require("express");
const ordersController = require("../controller/OrdersController");
const Commen = require("../helper/Commen");
const app = express()

app.post("/", Commen.validateToken, ordersController.createOrder);

app.get("/", ordersController.getOrders);

app.get("/myorder",Commen.validateToken, ordersController.getMyOrders);

app.get("/order-items/:orderId", ordersController.getOrderItems);

app.put("/", ordersController.updateOrder);

app.delete("/:orderId", ordersController.deleteOrder);


module.exports = app;