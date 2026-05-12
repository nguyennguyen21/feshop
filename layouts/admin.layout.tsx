import { Outlet } from "react-router-dom";
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-min-screen">
           
            <main className="flex-1 w-full p-4 md:p-6 lg:p-8"> 
          
           {children ? children : <Outlet />}
           </main>
         </div>   
  );
}