import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { userId, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black text-white px-8 py-4 shadow-xl border-b border-gray-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-wide uppercase animate-pulse">
          MyApp
        </h1>

        <nav className="space-x-4 flex items-center">
          <ThemeToggle />

          <Link
            to="/"
            className="px-3 py-1 text-sm border border-transparent rounded hover:border-accent hover:text-accent hover:underline transition-colors duration-200"
          >
            Home
          </Link>

          {!userId ? (
            <Link
              to="/login"
              className="px-3 py-1 text-sm border border-white rounded hover:bg-white hover:text-black hover:underline transition duration-200"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="px-3 py-1 text-sm border border-red-500 text-red-400 rounded hover:bg-red-500 hover:text-white transition duration-200"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;