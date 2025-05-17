import { useState } from 'react';

const CryptoCard = ({ crypto, user, addToHoldings }) => {
  const [amount, setAmount] = useState('');

  const handleBuy = () => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      alert("Podaj poprawną kwotę");
      return;
    }

    addToHoldings(crypto.id, parseFloat(amount));
  };

  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <img src={crypto.imageUrl} alt={crypto.name} className="w-12 h-12 mx-auto mb-2" />
      <h3 className="text-md font-semibold">{crypto.name}</h3>
      <p className="text-sm text-gray-600">Cena: ${crypto.currentPrice}</p>
      
      <input
        type="number"
        placeholder="Kwota USD"
        className="mt-2 border rounded w-full px-2 py-1 text-sm"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      
      <button
        onClick={handleBuy}
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
      >
        Kup
      </button>
    </div>
  );
};

export default CryptoCard;