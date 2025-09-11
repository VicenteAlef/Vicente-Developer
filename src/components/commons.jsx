export const Main = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-gray-950 text-white sm:py-5 px-2 md:px-[15%]  animate-shine">
      {children}
    </div>
  );
};

export const Content = ({ children }) => {
  return <div className="w-full min-h-[720px] pt-20 ">{children}</div>;
};

export const Title = ({ children }) => {
  return <h2 className="text-4xl mb-5">{children}</h2>;
};

export const SubTitle = ({ children }) => {
  return <h3 class="text-2xl mb-5">{children}</h3>;
};

export const Card = ({ children }) => {
  return (
    <div className="p-5 sm:p-10 bg-gray-900 lg:rounded-md flex flex-col justify-center">
      {children}
    </div>
  );
};

export const BtnLink = ({ href, children }) => {
  return (
    <a
      class="flex items-center gap-2 mt-5 bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};
