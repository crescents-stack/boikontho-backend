const UserModel = require("../models/users.model");

exports.GetAllUsers = async (req, res) => {
  try {
    res.status(200).send({
      message: "All Users Route Check!",
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal server error!",
    });
  }
};

exports.GetUserData = async (req, res) => {
  try {
    const { _id } = req;
    const user = await UserModel.find({ _id });
    if (!user.length) {
      return res.status(404).send({
        message: "No user found!",
      });
    }
    const ToSendUserData = {
      _id,
      name: user[0].name,
      email: user[0].email,
      role: user[0].role,
    };
    res.status(200).send({
      message: "User data found successfully!",
      user: ToSendUserData,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal server error!",
    });
  }
};
