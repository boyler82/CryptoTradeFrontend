const Button = ({ children, variant = 'primary', onClick }) => {
  const base = 'px-4 py-2 rounded font-semibold transition shadow-button';
  const variants = {
    primary: 'bg-accent text-white hover:bg-blue-600',
    secondary: 'bg-secondary text-onSecondary hover:bg-gray-700',
    outline: 'border border-gray-400 text-gray-700 hover:bg-gray-100',
    danger: 'bg-danger text-white hover:bg-red-600',
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
