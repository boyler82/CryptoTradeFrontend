import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const BottomNav = () => {
  const { userId } = useAuth();

  const commonClass = "flex flex-col items-center text-xs text-gray-500 dark:text-gray-300";

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white dark:bg-gray-800 shadow-inner flex justify-around items-center border-t border-gray-200 dark:border-gray-700 z-50">
      {!userId ? (
        <>
          <Link to="/" className={commonClass}>
            <span>🏠</span>
            Home
          </Link>
          <Link to="/login" className={commonClass}>
            <span>🔐</span>
            Login
          </Link>
        </>
      ) : (
        <>
          <Link to="/dashboard" className={commonClass}>
            <span>📊</span>
            Dashboard
          </Link>
          <Link to="/crypto/list" className={commonClass}>
            <span>➕</span>
            Add Crypto
          </Link>
          <Link to="/user-details" className={commonClass}>
            <span>👤</span>
            Profil
          </Link>
          <Link to="/account" className={commonClass}>
            <span>⚙️</span>
            Account
          </Link>
        </>
      )}
    </nav>
  );
};

export default BottomNav;