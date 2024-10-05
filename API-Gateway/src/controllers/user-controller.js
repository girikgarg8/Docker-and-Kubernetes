const { StatusCodes } = require('http-status-codes');

const { UserService } = require('../services/index');

const { SuccessResponse, ErrorResponse } = require('../utils/common/index');

/**
 * POST : /signup
 * req-body {name: 'abc@xyz.com', password: '1234'} 
 */
async function createUser(req, res) {
    try {
        const user = await UserService.create({
            email: req.body.email,
            password: req.body.password
        })
        SuccessResponse.data = user;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function signIn(req, res) {
    try {
        const user = await UserService.signIn({
            email: req.body.email,
            password: req.body.password
        })
        SuccessResponse.data = user;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function addRoleToUser(req, res) {
    try {
        const user = await UserService.addRoleToUser({
            role: req.body.role,
            id: req.body.id
        })
        SuccessResponse.data = user;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statuCode)
            .json(ErrorResponse);
    }
}

async function getUserDetails(req, res) {
    try {
        const user = await UserService.getUserDetails(req.params.id);
        SuccessResponse.data = user;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statuCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createUser,
    signIn,
    addRoleToUser,
    getUserDetails
}