import React from 'react'
import img from "../assets/image/error.svg"
import { useNavigate } from 'react-router-dom'
function Error() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      
        <img className='w-1/3 ' src={img} />
        <button onClick={()=>{navigate('/home')}} className='bg-main py-3 px-4 rounded-full text-white' >Come back to the home page</button>
    </div>
  )
}

export default Error