const mongoose =require("mongoose")

const user=mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    Confirm:{
        type:String
        }
})
const User=mongoose.model("Extra",user)
module.exports=User
