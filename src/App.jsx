import ModalProvider from 'components/elements/ModalContext';
import Layout from 'components/layouts/Layout';
import { lazy } from 'react';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));

export const App = () => {
  const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: '/catalog',
            element: <CatalogPage />,
          },
          {
            path: '/favorites',
            element: <FavoritesPage />,
          },
          {
            path: '*',
            element: <Navigate to="/" replace />,
          },
        ],
      },
    ],
    {
      basename: '/tech-task',
    }
  );

  return (
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  );
};
