import { useState } from 'react';
import axios from 'axios';

const DeleteAccountSection = ({ userId, onDelete }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDelete = async () => {
    const confirmed = window.confirm('Czy na pewno chcesz usunąć swoje konto? Tej operacji nie można cofnąć.');
    if (!confirmed) return;

    setLoading(true);
    setError('');

    try {
      await axios.delete(`/user/${userId}`);
      alert('Konto zostało usunięte.');
      onDelete(); 
    } catch (err) {
      setError(err.response?.data?.message || 'Błąd podczas usuwania konta.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-t pt-4">
      <h2 className="text-lg font-semibold">Usuń konto</h2>
      <p className="text-sm text-gray-600 mb-2">
        Usunięcie konta spowoduje trwałe usunięcie Twoich danych z systemu.
      </p>
      {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
      <button
        onClick={handleDelete}
        disabled={loading}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        {loading ? 'Usuwanie...' : 'Usuń konto'}
      </button>
    </div>
  );
};

export default DeleteAccountSection;