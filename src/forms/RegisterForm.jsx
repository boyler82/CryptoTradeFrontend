import { useState } from 'react';
import { registerUser } from '../api/userApi';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      alert('Account created successfully! Now you can log in.');
      navigate('/login'); 
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Failed to create account. ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-8 rounded-xl shadow-md w-full max-w-md mx-auto mt-10 border border-gray-300 dark:border-gray-700">
      <h2 className="text-2xl font-semibold text-center mb-6">Create your account</h2>

      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm mb-1">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;