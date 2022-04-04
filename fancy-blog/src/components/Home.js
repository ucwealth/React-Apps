import { useState, useEffect } from 'react'
import PostList from './PostList'

const Home = () => {
    const [posts, setPosts] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'React is Super fun!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = (id) => {
        setPosts(posts.filter((post) => post.id !== id ))
    }

    useEffect(() => {
        console.log('use effect ran')
    })

    return (
        <div className="home">
            <PostList posts={posts} title='All Posts' handleDelete={handleDelete} />
            <PostList posts={posts.filter( (post) => post.author === 'mario' )} title="Mario's posts"  />
        </div>
    )
}
export default Home 