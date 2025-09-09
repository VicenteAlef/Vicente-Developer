export const Main = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-[#090909] text-white py-10 md:px-[15%]  animate-shine">
      {children}
    </div>
  );
};

export const Content = ({ children }) => {
  return <div className="w-full min-h-screen pt-20">{children}</div>;
};

export const Title = ({ children }) => {
  return <h1 className="text-4xl my-5">{children}</h1>;
};
