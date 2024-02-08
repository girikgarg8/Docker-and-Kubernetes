const express = require('express');

const { FlightController } = require('../../controllers/index');

const { FlightMiddlewares } = require('../../middlewares');

const router = express.Router();

/**
 *    /api/v1/flights   POST
 */

router.post('/', FlightMiddlewares.validateCreateRequest, FlightController.createFlight);

/**
 *    /api/v1/flights?trips=BOM-DEL    GET
 */
router.get('/', FlightController.getAllFlights);

/**
 *    /api/v1/flights/1    GET
 */

router.get('/:id', FlightController.getFlight);

router.patch('/:id/seats', FlightMiddlewares.validateUpdateRequest, FlightController.updateSeats);

module.exports = router;