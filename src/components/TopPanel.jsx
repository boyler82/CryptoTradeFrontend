import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLocation } from 'react-router-dom';

const TopPanel = () => {
  const { userId } = useAuth();
  const location = useLocation();

  let subtitle = '';
  if (location.pathname.includes('/dashboard')) subtitle = 'Dashboard';
  if (location.pathname.includes('/account')) subtitle = 'Account';

  return (
    <header className="fixed top-0 left-0 right-0 w-full p-4 shadow-md bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center z-50">
      <h1 className="text-lg font-bold text-gray-900 dark:text-white">
        MyApp 🚀 {subtitle && <span className="text-sm ml-2 text-gray-500 dark:text-gray-400">/ {subtitle}</span>}
      </h1>

      {!userId && (
        <Link
          to="/login"
          className="text-sm px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Login
        </Link>
      )}
    </header>
  );
};

export default TopPanel;