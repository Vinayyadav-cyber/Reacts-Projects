import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const[value,setvalue]=useState(0)
   const addvalue=()=>{
    if(value<20)
    {
      setvalue(value+1)
    }
   }
   const removevalue=()=>
   {
     if(value>0)
     {
       setvalue(value-1)
     }
   }
  
  return (
      <>
     <h1>Chai or code</h1> 
     <h1>increase:{value}</h1>
     <button onClick={addvalue}>add value </button>
      <br />
      <button onClick={removevalue}>Remove value</button>
      
     
      </>
  )
}

export default App

