const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, resp) => {
  try {
    const { firstname, lastname, username, email, password } = req.body;
    if (!firstname || !lastname || !username || !email || !password) {
      return resp
        .status(400)
        .json({ status: false, message: "all fields are mandatory" });
    }
    const hash_password = await bcrypt.hash(password, 10);
    const user = new User({
      'firstname': firstname,
      'lastname': lastname,
      'email': email,
      'password': hash_password,
      'username': username,
    });
    await user.save();
    
    const token = jwt.sign({user_id:user.id}, process.env.SECRET_KEY)
    return resp
    .status(201)
    .json({ status: true, message: "User Created Successfully", token: token});

  } catch (err) {
    console.log("Error: (Register)", err)
    return resp
    .status(400)
    .json({ status: false, message: "Something went wrong" });

  }
};

const username = (req, resp) => {
  const { username } = req.body;
};

const login = (req, resp) => {};

const profile = (req, resp) => {};

module.exports = { register, login, profile, username };
