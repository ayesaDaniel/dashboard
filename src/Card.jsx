export const Card = ({ children, className = "" }) => (
    <div className={`rounded-2xl shadow bg-white p-4 ${className}`}>
      {children}
    </div>
  );
  
  export const CardContent = ({ children }) => (
    <div className="mt-2">{children}</div>
  );
  