/*    
ALien(student)
-name
-tech
-sub

RDMS         -      MONGODB
Database      -      database
tables        -      collections
rows         -       documents
columns      -        Fields


*/

const mongoose =require('mongoose');
const studentSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    },
    sub:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('Student',studentSchema)
