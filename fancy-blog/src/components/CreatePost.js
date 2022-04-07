import { useState } from "react";
import { useNavigate } from 'react-router-dom'

 const CreatePost = () => {
     const [title, setTitle] = useState('')
     const [body, setBody] = useState('')
     const [author, setAuthor] = useState('mario')
     const [isPending, setIsPending] = useState(false)
     const navigate = useNavigate()

     const handleSubmit = (e) => {
         e.preventDefault()
         const post = {title, body, author}

         setIsPending(true)

         fetch('http://localhost:8000/posts', {
             method: 'POST',
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(post)
         }).then(() => {
             setIsPending(false)
             console.log('new post added')
             navigate('/')
         })
     }
     
    return ( 
        <div className="create">
            <h1>Add New Post</h1>
            <form onSubmit={handleSubmit}>
                <label>Post title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) => { 
                    setTitle(e.target.value)
                }}
                />

                <label>Post body: </label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}>
                    
                </textarea>
                <label>Post author: </label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="wiki">wiki</option>
                    <option value="only fans">only fans</option>
                </select>
                { !isPending && <button type="submit">Add Post</button> }
                { isPending && <button disabled type="submit">Adding Post...</button> }
            </form>
        </div>
     );
}

export default CreatePost
