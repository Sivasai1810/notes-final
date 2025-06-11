const express = require('express')
const router=express.Router()
const mongodb=require('mongoose')
const {usernotes}=require('../models/users')
router.use(express.json())
const ObjectId=mongodb.Types.ObjectId
router.post('/',  async(req, res) =>{
    try{
    const userId=new ObjectId(req.body.userId)
    const index=req.body.index
    const newcontent=req.body.newcontent
    const exist =await usernotes.findOne({userId:new ObjectId(userId)})
    if(exist){
     
          exist.content[index]=newcontent
   await exist.save()
res.json({message:"ok bro data edited sucessfully"})
    }
  console.log("data edited sucessfully")
  }catch(error){
console.log("arey bhai error",error)
    }
  })
module.exports=router