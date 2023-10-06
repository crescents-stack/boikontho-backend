const { JWT_SECRET } = require("../configs/configs");
const UserModel = require("../models/users.model");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    // get user credentials
    const { name, email, password, role } = req.body;

    // check if email is already in use or not
    const userWithEmail = await UserModel.find({ email });
    if (userWithEmail.length) {
      return res.status(409).send({
        message: "This email already in use!",
      });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    if (!newUser) {
      return res.status(500).send({
        message: "Internal server error!",
      });
    }
    res.status(200).send({
      message: "Registration successful!",
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error!",
    });
  }
};
exports.login = async (req, res) => {
  try {
    // get credentials
    const { email, password } = req.body;

    // check if user exists or not
    const userWithEmail = await UserModel.find({ email });
    if (!userWithEmail.length) {
      return res.status(404).send({
        message: "User not found!",
      });
    }
    // validating password
    const HashedPassword = userWithEmail[0].password;
    const isPasswordValid = await bcrypt.compare(password, HashedPassword);

    if (!isPasswordValid) {
      return res.status(404).send({
        message: "Wrong password!",
      });
    }

    // generate login token
    const token = JWT.sign({ _id: userWithEmail[0]._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).send({
      message: "Login successful!",
      token,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error!",
    });
  }
};
