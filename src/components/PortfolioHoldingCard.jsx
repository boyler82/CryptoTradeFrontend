import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { useAuth } from '../context/AuthContext';
import ButtonSell from './ButtonSell';

const PortfolioHoldingsCard = ({ onUpdate }) => {
  const { userId } = useAuth();
  const [holdings, setHoldings] = useState([]);
  const [prices, setPrices] = useState([]);

  const refetch = async () => {
    try {
      const holdingsRes = await axios.get(`http://localhost:8080/holding/user/${userId}`, {
        withCredentials: true,
      });
      const pricesRes = await axios.get(`http://localhost:8080/crypto-basic/list`, {
        withCredentials: true,
      });
      setHoldings(holdingsRes.data);
      setPrices(pricesRes.data);
      if (onUpdate) onUpdate(); 
    } catch (e) {
      console.error('❌ Błąd pobierania:', e);
    }
  };

  useEffect(() => {
    if (userId) refetch();
  }, [userId]);

  return (
    <Card title="Twój Portfel" description="Lista kryptowalut">
      {holdings.map((h) => {
        const crypto = prices.find(p => p.externalId === h.cryptoBasicId);
        const price = crypto?.currentPrice ?? 0;
        const value = h.amount * price;

        return (
          <div key={h.id} className="mb-4 p-3 bg-white dark:bg-gray-800 rounded shadow">
            <div className="flex justify-between items-center text-sm mb-2">
              <div className="flex items-center gap-2">
                {crypto?.imageUrl && (
                  <img src={crypto.imageUrl} alt={crypto.name} className="w-5 h-5 rounded-full" />
                )}
                <span>{crypto?.name ?? 'Nieznana'} ({h.amount} szt.)</span>
              </div>
              <div className="text-right">
                <p>{value.toFixed(2)} USD</p>
                <p className="text-xs text-muted">{crypto?.symbol?.toUpperCase()}</p>
              </div>
            </div>
            <ButtonSell cryptoId={h.cryptoBasicId} onSold={refetch} />
          </div>
        );
      })}
    </Card>
  );
};

export default PortfolioHoldingsCard;