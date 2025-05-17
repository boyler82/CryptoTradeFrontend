import TopPanel from '../components/TopPanel';
import BottomNav from '../components/BottomNav';
import { useAuth } from '../context/AuthContext';
import MultiFAB from '../components/MultiFAB'; 

const AppShell = ({ children }) => {
  const { userId } = useAuth(); 

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <TopPanel />

      <main className="flex-grow pt-16 pb-20">
        {children}
        <MultiFAB />
      </main>

      {/* Pokazujemy BottomNav tylko dla zalogowanych userów */}
      {userId && <BottomNav />}
    </div>
  );
};

export default AppShell;