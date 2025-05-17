import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import RefreshCoins from '../components/RefreshCoins';
import ButtonBuy from '../components/ButtonBuy';
import { useAuth } from '../context/AuthContext'; 

const CryptoList = () => {
  const { userId } = useAuth(); 
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCryptos = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/crypto-basic/list', {
        withCredentials: true,
      });
      setCryptos(response.data);
    } catch (error) {
      console.error('❌ Błąd pobierania kryptowalut:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImportRefresh = async () => {
    await axios.post('http://localhost:8080/crypto-basic/import', {}, {
      withCredentials: true,
    });
    await fetchCryptos(); 
  };

  useEffect(() => {
    fetchCryptos();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Dostępne kryptowaluty</h2>
        <RefreshCoins onRefresh={handleImportRefresh} />
      </div>

      {loading ? (
        <p>Ładowanie danych...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
{cryptos.map((crypto, index) => (
  <Card
    key={crypto.externalId || `fallback-${index}`}
    title={`${crypto.name} (${crypto.symbol?.toUpperCase()})`}
    description={`Cena: ${crypto.currentPrice ?? 'Brak danych'} USD`}
  >
    <div>
      <img src={crypto.imageUrl} alt={crypto.name} className="w-12 h-12" />
      <p className="text-sm mt-2">Zmiana 24h: {crypto.priceChange24h ?? 'Brak danych'}</p>
      <p className="text-sm">Min: {crypto.low24h ?? '—'} | Max: {crypto.high24h ?? '—'}</p>
    </div>
    <ButtonBuy cryptoId={crypto.externalId} userId={userId} />
  </Card>
))}
        </div>
      )}
    </div>
  );
};

export default CryptoList;