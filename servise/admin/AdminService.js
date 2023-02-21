const userModal = require("../../modal/UserModal");

class AdminService {
    constructor() { }

    async getAllUsers(req, res) {
        let getAllUsers = await userModal.getAllUsers()
        console.log("getAllUsers", getAllUsers);
        return getAllUsers
    };

    async deleteUser(req, res) {
        let userId = req.params.userId
        console.log("userId", userId);
        let deleteUser = await userModal.deleteUser(userId)
        console.log("deleteUser", deleteUser);
        return deleteUser
    };

}
module.exports = new AdminService();