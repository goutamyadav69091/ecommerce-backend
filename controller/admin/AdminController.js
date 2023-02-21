const adminServises = require("../../servise/admin/AdminService");
const UserServises = require("../../servise/user/UserServises");
const UserValidation = require("../../validation/user/UserValidation");



class AdminController {
    constructor() { }

    async allUsers(req, res) {
        try {
            let getAllUsers = await adminServises.getAllUsers(req, res);
            res.statusCode = 200; // success
            res.json(
                getAllUsers
            );
        } catch (error) {
            console.log("controller getAllUsers page error", error);
        }
    };

    async updateUser(req, res) {
        try {
            let validation = await UserValidation.updateUser(req,res);
            if (validation && validation.status && validation.status == "ERROR") {
                res.statusCode = 400; //bad request
                res.json(validation);
                return false;
            }
            await UserServises.updateUser(req, res);
            res.statusCode = 201; // record created
            res.json({
                message: "User has been Update"
            });
        } catch (error) {
            console.log("controller updateUser page error", error);
        }
    };

    async deleteUser(req, res) {
        try {
            let deleteUser = await adminServises.deleteUser(req, res);
            res.statusCode = 200; // success
            res.json({
                message: "User has been Deleted Successfully"
            });
        } catch (error) {
            console.log("controller deleteUser page error", error);
        }
    };


}
module.exports = new AdminController();