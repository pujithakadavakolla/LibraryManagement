import React from 'react'
import { useRef } from 'react'
import '../../Styles/AddUser.css'

const AddUsers = () => {
    let first = useRef()
    let last = useRef()
    let email = useRef()
    let number = useRef()
    let id = useRef()
    let password = useRef()
    let addUser = (e) => {
        e.preventDefault()
        let user = {
            firstName: first.current.value,
            lastName: last.current.value,
            emailId: email.current.value,
            phoneNumber: number.current.value,
            id: id.current.value,
            password: password.current.value
        }
        fetch(`http://localhost:4000/users/`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(user)
        })
        alert('user Add Successfully')
    }

    return (
        <div className='user'>
            <div className="logo4">
                <h1>Add User</h1>
                <div className='form'>
                    <form onSubmit={addUser} className='for'>
                        <div className="fir">
                            <input ref={first} type="text" placeholder='Enter First Name' /> <br /> <br />
                        </div>
                        <div className="las">
                            <input ref={last} type="text" placeholder='Enter Last Name' /> <br /> <br />
                        </div>
                        <div className="ema">
                            <input ref={email} type="text" placeholder='Enter Email' />  <br /> <br />
                        </div>
                        <div className="number1">
                            <input ref={number} type="text" placeholder='Enter Phone Number' /> <br /> <br />
                        </div>
                        <div className="id">
                            <input ref={id} type="text" placeholder='Enter Id' /> <br /> <br />
                        </div>
                        <div className="pass">
                            <input ref={password} type="text" placeholder='Enter Password' /> <br /> <br />
                        </div>
                        <button>Add User</button>
                    </form>
                </div>




            </div>
        </div>
    )
}

export default AddUsers
