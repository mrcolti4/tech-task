const Tag = ({ children }) => {
  return (
    <span className="text-tags text-dark-50 after:content-[''] after:block after:w-px after:h-[16px] after:bg-dark-10 after:mx-[6px] last:after:hidden flex items-center">
      {children}
    </span>
  );
};

export default Tag;
