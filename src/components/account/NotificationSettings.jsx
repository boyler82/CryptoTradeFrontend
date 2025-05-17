import { useEffect, useState } from 'react';
import axios from 'axios';

const NotificationSettings = ({ userId }) => {
  const [settings, setSettings] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchSettings = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/notifications/${userId}`, {
          withCredentials: true,
        });
        setSettings(res.data);
      } catch (err) {
        console.error('Błąd pobierania ustawień powiadomień:', err);
        setError('Nie udało się załadować ustawień powiadomień.');
      }
    };

    fetchSettings();
  }, [userId]);

  const handleToggle = async (field) => {
    if (!settings) return;

    const updatedValue = !settings[field];
    const updatedSettings = { ...settings, [field]: updatedValue };

    try {
      await axios.patch(`http://localhost:8080/notifications/${userId}`, {
        [field]: updatedValue,
      }, {
        withCredentials: true,
      });
      setSettings(updatedSettings);
    } catch (err) {
      console.error(`Błąd aktualizacji ${field}:`, err);
    }
  };

  if (error) return <p>{error}</p>;
  if (!settings) return <p>Ładowanie ustawień powiadomień...</p>;

  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold">Powiadomienia</h3>

      <label className="flex items-center space-x-2 cursor-pointer">
        <span>Dzienny raport</span>
        <input
          type="checkbox"
          className="sr-only"
          checked={settings.dailyReport}
          onChange={() => handleToggle('dailyReport')}
        />
        <div className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${settings.dailyReport ? 'bg-green-400' : 'bg-gray-400'}`}>
          <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${settings.dailyReport ? 'translate-x-5' : ''}`}></div>
        </div>
      </label>

      <label className="flex items-center space-x-2 cursor-pointer">
        <span>Tygodniowy raport</span>
        <input
          type="checkbox"
          className="sr-only"
          checked={settings.weeklyReport}
          onChange={() => handleToggle('weeklyReport')}
        />
        <div className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${settings.weeklyReport ? 'bg-green-400' : 'bg-gray-400'}`}>
          <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${settings.weeklyReport ? 'translate-x-5' : ''}`}></div>
        </div>
      </label>


      <p className="mt-2">Preferowana godzina: {settings.preferredTime ?? 'Brak'}</p>
    </div>
  );
};

export default NotificationSettings;