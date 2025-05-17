const DashboardInfoHeader = ({ message }) => {
    return (
      <div className="w-full bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 text-sm p-3 text-center shadow">
        {message || '🎉 Nowa funkcja: powiadomienia push są teraz dostępne!'}
      </div>
    );
  };
  
  export default DashboardInfoHeader;