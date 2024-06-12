import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { CgMenuRightAlt } from "react-icons/cg";
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useRole from './../hooks/useRole';
const Navbar = () => {
const navigate = useNavigate()
const {user,logOut} = useAuth()
const [menuOpen,setMenuOpen] = useState(false)
const {role,rolePending,roleRefetch} = useRole()
const userRole = rolePending ? 'user' : role || 'user';

const handleLogout = async () => {
    try{
      await logOut()
      toast.success('Logout Successfully!')
    }
    catch{
      toast.error('Something Went Wrong!')
    }
  }
  // if(rolePending){
  //   return <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
  //   <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
  //   <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
  //   <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
  // </div>
  // }

  return (
    <nav className='relative z-50 w-full h-[100px]'>
        <div className='bg-primary text-white py-3 w-full px-5 lg:flex hidden items-center justify-between lg:text-sm text-xs'>
            <div className='flex items-center gap-2'>
                <img src="https://gist.github.com/ShejanMahamud/ff6c6681f4619b08e037eaf64262e9c6/raw/e59587df1968f18d9103ff52f6e989e344f2c457/location.svg" alt="" />
                <span>BondhoGate, Rajshahi, Bangladesh</span>
            </div>
            <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
                <img src="https://gist.github.com/ShejanMahamud/932f55452b9d98dcaf5100356b240966/raw/ee4236b4648f47e36a6a92ed33f7ce63f74abca9/phone.svg" alt="" />
                <span>+8801644494180</span>
            </div>
            <div className='flex items-center gap-2'>
                <img src="https://gist.github.com/ShejanMahamud/3211dcd851c1788c0a6eed249c1eea60/raw/f5bdd0279b5166b5469ff7b371d34552e87b28b2/email.svg" alt="" />
                <span>support@nestquest.com</span>
            </div>
            </div>
        </div>
        <div className='bg-white px-5 py-2 w-full flex items-center justify-between '>
        <CgMenuRightAlt onClick={()=>setMenuOpen(!menuOpen)} className='text-2xl lg:hidden md:flex flex'/>
            <ul className={` items-center gap-10 bg-white px-10 py-5 rounded-lg z-50 ${menuOpen ? 'lg:hidden md:flex flex flex-col absolute left-5 top-16' : 'hidden'}`}>
            <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8 text-primary"
                : "no-underline text-[#2B2B2B]"
            }
            to={"/"}
          >
            <li className=" font-medium lg:text-base md:text-sm text-xs cursor-pointer">
              Home
            </li>
          </NavLink>
            <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2  underline-offset-8 text-primary"
                : "no-underline text-[#2B2B2B]"
            }
            to={"/properties"}
          >
            <li className=" font-medium lg:text-base md:text-sm text-xs cursor-pointer">
              All Properties
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={
              userRole === 'Admin'
                ? '/dashboard/admin'
                : userRole === 'Agent'
                ? '/dashboard/agent'
                : '/dashboard/user'
            }
          >
            <li className=" font-medium text-xs cursor-pointer">
             Dashboard
            </li>
          </NavLink>
            </ul>
            <ul className='lg:flex md:hidden hidden items-center gap-10'>
            <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8 text-primary"
                : "no-underline text-[#2B2B2B]"
            }
            to={"/"}
          >
            <li className=" font-medium text-base cursor-pointer">
              Home
            </li>
          </NavLink>
            <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8 text-primary"
                : "no-underline text-[#2B2B2B]"
            }
            to={"/properties"}
          >
            <li className=" font-medium text-base cursor-pointer">
              Properties
            </li>
          </NavLink>
            <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={
              userRole === 'Admin'
                ? '/dashboard/admin'
                : userRole === 'Agent'
                ? '/dashboard/agent'
                : '/dashboard/user'
            }
          >
            <li className=" font-medium text-base cursor-pointer">
             Dashboard
            </li>
          </NavLink>
            </ul>
            <div className='flex items-center gap-2'>
            <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center'>
                <img src="https://gist.github.com/ShejanMahamud/1f2446a51e9766dc7d01b9a0115b45c1/raw/7d4e7ecfec11aeb842339981fd2ebea77c863575/logo.svg" alt="" />
                
            </div>
            <h1 className='text-lg font-medium'>NestQuest</h1>
            </div>
            <div className='flex items-center gap-10'>
            {user ? 
                (
                    <div className="relative flex items-center lg:gap-5 gap-3 overflow-hidden">
                      <img onClick={()=>setIsOpen(!isOpen)} referrerPolicy="no-referrer" src={user?.photoURL} alt="avatar.png" className="w-12 h-12 object-cover border-2 border-primary rounded-full duration-700"/>
          <button onClick={handleLogout} className='bg-primary text-white lg:px-2 lg:py-2 lg:text-base text-xs p-3 rounded-md'>Log Out</button>
                    </div> 
                  )
            :
            <div onClick={()=>navigate('/login')} className='flex items-center gap-2'>
                <img src="https://gist.github.com/ShejanMahamud/b4e7803ded7eca2af444d537ed2e5deb/raw/095b091d0bd10f4e76010d7e980af5488cb7b2eb/user.svg" alt="" />
                <span className='lg:text-base md:text-sm text-sm'>Login/Register</span>
            </div>
            }
            {
              userRole === 'Agent' && <button onClick={()=>navigate('/dashboard/agent')} className='bg-primary text-white px-5 py-3 rounded-full hidden md:flex lg:flex items-center gap-2'>
              <img src="https://gist.github.com/ShejanMahamud/8f93a9df9650cd9c6fd9dcc355712709/raw/43c5835d14197a7e9939dbf69658959af6692bfc/logo-2.svg" alt="" />
              Add Listing
          </button>
            }
        </div>
        </div>
        
    </nav>
  )
}

export default Navbar