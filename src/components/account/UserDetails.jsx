import { useEffect, useState } from 'react';
import axios from 'axios';

const UserDetails = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    axios.get(`http://localhost:8080/user/${userId}`, { withCredentials: true })
      .then(res => setUserData(res.data))
      .catch(err => {
        console.error('Błąd pobierania danych użytkownika:', err);
        setError('Nie udało się pobrać danych użytkownika.');
      });
  }, [userId]);

  if (error) return <p>{error}</p>;
  if (!userData) return <p>Ładowanie danych użytkownika...</p>;

  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold">Dane użytkownika</h3>
      <p><strong>ID:</strong> {userData.id}</p>
      <p><strong>Data rejestracji:</strong> {new Date(userData.createdAt).toLocaleDateString()}</p>
      <p><strong>Imię:</strong> {userData.firstName || 'Brak'}</p>
      <p><strong>Password:</strong> {userData.passwordHash}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Saldo portfela:</strong> ${userData.walletBalance}</p>
    </div>
  );
};

export default UserDetails;