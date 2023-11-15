"use client"
import { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating API request delay (remove in real implementation)
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md p-6 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Account Creation</h2>
        {isSubmitted ? (
          <p className="text-green-600 mb-4">Account created successfully!</p>
        ) : (
          <>
            <div className="mb-4">
              <label htmlFor="username" className="block text-white-700 font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-white-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md transition duration-300 focus:outline-none focus:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Register;
