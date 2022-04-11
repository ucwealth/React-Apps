import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: "Operons Origins", author: "Telegram Crackheads", id: 1},
        {title: "The Knights Templar", author: "Da Vinci", id: 2},
        {title: "The Chamber of Secrets", author: "JK Rowlings", id: 3},
    ])
    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuidv4() }])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    return ( 
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;