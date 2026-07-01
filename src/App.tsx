import { Suspense } from 'react';
import { useLocation, useRoutes, matchPath } from 'react-router-dom';
import routes from '../Routes/index';
import SharedLayout from '../layouts/shared.layout';
import UserLayout from '../layouts/user.layout';
import AdminLayout from '../layouts/admin.layout';
import { NotFoundPage } from '../pages/shared/nofound';



function LayoutWrapper() {
  const location = useLocation();

  const isNotFound = !routes.some((route) => matchPath(route.path, location.pathname));

  if (isNotFound) {
    return (
      <Suspense fallback={<div className="p-8">Đang tải...</div>}>
        <NotFoundPage />
      </Suspense>
    );
  }

  const matchedRoute = routes.find((route) => matchPath(route.path, location.pathname));

  const Layout = (() => {
    switch (matchedRoute?.layout) {
      case 'admin':
        return AdminLayout;
      case 'user':
        return UserLayout;
      default:
        return SharedLayout;
    }
  })();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const routing = useRoutes(
    routes.map((route) => ({
      path: route.path,
      element: <route.element />,
    }))
  );

  return (
    <Layout>
      <Suspense
        fallback={
          <div>
          <div className="flex space-x-1 items-center h-8"><span className="w-2 h-2 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '-0.3s' }}></span><span className="w-2 h-2 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '-0.15s' }}></span><span className="w-2 h-2 bg-orange-600 rounded-full animate-bounce"></span></div>
          <div className="p-8">Đang tải...</div>
          </div>
        }
      >
        {routing}
      </Suspense>
    </Layout>
  );
}

export default function App() {
  return (
 
    <Suspense fallback={<div className="p-8">Đang khởi tạo...</div>}>
      <LayoutWrapper />
    </Suspense>
   
  );
}