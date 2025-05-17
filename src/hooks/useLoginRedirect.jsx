import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const useLoginRedirect = () => {
  const { login } = useAuth(); 
  const navigate = useNavigate();

  const loginAndRedirect = (userId) => {
    login(userId);
    navigate('/dashboard');
  };

  return { loginAndRedirect };
};