import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AdminDashboard from '../layouts/AdminDashboard';
import AgentDashboard from '../layouts/AgentDashboard';
import Root from '../layouts/Root';
import UserDashboard from '../layouts/UserDashboard';
import AdminAdvertisement from '../pages/AdminDashboard/AdminAdvertisement';
import AdminManageProperties from '../pages/AdminDashboard/AdminManageProperties';
import AdminManageReviews from '../pages/AdminDashboard/AdminManageReviews';
import AdminManageUsers from '../pages/AdminDashboard/AdminManageUsers';
import AdminOverview from '../pages/AdminDashboard/AdminOverview';
import AdminReportProperties from '../pages/AdminDashboard/AdminReportProperties';
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
import NotFound from '../pages/NotFound';
import PropertyDetails from '../pages/PropertyDetails';
import Payment from '../pages/UserDashboard/Payment';
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
      ],
      errorElement: <NotFound/>
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
          element: <Payment/>
        }
      ],
      errorElement: <NotFound/>
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
      ],
      errorElement: <NotFound/>
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
          path: 'reports',
          element: <AdminReportProperties/>
        },
        {
          path: 'profile',
          element: <Profile/>
        },
        {
          path: 'advertisement',
          element: <AdminAdvertisement/>
        }
      ],
      errorElement: <NotFound/>
    }
  ]);

export default Route