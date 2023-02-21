const ordersModal = require("../modal/OrdersModal");

class OrdersService {
    constructor() { }

    async createOrder(req, res) {
        console.log("req.body", req.body);
        let data = {
            fullName: req.body.fullName,
            email: req.body.email,
            primaryContact: req.body.primaryContact,
            secondaryContact: req.body.secondaryContact,
            shippingAddress: req.body.shippingAddress,
            shippingCity: req.body.shippingCity,
            shippingPincode: req.body.shippingPincode,
            billingAddress: req.body.billingAddress,
            billingCity: req.body.billingCity,
            billingPincode: req.body.billingPincode,
            paymentMethod: req.body.paymentMethod,
            grandTotal: req.body.grandTotal,
            userId: req.body.userId
        };
        let createOrder = await ordersModal.insertOrder(data)
        return createOrder;
    };
    async insertOrderItem(orderItem) {
        let result = await ordersModal.insertOrderItem(orderItem);
        return result;
    }

    async getOrders(req, res) {
        let getAllOrders = await ordersModal.getAllOrders()
        console.log("getAllOrders", getAllOrders);
        return getAllOrders
    };

    async getMyOrders(req, res) {
        let userId = req.userId
        console.log(userId);
        let getMyOrders = await ordersModal.getMyOrders(userId)
        console.log("getMyOrders", getMyOrders);
        return getMyOrders
    };

    async getOrderItems(req, res) {
        let orderId = req.params.orderId;
        console.log('*** orderId ***',orderId);
        let getOrderItems = await ordersModal.getOrderItems(orderId);
        console.log("getOrderItems", getOrderItems);
        return getOrderItems;
    };

    async updateOrder(req, res) {
        let data = {
            fullName: req.body.fullName,
            email: req.body.email,
            primaryContact: req.body.primaryContact,
            alternetContact: req.body.alternetContact,
            shippingAddress: req.body.shippingAddress,
            shippingCity: req.body.shippingCity,
            shippingPincode: req.body.shippingPincode,
            billingAddress: req.body.billingAddress,
            billingCity: req.body.billingCity,
            billingPincode: req.body.billingPincode,
            paymentMethod: req.body.paymentMethod,
            orderId: req.body.orderId
        };
        console.log("data", data);
        await ordersModal.updateOrder(data)
        return true
    };

    async deleteOrder(req, res) {
        let orderId = req.params.orderId
        let deleteOrder = await ordersModal.deleteOrder(orderId)
        console.log("deleteOrder", deleteOrder);
        return deleteOrder
    };

}
module.exports = new OrdersService();