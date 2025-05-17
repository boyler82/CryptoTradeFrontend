import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { useAuth } from '../context/AuthContext';

const ButtonBuy = ({ cryptoId }) => {
  const { userId } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    if (!amount || isNaN(amount)) {
      alert('Wprowadź poprawną kwotę w USD.');
      return;
    }

    try {
      setLoading(true);
      await axios.post(
        'http://localhost:8080/wallet/buy',
        {
            userId,
            externalId: cryptoId,
            amountUsd: amount, 
            currency: 'USD',
        },
        { withCredentials: true }
      );
      alert('✅ Zakup udany!');
      setShowForm(false);
      setAmount('');
    } catch (err) {
      console.error('❌ Błąd zakupu:', err);
      alert('Nie udało się kupić kryptowaluty.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <Button variant="primary" onClick={() => setShowForm((prev) => !prev)}>
        🛒 Buy
      </Button>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-2 bg-gray-100 dark:bg-gray-700 p-4 rounded-xl"
          >
            <input
              type="number"
              placeholder="Kwota w USD"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 mb-2"
            />
            <Button variant="primary" onClick={handleBuy} disabled={loading}>
              {loading ? '⏳ Kupuję...' : '✅ Confirm'}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ButtonBuy;