import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Styles/adminLogin.css'
import { NavLink } from 'react-router-dom'

const AdminLogin = () => {
    let navigate = useNavigate()
    let email = useRef()
    let password = useRef()
    let details = (e) => {
        e.preventDefault()
        let admin = {
            email: "admin@gmail.com",
            password: "admin@1234"
        }
        if (email.current.value === admin.email && password.current.value === admin.password) {
            //navigate to admin portal
            navigate('/adminPortal')
        } else {
            alert("invalid admin credentials")
        }


    }
    let logo2 = '/images/logo.png'
    return (
        <div className='adminLogin'>
            <div className='navba'>
                <div className='circle'>
                    <img src={logo2} alt="" />
                </div>
                <h1>BOOK HUB</h1>
            </div>
            <div className="adminImage">
                    <div className='adminForm'>
                        <h1>Admin Login </h1>
                        <form onSubmit={details}>
                            <div className="adminEmail">
                                <label htmlFor="">Email Id:     </label>
                                <input ref={email} type="email" placeholder='Enter your Email address' />
                            </div>
                            <div className="adminpassword">
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

export default AdminLogin;
