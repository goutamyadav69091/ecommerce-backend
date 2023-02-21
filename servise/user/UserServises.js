const userModal = require("../../modal/UserModal");
const jwt = require('jsonwebtoken'); 

class UserServises{
    constructor(){}

   async registretion(req, res){
        let data = req.body;
        let insertUser = await userModal.inserUser(data)
        return true  
    };

   async updateUser(req, res){
        let data = req.body;
        let insertUser = await userModal.updateUser(data)
        return true  
    };

   async updateProfile(req, res){
        let data = req.body;
        let insertUser = await userModal.updateProfile(data)
        return true  
    };

   async updatePassword(data){
        // let data = req.body;
        let updatePassword = await userModal.updatePassword(data)
        return true  
    };

    async loginAuth(req, res){
        let response = {
            status: "",
            message: "",
            token:'',
        }
        const username = req.body.username;
        const password = req.body.password;
        let user = await userModal.getUserByEmail(username);
        console.log("user", user);
        if (user && user.length > 0) {
            let userInfo = user[0]
            if (userInfo && userInfo.password == password) {
                response.status = "SUCCESS";
                response.message = "SUCCESSFULL";
                let token = jwt.sign({userData:userInfo.id}, process.env.JWT_PRIVATE_KEY)
                console.log('/n/n/n  &&&& **** token **** &&&&',token);
                response.token = token;
            } else {
                response.status = "ERROR";
                response.message = "Invelid Password";
            }
        } else {
            response.status = "ERROR";
            response.message = "Invelid Email";
        }

        return response
    };

    async getUserById(req, res) {
        let userId = req.params.userId
        // console.log("userId", userId);
        let getUserById = await userModal.getUserById(userId)
        // console.log("getUserById", getUserById);
        return getUserById
    };

    async getUserInfo(req, res) {
        let userId = req.userId
        // console.log("userId", userId);
        let getUserById = await userModal.getUserById(userId)
        // console.log("getUserById", getUserById);
        return getUserById
    };

}
module.exports = new UserServises();