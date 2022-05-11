import React from 'react'
import LoginForm from '../components/LoginForm'
import logo from "/assets/images/logo.png";
import Image from "next/image";
function signUp() {
    return (
        <div className="flex flex-col h-screen justify-center items-center bg-gray-50">
          <div className="flex items-center mb-3">
            <div className="relative w-10 h-10">
              <Image
                src={logo}
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
            <h1 className="pl-5 font-semibold text-2xl">Create a new account</h1>
          </div>
          <LoginForm />
        </div>
        
      )
}

export default signUp