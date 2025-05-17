import { useEffect, useState } from 'react';
import axios from 'axios';

const LoginHistory = ({ userId }) => {
  const [history, setHistory] = useState(null); 

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/login-history/user/${userId}`, {
          withCredentials: true,
        });
        setHistory(response.data);
      } catch (error) {
        console.error('Błąd pobierania historii logowań:', error);
        setHistory([]);
      }
    };

    if (userId) {
      fetchHistory();
    }
  }, [userId]);

  if (history === null) {
    return <p>Ładowanie historii logowań...</p>;
  }

  if (history.length === 0) {
    return <p>Brak historii logowań.</p>;
  }

  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold">Historia logowań</h3>
      <ul>
        {history.map((entry) => (
          <li key={entry.id}>
            {new Date(entry.loginTime).toLocaleString()} — IP: {entry.ipAddress}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoginHistory;