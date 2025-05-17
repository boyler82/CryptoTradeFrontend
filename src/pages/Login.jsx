import { loginUser } from '../api/userApi';
import { useLoginRedirect } from '../hooks/useLoginRedirect';
import { useAuth } from '../context/AuthContext';
import LoginForm from '../forms/LoginForm'; 
import RegisterForm from '../forms/RegisterForm'; 

const Login = () => {
  const { login } = useAuth();         
  const { loginAndRedirect } = useLoginRedirect();

  const handleLogin = async (email, password) => {
    try {
      const data = await loginUser(email, password);
      console.log(data);
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('sessionToken', data.sessionToken);

      login(data.userId);               
      loginAndRedirect(data.userId);
    } catch (error) {
      console.error('Login error:', error);
      alert('Błąd logowania');
    }
  };

  return (
    <div className="...">
      <h2>Welcome back</h2>
      <LoginForm onSubmit={handleLogin} />
      <RegisterForm onSubmit={handleLogin} />
    </div>
  );
};
export default Login;

