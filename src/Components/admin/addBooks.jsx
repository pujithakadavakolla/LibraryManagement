import React, { useRef } from 'react'
import '../../Styles/addbook.css'

const AddBooks = () => {
    let title = useRef()
    let thumbnail = useRef()
    let author = useRef()
    let pageCount = useRef()
    let catagory = useRef()
    let addBook = (e) => {
        e.preventDefault()
        let book = {
            thumbnailUrl: thumbnail.current.value,
            title: title.current.value,
            authors: author.current.value,
            pageCount: pageCount.current.value,
            categories: catagory.current.value
        }
        thumbnail.current.value = '';
        title.current.value = '';
        author.current.value = '';
        pageCount.current.value = '';
        catagory.current.value = '';
        fetch(`http://localhost:4000/books`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        })
        alert('Book Add Successfully')
    }

    return (
        <div className='addBook'>
            <div className="addBookLogo">
                <h1>Add Book</h1>
                <div className='form'>
                    <form onClick={addBook} className='for'>
                        <div className="title">
                            <input ref={title} type="text" placeholder='Enter Name' /> <br /> <br />
                        </div>
                        <div className="thumbnail">
                            <input ref={thumbnail} type="text" placeholder='Enter url' /> <br /> <br />
                        </div>
                        <div className="author">
                            <input ref={author} type="text" placeholder='Enter author name' />  <br /> <br />
                        </div>
                        <div className="pagecount">
                            <input ref={pageCount} type="text" placeholder='Enter page count' /> <br /> <br />
                        </div>
                        <div className="catagory">
                            <input ref={catagory} type="text" placeholder='Enter catagory' /> <br /> <br />
                        </div>
                        <button>Add Book</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBooks
