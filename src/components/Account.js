import React from 'react'
import '../styles/style.css'

function Account() {
    return (
        <>
            {/* account info */}
            <div className='container'>
                <div className='sub-container'>
                    <span className='title'>Account</span>
                </div>

                <div className='sub-container'>
                    <span>Name</span>
                </div>

                <div className='sub-container'>
                    <span>Email</span>
                </div>

                <div className='btn-bar'>
                    <button className='btn'>Log Out</button>
                    <button className='btn'>Edit</button>
                </div>
            </div>
            {/* account info */}

            {/* manage */}
            <div className='container'>
                <div className='sub-container'>
                    <span className='title'>Manage Account</span>
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Name</label>
                    <input className='form-input' type="text" />
                </div>

                <div className='btn-bar'>
                    <button className='btn'>Cancel</button>
                    <button className='btn'>Change Name</button>
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Current Password</label>
                    <input className='form-input' type="password" />
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

                <div className='btn-bar'>
                    <button className='btn'>Cancel</button>
                    <button className='btn'>Change Password</button>
                </div>
            </div>
            {/* manage */}
        </>
    )
}

export default Account