import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AdminDashboard from '../layouts/AdminDashboard';
import AgentDashboard from '../layouts/AgentDashboard';
import Root from '../layouts/Root';
import UserDashboard from '../layouts/UserDashboard';
import AgentOverview from '../pages/AgentDashboard/AgentOverview';
import AgentProfile from '../pages/AgentDashboard/AgentProfile';
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
    {
      path: '/dashboard/user',
      element: <UserDashboard/>
    },
    {
      path: '/dashboard/admin',
      element: <AdminDashboard/>
    },
    {
      path: '/dashboard/agent',
      element: <AgentDashboard/>,
      children: [
        {
          path: '',
          element: <AgentOverview/>
        },
        {
          path: 'profile',
          element: <AgentProfile/>
        }
      ]
    }
  ]);

export default Route