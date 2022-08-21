import React,{useState} from 'react'
import '../styles/style.css'
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate()
    // credentials and otp value
    const [emailVal, setemailVal] = useState('')
    const [nameVal, setnameVal] = useState('')
    const [passwordVal, setpasswordVal] = useState('')
    const [confirmPasswordVal, setconfirmPasswordVal] = useState('')
    const [otpVal, setotpVal] = useState('')
    // current form
    const [currentForm, setcurrentForm] = useState('credentials')
    // show or hide password
    const [visible, setvisible] = useState(false)
    // loading
    const [l1, setl1] = useState(false);
    const [l2, setl2] = useState(false);
    // verification token from server response
    const [vToken, setvToken] = useState('')
    // disable button until every field is filled correctly
    let db1 = emailVal === '' || nameVal.length < 3 || passwordVal.length < 6 || passwordVal !== confirmPasswordVal ? true : false ;
    let db2 = otpVal.length !== 4 ? true : false ;


    async function createAccount(e){
        e.preventDefault()
    setl1(true)
    const response = await fetch('http://localhost:5000/getstarted', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: emailVal })
    });
    const responseData = await response.json();

    if(responseData.success){
      setl1(false);
      setvToken(responseData.verificationToken);
      setcurrentForm('verification');
    }else{
      setl1(false)
      alert(responseData.msg)
    }
    }

    async function verify(e){
        e.preventDefault()
    setl2(true);
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        verificationToken : vToken,
        otp : otpVal,
        email : emailVal,
        name : nameVal,
        password: passwordVal
    })
    });
    const responseData = await response.json();
    if(responseData.success){
        setl2(false);
        alert(responseData.msg);
    }else{
      
        setl2(false);
      alert(responseData.msg);
    }
    }
    return (
        <>
            {/* credentials form */}
            <div className='container' style={{display : currentForm === 'credentials' ? 'flex' : 'none'}}>
                <div className='sub-container'>
                    <span className='title'>Create Account</span>
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Email</label>
                    <input className='form-input' type="email" onInput={(e)=>{setemailVal(e.target.value)}}/>
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Name</label>
                    <input className='form-input' type="text" onInput={(e)=>{setnameVal(e.target.value)}}/>
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Password</label>
                    <input className='form-input' type={visible ? 'text' :'password'} onInput={(e)=>{setpasswordVal(e.target.value)}}/>
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Confirm Password</label>
                    <input className='form-input' type={visible ? 'text' :'password'} onInput={(e)=>{setconfirmPasswordVal(e.target.value)}}/>
                </div>

                <div className='sub-container'>
                    <div>
                    <label className='form-input-label'>Show Password</label>
                    <input className='form-input' type="checkbox" onInput={()=>{setvisible(!visible)}}/>
                    </div>
                </div>

                {l1 ? <Spinner></Spinner> : <div className='btn-bar'>
                    <button className='btn' onClick={()=>{navigate('/')}}>Cancel</button>
                    <button className='btn' disabled={db1} onClick={createAccount}>Create Account</button>
                </div>}
            </div>
            {/* credentials form */}


            {/* verification form */}
            <div className='container' style={{display : currentForm === 'verification' ? 'flex' : 'none'}}>
                <div className='sub-container'>
                    <span className='title'>Verify</span>
                </div>
                
                <div className='sub-container'>
                    <label className='form-input-label'>Enter OTP</label>
                    <input className='form-input' type="number" onInput={(e)=>{setotpVal(e.target.value)}}/>
                </div>

                {l2 ? <Spinner></Spinner> :<div className='btn-bar'>
                    <button className='btn' onClick={()=>{navigate('/')}}>Cancel</button>
                    <button className='btn' disabled={db2} onClick={verify}>Verify</button>
                </div>}
            </div>
            {/* verification form */}
        </>
    )
}

export default SignUp