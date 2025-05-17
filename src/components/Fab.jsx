import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Fab = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (userId) {
      navigate('/account'); 
    } else {
      navigate('/login'); 
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg text-2xl flex items-center justify-center transition duration-200"
      title="Main action"
    >
      ➕
    </button>
  );
};

export default Fab;