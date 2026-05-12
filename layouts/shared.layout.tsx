import { Link } from 'react-router-dom';

export default function SharedLayout({ children }: { children: React.ReactNode }) {

  return (
        <>
      <div className="">
        {children}
      </div>
        </>
 
    
  );
}