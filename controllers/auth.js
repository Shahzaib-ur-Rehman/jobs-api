const User = require("../models/User")
const {BadRequestError} = require("../errors")
const { StatusCodes } = require("http-status-codes")

//@METHOD POST 
//USE FOR REGISTER USER 
const register = async (req,res) =>{
   const {name,email,password} = req.body
   if (!name || !email || !password) {
    throw new BadRequestError("Please Provide Name,Email, and Password!!!")
   }
   const user =await User.create({name,email,password})
   const token = user.createJWT()
   res.status(StatusCodes.CREATED).json({
    success:true,
    message:"User Created!",
    data:{
        user:{
            userId:user._id,
            name:user.name
        },
        token
    }
   })
}



//@METHOD POST 
//USE FOR USER LOGIN
const login = async (req,res) =>{
    const {email,password}= req.body
    if (!email|| !password) {
        throw new BadRequestError("Please Enter Email , And Password!!!")
    }
    const user = await User.findOne({email})
    if (!user) {
        throw new BadRequestError("Invalid Credentials")
    }
    const isMatchedPassword = user.comparePassword(password)

    if (!isMatchedPassword) {
        throw new BadRequestError("Invalid Credentials")
    }
    const token= user.createJWT();

    res.status(StatusCodes.OK).json({
        success:true,
        message:"Login Successfull!!",
        data:{
            user:{
                userId:user._id,
                name:user.name
            },
            token
        }
    })

}



module.exports ={
    register,login
}