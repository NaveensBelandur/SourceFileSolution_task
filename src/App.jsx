import React from 'react'
import NavBar from './Components/NavBar'
import { Routes, Route } from 'react-router-dom'
import PostDetail from './Components/PostDetail'
import Contact from './Components/Contact'
import Error from './Components/Error'
import Home from './Components/Home'
import Post from './Components/Post'
import About from './Components/About'





const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Post' element={<Post />} />
        <Route path='/Postdetails' element={<PostDetail />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </React.Fragment>

  )
}




export default App