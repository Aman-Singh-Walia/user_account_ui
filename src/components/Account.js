import React, {useState, useEffect} from 'react'
import '../styles/style.css'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner';

function Account() {
    const navigate = useNavigate();
    // current form
    const [currentForm, setcurrentForm] = useState('info')
    const [loggedInUser, setloggedInUser] = useState({email:'',name:''})
    // loading
    const [l1, setl1] = useState(false)
    const [l2, setl2] = useState(false)
    const [l3, setl3] = useState(false)

   

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
                    <input className='form-input' type="text" defaultValue={loggedInUser.name}/>
                </div>

                {l2 ? <Spinner></Spinner> :<div className='btn-bar'>
                    <button className='btn' onClick={()=>{setcurrentForm('info')}}>Cancel</button>
                    <button className='btn'>Change Name</button>
                </div>}

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

                {l3 ? <Spinner></Spinner> :<div className='btn-bar'>
                    <button className='btn' onClick={()=>{setcurrentForm('info')}}>Cancel</button>
                    <button className='btn'>Change Password</button>
                </div>}
            </div>
            {/* manage */}
        </>
    )
}

export default Account