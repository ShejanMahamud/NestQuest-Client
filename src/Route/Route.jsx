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
import AgentRequestedProperties from '../pages/AgentDashboard/AgentRequestedProperties';
import AgentSoldProperties from '../pages/AgentDashboard/AgentSoldProperties';
import AllProperties from '../pages/AllProperties';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Home from '../pages/Home';
import PropertyDetails from '../pages/PropertyDetails';
import CheckoutForm from '../pages/UserDashboard/CheckoutForm';
import UserBoughtProperties from '../pages/UserDashboard/UserBoughtProperties';
import UserMakeOffer from '../pages/UserDashboard/UserMakeOffer';
import UserMyReviews from '../pages/UserDashboard/UserMyReviews';
import UserWishlist from '../pages/UserDashboard/UserWishlist';
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
      element: <UserDashboard/>,
      children: [
        {
          path: 'profile',
          element: <Profile/>
        },
        {
          path: 'wishlist',
          element: <UserWishlist/>
        },
        {
          path: 'make_offer/:id',
          element: <UserMakeOffer/>
        },
        {
          path: 'bought',
          element: <UserBoughtProperties/>
        },
        {
          path: 'reviews',
          element: <UserMyReviews/>
        },
        {
          path: 'pay/:id',
          element: <CheckoutForm/>
        }
      ]
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
        },
        {
          path: 'requested',
          element: <AgentRequestedProperties/>
        },
        {
          path: 'sold',
          element: <AgentSoldProperties/>
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