const PostList = ({ posts, title }) => {
    
    return (
        <div className="blog-list">
            <h2>{ title }</h2>
             {
               posts.map((post) => (
                   <div key={post.id} className='blog-preview'>
                    <h2>{post.title}</h2>
                    <h5>Written by: {post.author}</h5>
                   </div>
                   
               ))
           }
        </div>
    );
}
export default PostList