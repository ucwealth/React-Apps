 const CreatePost = () => {
    return ( 
        <div className="create">
            <h1>Add New Post</h1>
            <form action="" method="post">
                <label>Post title:</label>
                <input 
                type="text" 
                required
                />
                <label>Post body: </label>
                <textarea required>
                    
                </textarea>
                <label>Post author: </label>
                <select name="" id="">
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="wiki">wiki</option>
                    <option value="only fans">only fans</option>
                </select>
                <button type="submit">Add Post</button>
            </form>
        </div>
     );
}

export default CreatePost
