import React from 'react'
import { Link } from 'react-router-dom'
import Login from './login'
function Entry() {
  return (
    <div>
      <h1> Welcome to the notes </h1>
    <Link to='/login' >Login</Link><br/>
    <Link to='/create' >Create-account</Link>
    </div>
  )
}

export default Entry
