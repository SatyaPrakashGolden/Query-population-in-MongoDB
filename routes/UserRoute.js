const express = require('express'); 
const UserRouter = express.Router(); 
const createUser = require('../controllers/UserController.js');
UserRouter.post('/UserPost', createUser);
module.exports = UserRouter;
