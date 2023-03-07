import { lazy, ReactElement } from 'react';

interface IRoutes {
  path: string;
  element: ReactElement;
  isPrivate: boolean;
  children: IRoutesChildren[];
}

interface IRoutesChildren {
  path: string;
  element: ReactElement;
  isIndex: boolean;
}

const ClientPage = lazy(() => import('pages/clientPage'));
const LandingPage = lazy(() => import('pages/clientPage/landingPage'));
const LoginPage = lazy(() => import('pages/clientPage/login'));
const ProductPage = lazy(() => import('pages/clientPage/productPage'));

export const routes: IRoutes[] = [
  {
    path: '/',
    element: <ClientPage />,
    isPrivate: false,
    children: [
      {
        path: '',
        isIndex: true,
        element: <LandingPage />
      },
      {
        path: 'login',
        isIndex: false,
        element: <LoginPage />
      },
      {
        path: '/shop',
        isIndex: false,
        element: <ProductPage />
      }
    ]
  }
];
