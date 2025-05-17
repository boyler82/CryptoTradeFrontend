import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import AppShell from './layouts/AppShell';
import GuestLayout from './layouts/GuestLayout';
import UserLayout from './layouts/UserLayout';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import CryptoList from './pages/CryptoList';
import Account from './pages/Account';
import UserDetailsPage from './pages/UserDetailsPage';


import PrivateRoute from './components/PrivateRoute';
import Register from './forms/RegisterForm';



const AppRoutes = () => {
  const { userId } = useAuth();

  if (userId) {
    return (
      <UserLayout>
        <Routes>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute>} />
          <Route path="/crypto/list" element={<PrivateRoute><CryptoList /></PrivateRoute>} />  
          <Route path="/user-details" element={<UserDetailsPage />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserLayout>
    );
  } else {
    return (
      <GuestLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<div>O nas</div>} />
          <Route path="/contact" element={<div>Kontakt</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GuestLayout>
    );
  }
};

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <AppShell>
        <AppRoutes />
      </AppShell>
    </BrowserRouter>
  </AuthProvider>
);

export default App;