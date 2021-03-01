const { Router } = require('express');
const userRouter = new Router();

const {userController} = require('../controllers/user.ctrl');

userRouter.get('/', userController.getUsers);
userRouter.get('/:id', userController.getUser);
userRouter.post('/', userController.addUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

// userRouter.post('/login', userController.userLogin);
// userRouter.post('/register', userController.userRegister);
// userRouter.get('/logout', userController.userLogout);

module.exports = {userRouter};