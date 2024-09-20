import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/landingPage.css'
const LandingPage = () => {
    let logo2 = '/images/logo.png'
    return (
        <div className='page'>
            <div className='nav'>
                <div className='circle'>
                    <img src={logo2} alt="" />
                </div>
                <h1>BOOK HUB</h1>
            </div>

            <div className='loginOptions'>
                <div className="login_body">
                    <h1>Welcome To Books Hub</h1>
                    <div className='btn'>
                        <button>
                            <Link to="/adminLogin">Admin Login</Link>
                        </button>
                        <button>
                            <Link to="/userLogin" >User Login</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="footer">
                    <div className="footer_class">
                        
                    </div>
                
            </div>
        </div>
    )
}

export default LandingPage
