const express = require('express');
const router = express.Router();
const userRoutes = require('./user-routes');
const { InfoController,UserController } = require('../../controllers/index');
const { AuthRequestMiddlewares } = require('../../middlewares');

router.get('/info', AuthRequestMiddlewares.checkAuth, InfoController.info);
router.use('/users', userRoutes);

module.exports = router;