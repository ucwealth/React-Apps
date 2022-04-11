import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
    const { books } = useContext(BookContext)
    const { light, dark, isLightTheme } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark 

    return ( 
        <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
        <ul>
            { books.map(book => { return (
                <li key={book.id} style={{ background: theme.ui }}>{ book.title }</li>
            )}) }
        </ul>
    </div>
     );
}
 
export default BookList;

// Class based context below

// class Booklist extends React.Component {
//     render() {
//         return (
//             <ThemeContext.Consumer> 
//                 { context => {
//                 const { light, dark, isLightTheme } = context
//                 const theme = isLightTheme ? light : dark 
    
//                 return (
//                 <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
//                     <ul>
//                         <li style={{ background: theme.ui }}>The Son of the House</li>
//                         <li style={{ background: theme.ui }}>Things fall apart</li>
//                         <li style={{ background: theme.ui }}>No Longer at Ease</li>
//                     </ul>
//                 </div>
//                 )}}</ThemeContext.Consumer>
//         )
//     }
// }

// export default Booklist


