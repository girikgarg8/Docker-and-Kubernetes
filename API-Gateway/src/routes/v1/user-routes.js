const express = require('express');
const { UserController } = require('../../controllers');
const { AuthRequestMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post('/signup', AuthRequestMiddlewares.validateAuthRequest, UserController.createUser);
router.post('/signin', AuthRequestMiddlewares.validateAuthRequest, UserController.signIn);
router.post('/role', AuthRequestMiddlewares.checkAuth, AuthRequestMiddlewares.isAdmin, UserController.addRoleToUser);
router.get('/:id', UserController.getUserDetails);

module.exports = router;