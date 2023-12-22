import React, { useState } from 'react';
import './Login.css'
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

export default function Login() {
  const [action , setaction] = useState('Sign up')
  const [displayOfInput , setdisplayOfInput] = useState('block')
  const [displayOfLinks , setdisplayOfLinks] = useState('none')
  const login = ()=>{
    setaction('Login');
    setdisplayOfInput('none');
    setdisplayOfLinks('flex');
  }
  const sign = ()=>{
    setaction('Sign up');
    setdisplayOfInput('block');
    setdisplayOfLinks('none')
  }
  return (
    <section className='section'>
      <div className='con'>
      <h1>{action}</h1>
      <div className='inputs'>
        <input type='text' placeholder='Username' required/>
        <FaUser className='i' />
      </div>
      <div className='inputs' style={{display:displayOfInput}}>
        <input type='email' placeholder='Email' required />
        <FaUser className='i' />
      </div>
      <div className='inputs'>
        <input type='password' placeholder='Password' required/>
        <FaLock className='i' />
      </div>
      <div className='remember-forgot' style={{display:displayOfLinks}}>
        <label ><input type="checkbox" />Remember me</label>
        <a href="#">Forget my password ?</a>
      </div>
      <button className={action==='Login'?'gray':'button'} onClick={()=>{sign()}}>Sign up</button>
      <button className={action==='Sign up'?'gray':'button'} onClick={()=>{login()}}>Login</button>
      

    </div>
    </section>
    
    
  )
}
