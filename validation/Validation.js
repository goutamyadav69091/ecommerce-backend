const joi = require("joi");

class Validation {
    constructor() { }

    createCategory(schema, data) {
        let response = {
            status: "",
            message: "",
        };
        let validate = schema.validate(data);
        if (validate && validate.error && validate.error.details) {
            response.status = 'ERROR';
            response.message = validate.error.details[0].message
        }
        return response;
    };



}
module.exports = new Validation();