const joi = require("joi");
const validation = require("../Validation")

class OrdersValidation {
    constructor() { }

    async createOrder(req) {

        let schema = joi.object({
            fullName: joi.string().required(),
            email: joi.string().email().required(),
            primaryContact: joi.number().required(),
            secondaryContact: joi.number().required(),
            shippingAddress: joi.string().required(),
            shippingCity: joi.string().required(),
            shippingPincode: joi.number().required(),
            billingAddress: joi.string().required(),
            billingCity: joi.string().required(),
            billingPincode: joi.number().required(),
            paymentMethod: joi.string().required(),
            productPrice: joi.required(),
            productQuantity: joi.required(),
            productId: joi.required(),
            grandTotal: joi.number().required(),
            userId: joi.number().required(),
            paymentMethod: joi.required(),
        })
        const response = await validation.createCategory(schema, req.body)
        return response;
    };

    async updateOrder(req) {

        let schema = joi.object({
            fullName: joi.string().required(),
            email: joi.string().email().required(),
            primaryContact: joi.number().required(),
            alternetContact: joi.number().required(),
            shippingAddress: joi.string().required(),
            shippingCity: joi.string().required(),
            shippingPincode: joi.number().required(),
            billingAddress: joi.string().required(),
            billingCity: joi.string().required(),
            billingPincode: joi.number().required(),
            paymentMethod: joi.string().required(),
            orderId: joi.number().required()
        })
        const response = await validation.createCategory(schema, req.body)
        return response;
    };



}
module.exports = new OrdersValidation();