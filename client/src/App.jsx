import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { About, Home, Profile, SignIn, SignUp } from './pages'
import Header from './components'

const App = () => {
  return (
    <BrowserRouter>
    {/* Header  */}
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App