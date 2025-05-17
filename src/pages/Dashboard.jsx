import Card from '../components/Card';
import CryptoMiniChart from '../components/CryptoMiniChart';
import PortfolioHoldingsCard from '../components/PortfolioHoldingCard';
import UserBalanceCard from '../components/UserBalanceCard';
import MultiFAB from '../components/MultiFAB';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const { userId } = useAuth();
  const [balance, setBalance] = useState(null);
  const [holdings, setHoldings] = useState([]);
  const [prices, setPrices] = useState([]);

  const fetchBalance = async () => {
    if (!userId) return;
    try {
      const res = await axios.get(`http://localhost:8080/user/${userId}/balance`, {
        withCredentials: true,
      });
      setBalance(res.data);
    } catch (e) {
      console.error('Błąd pobierania salda:', e);
    }
  };

  const fetchData = async () => {
    if (!userId) return;
    try {
      const holdingsRes = await axios.get(`http://localhost:8080/holding/user/${userId}`, {
        withCredentials: true,
      });
      const pricesRes = await axios.get(`http://localhost:8080/crypto-basic/list`, {
        withCredentials: true,
      });
      setHoldings(holdingsRes.data);
      setPrices(pricesRes.data);
    } catch (e) {
      console.error('Błąd pobierania danych:', e);
    }
  };

  useEffect(() => {
    fetchBalance();
    fetchData();
  }, [userId]);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
      {/* Saldo */}
      <UserBalanceCard balance={balance} />

      {/* Portfel */}
      <Card title="Twój Portfel" description="Lista kryptowalut">
        <PortfolioHoldingsCard onUpdate={fetchBalance} />
      </Card>

      {/* Akcje + Mini wykresy */}
      <Card title="Skróty">
        <MultiFAB />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {holdings.map((h) => {
            const crypto = prices.find((p) => p.externalId === h.cryptoBasicId);
            return (
              <div key={h.id}>
                <CryptoMiniChart symbol={crypto?.symbol} />
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;