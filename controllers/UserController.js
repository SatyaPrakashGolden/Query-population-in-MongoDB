const  mongoose = require('mongoose');
const User=require('../models/User.model.js');

const createUser = async (req, res) => {
  try {
    const newUserId = new mongoose.Types.ObjectId();
    const userObj = {
      _id: newUserId,
      name: req.body.name,
    };
    const newUser = new User(userObj);
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    console.error('Error while saving user:', error);
    res.status(400).send("There was an error while saving the user.");
  }
};
module.exports = createUser;

