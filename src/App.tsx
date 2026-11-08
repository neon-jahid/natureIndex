import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import Home from '@/pages/Home';

const SpeciesExplorer = lazy(() => import('@/pages/SpeciesExplorer'));
const SpeciesDetails = lazy(() => import('@/pages/SpeciesDetails'));
const Categories = lazy(() => import('@/pages/Categories'));
const Habitats = lazy(() => import('@/pages/Habitats'));
const ExploreMap = lazy(() => import('@/pages/ExploreMap'));
const Conservation = lazy(() => import('@/pages/Conservation'));
const Favorites = lazy(() => import('@/pages/Favorites'));
const Compare = lazy(() => import('@/pages/Compare'));
const Identify = lazy(() => import('@/pages/Identify'));
const About = lazy(() => import('@/pages/About'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/explore', element: <SpeciesExplorer /> },
      { path: '/species/:id', element: <SpeciesDetails /> },
      { path: '/categories', element: <Categories /> },
      { path: '/categories/:id', element: <Categories /> },
      { path: '/habitats', element: <Habitats /> },
      { path: '/map', element: <ExploreMap /> },
      { path: '/conservation', element: <Conservation /> },
      { path: '/favorites', element: <Favorites /> },
      { path: '/compare', element: <Compare /> },
      { path: '/identify', element: <Identify /> },
      { path: '/about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ],
  },
], {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

export default function App() {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
}
