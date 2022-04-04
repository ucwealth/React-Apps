const BlogList = ({ posts }) => {
    return (
        <div className="blog-list">
             {
               posts.map((post) => (
                   <div key={post.id} className='blog-preview'>
                    <h2>{post.title}</h2>
                    <h5>Written by: {post.author}</h5>
                    {/* <p>{post.body}</p> */}
                   </div>
                   
               ))
           }
        </div>
    );
}
export default BlogList