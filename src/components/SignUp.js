import React from 'react'
import '../styles/style.css'

function SignUp() {
    return (
        <>
            {/* credentials form */}
            <div className='container'>
                <div className='sub-container'>
                    <span className='title'>SignUp</span>
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Email</label>
                    <input className='form-input' type="email" />
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Name</label>
                    <input className='form-input' type="text" />
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Password</label>
                    <input className='form-input' type="password" />
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Confirm Password</label>
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
                    <button className='btn'>Create Account</button>
                </div>
            </div>
            {/* credentials form */}


            {/* verification form */}
            <div className='container'>
                <div className='sub-container'>
                    <span className='title'>Verify</span>
                </div>
                
                <div className='sub-container'>
                    <label className='form-input-label'>Enter OTP</label>
                    <input className='form-input' type="number" />
                </div>

                <div className='btn-bar'>
                    <button className='btn'>Cancel</button>
                    <button className='btn'>Verify</button>
                </div>
            </div>
            {/* verification form */}
        </>
    )
}

export default SignUp