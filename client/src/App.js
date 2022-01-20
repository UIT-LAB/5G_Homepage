import React from 'react'
import Home from './pages/Home'
import Nav from './component/Nav'
import Board from './pages/Board';
import Gallery from './pages/Gallery';
import Member from './pages/Member';
import Research from './pages/Research';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/home' element ={<Home/>}/>
          <Route path='/board' element={<Board />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/member' element={<Member />} />
          <Route path='/research' element={<Research />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
