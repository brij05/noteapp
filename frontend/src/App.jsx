import React from 'react'
import Signup from './pages/signup'
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    
   <BrowserRouter>
   <Routes>
     <Route path="/home" element={<Home/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
    </Routes>

    </BrowserRouter>
  
    
     
  )
}

export default App