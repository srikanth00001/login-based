"use client";

import GoogleLoginButton from "../../components/googleLoginButton";
import MicrosoftLoginButton from "../../components/microsoftLoginButton";
import AppleLoginButton from "../../components/appleLoginButton";
import WhatsAppLogin from "../../components/whatsappLoginButton";

export default function SignIn() {
  
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
          {/*  */}
          <GoogleLoginButton />
          {/* <button className="flex flex-1 items-center justify-center gap-2 rounded-lg  px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm cursor-pointer">
            <FaMicrosoft className="text-black" /> Sign in with Microsoft
          </button> */}
          <MicrosoftLoginButton />

          {/* <button className="flex flex-1 items-center justify-center gap-2 rounded-lg  px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm cursor-pointer">
            <FaApple className="text-black" /> Sign in with Apple
          </button> */}
          <AppleLoginButton />

          
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <div>
        <WhatsAppLogin />
        </div>
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
