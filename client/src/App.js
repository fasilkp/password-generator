import React from 'react'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './components/Register/Register'
import axios from 'axios'


export default function App() {
  axios.defaults.baseURL="http://localhost:4000"
  axios.defaults.withCredentials=true
  return (
    <>
      {/* <Home/> */}
      <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
      </Router>
    </>
  )
}
