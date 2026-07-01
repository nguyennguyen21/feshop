import Navbar from "../src/modules/Lib/components/Header/ContainerNav/header";

export default function SharedLayout({ children }: { children: React.ReactNode }) {

  return (
        <div className="">
        <Navbar children={undefined} />
      
      <div className="">
        
        {children}
      </div>
        </div>
 
    
  );
}