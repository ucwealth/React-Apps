import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Booklist extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer> 
                { context => {
                const { light, dark, isLightTheme } = context
                const theme = isLightTheme ? light : dark 
    
                return (
                <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
                    <ul>
                        <li style={{ background: theme.ui }}>The Son of the House</li>
                        <li style={{ background: theme.ui }}>Things fall apart</li>
                        <li style={{ background: theme.ui }}>No Longer at Ease</li>
                    </ul>
                </div>
                )}}</ThemeContext.Consumer>
        )
    }
}

export default Booklist
