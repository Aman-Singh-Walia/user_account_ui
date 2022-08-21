import React from 'react'
import '../styles/style.css'

function Home() {
  return (
    <>
    <div className='container'>
      <div>
        <span className='title'>User Account</span>
      </div>

      <div>
        <button className='btn'>Log In</button>
      </div>

      <div>
        <button className='btn'>Create Account</button>
      </div>

      <div>
        <button className='link'>Forgot Account</button>
      </div>
    </div>
    </>
  )
}

export default Home