const {StatusCodes} = require("http-status-codes")
const notFound = (req, res) =>{
    res.status(StatusCodes.NOT_FOUND).json({
        success:false,
        message:"Route Not Found!!!"
    })
}

module.exports = notFound
