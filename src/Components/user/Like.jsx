import React from 'react'
// import { useNavigate } from 'react-router-dom'


const Like = ({cart,setCart}) => {
    // let navigate=useNavigate()
    // let readBook=(id)=>{
    //     navigate(`userPortal/books/${id}`)
    // }
    
return (
    <div className='favourties'>
        <h1>Favourties</h1>
    { cart.map((data)=>(
        <div className="books">
            <h1>Title:{data.title}</h1>
            <img src={data.thumbnailUrl} alt="" />
            <h3>Page Count:{data.pageCount}</h3>
            <p>categories:<strong>{data.categories}</strong></p>
            <p>Page Count:<strong>{data.pageCount}</strong></p>
        </div>
    ))}
    
    </div>
    
)
}

export default Like
