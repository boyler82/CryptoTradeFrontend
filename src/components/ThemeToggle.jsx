import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  const toggleTheme = () => {
    const newDark = !dark;
    document.documentElement.classList.toggle('dark', newDark);
    setDark(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 border rounded bg-gray-200 dark:bg-gray-800 dark:text-white text-sm"
    >
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default ThemeToggle;