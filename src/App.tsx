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
          <svg className="w-50 h-50 mx-auto text-orange-600 animate-spin" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" />
            <line x1="50" y1="50" x2="50" y2="25" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <line x1="50" y1="50" x2="75" y2="50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
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