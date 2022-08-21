import React from 'react'
import '../styles/style.css'

function LogIn() {
    return (
        <>
            <div className='container'>
                <div className='sub-container'>
                    <span className='title'>LogIn</span>
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Email</label>
                    <input className='form-input' type="email" />
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Password</label>
                    <input className='form-input' type="password" />
                </div>

                <div className='sub-container'>
                    <div>
                    <label className='form-input-label'>Show Password</label>
                    <input className='form-input' type="checkbox" />
                    </div>
                </div>

                <div className='btn-bar'>
                    <button className='btn'>Cancel</button>
                    <button className='btn'>Log In</button>
                </div>
            </div>
        </>
    )
}

export default LogIn