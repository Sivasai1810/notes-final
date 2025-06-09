const express = require('express')
const router=express.Router()
const mongodb=require('mongoose')
const {usernotes}=require('../models/users')
router.use(express.json())
const ObjectId=mongodb.Types.ObjectId
router.put('/',  async(req, res) =>{
    try{
    const addcontent=req.body.addcontent
    const userId=new ObjectId(req.body.userId)
    const exist =await usernotes.findOne({userId:new ObjectId(userId)})
    if(exist){
          const updatedcontent=await usernotes.findByIdAndUpdate(userId,
            {content[0]:addcontent},
            {new:true}
          )
          res.json({
        message:"data updated sucessfully",
        data:updatedcontent
    })
    }
 console.log("updated sucessfully")}
    catch(error){
console.log("bro error bro",error)
    }
  
})
module.exports=router