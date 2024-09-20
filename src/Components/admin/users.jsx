import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Users = () => {
    let [user,setUser]=useState([])
    let navigate=useNavigate()
        useEffect(()=>{
            let fetchData=async()=>{
            let response=await fetch('http://localhost:4000/users')
            let data=await response.json()
            setUser(data)
            }
            fetchData()
        },[user])

return (
    <div>
    <h1>Users page</h1>
    <div className="users_list">
        {user.map((data)=>(
            <div className='allusers'>
            <div className="users">
                <h2>FirstName:{data.firstName}</h2>
                <h2>LastName:{data.lastName}</h2>
            </div>
            <div className='usersdata'>
                <p>Email:<strong>{data.emailId}</strong></p>
                <p>Phone Number:<strong>{data.Phonenumber}</strong></p>
                <p>User Id:<strong>{data.id}</strong></p>
                <p>User Password:<strong>{data.password}</strong></p>
                {/* <button id='a' onClick={()=>readBook(data.id)}>Read Book</button>
                <button onClick={handleDelete(data.id,data.title)} id='b'>Delete Book</button> */}


            </div>

            </div>

        ))}
    </div>
    </div>
)
}

export default Users
