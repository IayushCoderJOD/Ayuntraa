import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { checkValidData } from '../utils/Validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../utils/Firebase';

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [errorMsg, setErrorMsg] = useState(null);
  const [allowLogin,setAllowLogin]=useState(false)
  const navigate=useNavigate();
  const email = useRef(null);
  const password = useRef(null);

  const handleLogin = () => {
    const msg = checkValidData(email.current.value, password.current.value)
    setErrorMsg(msg);
    if(msg)return 
    if(!isLoggedIn){
      // sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // console.log(user)
    navigate("/main")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg("User already existed please Sign In");
    
  });
    }else{
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          navigate("/main");
        })
        .catch((error) => {
          const errorMessage = "User not found please Sign Up";
          setErrorMsg(errorMessage);
        });


    }

    if (!msg) {
      email.current.value = "";
      password.current.value = "";
    }
  };
  const toggleSignIn = (e) => {
    e.preventDefault();
    setIsLoggedIn(!isLoggedIn);
  }
  return (

    <div className='' >
      <form
        onSubmit={(e)=>e.preventDefault()}        
        className="absolute w-8/12 rounded-xl pb-5 md:w-6/12 lg:w-4/12 my-36 p-12 bg-gray-400 shadow-2xl text-black mx-auto left-0 right-0 bg-opacity-80 "
      >
        <h1 className="text-3xl font-semibold">
          {isLoggedIn ? "Sign in" : "Sign up"}
        </h1>

        {!isLoggedIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-white rounded-md shadow-lg "
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          ref={email}
          className="p-4 my-4 w-full bg-white  rounded-md  shadow-lg"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          // ref={password}
          className="p-4 my-4 w-full bg-white rounded-md  shadow-lg"
        />
        <p className='text-red-500 text-lg p-2' >{errorMsg}</p>
        <div className='pt-7'>
          <Link to={!allowLogin ? "/":"/main"}>
            <button
              onClick={handleLogin}
              type="submit"
              className="p-4 my-6 bg-gray-800 text-white w-full rounded-lg text-lg shadow-lg"
            >
              {isLoggedIn ? "Sign In" : "Sign up"}
            </button>
          </Link>
        </div>

        <button
          onClick={toggleSignIn}
          className="text-gray-800 font-bold">
          {!isLoggedIn ? "Already a user? " : "New to Ayuntraa? "}
          <span className="font-semibold text-lg text-black ">
            {!isLoggedIn ? "Sign in now" : "Sign up now"}

          </span>
        </button>
      </form>
    </div>
  )
}

export default LoginForm