import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'
import App from './components/App';
import Overview from './components/Overview';
import SingleVariable from './components/SingleVariable';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Overview />,
      },
      {
        path: ':weatherVariable',
        element: <SingleVariable />
      }
    ]
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

