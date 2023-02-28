import React from 'react'
import './App.css';
// import {Route, Switch} from'react-router-dom'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Pages/Landing/Landing';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import OurTeam from './Pages/OurTeam/OurTeam'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Landing />} />
        {/* <Route path='/finddoctor' element={<FindDoctor />} /> */}
        <Route path='/chat' element={<Chat />} />
        <Route path='/ourteam' element={<OurTeam />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
  </BrowserRouter>
  )
}

export default App