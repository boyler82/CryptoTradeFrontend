import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  // Przywróć userId z localStorage po odświeżeniu
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(Number(storedUserId));
    }
  }, []);

  const login = (id) => {
    setUserId(id);
    localStorage.setItem('userId', id); 
  };

  const logout = () => {
    setUserId(null);
    localStorage.removeItem('userId');
    document.cookie = 'sessionToken=; Max-Age=0; path=/'; 
    window.location.href = '/login'; 
  };

  return (
    <AuthContext.Provider value={{ userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};