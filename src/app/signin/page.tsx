"use client";

import { useState } from "react";
import { FaGoogle, FaXTwitter } from "react-icons/fa6";
import { Eye, EyeOff } from "lucide-react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center md:flex-row flex-col ">
      {/* Left Section: Sign In Form */}
      <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg md:px-7 sm:p-20 xl:px-35 md:p-35 xl:p-16 xl:mb-5">
        <a href="/dashboard" className="text-sm text-gray-600 hover:text-gray-800 text-base">
          &lt; Back to dashboard
        </a>

        {/* Sign In Header */}
        <h2 className="mt-4 text-3xl font-semibold text-gray-900 md:mt-15 mb-3">Sign In</h2>
        <p className="text-gray-600">Enter your email and password to sign in!</p>

        {/* Social Login Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-2 hover:bg-gray-200 text-gray-900 text-sm cursor-pointer">
            <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
              alt="Google Logo"
              className="w-5 h-5" /> Sign in with Google
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg  px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm cursor-pointer">
            <FaXTwitter className="text-black" /> Sign in with X
          </button>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email Field */}
        <div>
          <label className="text-gray-700 font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="info@gmail.com"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-4 relative">
          <label className="text-gray-700 font-medium">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 text-gray-700 focus:border-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Eye Icon Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Options (Keep me logged in & Forgot Password) */}
        <div className="mt-4 flex items-center justify-between">
          <label className="flex items-center text-sm text-gray-600 cursor-pointer">
            <input type="checkbox" className="mr-2 w-5 h-5   " /> Keep me logged in
          </label>
          <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
            Forgot password?
          </a>
        </div>

        {/* Sign In Button */}
        <button className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 cursor-pointer">
          Sign In
        </button>

        {/* Sign Up Link */}
        <p className="mt-4 text-center xl:text-start text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:text-blue-800 cursor-pointer">
            Sign Up
          </a>
        </p>
      </div>

      {/* Right Section: Blue Background Content */}
      <div className="hidden md:flex w-full md:w-1/2 h-full bg-[#0d024a] text-white flex-col justify-center items-center p-4">
        <h2 className="text-3xl font-semibold">TailAdmin</h2>
        <p className="mt-2 text-center text-gray-400">
          Free and Open-Source Tailwind CSS Admin <br />Dashboard Template
        </p>
      </div>
    </div>
  );
}
