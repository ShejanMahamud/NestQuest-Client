import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NotFound = () => {

const navigate = useNavigate()
const location = useLocation()   
const from = location.state || '/' 

  return (
    <div className='w-full min-h-screen flex items-center flex-col justify-center gap-5'>
        <img src="https://i.ibb.co/Jj35ytM/error-404.png" alt="" />
        <h1 className='text-5xl font-bold'>No Content Available</h1>
        <button onClick={()=>navigate(from)} className='border border-primary px-4 py-2 text-primary uppercase'>
            Back to home
        </button>
    </div>
  )
}

export default NotFound