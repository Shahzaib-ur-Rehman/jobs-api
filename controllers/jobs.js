const { StatusCodes } = require("http-status-codes")
const Job = require("../models/Job")
const { BadRequestError } = require("../errors")
//@METHOD POST
//USE TO CREATE JOB
const createJob = async (req,res) =>{
    req.body.createdBy= req.user.userId
    const job =await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({
        success:true,
        message:'Job Created!!!',
        data:{
            job
        }
    })
}

//@METHOD GET
//USED FOR GET ALL JOBS
const getAllJobs = async (req,res)=>{
    const {user:{userId}} = req
    const jobs = await Job.find({createdBy:userId});
    res.status(StatusCodes.OK).json({
        success:true,
        message:"All JOBS BY YOU",
        data:{
            count:jobs.length,
            jobs
        }
    })
}

//@METHOD GET 
//USED TO GET SINGLE JOB
const getJob = async (req,res)=>{
    const {params:{id}, user:{userId}} = req
    const job = await Job.findOne({_id:id,createdBy:userId});
    if (!job) {
        throw new BadRequestError(`No Job With ${id}`)
    }
    res.status(StatusCodes.OK).json({
        success:true,
        message:"SINGLE JOB",
        data:{
            job
        }
    })
}

//@METHOD PUT
//USE TO UPDATE JOB
const updateJob = async (req,res) =>{
    const {params:{id}, user:{userId}} = req
    const job = await Job.findByIdAndUpdate({_id:id,createdBy:userId},req.body,{
        new:true,
        runValidators:true
    });
    if (!job) {
        throw new BadRequestError(`No Job With ${id}`)
    }

    res.status(StatusCodes.OK).json({
        success:true,
        message:"JOB UPDATED",
        data:{
            job
        }
    })

}

//@METHOD DELETE 
//USE TO DELETE JOB
const deleteJob = async (req,res)=>{
    const {params:{id}, user:{userId}} = req
    const job = await Job.findByIdAndRemove({_id:id,createdBy:userId});
    if (!job) {
        throw new BadRequestError(`No Job With ${id}`)
    }

    res.status(StatusCodes.OK).json({
        success:true,
        message:"JOB REMOVED",
        data:{
            job
        }
    })
}


module.exports ={
    getAllJobs,
    createJob,
    getJob,
    updateJob,
    deleteJob
}