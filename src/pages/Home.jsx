import React from 'react';

const Home = () => {
  return (
    <div className="prose dark:prose-invert p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">👋 Welcome to CryptTrade</h1>

      <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
        CryptTrade is your personal crypto dashboard. Seamlessly manage your digital assets, monitor real-time prices, log your trades, and take notes on your strategies — all in one elegant platform.
      </p>

      <p className="text-sm text-gray-400">
        Login required to access personalized features.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">🔐 Secure Login</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Create an account to access your wallet. All passwords are securely hashed.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">📊 Wallet & History</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            View your full transaction history and track crypto-to-USD conversion in real time.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">📝 Personal Notes</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Add notes to your account — keep track of investment ideas, strategies, or reminders.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">🌍 Currency Support</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            All market data is fetched from CoinGecko and currency exchange rates are live.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-colors duration-300">
        <h2 className="text-2xl font-bold mb-2">🌙 Welcome to the dark side</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Dark mode is automatically enabled for a more comfortable experience.
        </p>
      </div>
    </div>
  );
};

export default Home;