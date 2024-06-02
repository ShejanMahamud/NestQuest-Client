import React from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { IoBookmarkOutline, IoBriefcaseOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaWalletSolid } from "react-icons/lia";
import { LuUserCircle2 } from "react-icons/lu";
import { PiUsers } from "react-icons/pi";
import { RiStackFill } from "react-icons/ri";
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AgentDashboard = () => {
  const {loading,user} = useAuth()
  const currentYear = new Date().getFullYear();


  if(loading){
    return <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
    <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
  </div>
  }

  return (
    <>
    <div className='w-full grid grid-cols-[20%_80%] row-auto items-start min-h-screen'>
    <div className='w-full bg-[#181818] h-full py-10 px-5'>
        <div className='flex flex-col w-full items-center gap-2 mb-5'>
            <img src={user?.photoURL} alt="" className='w-20 h-20 rounded-full border border-primary object-cover'/>
            <h1 className='text-xl text-white font-medium'>{user?.displayName}</h1>
            <span className='text-[#7F7F7F] text-xs'>Agent Dashboard</span>
        </div>
      <div className='w-full flex flex-col items-start'>

        <NavLink
        end
            className={({ isActive }) =>
              isActive
                ? "bg-[#030303] text-white rounded-lg w-full flex items-center gap-3 py-3 px-3"
                : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
            }
            to={"/dashboard/agent"}
          >
            <RiStackFill className='text-xl'/>
          <span className='text-base'>Overview</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#030303] text-white rounded-lg w-full flex items-center gap-3 py-3 px-3"
                : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
            }
            to={"/dashboard/agent/profile"}
          >
            <LuUserCircle2 className='text-xl'/>
          <span className='text-base'>Agent Profile</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#E7F0FA] text-primary w-full flex items-center gap-3 py-3 px-3"
                : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
            }
            to={"/dashboard/company/post_job"}
          >
            <FiPlusCircle className='text-xl'/>
          <span className='text-base'>Post A Job</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#E7F0FA] text-primary w-full flex items-center gap-3 py-3 px-3"
                : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
            }
            to={"/dashboard/company/jobs"}
          >
            <IoBriefcaseOutline className='text-xl'/>
          <span className='text-base'>My Jobs</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#E7F0FA] text-primary w-full flex items-center gap-3 py-3 px-3"
                : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
            }
            to={"/dashboard/company/saved_candidates"}
          >
            <IoBookmarkOutline className='text-xl'/>
          <span className='text-base'>Saved Candidate</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#E7F0FA] text-primary w-full flex items-center gap-3 py-3 px-3"
                : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
            }
            to={"/dashboard/company/team"}
          >
            <PiUsers className='text-xl'/>
          <span className='text-base'>Team</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#E7F0FA] text-primary w-full flex items-center gap-3 py-3 px-3"
                : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
            }
            to={"/dashboard/company/billing"}
          >
            <LiaWalletSolid className='text-xl'/>
          <span className='text-base'>Plan & Billings</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#E7F0FA] text-primary w-full flex items-center gap-3 py-3 px-3"
                : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
            }
            to={"/dashboard/company/settings"}
          >
            <IoSettingsOutline className='text-xl'/>
          <span className='text-base'>Settings</span>
          </NavLink>
      </div>
    </div>
    <Outlet/>
    </div>
    <div className='w-full border-t border-[#E4E5E8] flex items-center justify-center py-5'>
            <p className='text-[#767F8C] text-sm'>@ {currentYear} NestQuest - All rights Reserved</p>
    </div>
    </>
  )
}

export default AgentDashboard