import React, { useState } from "react";
import CarouselCustomNavigation from "./Home/Caraousel/CarouselCustomNavigation";
import { login } from "../services/auth";
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authSlice'
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const data = await login({
        email,
        password
      })
      dispatch(authLogin(data))
      navigate('/')
    } catch (error) {
      alert("Invalid credentials")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
      <CarouselCustomNavigation className="w-[70%] hidden lg:flex" disable={true} hidden="hidden"/>
        <div className="w-full p-8 lg:w-1/2">
          <img src="../../images/logo.png" alt="" className="text-xl text-gray-600 text-center w-28 m-auto"/>
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mt-8">
            <button className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
            onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <div className="mt-4 flex items-center w-full text-center">
            <a
              href="/register"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Don&apos;t have any account yet?
              <span className="text-blue-700"> Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;