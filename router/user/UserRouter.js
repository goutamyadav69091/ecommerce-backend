const express = require("express");
const userController = require("../../controller/user/UserController");
const app = express();
const jwt = require('jsonwebtoken');
const commen = require('../../helper/Commen')

app.post("/", userController.registretion);

app.post("/login", userController.loginAuth);

app.put('/', userController.updateProfile);

app.put('/updatePassword', commen.validateToken,userController.updatePassword)

app.get("/getUserById/:userId",commen.validateToken, userController.getUserById);

app.get("/", commen.validateToken, userController.getUserInfo);


module.exports = app;