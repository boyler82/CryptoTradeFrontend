const DashboardInfoFooter = () => {
    return (
      <footer className="w-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs p-4 text-center border-t border-gray-200 dark:border-gray-700">
        <div className="space-x-4">
          <a href="#" className="hover:underline">Kontakt</a>
          <a href="#" className="hover:underline">Regulamin</a>
          <a href="#" className="hover:underline">Polityka prywatności</a>
        </div>
        <div className="mt-2">&copy; 2025 MyApp. Wszelkie prawa zastrzeżone.</div>
      </footer>
    );
  };
  
  export default DashboardInfoFooter;