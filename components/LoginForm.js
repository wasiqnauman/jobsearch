import React from "react";
import { useRouter } from "next/dist/client/router";

function LoginForm() {
    const router = useRouter();
  return (
    <div>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              className="shadow-md appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight hover:shadow-lg focus:outline-none focus:shadow-lg focus:shadow-outline transition transform duration-200 ease-out"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow-md appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight hover:shadow-lg focus:outline-none focus:shadow-lg focus:shadow-outline transition transform duration-200 ease-out"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="mt-3 text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center space-x-3 justify-between">
          <button 
                type="button" onClick={() => router.push('/home')}
                className="text-gray-500 px-5 py-3 shadow-md rounded-full font-semibold my-1 hover:shadow-lg hover:text-white hover:bg-green-500 active:scale-90 transition transform duration-300 ease-in-out">
                Log in
            </button>
            <button 
                type="button" onClick={() => router.push('/signUp')}
                className="text-gray-500 px-4 py-3 shadow-md rounded-full font-semibold my-1 hover:shadow-lg hover:text-white hover:bg-blue-500 active:scale-90 transition transform duration-300 ease-in-out">
                Sign up
            </button>     
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2022 Wasiq Nauman Qureshi.
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
