const ContainerNav = ({children}: { children: React.ReactNode }) => {
  return (
    <nav className="">
        <div className="bg-gray-800 text-white m-5 p-4 w-4xl mx-auto rounded-full">
           {children}
        </div>
    </nav>
  );
};

export default ContainerNav;