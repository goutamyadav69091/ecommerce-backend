const joi = require("joi");
// const imageExtension = require("joi-image-extension");
const validation = require("../Validation")

// const joi = baseJoi.extend(imageExtension);

class ProductValidation {
    constructor() { }

    async createProduct(req) {

        let schema = joi.object({
            title: joi.string().required(),
            description: joi.string().required(),
            categoryId: joi.number().required(),
            price: joi.number().required(),
        })
        let response = await validation.createCategory(schema, req.body);
        schema = joi.object({
            image: joi.any().required(),
        }); 
         response = await validation.createCategory(schema, req.files);
        return response;
    };

    async updateProduct(req) {

        let schema = joi.object({
            title: joi.string().required(),
            description: joi.string().required(),
            categoryId: joi.number().required(),
            price: joi.number().required(),
            productId :joi.number().required(),
        })
        const response = await validation.createCategory(schema, req.body);
        return response;
    };



}
module.exports = new ProductValidation();