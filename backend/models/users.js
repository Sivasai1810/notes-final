const mongodb=require("mongoose")
const joi=require("joi")
const userschema=mongodb.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    email:{type:String ,required:true},
})
const user=mongodb.model("user",userschema)
const validateinput=(data)=>{
   const Schema=joi.object({
    username:joi.string().required().label("username"),
    password:joi.string().min(3).max(7).required().label("password"),
    email:joi.string().email().required().label("email")
   })
   return Schema.validate(data,{ abortEarly: false })
}
const notes=new mongodb.Schema({
    userId:{
        type:mongodb.Schema.Types.ObjectId,
        ref:user
    },
    content :{type:[String],
          required:true,
          default:[]
    }
})
const usernotes=mongodb.model("usernotes",notes)
module.exports=({
    user,
    validateinput,
     usernotes
})
