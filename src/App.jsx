import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateUser from './Components/CreateUser'
import EditUser from './Components/EditUser'
import Navbar from './Components/Navbar'
import User from './Components/User'


const App = () => {
  return (
    <>
      <BrowserRouter>
            <Navbar/>
          <Routes>
            <Route   path='/' element={<User/>}/>
            <Route   path='/createUser' element={<CreateUser/>}/>
            <Route   path='/editUser/:index' element={<EditUser/>}/>

          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App