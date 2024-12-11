const User=require("../Modals/User")
const ProductSchema=require("../Modals/Products")
const jwt=require("jsonwebtoken")
const Secretkey ="asidfsjdfhksja"
const bycript=require("bcrypt")
const Register= async(req,res)=>{
    
    const {email,password,Confirm}=req.body
    try {
    let user=await User.findOne({email})
    if(user) return res.status(402).json({msg:"User already exist"});
    
     const newuser =new User({email,password,Confirm})
    
    const token=jwt.sign({id:newuser._id},Secretkey,{expiresIn:"1h"})
        const salt =await bycript.genSalt(10)
       newuser.password= await bycript.hash(password,salt)


       await newuser.save()      
    res.json({token})
    
   

    } catch (error) {
        res.status(error)
    }
}

const GetUser=async(req,res)=>{
    
    const {email,password,Confirm}=req.body
    try {
    const user = await User.findOne({email})
     if(!user) return res.status(402).json({msg:"User not available"})

     const ismatch=bycript.compare(password,user.password)
     if (!ismatch) return res.status(402).json({msg:"User not available"})
        
      const token=jwt.sign({id:user._id},Secretkey,{expiresIn:"1h"})
      res.cookie('token', token, { httpOnly: true });
      res.status(200).json({token})
} catch (error) {
    res.send(error)
}
}
const CreateProducts=async(req,res)=>{
    try {
        const product =new ProductSchema(req.body)
        res.send(product)
        await product.save()
    } catch (error) {
        console.log(error)
    }
}
const GetProducts=async(req,res)=>{
    try {
        const product =  await  ProductSchema.find()
        res.send(product)
       
    } catch (error) {
        console.log(error)
    }
}
module.exports={Register,GetUser,CreateProducts,GetProducts}
