import Header from '../components/Header';
import Footer from '../components/Footer';

const UserLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
    <Header />
    
    <main className="flex-grow p-6 max-w-6xl mx-auto w-full">
      {children}
    </main>
    
    <Footer />
  </div>
);

export default UserLayout;