import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import ResourcesPage from './pages/ResoucesPage';
import ActivitiesPage from './pages/ActivitiesPage'


const router= createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/profile",
    element: <ProfilePage/>
  },
  {
    path: "activities",
    element : <ActivitiesPage/>
  },
  {
    path : "resouces",
    element: <ResourcesPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
