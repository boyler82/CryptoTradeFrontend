import { useState } from 'react';
import Button from './Button';

const RefreshCoins = ({ onRefresh }) => {
  const [loading, setLoading] = useState(false);

  const handleRefresh = async () => {
    setLoading(true);
    try {
      await onRefresh();
      alert('✅ Dane zostały zapisane do bazy danych!');
    } catch (error) {
      console.error('❌ Błąd zapisu danych:', error);
      if (error.response?.status === 403) {
        alert('⛔️ Brak autoryzacji (403) – upewnij się, że jesteś zalogowany.');
      } else {
        alert('❌ Wystąpił błąd przy zapisie danych.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleRefresh} disabled={loading}>
      {loading ? '⏳ Importuję...' : '🔄 Odśwież dane z rynku'}
    </Button>
  );
};

export default RefreshCoins;