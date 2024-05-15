import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/location-disabled',
    element: <div>To provide you with accurate local air pollution 
      statistics, please enable location access. This allows us to 
      deliver real-time data based on your current position.</div>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

