// routes/index.ts
import { lazy } from 'react';
import type { AppRoute } from '../routes/type';

const routes: AppRoute[] = [{ path: '/', element: lazy(() => import('../Pages/shared/home')), layout: 'shared' },
 

];

export default routes;