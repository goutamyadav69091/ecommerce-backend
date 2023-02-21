const productServises = require("../servise/ProductService");
const productValidation = require("../validation/schema/ProductValidation");


class ProductController {
    constructor() { }

    async createProduct(req, res) {
        try {
            console.log("req.body", req.body);
            console.log("req.files", req.files);
            let validation = await productValidation.createProduct(req);
            if (validation && validation.status && validation.status == "ERROR") {
                res.statusCode = 400; //bad request
                res.json(validation);
                return false;
            }
            await productServises.createProduct(req, res);
            res.statusCode = 201; // record created
            res.json({
                message: "Product created"
            });
        } catch (error) {
            console.log("controller createProduct page error", error);
        }
    };

    async getAllProduct(req, res) {
        try {
            let getAllProduct = await productServises.getAllProduct(req, res);
            res.statusCode = 200; // success
            res.json(
                getAllProduct
            );
        } catch (error) {
            console.log("controller getAllProduct page error", error);
        }
    };

    async getcartItems(req, res) {
        try {
            console.log('req.body',req.body);
            let getcartItems = await productServises.getcartItems(req, res);
            res.statusCode = 200; // success
            res.json(
                getcartItems
            );
        } catch (error) {
            console.log("controller getcartItems page error", error);
        }
    };

    async updateProduct(req, res) {
        try {
            let validation = await productValidation.updateProduct(req);
            if (validation && validation.status && validation.status == "ERROR") {
                res.statusCode = 400; //bad request
                res.json(validation);
                return false;
            }
            await productServises.updateProduct(req, res);
            res.statusCode = 201; // record created
            res.json({
                message: "Product Update"
            });
        } catch (error) {
            console.log("controller updateProduct page error", error);
        }
    };

    async deleteProduct(req, res) {
        try {
            let deleteProduct = await productServises.deleteProduct(req, res);
            res.statusCode = 200; // success
            res.json({
                message: "Prodact Deleted Successfully"
            });
        } catch (error) {
            console.log("controller deleteProduct page error", error);
        }
    };



}
module.exports = new ProductController();