import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const MultiFAB = () => {
  const [open, setOpen] = useState(false);
  const { userId } = useAuth(); 
  const navigate = useNavigate();

  const toggleFAB = () => setOpen(!open);

  const actions = [
    {
      label: 'Add',
      icon: '➕',
      onClick: () => navigate('/add'),
      visible: !!userId, 
    },
    {
      label: 'Account',
      icon: '👤',
      onClick: () => navigate('/account'),
      visible: !!userId,
    },
  ];

  const visibleActions = actions.filter(action => action.visible);

  return (
    <>
      {/* Dodatkowe przyciski */}
      {open &&
        visibleActions.map((action, i) => (
          <button
            key={i}
            onClick={action.onClick}
            style={{ bottom: `${80 + i * 60}px` }}
            className="fixed right-6 w-12 h-12 rounded-full bg-gray-700 text-white shadow-lg flex items-center justify-center z-50 transition"
            title={action.label}
          >
            {action.icon}
          </button>
        ))}

     
      <button
        onClick={toggleFAB}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white text-2xl shadow-lg flex items-center justify-center z-50 hover:bg-blue-700 transition"
        title="Main actions"
      >
        {open ? '✖' : '⋮'}
      </button>
    </>
  );
};

export default MultiFAB;