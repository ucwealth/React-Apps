import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext)
    return (  
        <div className="navbar">
            <h1>Smartass Reading List</h1>
            <p>You have { books.length } books to finish...</p>
        </div>
    );
}
 
export default Navbar;