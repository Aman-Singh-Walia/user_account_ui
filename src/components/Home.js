import React from 'react'
import '../styles/style.css'
import { useNavigate } from 'react-router-dom'

function Home() {
  const loggedIn = localStorage.getItem('authToken');
  const navigate = useNavigate();
  return (
    <>
    <div className='container'>
      <div className='sub-container'>
        <span className='title'>User Account</span>
      </div>

      <div className='sub-container'>
        {loggedIn ? <button className='btn' onClick={()=>{navigate('/account')}}>My Account</button> :<button className='btn' onClick={()=>{navigate('/login')}}>Log In</button>}
      </div>

      <div className='sub-container'>
        <button className='btn' onClick={()=>{navigate('/signup')}}>Create Account</button>
      </div>

      <div className='sub-container'>
        <button className='link' onClick={()=>{navigate('/recoveraccount')}}>Forgot Account</button>
      </div>
    </div>
    </>
  )
}

export default Home