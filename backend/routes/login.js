const express = require('express')
const router = express.Router()
const bcrypt=require("bcrypt")
const joi=require("joi")
const {user}=require("../models/users")

router.use(express.json())
// connectdb()
router.post('/', async (req, res)=>{
    try{
const {username,password}=req.body
const { error }=newinputs(req.body)
if(error){
    return(
    error.details.forEach((err)=>{
        res.json({message:err.message,
                  success:false
        })
    })
)}
const exist=await user.findOne({ username })
if(!exist){
    return(
        res.json({message:"user doesnot exist",
                  success:false
        })
    )
}
const verifypassword=await bcrypt.compare(password,exist.password)
if(!verifypassword){
    return (
        res.json({message:"password is invalid",
                 success:false
        })
    )
}

res.json({message:"loggend sucessfully bro",
       userId:exist._id ,
    success:true  })}
catch(error){
    res.json({message:"internal server error" ,error})
}

})
const newinputs=(data)=>{
    const Schema=joi.object({
        username:joi.string().required().label("username"),
        password:joi.string().min(3).max(8).required().label("password"),
    })
     return Schema.validate(data,{ abortEarly: false })

}
module.exports=router

