const mongoose=require("mongoose")

const Productschema=mongoose.Schema({
    id:{
        type:String
    },
    img:{
        type:String
    },
    tittle:{
        type:String
    },
    description:{
        type:String
    },
    btn:{
        type:String
    }
})
const Products=mongoose.model("/Products",Productschema)
module.exports=Products