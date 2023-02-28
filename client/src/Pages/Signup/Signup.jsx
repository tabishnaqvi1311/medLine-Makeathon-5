import React from 'react'
import { useState } from 'react';

const Signup = () => {
    
  const [userEmail, setuserEmail] = useState('');
  const [userName, setuserName] = useState('');
  const [pass, setPass] = useState('');
  const [reppass, setrepPass] = useState('');
  // the code above defines three state variables (variables that store info that can change) using the useState hook.  

  const submitUser = async () => {
    if((pass === reppass) && (pass.length >= 8)){
      //reset input values
      const response = await fetch('http://localhost:8181/newSubmit',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          email: userEmail,
          password: pass,
          userName: userName 
        })
      });
      
      const json = await response.json();
      console.log(json);
      setuserEmail('')  
      setuserName('');
      setPass('');
      setrepPass('');
      document.querySelector('button').style.backgroundColor = 'green'
    }
    else{
      document.querySelector('button').style.backgroundColor = 'red'
      // alert('pass != reppass ');
    }

  }

  const handleSubmit = async (event) => {
    // console.log('handleSubmit ran\n');
    event.preventDefault();   //prevent page refresh on submit
    //access input values

    await submitUser();
    // console.log(userEmail)
    // console.log(pass)
    // console.log(reppass)
    //check for repPass
  }

  return (
    <div className="ContainerLogin">
        <div className="centerBoxS">

            <h2>Get Started Today!</h2>
            <p className='SIGNUP'>SIGNUP</p>

            <div className="formWrapper">
                <form className="loginForm" autoComplete='off' onSubmit={handleSubmit} id='contact' method="POST">
                    <input type="username" className='contactField' name="username" placeholder="USERNAME" required value={userName} onChange={event => setuserName(event.target.value)}/>

                    <input type="email" className='contactField' name="email" placeholder="EMAIL" required value={userEmail} onChange={event => setuserEmail(event.target.value)}/>

                    <input type="password" className='contactField' name="password" placeholder="PASSWORD" required value={pass} onChange={event => setPass(event.target.value)} />

                    <input type='password' placeholder='REPEAT PASSWORD' name='reppsw' required className='contactField' value={reppass} onChange={event => setrepPass(event.target.value)}/>

                    <select name="dropdownLogin" className="dropdownLogin">
                        <option value="pat">I am a Patient</option>
                        <option value="doc">I am a Doctor</option>
                    </select>

                    <button type="submit" style={{
                        padding: '10px',
                        borderRadius: '20px',
                        border: 'none',
                        backgroundColor: '#9200ff',
                        color: 'white'

                    }}>Signin</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup
