import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4232/send-otp", {
        method: "POST",
        headers: {
          "content-type": 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
        })
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }

    navigate("/verify-otp", { state: { ...formData } });

    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('public/Reflect-modified.jpeg')] bg-cover bg-cente w-full">
      <div className="relative w-full max-w-2xl p-6 bg-gray-800/80 rounded-xl shadow-lg border border-gray-700">
        
        {/* CRM Box */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-gray-700 text-white py-2 px-6 rounded-md text-center shadow-md">
          <h1 className="text-xl font-bold tracking-wide">CRM</h1>
        </div>

        <p className="text-center text-gray-400 mb-6 mt-6">Create your account</p>

        {/* Two-column grid layout */}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">First Name</label>
            <input
              type="text"
              name="firstName"
              className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-gray-500 outline-none"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-gray-500 outline-none"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-gray-500 outline-none"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-gray-500 outline-none"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-gray-500 outline-none"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-300">Role</label>
            <select
              name="role"
              className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-gray-500 outline-none"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="client">Client</option>
            </select>
          </div>

          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-full py-2 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 transition"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-gray-200 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
