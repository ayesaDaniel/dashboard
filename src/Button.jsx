export const Button = ({ children, className = "", ...props }) => (
    <button
      className={`bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
  