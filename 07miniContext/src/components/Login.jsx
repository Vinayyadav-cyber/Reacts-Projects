import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

 function Login() {
   
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const{setUser}=useContext(UserContext)

    const Handler =(e)=>
    {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <>
    <h1>Log in</h1>
    <input type="text"
     value={username}
     placeholder='username'
     onChange={(e)=>setusername(e.target.value)}
     />
     {'   '}

     <input type="text" 
     value={password}
     onChange={(e)=>setpassword(e.target.value)}
     placeholder='password'
     />
     <button onClick={Handler}>Submeet</button>
    </>
  )
}
export default Login
