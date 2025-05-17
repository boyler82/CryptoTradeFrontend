import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { useAuth } from '../context/AuthContext';

const SUPPORTED_CURRENCIES = ['USD', 'PLN', 'EUR'];

const UserBalanceCard = () => {
  const { userId } = useAuth();
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchBalance = async () => {
      try {
        let url =
          selectedCurrency === 'USD'
            ? `http://localhost:8080/user/${userId}/balance`
            : `http://localhost:8080/currency/user/${userId}/balance-in/${selectedCurrency}`;

        const response = await axios.get(url, { withCredentials: true });
        setBalance(response.data);
      } catch (err) {
        console.error('❌ Błąd pobierania salda:', err);
      }
    };

    fetchBalance();
  }, [userId, selectedCurrency]);

  return (
    <Card title="Saldo" description="Dostępne środki w portfelu">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xl font-semibold">
          {balance !== null ? `${balance.toFixed(2)} ${selectedCurrency}` : '⏳ Ładowanie...'}
        </p>
        <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        >
          {SUPPORTED_CURRENCIES.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>
      </div>
    </Card>
  );
};

export default UserBalanceCard;