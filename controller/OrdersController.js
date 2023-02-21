const ordersServises = require("../servise/OrdersService");
const ordersValidation = require("../validation/schema/OrdersValidation");


class OrdersController {
    constructor() { }

    async createOrder(req, res) {
        try {
            req.body.userId = req.userId; 
            console.log(req.body);
            let validation = await ordersValidation.createOrder(req);
            if (validation && validation.status && validation.status == "ERROR") {
                res.statusCode = 400; //bad request
                res.json(validation);
                return false;
            }
            let result = await ordersServises.createOrder(req, res);
            console.log('createOrder',result);
            let productId = req.body.productId;
            let productPrice = req.body.productPrice;
            let productQuantity = req.body.productQuantity;
            const orderId = result.insertId;
            // console.log('DATA CHECK',productId,productPrice,productQuantity,orderId)
            if (!Array.isArray(productId)) {
                let orderItem = {
                    productId: productId,
                    productPrice: productPrice,
                    productQuantity: productQuantity,
                    orderId
                };
                let createOrderItem = await ordersServises.insertOrderItem(orderItem);
                console.log('createOrderItem',createOrderItem);
            } else {
                for (let i = 0; i < productId.length; i++) {
                    let orderItem = {
                        productId: productId[i],
                        productPrice: productPrice[i],
                        productQuantity: productQuantity[i],
                        orderId
                    };
                    let createOrderItem = await ordersServises.insertOrderItem(orderItem);
                    console.log('createOrderItem',createOrderItem);
                }
            }
            res.statusCode = 201; // record created
            res.json({
                message: "Order has been created"
            });
            
        } catch (error) {
            console.log("controller createOrder page error", error);
        }
    };

    async getOrders(req, res) {
        try {
            let getAllOrders = await ordersServises.getOrders(req, res);
            res.statusCode = 200; // success
            res.json(
                getAllOrders
            );
        } catch (error) {
            console.log("controller getOrders page error", error);
        }
    };

    async getMyOrders(req, res) {
        try {
            let getMyOrders = await ordersServises.getMyOrders(req, res);
            res.statusCode = 200; // success
            res.json(
                getMyOrders
            );
        } catch (error) {
            console.log("controller getOrders page error", error);
        }
    };

    async getOrderItems(req, res) {
        try {
            let getOrderItems = await ordersServises.getOrderItems(req, res);
            res.statusCode = 200; // success
            res.json(
                getOrderItems
            );
        } catch (error) {
            console.log("controller getOrders page error", error);
        }
    };

    async updateOrder(req, res) {
        try {
            let validation = await ordersValidation.updateOrder(req);
            if (validation && validation.status && validation.status == "ERROR") {
                res.statusCode = 400; //bad request
                res.json(validation);
                return false;
            }
            await ordersServises.updateOrder(req, res);
            res.statusCode = 201; // record created
            res.json({
                message: "Order has been Update"
            });
        } catch (error) {
            console.log("controller updateOrder page error", error);
        }
    };

    async deleteOrder(req, res) {
        try {
            await ordersServises.deleteOrder(req, res);
            res.statusCode = 200; // success
            res.json({
                message: "order has been Deleted Successfully"
            });
        } catch (error) {
            console.log("controller deleteOrder page error", error);
        }
    };


}
module.exports = new OrdersController();