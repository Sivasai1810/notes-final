import axios from 'axios'
import { useState } from 'react'
function Empty(){
    const [note,setNote]=useState({
        userId:localStorage.getItem("userId"),
        content:""
    })
    const [message2,setMessage2]=useState(["your-task",])
    const handleaddnote=(e)=>{
setNote((n)=>({
  ...n,
  [e.target.name]:e.target.value
}))}

const handlesavenote= async(e)=>{
e.preventDefault()
const res=await axios.post("http://localhost:2023/api/addnotes",note)
// console.log(res.data.message)
// alert(res.data.message)
//setMessage2(res.data.text)
  setMessage2(res.data.showtext)
}
    
return(
    <form onSubmit={handlesavenote}>
      <input type='text'value={note.content} name='content' onChange={handleaddnote}/>
        <button type='submit'>Add-task</button>
        <ul>
{message2.map((element,index) => <li  key={index}>
     {element}
</li>)}
        </ul>
        {/* <p>{message2}</p> */}
    </form>
)
}

export default  Empty