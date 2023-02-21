const joi = require("joi");
const validation = require("../Validation")

class CategoryValidation {
    constructor() { }

   async createCategory(req) {
        
        let schema = joi.object({
            title: joi.string().required(),
            description: joi.string().required(),
            perentId: joi.number().required(),
        })
       const response = await validation.createCategory(schema, req.body)
        return response;
    };

    async updateCategory(req) {
        
        let schema = joi.object({
            title: joi.string().required(),
            description: joi.string().required(),
            perentId: joi.number().required(),
            catId: joi.number().required()
        })
       const response = await validation.createCategory(schema, req.body)
        return response;
    };



}
module.exports = new CategoryValidation();