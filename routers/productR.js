const {Router} = require("express");
const { Pget, Pcreate, Pupdate, Pdelete } = require("../controllers/productC");

const PR = Router();

PR.get("/",Pget);
PR.post("create" , Pcreate);
PR.patch("update" , Pupdate);
PR.delete("delete" , Pdelete);


module.exports = PR