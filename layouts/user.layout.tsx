import { Link  } from "react-router-dom"; 

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen ">
    
      <main className="">
        {children}
      </main>
    </div>
  );
}