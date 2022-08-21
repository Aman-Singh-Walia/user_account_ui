import React, {useState, useEffect} from 'react'
import '../styles/style.css'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'

function LogIn() {
    const loggedIn = localStorage.getItem('authToken');
    const navigate = useNavigate()
    // credentials value
    const [emailVal, setemailVal] = useState('')
    const [passwordVal, setpasswordVal] = useState('')
    // show or hide password
    const [visible, setvisible] = useState(false)
    // loading
    const [l1, setl1] = useState(false);
    // disable button until every field is filled correctly
    let db1 = emailVal === '' || passwordVal.length < 6 ? true : false ;
    
async function logIn(e){
    e.preventDefault()
    setl1(true);
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email : emailVal,
        password: passwordVal
    })
    });
    const responseData = await response.json();
    if(responseData.success){
        setl1(false);
      localStorage.setItem("authToken",responseData.authToken)
      alert(responseData.msg);

      navigate('/account')
    }else{
      alert(responseData.msg);
      setl1(false);
    }
}

useEffect(() => {
  if(loggedIn){
    navigate('/account')
  }
}, [loggedIn, navigate])

    return (
        <>
            <div className='container'>
                <div className='sub-container'>
                    <span className='title'>LogIn</span>
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Email</label>
                    <input className='form-input' type="email" onInput={(e)=>{setemailVal(e.target.value)}}/>
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Password</label>
                    <input className='form-input' type={visible ? 'text' :'password'} onInput={(e)=>{setpasswordVal(e.target.value)}}/>
                </div>

                <div className='sub-container'>
                    <div>
                    <label className='form-input-label'>Show Password</label>
                    <input className='form-input' type="checkbox" onInput={()=>{setvisible(!visible)}}/>
                    </div>
                </div>

                {l1 ? <Spinner></Spinner> :<div className='btn-bar'>
                    <button className='btn'>Cancel</button>
                    <button className='btn' disabled={db1} onClick={logIn}>Log In</button>
                </div>}
            </div>
        </>
    )
}

export default LogIn