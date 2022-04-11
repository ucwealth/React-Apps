import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const { addBook } = useContext(BookContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addBook(title, author)
        setTitle('')
        setAuthor('')
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label>Book Title: </label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value) }  />
            <label>Author's Name: </label>
            <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value) }  />
            <input type="submit" value="Add Book" />
        </form>
     );
}
 
export default BookForm;