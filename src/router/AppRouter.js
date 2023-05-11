import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Components/Header'
import Home from '../pages/Home'
import About from '../pages/About'
import Episodes from '../pages/Episodes'
import Contact from '../pages/Contact'

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/episodes' element={<Episodes/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter