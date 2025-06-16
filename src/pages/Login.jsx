import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    
  const { user, loginWithRedirect } = useAuth0();
    return (
        <div className="flex w-full  min-h-screen flex-col bg-violet-100 ">
          <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <p className='text-3xl mb-14 text-[#5030E5] text-center'>Welcome, please login to access the dashboard</p>
            <button
              className="bg-[#5030E5] text-white h-10 px-3 p#5030E5y-1 rounded-md "
              onClick={() => loginWithRedirect()}
            >
              Login / Signup
            </button>
          </div>
        </div>
      );
    };

export default Login