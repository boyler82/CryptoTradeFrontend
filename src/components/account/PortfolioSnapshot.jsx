import { useEffect, useState } from 'react';
import axios from 'axios';

const CurrentSnapshot = ({ userId }) => {
  const [snapshot, setSnapshot] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/snapshots/current/${userId}`)
      .then(res => setSnapshot(res.data))
      .catch(err => console.error("Błąd snapshotu:", err));
  }, [userId]);

  if (!snapshot) return <p>Ładowanie aktualnego stanu portfela...</p>;

  return (
    <div className="p-4 border rounded">
      <h3 className="font-bold text-lg mb-2">Aktualny stan portfela</h3>
      <p>Fiat: ${snapshot.fiatValue}</p>
      <p>Krypto: ${snapshot.cryptoValue}</p>
      <p>Łącznie: ${snapshot.totalValue}</p>
    </div>
  );
};

export default CurrentSnapshot;