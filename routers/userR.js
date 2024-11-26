const {Router} = require("express");
const { Signup, Login } = require("../controllers/userC");

const userR = Router();

userR.post("/signup",  Signup);
userR.post("/login" , Login);


module.exports = userR