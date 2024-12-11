const mongoose=require("mongoose")

const Database=()=>{
    try {
        mongoose.connect("mongodb+srv://altafkhan1743:03195346787@cluster0.qn4wv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
            console.log("Database connected")
        }).catch(()=>{
            console.log("Database error")
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports=Database