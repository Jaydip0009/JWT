const express = require("express");
const db = require("./config/db");
const userR = require("./routers/userR");
const PR = require("./routers/productR");

const app = express();
app.use(express.json());
app.use("/user" , userR);
app.use("/pr", PR)
app.listen(8090, ()=> {
    console.log("8090 is a runing");
    db();
})