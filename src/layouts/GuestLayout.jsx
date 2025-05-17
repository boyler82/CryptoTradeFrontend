import TopPanel from '../components/TopPanel';

const GuestLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white font-sans">
    <TopPanel />
    <main className="flex-grow p-6 max-w-4xl mx-auto w-full">
      {children}
    </main>
  </div>
);

export default GuestLayout;