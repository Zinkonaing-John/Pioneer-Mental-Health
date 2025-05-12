'use client';

import { FaFacebookF, FaApple, FaGoogle } from 'react-icons/fa';

export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 px-4">
      <div className="bg-gray-300 p-6 rounded-lg w-full max-w-md shadow">
        <button className="absolute top-4 right-4 text-black text-xl font-bold">×</button>
        <h2 className="text-2xl font-bold text-center mb-6">Log in to your accout</h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email adress(required)"
            className="w-full p-3 rounded-md border border-black focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password(required, 6 characters or more)"
            className="w-full p-3 rounded-md border border-black focus:outline-none"
          />

          <div className="text-center">
            <a href="#" className="text-black font-semibold underline">
              Forgot your password?
            </a>
          </div>

          <button className="w-full py-3 rounded-full bg-neutral-500 text-white font-semibold">
            Continue
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-black" />
          <span className="mx-4 font-semibold text-black">or</span>
          <hr className="flex-grow border-t border-black" />
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#1877F2] text-white font-medium">
            <FaFacebookF />
            Continue with Facebook
          </button>
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-black text-white font-medium">
            <FaApple />
            Continue with Apple
          </button>
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white text-black border font-medium">
            <FaGoogle />
            Continue with Google
          </button>
        </div>

        <p className="mt-6 text-center text-black">
          Don’t have an accout?{' '}
          <a href="#" className="font-bold underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
