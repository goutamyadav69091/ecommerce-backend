const categoryServises = require("../servise/CategoryService");
const categoryValidation = require("../validation/schema/CategoryValidation");


class CategoryController {
    constructor() { }

    async createCategory(req, res) {
        try {
            let validation = await categoryValidation.createCategory(req);
            if (validation && validation.status && validation.status == "ERROR") {
                res.statusCode = 400; //bad request
                res.json(validation);
                return false;
            }
            await categoryServises.createCategory(req, res);
                res.statusCode = 201; // record created
                res.json({
                    message: "Category created"
                });
        } catch (error) {
            console.log("controller createCategory page error", error);
        }
    };

    async getCategory(req, res) {
        try {
            let getAllCategory = await categoryServises.getCategory(req, res);
                res.statusCode = 200; // success
                res.json(
                    getAllCategory
                );
        } catch (error) {
            console.log("controller getCategory page error", error);
        }
    };

    async getSingleCategory(req, res) {
        try {
            let getSingleCategory = await categoryServises.getSingleCategory(req, res);
                res.statusCode = 200; // success
                res.json(
                    getSingleCategory
                );
        } catch (error) {
            console.log("controller getCategory page error", error);
        }
    };

    async updateCategory(req, res) {
        try {
            let validation = await categoryValidation.updateCategory(req);
            if (validation && validation.status && validation.status == "ERROR") {
                res.statusCode = 400; //bad request
                res.json(validation);
                return false;
            }
            await categoryServises.updateCategory(req, res);
            res.statusCode = 201; // record created
            res.json({
                message: "Category has been Update"
            });
        } catch (error) {
            console.log("controller updateCategory page error", error);
        }
    };

    async deleteCategory(req, res) {
        try {
            let deleteCategory = await categoryServises.deleteCategory(req, res);
            res.statusCode = 200; // success
            res.json({
                message: "Category has been Deleted Successfully"
            });
        } catch (error) {
            console.log("controller deleteCategory page error", error);
        }
    };


}
module.exports = new CategoryController();