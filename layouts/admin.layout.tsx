import { Outlet } from "react-router-dom";
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-min-screen">
           
            <main className="flex-1 w-full"> 
          
           {children ? children : <Outlet />}
           </main>
         </div>   
  );
}