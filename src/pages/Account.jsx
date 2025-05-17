import { useAuth } from '../context/AuthContext';

import UserDetails from '../components/account/UserDetails';
import NotificationSettings from '../components/account/NotificationSettings';
import LoginHistory from '../components/account/LoginHistory';
import PortfolioSnapshot from '../components/account/PortfolioSnapshot';
import DeleteAccountSection from '../components/account/DeleteAccountSection';
import UserNotes from '../components/account/UserNotes';

const Account = () => {
  const { userId, logout } = useAuth(); 
  return (
    <div className="p-4 space-y-6">
      <UserDetails userId={userId} />
      <NotificationSettings userId={userId} />
      <DeleteAccountSection userId={userId} onDelete={logout} />
      <LoginHistory userId={userId} />
      <PortfolioSnapshot userId={userId} />
      {userId && <UserNotes userId={userId} />}
    </div>
  );
};

export default Account;