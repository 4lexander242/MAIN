import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //destructure
    const {email,password,remember}=formData;
    console.log(email)
    try {
      const response = await fetch("http://localhost:4232/signIn",{
        method:"POST",
        headers:{
          "content-type":'application/json'
        },
        body:JSON.stringify({
          email: email,
          password: password,
        })
      })
      
      //window.location="/"
      const data = await response.json();
      console.log(data.message)

    } catch (error) {
          console.log(error.message) 
    }
    console.log('Form submitted:', formData);
    
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('public/Reflect-modified.jpeg')] bg-cover bg-center from-black to-gray-900 w-full">
      <div className="relative w-full max-w-md p-8 bg-gray-800/80 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-3xl font-semibold text-center text-white mb-2">C R M</h2>
        <p className="text-center text-gray-400 mb-6">Hey buddy, enter your details</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-gray-500 outline-none"
              placeholder="Enter email"
              required=""
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-gray-500 outline-none"
              placeholder="••••••••"
              required=""
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center text-gray-400 text-sm">
          Don’t have an account?{" "}
          <Link to="/Signup" className="text-gray-200 hover:underline">

            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
 
}

export default Login;
