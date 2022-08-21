import React from 'react'
import '../styles/style.css'

function RecoverAccount() {
    return (
        <>
            {/* findAc*/}
            <div className='container'>
                <div className='sub-container'>
                    <span className='title'>Recover Account</span>
                </div>
                <div className='sub-container'>
                    <label className='form-input-label'>Email</label>
                    <input className='form-input' type="email" />
                </div>

                <div className='btn-bar'>
                    <button className='btn'>Cancel</button>
                    <button className='btn'>Find</button>
                </div>
            </div>
            {/* findAC*/}

            {/* getAccess */}
            <div className='container'>
                <div className='sub-container'>
                    <span className='title'>Recover Account</span>
                </div>
                <div className='sub-container'>
                    <label className='form-input-label'>New Password</label>
                    <input className='form-input' type="password" />
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Confirm New Password</label>
                    <input className='form-input' type="password" />
                </div>

                <div className='sub-container'>
                    <div>
                    <label className='form-input-label'>Show Password</label>
                    <input className='form-input' type="checkbox" />
                    </div>
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Enter OTP</label>
                    <input className='form-input' type="number" />
                </div>

                <div className='btn-bar'>
                    <button className='btn'>Cancel</button>
                    <button className='btn'>Save</button>
                </div>
            </div>
            {/* getAccess */}
        </>
    )
}

export default RecoverAccount