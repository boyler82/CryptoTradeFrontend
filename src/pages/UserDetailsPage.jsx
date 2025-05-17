import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const UserDetailsPage = () => {
  const { userId } = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userId) return;

    axios.get(`http://localhost:8080/user/${userId}/details`, {
      withCredentials: true,
    }).then(res => setUser(res.data))
      .catch(err => console.error("❌ Błąd ładowania danych użytkownika:", err));
  }, [userId]);

  if (!user) return <p>Ładowanie danych...</p>;

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Szczegóły użytkownika</h2>

      <div>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Saldo:</strong> ${user.walletBalance}</p>
        <p><strong>Data rejestracji:</strong> {new Date(user.createdAt).toLocaleString()}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Powiadomienia</h3>
        <p>Codzienne: {user.notificationSettings.dailyReport ? 'Tak' : 'Nie'}</p>
        <p>Tygodniowe: {user.notificationSettings.weeklyReport ? 'Tak' : 'Nie'}</p>
        <p>Godzina: {user.notificationSettings.preferredTime}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Logowania</h3>
        <ul className="list-disc list-inside">
          {user.loginHistory.map(login => (
            <li key={login.id}>
              {new Date(login.loginTime).toLocaleString()} — {login.ipAddress}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Snapshoty portfela</h3>
        <ul className="list-disc list-inside">
          {user.snapshots.map(snap => (
            <li key={snap.id}>
              {snap.snapshotDate} — {snap.totalValue} USD (fiat: {snap.fiatValue ?? 0}, crypto: {snap.cryptoValue ?? 0})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDetailsPage;