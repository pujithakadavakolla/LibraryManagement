import React from 'react'
import { useEffect,useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import '../Styles/readbook.css'
import { NavLink } from 'react-router-dom'

const ReadBook = ({cart,setCart}) => {
    let location=useLocation()
    let path=location.pathname.startsWith('/userPortal')
    let params=useParams()
    let book_id=params.id
    let[book,setBook]=useState([])
        useEffect(()=>{
            let fetchData=async()=>{
                let response= await fetch(`http://localhost:4000/books/${book_id}`)
                let data =await response.json()
                setBook(data)

            }
            fetchData()
        })
return (
    <div className='books1'>
        <div className='book2'>
            <img src={book.thumbnailUrl} alt="" />
        </div>
        <div className="book3">
            <p>Title: <strong>{book.title}</strong></p>
            <p>Short Desc: <strong>{book.shortDescription}</strong> </p>
            <p>Long Desc: <strong>{book.longDescription}</strong> </p>
            <p>Status: <strong>{book.status}</strong> </p>
            <div className='back1'>
            { path ?
                <div className='back'><button><NavLink to="/userPortal/Books">Back</NavLink></button> </div> 
                :
                <div className='back'>
                    <button> <NavLink to="/adminPortal/Books">Back</NavLink></button>
                </div>

            }
            {path && <button id='back2' onClick={()=>setCart([...cart,book])}>Add To Favourites</button>}
            </div>
        </div>

    </div>
)
}

export default ReadBook
