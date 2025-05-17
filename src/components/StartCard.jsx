const StatCard = ({ icon, label, value }) => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex items-center gap-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
          <p className="text-xl font-bold text-gray-800 dark:text-white">{value}</p>
        </div>
      </div>
    );
  };
  
  export default StatCard;