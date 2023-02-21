const env = require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressFileupload = require("express-fileupload")
const mainRouter = require("./router/MainRouter")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
// app.use(express.json({ limit: "25mb" }));
// app.use(express.urlencoded({ limit: '25mb' }));
app.use(expressFileupload());

app.use("/api/v1", mainRouter);

app.get("/", function (req, res) {
    res.send("API : under construction")
})

const port = process.env.PORT
app.listen(port, function () {
    console.log("server started on port ", port);
})