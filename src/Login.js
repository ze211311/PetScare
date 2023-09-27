'use client';
import Cookies from 'universal-cookie';//use for manage cookie
import React from 'react'
import { useState, useEffect } from 'react';
import Modal_reg from './Modal-reg';
import axios from 'axios';
import { useNavigate } from "react-router-dom"; //user for change page

const Login = () => {
    const cookie = new Cookies(); //create val to use cookie
    const navigate = useNavigate(); //create val to navigate
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [wrongPS, setWrongPS] = useState(false); //for check if email or password is incorrect; true = password or email is incorrect
    const LoginButt = async () => {
        if (Email != "" && Password != "") {
            const res = await axios.get('http://localhost:6969/login?em=' + Email + '&pd=' + Password)
            if (res.data.message != null) {
                setWrongPS(true);
            }
            else {
                cookie.set("token", res.data.accessToken); //set new cookie name token
                navigate("/petScare")
            }
        }

    }

    useEffect(() => {
        if (cookie.get("token") != undefined) {
            navigate("/petScare")
        }
    }, []);

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-yellow-100 rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700">
                    Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange={(value) => setEmail(value.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange={(value) => setPassword(value.target.value)}
                        />
                    </div>
                    {wrongPS ? <div id='ifPasswordIsIncorrect' className='text-red-700 text-lg'>
                        <b>Your email or password is incorrect</b>
                    </div> : <></>}
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" type='button' onClick={LoginButt}>
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Modal_reg />
                </p>
            </div>
        </div>
    )
}

export default Login