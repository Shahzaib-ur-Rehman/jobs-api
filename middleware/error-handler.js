const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    res.status(err.StatusCode).json({
      success:false,
      message:err.message
    })
  }
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success:false,
    message:err
  })
}

module.exports = errorHandlerMiddleware
