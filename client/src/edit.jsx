import axios from 'axios';
import React, { useEffect, useState } from 'react'

import {useNavigate} from "react-router-dom"


function Edit() {
      const navigate=useNavigate()
    const stored=localStorage.getItem("index")
    const { index, userId,element} = stored ? JSON.parse(stored) : {};
       const [text,setText]=useState("")
    const [data,setData]=useState({
      userId:userId,
      index:index,
      newcontent:""
    })
 
  useEffect(()=>{
 setText(element)
  },[element])
  const handleedit=(e)=>{
    setText(e.target.value)
    setData((d)=>({
   ...d,
[e.target.name]:e.target.value

    }))
  }
const handlesave=async(e)=>{
  try{
  e.preventDefault()
const res=await axios.post("http://192.168.43.70:2023/edit",data)
console.log(res.data.message)
if(res.data.success){
  navigate('/text')
}}catch(error){
  console.log("arey bhai " ,error)
}}

  return (
    <div>
      <p> arey babu</p>
    
      <textarea value={text} name='newcontent' onChange={handleedit}></textarea>
      <button onClick={handlesave}>done</button>
    </div>
  )
}

export default Edit

