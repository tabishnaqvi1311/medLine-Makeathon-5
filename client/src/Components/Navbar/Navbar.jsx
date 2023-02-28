import React from 'react';
// import style from './navbar.css' 
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.jpeg';
import Modal from '../Modals/Modal';

const Navbar = () => {
  return (
    <>
    
    <nav>
      <div className="left-part">
        <img className="logoImg" src = {Logo} alt='hello' style={{
          height: '70px',
          
        }}/>
      </div>
      <div className="right-part">
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to='/finddoc'>Find Doctors</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="login">
              <Link to="/login">Login</Link>
            </li>
            <li className="signup">
              <Link to="/signup">Signup</Link>
            </li>
        </ul>
      </div>
    </nav> 

    <Modal/>
  </>
  )
}

export default Navbar
