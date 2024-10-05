const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common/index');
const AppError = require('../utils/errors/app-error');
const { compareTime } = require('../utils/helpers/datetime-helpers');

function validateCreateRequest(req, res, next) {
    if (!req.body.flightNumber) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['Flight Number not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)
        return res.
            status(StatusCodes.BAD_REQUEST).
            json(ErrorResponse);
    }
    if (!req.body.airplaneId) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['Airplane ID not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)
        return res.
            status(StatusCodes.BAD_REQUEST).
            json(ErrorResponse);
    }
    if (!req.body.departureAirportId) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['Departure Airport ID not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)
        return res.
            status(StatusCodes.BAD_REQUEST).
            json(ErrorResponse);
    }
    if (!req.body.arrivalAirportId) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['Arrival Airport ID not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)
        return res.
            status(StatusCodes.BAD_REQUEST).
            json(ErrorResponse);
    }
    if (!req.body.arrivalTime) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['Arrival Time not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)
        return res.
            status(StatusCodes.BAD_REQUEST).
            json(ErrorResponse);
    }
    if (!req.body.departureTime) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['Departure Time not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)
        return res.
            status(StatusCodes.BAD_REQUEST).
            json(ErrorResponse);
    }
    if (!req.body.price) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['Price not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)
        return res.
            status(StatusCodes.BAD_REQUEST).
            json(ErrorResponse);
    }
    if (!req.body.totalSeats) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['Total seats not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)
        return res.
            status(StatusCodes.BAD_REQUEST).
            json(ErrorResponse);
    }

    const arrivalIsGreaterThanDeparture = compareTime(req.body.arrivalTime, req.body.departureTime);

    if (!arrivalIsGreaterThanDeparture) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['Arrival time cannot be less than or equal to departure time'], StatusCodes.BAD_REQUEST)
        return res.
            status(StatusCodes.BAD_REQUEST).
            json(ErrorResponse);
    }
    next();
}

function validateUpdateRequest(req, res, next) {
    if (!req.body.seats){
        ErrorResponse.message = 'Something went wrong while updating flight';
        ErrorResponse.error = new AppError(['Number of seats not found in the incoming request in the correct form'],
            StatusCodes.BAD_REQUEST)
        return res.
            status(StatusCodes.BAD_REQUEST).
            json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest,
    validateUpdateRequest
}