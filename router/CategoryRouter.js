const express = require("express");
const categoryController = require("../controller/CategoryController");
const app = express()

app.post("/", categoryController.createCategory);

app.get("/", categoryController.getCategory);

app.get("/get-singleCat/:catId", categoryController.getSingleCategory);

app.put("/", categoryController.updateCategory);

app.delete("/:categoryId", categoryController.deleteCategory);


module.exports = app;