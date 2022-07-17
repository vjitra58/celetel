import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phoneNo:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    }
})

export default mongoose.models.Employee ||mongoose.model('Employee', EmployeeSchema);