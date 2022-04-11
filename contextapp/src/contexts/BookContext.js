import React, { createContext, useState } from 'react';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: "The Son of the House", id: 1},
        {title: "Things fall apart", id: 2},
        {title: "No Longer at Ease", id: 3},
        {title: "Girls at War", id: 4},
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;