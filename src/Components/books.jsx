import React from 'react'
import '../Styles/books.css'
import { useEffect,useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Books = () => {
    let [books,setBooks]=useState([])
    let navigate=useNavigate()
    let location=useLocation()
    let path=location.pathname.startsWith('/adminPortal')
    let path1=location.pathname.startsWith('/userPortal')
        useEffect(()=>{
            let fetchData=async()=>{
            let response=await fetch('http://localhost:4000/books')
            let data=await response.json()
            setBooks(data)
            }
            fetchData()
        },[books])
        let readBook=(id)=>{
            if(path){
                navigate(`/adminPortal/books/${id}`)
            }
            else{
                navigate(`/userPortal/books/${id}`)
            }
        }
        let handleDelete=(id,title)=>{
            fetch(`http://localhost:4000/books/${id}`,{
                method:'DELETE'
            })
            alert(`$(title)got deleted`)
        }
        

return (
    <div className='book'>
    <h1>Books Collection</h1>
    <div className="books_list">
        {books.map((data)=>(
            <div className='allbooks'>
            <div className="books">
                <img width={500} height={500} src={data.thumbnailUrl} alt="" />
            </div>
            <div className='booksdata'>
                <p>Title:<strong>{data.title}</strong></p>
                <p>Written By:<strong>{data.authors}</strong></p>
                <p>categories:<strong>{data.categories}</strong></p>
                <p>Page Count:<strong>{data.pageCount}</strong></p>
                <button id='a' onClick={()=>readBook(data.id)}>Read Book</button>
                {path &&  <button onClick={()=>handleDelete(data.id,data.title)} id='b'>Delete Book</button>}
                {path1 &&   <button id='a'>Add To Cart</button>}

            </div>

            </div>

        ))}
    </div>
    </div>
)
}

export default Books
