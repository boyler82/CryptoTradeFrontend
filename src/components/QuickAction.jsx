const QuickAction = ({ title, description, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="w-full text-left bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-4 rounded-lg shadow transition"
      >
        <h3 className="text-md font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300">{description}</p>
      </button>
    );
  };
  
  export default QuickAction;