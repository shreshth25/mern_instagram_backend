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

const login = async (req, resp) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return resp
        .status(400)
        .json({ status: false, message: "all fields are mandatory" });
    }
    const existing_user = await User.findOne({email: email})
    if(!existing_user)
    {
      return resp
        .status(400)
        .json({ status: false, message: "User Does not exist" });
    }
    const isMatched = bcrypt.compare(password, existing_user.password);
    if(!isMatched)
    {
      return resp
      .status(400)
      .json({ status: false, message: "Invalid Credentials" });
    }
    const token = jwt.sign({user_id:existing_user.id}, process.env.SECRET_KEY)
    return resp
    .status(200)
    .json({ status: true, message: "User Login Successfully", token: token});

  } catch (err) {
    console.log("Error: (Login)", err)
    return resp
    .status(400)
    .json({ status: false, message: "Something went wrong" });

  }
};

const profile = (req, resp) => {};

module.exports = { register, login, profile, username };
