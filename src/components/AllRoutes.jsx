import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from "../components/Homepage"
import Chatapp from "../components/ChatApp"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/chat' element={<Chatapp/>}/>
    </Routes>
  )
}

export default AllRoutes

