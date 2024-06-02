import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import AllProperties from '../pages/AllProperties';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Home from '../pages/Home';

const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/properties',
          element: <AllProperties/>
        }
      ]
    },
  ]);

export default Route