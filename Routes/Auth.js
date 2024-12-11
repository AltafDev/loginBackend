const express =require("express")
const {Register,GetUser,CreateProducts,GetProducts} = require("../Controllers/Register")
const Router=express.Router()

Router.post("/Register",Register)
Router.post("/GetAPi",GetUser)
Router.post("/CreateProducts",CreateProducts)
Router.get("/GetProducts",GetProducts)

module.exports=Router