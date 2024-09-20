import React from 'react'
import '../../Styles/adminPortal.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../home'
import Books from '../books'
import Users from './users'
import AddBooks from './addBooks'
import AddUsers from './addUsers'
import Navbar from '../navbar'
import ReadBook from '../ReadBook'

const AdminPortal = () => {
    return (
        <div className='adminPortal'>
            <Navbar />
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<Books />} path='/Books' />
                <Route element={<Users />} path='/Users' />
                <Route element={<AddBooks />} path='/AddBooks' />
                <Route element={<AddUsers />} path='/AddUsers' />
                <Route element={<ReadBook />} path='/books/:id' />
            </Routes>

        </div>
    )
}

export default AdminPortal;
