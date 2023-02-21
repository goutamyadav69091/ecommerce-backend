const express = require("express");
const app = express()
const userRouter = require("./user/UserRouter");
const categoryRouter = require("./CategoryRouter");
const adminRouter = require("../router/admin/AdminRouter");
const productRouter = require("./ProductRouter");
const ordersRouter = require("./OrderRouter")

app.use("/user", userRouter);

app.use("/category", categoryRouter);

app.use("/admin", adminRouter);

app.use("/product", productRouter);

app.use("/orders", ordersRouter);

module.exports = app;