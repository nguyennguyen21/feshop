import type { LazyExoticComponent, ComponentType } from 'react';

export type AppRoute = {
  path: string;
  element: LazyExoticComponent<ComponentType>;
  layout?: 'auth'|'user'|'admin'|'shared';
};