const express =require("express")
const database=require("./Config/DB")
const Router=require("./Routes/Auth")
const bodypasrser=require("body-parser")
const cors=require("cors")

const port =5000
const app =express()
app.use(express.json())
app.use(bodypasrser())
app.use(cors())

app.use("/api/v1",Router)
database()
app.listen(port,()=>{
    console.log("Server is connected")
})