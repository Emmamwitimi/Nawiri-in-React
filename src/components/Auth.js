import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Auth({ mode = 'login', onClose }) {
  const [formMode, setFormMode] = useState(mode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${formMode === 'signup' ? 'New User' : 'Back User'}!`);
    setIsLoggedIn(true); // Set login state to true
    navigate('/dashboard');
    onClose();
  };

  const toggleFormMode = () => {
    setFormMode((prevMode) => (prevMode === 'signup' ? 'login' : 'signup'));
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setConfirmPassword('');
    setLoginIdentifier('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        {isLoggedIn ? (
          <div className="flex justify-center items-center">
            <i
              className="fas fa-user-circle text-4xl cursor-pointer"
              onClick={() => navigate('/profile')}
            ></i>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">{formMode === 'signup' ? 'Sign Up' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
              {formMode === 'signup' && (
                <>
                  <input
                    type="text"
                    placeholder="Name"
                    className="mb-4 w-full p-2 border rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="mb-4 w-full p-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="mb-4 w-full p-2 border rounded"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="mb-4 w-full p-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="mb-4 w-full p-2 border rounded"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </>
              )}
              {formMode === 'login' && (
                <>
                  <input
                    type="text"
                    placeholder="Email or Username"
                    className="mb-4 w-full p-2 border rounded"
                    value={loginIdentifier}
                    onChange={(e) => setLoginIdentifier(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="mb-4 w-full p-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </>
              )}
              <button
                type="submit"
                className="bg-green-800 hover:bg-green-600 text-white px-4 py-2 rounded w-full"
              >
                {formMode === 'signup' ? 'Sign Up' : 'Login'}
              </button>
            </form>

            <div className="mt-4 text-center">
              {formMode === 'signup' ? (
                <p>
                  Already have an account?{' '}
                  <button onClick={toggleFormMode} className="text-green-500 underline">
                    Login
                  </button>
                </p>
              ) : (
                <p>
                  Don’t have an account?{' '}
                  <button onClick={toggleFormMode} className="text-green-500 underline">
                    Sign Up
                  </button>
                </p>
              )}
            </div>
          </>
        )}

        <button onClick={onClose} className="mt-4 text-red-500">
          Cancel
        </button>
      </div>
    </div>
  );
}
