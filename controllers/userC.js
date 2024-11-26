const jwt = require("jsonwebtoken");
const User = require("../models/userM")
const Signup = async (req, res) => {
    let { email, password } = req.body;
      let user = await User.findOne({ email: email });
      if (user) {
        return res.status(403).json({ msg: "user already registered" });
      } else {
        user = await User.create(req.body);
        let data = {
          email: user.email,
          password : user.password
        };
        let token = await jwt.sign(data, "private-key");
        console.log(token);
  
        return res.status(201).json({
          msg: "user created",
          token: token,
        });
      }
  };
  
  const Login = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
          return res.status(404).json({ msg: "user not found" });
        }
        let data = {
          email: user.email,
          password: user.password
        };
        let token = await jwt.sign(data, "private-key");
        return res
          .status(200)
          .json({ msg: "user loggedIn", token: token });
    } catch (error) {
        res.status(500).json({ msg: "err", error: error.message });
    }
  };

module.exports = {Signup , Login}