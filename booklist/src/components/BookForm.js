import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const { dispatch } = useContext(BookContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_BOOK', book: { title, author }})
        setTitle('')
        setAuthor('')
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" required value={title} placeholder="book title" onChange={(e) => setTitle(e.target.value) }  />
            <input type="text" required value={author} placeholder="author's name" onChange={(e) => setAuthor(e.target.value) }  />
            <input type="submit" value="Add Book" />
        </form>
     );
}
 
export default BookForm;