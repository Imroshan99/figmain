import React from 'react'
import "./App.css"
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from "./components/Login.js"
import { SignIn, Signup } from './components/Signup'
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
            <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>} />
            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App