import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AdminDashboard from '../layouts/AdminDashboard';
import AgentDashboard from '../layouts/AgentDashboard';
import Root from '../layouts/Root';
import UserDashboard from '../layouts/UserDashboard';
import AdminManageProperties from '../pages/AdminDashboard/AdminManageProperties';
import AdminManageReviews from '../pages/AdminDashboard/AdminManageReviews';
import AdminManageUsers from '../pages/AdminDashboard/AdminManageUsers';
import AdminOverview from '../pages/AdminDashboard/AdminOverview';
import AgentAddProperty from '../pages/AgentDashboard/AgentAddProperty';
import AgentMyProperties from '../pages/AgentDashboard/AgentMyProperties';
import AgentOverview from '../pages/AgentDashboard/AgentOverview';
import AgentPropertyUpdate from '../pages/AgentDashboard/AgentPropertyUpdate';
import AllProperties from '../pages/AllProperties';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Home from '../pages/Home';
import PropertyDetails from '../pages/PropertyDetails';
import Profile from '../pages/shared/Profile';

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
        },
        {
          path: '/details/:id',
          element: <PropertyDetails/>
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
          element: <Profile/>
        },
        {
          path: 'add',
          element: <AgentAddProperty/>
        },
        {
          path: 'properties',
          element: <AgentMyProperties/>
        },
        {
          path: 'update/:id',
          element: <AgentPropertyUpdate/>
        }
      ]
    },
    {
      path: '/dashboard/admin',
      element: <AdminDashboard/>,
      children: [
        {
          path: '',
          element: <AdminOverview/>
        },
        {
          path: 'users',
          element: <AdminManageUsers/>
        },
        {
          path: 'reviews',
          element: <AdminManageReviews/>
        },
        {
          path: 'properties',
          element: <AdminManageProperties/>
        },
        {
          path: 'profile',
          element: <Profile/>
        }
      ]
    }
  ]);

export default Route