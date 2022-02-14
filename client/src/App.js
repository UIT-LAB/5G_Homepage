import React from 'react'
import Home from './pages/Home'
import Nav from './component/Nav'
import About from './pages/About';
import Gallery from './pages/gallery/Gallery';
import Member from './pages/Member';
import Research from './pages/Research';
import Notice from './pages/Notice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';
import GalleryDetail from './pages/gallery/GalleryDetail';
import NoticeDetail from './pages/NoticeDetail';
import './style/App.css'
import Update from './component/Update';
import Write from './component/Write';


function App() {
  return (
    <div className='wrap'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/gallery/detail/:num' element={<GalleryDetail />} />
          <Route path='/gallery/update/:num' element={<Update />} />
          <Route path='/gallery/write' element={<Write />} />
          <Route path='/member' element={<Member />} />
          <Route path='/research' element={<Research />} />
          <Route path='/notice' element={<Notice />} />
          <Route path='/notice/detail/:num' element={<NoticeDetail />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
