const mongoose = require("mongoose");

const db = async () => {
    await mongoose.connect("mongodb://localhost:27017/recap");
    console.log("conect a db");
}
module.exports = db;