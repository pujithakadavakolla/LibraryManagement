import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import '../../Styles/userLogin.css'

const UserLogin = () => {
    let navigate = useNavigate()
    let email = useRef()
    let password = useRef()
    let details = (e) => {
        e.preventDefault()
        navigate('/UserPortal')
    }
    let logo2 = '/images/logo.png'
    return (
        <div className='userLogin'>
            <div className='navba1'>
                <div className='circle2'>
                    <img src={logo2} alt="" />
                </div>
                <h1>BOOK HUB</h1>
            </div>
            <div className="us">
                <div className='userForm'>
                    <h1>User Login </h1>
                    <form onSubmit={details}>
                        <div className="userEmail"> 
                            <label htmlFor="">Email Id:     </label>
                            <input ref={email} type="email" placeholder='Enter your Email address' /> 
                        </div>
                        <div className="userPassword">
                            <label htmlFor="">Password: </label>
                            <input ref={password} type="password" placeholder='Enter your password' /> 
                        </div>
                        <div className="loginBtn">
                            <button>Login</button>
                            <NavLink to='/'><button>Go Back</button></NavLink>
                        </div>
                    </form>

                </div>
            </div>
        </div>


    )
}

export default UserLogin
