import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Not Found</h1>
            <p>That page cannot be found</p>
            <Link to='/' style={{textDecoration:'dashed', color: 'blue', marginTop: 10 }}>Back to Homepage...</Link>
        </div>
    )
}

export default NotFound
