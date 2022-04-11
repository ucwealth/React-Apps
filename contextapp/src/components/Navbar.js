import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
    const { isAuthenticated, toggleAuth } = useContext(AuthContext)
    const { isLightTheme, dark, light } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark 

    return ( 
        <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <div onClick={toggleAuth} style={{ cursor: 'pointer' }}>
            {isAuthenticated ? 'LoggedIn' : 'LoggedOut'}
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
     );
}
 
export default Navbar;

// Class based context below

// class Navbar extends Component {
//     // static contextType = ThemeContext
//     render() {
//         return (
//             <AuthContext.Consumer>{(authContext) => (
//                 <ThemeContext.Consumer>{(themeContext) => {
//                     const { isAuthenticated, toggleAuth } = authContext
//                     const { isLightTheme, dark, light } = themeContext
//                     const theme = isLightTheme ? light : dark 
//                     return (
//                         <nav style={{ background: theme.ui, color: theme.syntax }}>
//                             <h1>Context App</h1>
//                             <div onClick={toggleAuth} style={{ cursor: 'pointer' }}>
//                                 {isAuthenticated ? 'LoggedIn' : 'LoggedOut'}
//                             </div>
//                             <ul>
//                                 <li>Home</li>
//                                 <li>About</li>
//                                 <li>Contact</li>
//                             </ul>
//                         </nav>
//                     )
//                 }}</ThemeContext.Consumer>
//             )}</AuthContext.Consumer>
//         )
//     }
// }

// export default Navbar