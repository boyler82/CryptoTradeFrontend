const Card = ({ title, description, children }) => {
    return (
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl shadow-lg p-6 transition-colors duration-300">
        {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
        {description && <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>}
        {children}
      </div>
    );
  };
  
  export default Card;