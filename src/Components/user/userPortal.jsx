import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../navbar'
import Home from '../home'
import Books from '../books'
import ReadBook from '../ReadBook'
import Favorites from './Like'

const UserPortal = () => {
    let [cart,setCart]=useState([])

    return (
        <div>
            <Navbar />
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<Books cart={cart} setCart={setCart} />} path='/Books' />
                <Route element={<ReadBook cart={cart} setCart={setCart} />} path='/books/:id' />
                <Route  element={<Favorites cart={cart} setCart={setCart} />}  path='/favorites'/>
            </Routes>
        </div>
    )
}

export default UserPortal
