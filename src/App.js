import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/TemplateTwo/auth/style.scss"
import "./App.css"
import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import SignIn from "./components/TemplateTwo/auth/SignIn"
// import {  Signup } from './components/TemplateTwo/auth/Signup'
import TemplateTwo from './components/TemplateTwo';
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
            <TemplateTwo/>
      </BrowserRouter>
    </div>
  )
}

export default App