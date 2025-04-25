import React, { useState } from 'react';

const LoginPage2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleBack = () => {
    window.location.href = '/'; // Redirect to another page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <button onClick={handleBack} className="mb-4 text-gray-600 hover:text-gray-800">
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="text-center">
          <i className="fas fa-hanger text-4xl text-blue-700 mb-2"></i>
          <h2 className="text-2xl font-bold text-gray-800">Inventor</h2>
          <p className="text-gray-600">Log in to your account</p>
          <p className="text-gray-500 text-sm">welcome back! please enter your details.</p>
        </div>
        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Company Email/Mobile number
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
            />
          </div>
          <div className="text-right mb-4">
            <a href="/forgot-password" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage2;