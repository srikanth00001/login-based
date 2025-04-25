"use client";

import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <div className="flex h-screen items-center justify-center md:flex-row flex-col ">
            {/* Left Section: Sign In Form */}
            <div className="w-full md:w-1/2 bg-white px-8 pt-20 sm:pt-20 rounded-lg shadow-lg md:px-7 sm:p-20 xl:px-35 md:p-35 xl:p-5 xl:mb-5">
                <a href="/dashboard" className="text-sm text-gray-600 hover:text-gray-800 text-base">
                    &lt; Back to dashboard
                </a>

                {/* Sign In Header */}
                <h2 className="mt-4 text-3xl font-semibold text-gray-900 md:mt-9 mb-3">Sign Up</h2>
                <p className="text-gray-600">Enter your email and password to sign in!</p>

                {/* Social Login Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-2 hover:bg-gray-200 text-gray-900 text-sm cursor-pointer">
                        <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                            alt="Google Logo"
                            className="w-5 h-5" /> Sign up with Google
                    </button>
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-lg  px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm cursor-pointer">
                        <FaXTwitter className="text-black" /> Sign up with X
                    </button>
                </div>

                {/* Divider */}
                <div className="my-6 flex items-center">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-4 text-gray-500">Or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                <div className="md:flex flex-row gap-5 w-full">
                {/* First Name Field */}
                <div className=" md:w-full mb-4 xl:mb-2">
                    <label className="text-gray-700 font-medium">
                        First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your first name"
                        required
                        className=" w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                {/* last Name Field */}
                <div className=" md:w-full">
                    <label className="text-gray-700 font-medium">
                        Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your last name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                </div>

                {/* Email Field */}
                <div className="mt-4">
                    <label className="text-gray-700 font-medium">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        placeholder="info@gmail.com"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Password Field */}
                <div className="mt-4 mb-5 relative">
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
                            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-700 cursor-pointer"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

                {/*  */}
                <div className="mt-4 flex items-center">
                    <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer" />
                    <label className="ml-2 text-sm text-gray-600 leading-tight">
                        By creating an account, you agree to the
                        <span className="text-black font-medium"> Terms and Conditions</span>, and our
                        <span className="text-black font-medium"> Privacy Policy</span>.
                    </label>
                </div>


                {/* Sign In Button */}
                <button className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 cursor-pointer">
                    Sign Up
                </button>

                {/* Sign Up Link */}
                <p className="mt-4 text-center xl:text-start text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link href="/" className="text-blue-600 hover:text-blue-800 cursor-pointer">
                        Sign In
                    </Link>
                </p>
            </div>

            {/* Right Section*/}
            <div className="hidden md:flex w-full md:w-1/2 h-full bg-[#0d024a] text-white flex-col justify-center items-center p-4">
                <h2 className="text-3xl font-semibold">TailAdmin</h2>
                <p className="mt-2 text-center text-gray-400">
                    Free and Open-Source Tailwind CSS Admin <br />Dashboard Template
                </p>
            </div>
        </div>
    );
}
