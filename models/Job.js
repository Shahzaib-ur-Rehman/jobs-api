const mongoose = require("mongoose")


const JobSchema  = new mongoose.Schema({
    company:{
        type:String,
        required:[true,'must provide company'],
        maxlength:100
    },
    position:{
        type:String,
        required:[true, 'must provide position'],
    },
    status:{
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending',
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:[true,'must provide user ']
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Job',JobSchema)