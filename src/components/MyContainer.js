import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./Home"
import Contact from "./Contact"
import Signup from "./Signup"
import Login from "./Login"

function MyContainer() {
  return (
 
   
    <div className='mycontainer'>MyContainer
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="contact" element={<Contact/>}/>
    </Routes>

    </div>
    
    
  
  )
}

export default MyContainer