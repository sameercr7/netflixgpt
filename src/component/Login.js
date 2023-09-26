import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
  const [SignIN,setSignIn]=useState(true);
  const changing=()=>{
    setSignIn(!SignIN);
    
  };
  return (
    <div >
     
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='image logo'/>
      </div>       
     <form className=' py-4 my-36 mx-auto right-0 left-0 absolute p-12 bg-black w-3/12 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>{SignIN ? "Sign In":"Sign Up"} </h1>
      {(!SignIN) &&
      (<input type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700' />)}

      <input type='text' placeholder='Email' className='p-2 my-4 w-full bg-gray-700' />
      <input type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-700' />
<button className='p-3 my-6 bg-red-700 rounded-lg w-full'  >{SignIN ? "Sign In":"Sign Up"}</button>
<p className='py-0 text-xs cursor-pointer' onClick={changing}>{SignIN ? "New to Netflix?Signup Now":"Already Registered"} </p>
     </form>



    </div>
  )
}

export default Login

