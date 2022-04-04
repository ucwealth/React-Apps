import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [posts, setPosts] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'React is Super fun!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    return (
        <div className="home">
            <BlogList posts={posts} />
        </div>
    )
}
export default Home 