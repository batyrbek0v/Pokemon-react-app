import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../components/Main'
import Home from '../pages/home/Home'
import Pokemore from '../pages/PokeMore/Pokemore'

const Layout = () => {
  return (
    <div>
      <Routes>
          <Route path='home' element={<Home/>} />
          <Route path='/' element={<Main/>} />
          <Route path='/pokemon/:id' element={<Pokemore/>} />
      </Routes>
    </div>
  )
}

export default Layout
