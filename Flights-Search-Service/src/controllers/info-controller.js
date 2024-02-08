const { StatusCodes } = require('http-status-codes');

const info = (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: 'Flight Search Service is live',
        error: {},
        data: {}
    })
};

module.exports = {
    info
}