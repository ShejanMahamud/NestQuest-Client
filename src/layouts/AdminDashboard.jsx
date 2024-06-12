import React, { useState } from 'react';
import { BsBuilding } from "react-icons/bs";
import { GoReport } from 'react-icons/go';
import { IoArrowBackOutline, IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { LuUserCircle2, LuUsers } from "react-icons/lu";
import { MdOutlineReviews } from 'react-icons/md';
import { RiAdvertisementLine, RiStackFill } from "react-icons/ri";
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminDashboard = () => {
  const { loading, user, logOut } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-screen lg:grid lg:grid-cols-[20%_80%]">
        {/* Sidebar Toggle Button */}
        <button 
          className="lg:hidden fixed top-2 z-50 bg-primary text-white p-2 "
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <IoCloseOutline/>  : <IoMenuOutline /> }
        </button>

        <div className={`fixed lg:static top-0 left-0 w-full h-full bg-[#181818] py-10 px-5 lg:px-3 lg:px-5 overflow-y-auto transform transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 z-20`}>
          <div className="flex flex-col w-full items-center gap-2 mb-5">
            <img src={user?.photoURL} alt="" className="w-20 h-20 rounded-full border border-primary object-cover" />
            <h1 className="text-xl text-white font-medium">{user?.displayName}</h1>
            <span className="text-[#7F7F7F] text-xs">Admin Dashboard</span>
          </div>
          <div className="w-full flex flex-col items-start">
            <NavLink
              end
              className={({ isActive }) =>
                isActive
                  ? "bg-[#030303] text-white rounded-lg w-full flex items-center gap-3 py-3 px-3"
                  : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
              }
              to={"/dashboard/admin"}
            >
              <RiStackFill className="text-xl" />
              <span className="text-base">Overview</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-[#030303] text-white rounded-lg w-full flex items-center gap-3 py-3 px-3"
                  : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
              }
              to={"/dashboard/admin/profile"}
            >
              <LuUserCircle2 className="text-xl" />
              <span className="text-base">Admin Profile</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-[#030303] text-white rounded-lg w-full flex items-center gap-3 py-3 px-3"
                  : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
              }
              to={"/dashboard/admin/properties"}
            >
              <BsBuilding className="text-xl" />
              <span className="text-base">Manage Properties</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-[#030303] text-white rounded-lg w-full flex items-center gap-3 py-3 px-3"
                  : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
              }
              to={"/dashboard/admin/users"}
            >
              <LuUsers className="text-xl" />
              <span className="text-base">Manage Users</span>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-[#030303] text-white rounded-lg w-full flex items-center gap-3 py-3 px-3"
                  : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
              }
              to={"/dashboard/admin/reviews"}
            >
              <MdOutlineReviews className="text-xl" />
              <span className="text-base">Manage Reviews</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-[#030303] text-white rounded-lg w-full flex items-center gap-3 py-3 px-3"
                  : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
              }
              to={"/dashboard/admin/advertisement"}
            >
              <RiAdvertisementLine className="text-xl" />
              <span className="text-base">Advertisement</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-[#030303] text-white rounded-lg w-full flex items-center gap-3 py-3 px-3"
                  : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
              }
              to={"/dashboard/admin/reports"}
            >
              <GoReport className="text-xl" />
              <span className="text-base">Reports</span>
            </NavLink>

          </div>
          <div className="flex items-center w-full justify-between mt-5">
            <button onClick={logOut} className="flex items-center gap-2 text-[#F10A0A]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M13 17L14 17C14.7956 17 15.5587 16.6839 16.1213 16.1213C16.6839 15.5587 17 14.7956 17 14L17 4C17 3.20435 16.6839 2.44129 16.1213 1.87868C15.5587 1.31607 14.7956 1 14 1L13 1M5 5L1 9M1 9L5 13M1 9L13 9" stroke="#F10A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Logout</span>
            </button>
            <button onClick={() => navigate('/')} className="flex items-center gap-2 text-white">
              <IoArrowBackOutline className="text-xl" />
              <span>Back Home</span>
            </button>
          </div>
        </div>
        <div className="col-start-2 col-span-1 h-full overflow-y-auto z-10">
          <Outlet />
          <div className="w-full border-t border-[#E4E5E8] flex items-center justify-center py-5">
            <p className="text-[#767F8C] text-sm">@ {currentYear} NestQuest - All rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
