import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github() {

  const data = useLoaderData();

    // const[data, setData]=useState([])
    // useEffect(()=>
    // {
    //       fetch("https://api.github.com/users/Vinayyadav-cyber")
    //       .then(response => response.json())
    //       .then(data=>{
    //         console.log(data);
    //         setData(data)
    //       })
    // },[])
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white'>Github followers:{data.followers} 
    <img src={data.avatar_url} alt="image not found" height={100} width={300}/>
    </div>
    </>
  )
}
export const githubinfoLoader = async () =>{
  const response = await fetch('https://api.github.com/users/Vinayyadav-cyber')
  return response.json()
}
