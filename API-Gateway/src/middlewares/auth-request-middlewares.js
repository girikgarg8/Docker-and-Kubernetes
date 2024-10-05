const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
const { UserService } = require('../services');

function validateAuthRequest(req, res, next) {
    if (!req.body.email) {
        ErrorResponse.message = 'Something went wrong while authenticating the user';
        ErrorResponse.error = new AppError(['Email not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.password) {
        ErrorResponse.message = 'Something went wrong while authenticating the user';
        ErrorResponse.error = new AppError(['Password not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next();
}

async function checkAuth(req, res, next) { //This function is used to ensure that before someone can make a request to an API, they are authenticated.
    try {
        const response = await UserService.isAuthenticated(req.headers['x-access-token']);
        if (response) {
            req.user = response; //in the request object itself, I made a user property. This will help me in knowing which user is sending the request at any given point of time
            next();
        }
    }
    catch (error) {
        return res
            .status(error.statusCode)
            .json(error);
    }
}

async function isAdmin(req, res, next) { //This function is used to check whether the given user is admin or not, hence implementing authorization mechanisms
    const response = await UserService.isAdmin(req.user);
    if (!response){
        return res
                .status(StatusCodes.FORBIDDEN)
                .json({message: 'User not authorized for this action'})
    }
    next();
}

module.exports = {
    validateAuthRequest,
    checkAuth,
    isAdmin
}