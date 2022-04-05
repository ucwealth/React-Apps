import { Link } from 'react-router-dom'

const PostList = ({ posts, title }) => {
    
    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {
            posts.map((post) => (
                <div key={post.id} className='blog-preview'>
                    <Link to={`/posts/${post.id}`} style={{textDecoration:'none'}}>
                    <h2>{post.title}</h2>
                    <h5>Written by: {post.author}</h5>
                    </Link>
                </div>
            ))
        }
        </div>
   
    );
}
export default PostList