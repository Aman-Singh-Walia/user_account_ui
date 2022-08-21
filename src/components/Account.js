import React, {useState, useEffect} from 'react'
import '../styles/style.css'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner';

function Account() {
    const navigate = useNavigate();
    // credentials value
    const [nameVal, setnameVal] = useState('')
    const [currentPassVal, setcurrentPassVal] = useState('')
    const [newPassVal, setnewPassVal] = useState('')
    const [confirmNewPassVal, setconfirmNewPassVal] = useState('')
    // current form
    const [currentForm, setcurrentForm] = useState('info')
    const [loggedInUser, setloggedInUser] = useState({email:'',name:''})
    // loading
    // const [l1, setl1] = useState(false)
    const [l2, setl2] = useState(false)
    const [l3, setl3] = useState(false)
    //enable and disable button
    let db1 = nameVal.length < 3 ? true :false;
    let db2 =currentPassVal.length < 6|| newPassVal.length < 6 || newPassVal !== confirmNewPassVal ? true :false;

   

    async function getLoggedInUser(token) {
        let response = await fetch('http://localhost:5000/manageaccount/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': token
          },
        })
        let responseData = await response.json()
        setloggedInUser(responseData.loggedInUserData);
      }

    async function logOut(){
        localStorage.removeItem('authToken');
        navigate('/')
    }


    async function changeName(e){
        e.preventDefault()
        setl2(true)
        const response = await fetch('http://localhost:5000/manageaccount/user/changename', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'auth-token' : localStorage.getItem("authToken")
          },
          body: JSON.stringify({
            newName : nameVal
        })
        });
        const responseData = await response.json();
        if(responseData.success){
            setl2(false)
          alert(responseData.msg);
        }else{
            setl2(false)
          alert(responseData.msg);
        }
      }
      async function changePassword(e){
        e.preventDefault()
        setl3(true)
        const response = await fetch('http://localhost:5000/manageaccount/user/changepassword', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'auth-token' : localStorage.getItem("authToken")
          },
          body: JSON.stringify({
            currentPassword:currentPassVal,
            newPassword:newPassVal
        })
        });
        const responseData = await response.json();
        if(responseData.success){
          alert(responseData.msg);
          setl3(false)
          logOut()
        }else{
          alert(responseData.msg);
          setl3(false)
        }
      }

      
      useEffect(() => {
        let token = localStorage.getItem('authToken');
        if(token){
            getLoggedInUser(token)
        }else{
            navigate('/')
        }
      
      }, [navigate])
      
    return (
        <>
            {/* account info */}
            <div className='container' style={{display : currentForm === 'info' ? 'flex' : 'none'}}>
                <div className='sub-container'>
                    <span className='title'>Account</span>
                </div>

                <div className='sub-container'>
                    <span>{loggedInUser.name}</span>
                </div>

                <div className='sub-container'>
                    <span>{loggedInUser.email}</span>
                </div>

                <div className='btn-bar'>
                    <button className='btn' onClick={logOut}>Log Out</button>
                    <button className='btn' onClick={()=>{setcurrentForm('manage')}}>Edit</button>
                </div>
            </div>
            {/* account info */}

            {/* manage */}
            <div className='container' style={{display : currentForm === 'manage' ? 'flex' : 'none'}}>
                <div className='sub-container'>
                    <span className='title'>Manage Account</span>
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Name</label>
                    <input className='form-input' type="text" defaultValue={loggedInUser.name} onInput={(e)=>{setnameVal(e.target.value)}}/>
                </div>

                {l2 ? <Spinner></Spinner> :<div className='btn-bar'>
                    <button className='btn' onClick={()=>{setcurrentForm('info')}}>Cancel</button>
                    <button className='btn' disabled={db1} onClick={changeName} >Change Name</button>
                </div>}

                <div className='sub-container'>
                    <label className='form-input-label'>Current Password</label>
                    <input className='form-input' type="password" onInput={(e)=>{setcurrentPassVal(e.target.value)}}/>
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>New Password</label>
                    <input className='form-input' type="password" onInput={(e)=>{setnewPassVal(e.target.value)}}/>
                </div>

                <div className='sub-container'>
                    <label className='form-input-label'>Confirm New Password</label>
                    <input className='form-input' type="password" onInput={(e)=>{setconfirmNewPassVal(e.target.value)}}/>
                </div>

                <div className='sub-container'>
                    <div>
                    <label className='form-input-label'>Show Password</label>
                    <input className='form-input' type="checkbox" />
                    </div>
                </div>

                {l3 ? <Spinner></Spinner> :<div className='btn-bar'>
                    <button className='btn' onClick={()=>{setcurrentForm('info')}}>Cancel</button>
                    <button className='btn' disabled={db2} onClick={changePassword}>Change Password</button>
                </div>}
            </div>
            {/* manage */}
        </>
    )
}

export default Account