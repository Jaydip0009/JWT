const product = require("../models/productM");

const Pget = async (req,res)=> {
    const data = await bs.find();
    res.send(data)
}
const Pcreate = async (req , res ) => {
     const {title , price , rating} = req.body;
     const newproduct = {
        title,
        price,
        rating
     }
     const data = await product.create(newproduct);

     res.send(data)
}
const Pupdate = async (req, res) => {
    const { id } = req.params;
    const data = await product.findByIdAndUpdate(id, req.body, { new: true });
    res.send(data);
};

const Pdelete = async (req, res) => {
    const { id } = req.params;
    const data = await product.findByIdAndDelete(id,req.body);
    res.send(data);
};

module.exports = {Pget, Pcreate , Pupdate , Pdelete}