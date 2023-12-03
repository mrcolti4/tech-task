const Heading = ({ children, className }) => {
  return (
    <h3 className={`text-base text-dark-100 font-medium ${className}`}>
      {children}
    </h3>
  );
};

export default Heading;
