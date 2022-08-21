import React, {useState} from 'react'
import '../styles/style.css'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'

function RecoverAccount() {
    const navigate = useNavigate()
    // current form
    const [currentForm, setcurrentForm] = useState('find')
    // show or hide password
    const [visible, setvisible] = useState(false)
    // credentials values
    const [emailVal, setemailVal] = useState('')
    const [newPassVal, setnewPassVal] = useState('')
    const [confirmNewPassVal, setconfirmNewPassVal] = useState('')
    const [otpVal, setotpVal] = useState('')
    // verification token from server response
    const [vToken, setvToken] = useState('')
    // loading
    const [l1, setl1] = useState(false)
    const [l2, setl2] = useState(false)
    // disable or enable button
    let db1 = emailVal === '' ? true :false;
    let db2 = newPassVal.length < 6 || newPassVal !== confirmNewPassVal || otpVal.length !== 4 ? true :false;



    async function findAccount(e) {
        e.preventDefault();
        setl1(true)
        const response = await fetch('http://localhost:5000/recoveraccount', {
            method: 'POSt',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: emailVal })
        });
        const responseData = await response.json();
        if(responseData.success){
            alert(responseData.msg)
            setl1(false)
            setvToken(responseData.verificationToken);
            setcurrentForm('recover')
        }else{
            alert(responseData.msg)
            setl1(false)
        }
    }



    async function recoverAccount(e){
        e.preventDefault()
        setl2(true)
        const response = await fetch('http://localhost:5000/recoveraccount/getaccess', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ verificationToken:vToken,
            otp:otpVal,
            email:emailVal,
            newPassword:newPassVal })
        });
        const responseData = await response.json();

        if(responseData.success){
            alert(responseData.msg)
            setl2(false)
            navigate('/');
        }else{
            alert(responseData.msg)
            setl2(false)
        }
    }



    return (
        <>
            {/* findAc*/}
            <div className='container' style={{display : currentForm === 'find' ? 'flex' : 'none'}}>
                <div className='sub-container'>
                    <span className='title'>Recover Account</span>
                </div>
                <div className='sub-container'>
                    <label className='form-input-label'>Email</label>
                    <input className='form-input' type="email" onInput={(e)=>{setemailVal(e.target.value)}}/>
                </div>

                {l1 ? <Spinner></Spinner> :<div className='btn-bar'>
                    <button className='btn' onClick={()=>{navigate('/')}}>Cancel</button>
                    <button className='btn' disabled={db1} onClick={findAccount}>Find</button>
                </div>}
            </div>
            {/* findAC*/}

            {/* recover */}
            <div className='container' style={{display : currentForm === 'recover' ? 'flex' : 'none'}}>
                <div className='sub-container'>
                    <span className='title'>Recover Account</span>
                </div>
                <div className='sub-container'>
                    <label className='form-input-label'>New Password</label>
                    <input className='form-input' type={visible ? 'text' :'password'} onInput={(e)=>{setnewPassVal(e.target.value)}}/>
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Confirm New Password</label>
                    <input className='form-input' type={visible ? 'text' :'password'} onInput={(e)=>{setconfirmNewPassVal(e.target.value)}}/>
                </div>

                <div className='sub-container'>
                    <div>
                    <label className='form-input-label'>Show Password</label>
                    <input className='form-input' type="checkbox" onInput={()=>{setvisible(!visible)}}/>
                    </div>
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Enter OTP</label>
                    <input className='form-input' type="number" onInput={(e)=>{setotpVal(e.target.value)}}/>
                </div>

                {l2 ? <Spinner></Spinner>:<div className='btn-bar'>
                    <button className='btn' onClick={()=>{navigate('/')}}>Cancel</button>
                    <button className='btn' disabled={db2} onClick={recoverAccount}>Recover</button>
                </div>}
            </div>
            {/* recover */}
        </>
    )
}

export default RecoverAccount