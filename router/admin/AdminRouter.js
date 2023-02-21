const express = require("express");
const adminController = require("../../controller/admin/AdminController");
const app = express()

app.get("/", adminController.allUsers);

app.put("/update-user", adminController.updateUser);

app.delete("/:userId", adminController.deleteUser);


module.exports = app;