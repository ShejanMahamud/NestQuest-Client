import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
const navigate = useNavigate()
const [isOpen, setIsOpen] = useState(false);
const {user,logOut} = useAuth()


const handleLogout = async () => {
    try{
      await logOut()
      toast.success('Logout Successfully!')
    }
    catch{
      toast.error('Something Went Wrong!')
    }
  }

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
            {user ? 
                (
                    <div className="relative flex items-center gap-5">
                      <img onClick={()=>setIsOpen(!isOpen)} referrerPolicy="no-referrer" src={user?.photoURL} alt="avatar.png" className="w-12 h-12 object-cover border-2 border-primary rounded-full duration-700"/>
                      {
                        isOpen && <div className="flex flex-col gap-3 absolute top-14 right-0 bg-white px-2 py-2 rounded-lg w-80">
                          <div className="flex items-center gap-3">
                          <img referrerPolicy="no-referrer" src={user?.photoURL} alt="avatar.png" className="w-12 h-12 object-cover rounded-full"/>
                          <div className="flex flex-col">
                            <h1 className="text-sm font-semibold text-gray-700">{user?.displayName}</h1>
                            <p className="text-sm text-gray-500">{user?.email}</p>
                          </div>
                          </div>
                          <hr class="border-gray-200 border w-full"/>
                          <Link to={`${user && user?.role === 'admin' && '/dashboard/candidate' || user && user?.role === 'candidate' && '/dashboard/candidate' || user && user?.role === 'company' && '/dashboard/company'}`} class="flex items-center py-2 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 ">
                      <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" fill="currentColor"></path>
                          <path d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z" fill="currentColor"></path>
                      </svg>
          
                      <span class="mx-1">
                          Dashboard
                      </span>
                  </Link>
                  <Link to="/" class="flex items-center py-2 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100">
                      <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.8199 22H10.1799C9.71003 22 9.30347 21.673 9.20292 21.214L8.79592 19.33C8.25297 19.0921 7.73814 18.7946 7.26092 18.443L5.42392 19.028C4.97592 19.1709 4.48891 18.9823 4.25392 18.575L2.42992 15.424C2.19751 15.0165 2.27758 14.5025 2.62292 14.185L4.04792 12.885C3.98312 12.2961 3.98312 11.7019 4.04792 11.113L2.62292 9.816C2.27707 9.49837 2.19697 8.98372 2.42992 8.576L4.24992 5.423C4.48491 5.0157 4.97192 4.82714 5.41992 4.97L7.25692 5.555C7.50098 5.37416 7.75505 5.20722 8.01792 5.055C8.27026 4.91269 8.52995 4.78385 8.79592 4.669L9.20392 2.787C9.30399 2.32797 9.71011 2.00049 10.1799 2H13.8199C14.2897 2.00049 14.6958 2.32797 14.7959 2.787L15.2079 4.67C15.4887 4.79352 15.7622 4.93308 16.0269 5.088C16.2739 5.23081 16.5126 5.38739 16.7419 5.557L18.5799 4.972C19.0276 4.82967 19.514 5.01816 19.7489 5.425L21.5689 8.578C21.8013 8.98548 21.7213 9.49951 21.3759 9.817L19.9509 11.117C20.0157 11.7059 20.0157 12.3001 19.9509 12.889L21.3759 14.189C21.7213 14.5065 21.8013 15.0205 21.5689 15.428L19.7489 18.581C19.514 18.9878 19.0276 19.1763 18.5799 19.034L16.7419 18.449C16.5093 18.6203 16.2677 18.7789 16.0179 18.924C15.7557 19.0759 15.4853 19.2131 15.2079 19.335L14.7959 21.214C14.6954 21.6726 14.2894 21.9996 13.8199 22ZM7.61992 16.229L8.43992 16.829C8.62477 16.9652 8.81743 17.0904 9.01692 17.204C9.20462 17.3127 9.39788 17.4115 9.59592 17.5L10.5289 17.909L10.9859 20H13.0159L13.4729 17.908L14.4059 17.499C14.8132 17.3194 15.1998 17.0961 15.5589 16.833L16.3799 16.233L18.4209 16.883L19.4359 15.125L17.8529 13.682L17.9649 12.67C18.0141 12.2274 18.0141 11.7806 17.9649 11.338L17.8529 10.326L19.4369 8.88L18.4209 7.121L16.3799 7.771L15.5589 7.171C15.1997 6.90671 14.8132 6.68175 14.4059 6.5L13.4729 6.091L13.0159 4H10.9859L10.5269 6.092L9.59592 6.5C9.39772 6.58704 9.20444 6.68486 9.01692 6.793C8.81866 6.90633 8.62701 7.03086 8.44292 7.166L7.62192 7.766L5.58192 7.116L4.56492 8.88L6.14792 10.321L6.03592 11.334C5.98672 11.7766 5.98672 12.2234 6.03592 12.666L6.14792 13.678L4.56492 15.121L5.57992 16.879L7.61992 16.229ZM11.9959 16C9.78678 16 7.99592 14.2091 7.99592 12C7.99592 9.79086 9.78678 8 11.9959 8C14.2051 8 15.9959 9.79086 15.9959 12C15.9932 14.208 14.2039 15.9972 11.9959 16ZM11.9959 10C10.9033 10.0011 10.0138 10.8788 9.99815 11.9713C9.98249 13.0638 10.8465 13.9667 11.9386 13.9991C13.0307 14.0315 13.9468 13.1815 13.9959 12.09V12.49V12C13.9959 10.8954 13.1005 10 11.9959 10Z" fill="currentColor"></path>
                      </svg>
          
                      <span class="mx-1">
                          Settings
                      </span>
                  </Link>
                  <button onClick={handleLogout} class="flex items-center py-2 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100">
                      <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z" fill="currentColor"></path>
                      </svg>
          
                      <span class="mx-1">
                          Sign Out
                      </span>
                  </button>
          
                      </div>
                      }
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5.26855 10.5002C5.26608 9.61461 5.43837 8.73727 5.77554 7.91841C6.11271 7.09956 6.60815 6.35528 7.23346 5.72822C7.85876 5.10116 8.60166 4.60365 9.41957 4.26419C10.2375 3.92474 11.1143 3.75 11.9999 3.75C12.8854 3.75 13.7623 3.92474 14.5802 4.26419C15.3981 4.60365 16.141 5.10116 16.7663 5.72822C17.3916 6.35528 17.8871 7.09956 18.2242 7.91841C18.5614 8.73727 18.7337 9.61461 18.7312 10.5002V10.5002C18.7312 13.8579 19.4337 15.8063 20.0524 16.8712C20.1191 16.985 20.1546 17.1144 20.1553 17.2462C20.156 17.3781 20.1219 17.5078 20.0565 17.6223C19.991 17.7368 19.8966 17.832 19.7826 17.8984C19.6686 17.9647 19.5392 17.9998 19.4073 18.0002H4.59173C4.45985 17.9998 4.33038 17.9647 4.2164 17.8984C4.10242 17.832 4.00795 17.7368 3.94252 17.6223C3.8771 17.5077 3.84303 17.378 3.84376 17.2461C3.84449 17.1142 3.87999 16.9849 3.94667 16.8711C4.56573 15.8061 5.26855 13.8577 5.26855 10.5002H5.26855Z" stroke="#18191C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18" stroke="#18191C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.1973 2.24902C18.7234 3.21245 19.9536 4.57885 20.7521 6.19736" stroke="#18191C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.24805 6.19736C4.04657 4.57885 5.27679 3.21245 6.80291 2.24902" stroke="#18191C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
                    </div>
                    
                  )
            :
            <div onClick={()=>navigate('/login')} className='flex items-center gap-2'>
                <img src="https://gist.github.com/ShejanMahamud/b4e7803ded7eca2af444d537ed2e5deb/raw/095b091d0bd10f4e76010d7e980af5488cb7b2eb/user.svg" alt="" />
                <span>Login/Register</span>
            </div>}
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