import { useState } from 'react';
import axios from 'axios';
import Button from './Button';
import { useAuth } from '../context/AuthContext';

const ButtonSell = ({ cryptoId, onSold }) => {
  const { userId } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSell = async () => {
    if (!userId || !cryptoId) return;

    try {
      setLoading(true);
      await axios.post(
        'http://localhost:8080/wallet/sell',
        {
          userId,
          externalId: cryptoId,
          amountCrypto: null
        },
        { withCredentials: true }
      );
      alert('✅ Wszystko sprzedane!');
      if (onSold) onSold(); 
    } catch (err) {
      console.error('❌ Błąd sprzedaży:', err);
      alert('Nie udało się sprzedać kryptowaluty.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button variant="danger" onClick={handleSell} disabled={loading}>
      {loading ? '⏳ Sprzedaję...' : '💸 Sprzedaj wszystko'}
    </Button>
  );
};

export default ButtonSell;