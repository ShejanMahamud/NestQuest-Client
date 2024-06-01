import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className=' w-full'>
        <div className='bg-primary text-white py-3 w-full px-5 flex items-center justify-between text-sm'>
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
        <div className='bg-white px-5 py-2 w-full flex items-center justify-between'>
            <ul className='flex items-center gap-10'>
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
            to={"/all_properties"}
          >
            <li className=" font-medium text-base cursor-pointer">
              All Properties
            </li>
          </NavLink>
            <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/dashboard"}
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
            <div className='flex items-center gap-2'>
                <img src="https://gist.github.com/ShejanMahamud/b4e7803ded7eca2af444d537ed2e5deb/raw/095b091d0bd10f4e76010d7e980af5488cb7b2eb/user.svg" alt="" />
                <span>Login/Register</span>
            </div>
            <button className='bg-primary text-white px-5 py-3 rounded-full flex items-center gap-2'>
                <img src="https://gist.github.com/ShejanMahamud/8f93a9df9650cd9c6fd9dcc355712709/raw/43c5835d14197a7e9939dbf69658959af6692bfc/logo-2.svg" alt="" />
                Add Listing
            </button>
        </div>
        </div>
        
    </nav>
  )
}

export default Navbar