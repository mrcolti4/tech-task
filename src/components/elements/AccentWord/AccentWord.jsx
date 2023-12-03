const AccentWord = ({ children, className = '' }) => {
  return <span className={`text-primary ${className}`}>{children}</span>;
};

export default AccentWord;
