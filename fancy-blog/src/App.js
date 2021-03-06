import Navbar from './components/Navbar';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PostDetails from './components/PostDetails';
import NotFound from './components/404NotFound';

function App() {

  return (
    <Router>
      <div className="App">
       <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<CreatePost />} />
            <Route path='/posts/:id' element={ <PostDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
