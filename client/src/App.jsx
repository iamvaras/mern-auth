import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { About, Home, Profile, SignIn, SignUp } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App