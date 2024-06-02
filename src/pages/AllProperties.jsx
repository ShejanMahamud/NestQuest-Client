import { Tooltip } from 'antd';
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoBedOutline } from 'react-icons/io5';
import { PiBathtub } from "react-icons/pi";

const AllProperties = () => {
  return (
    <div className='w-full mx-auto'>
        <div className="bg-register bg-no-repeat bg-cover bg-center flex flex-col items-center gap-5 w-full lg:px-20 px-5 py-16">
        <div className="flex items-center justify-between w-full ">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-primary font-medium">CHECKOUT OUR NEW</h1>
            <span className=" font-bold lg:text-3xl md:text-xl text-lg text-white">
              {`Latest Listed Properties `}
            </span>
            <p className=" text-sm text-white">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. 
            </p>
          </div>
            <ul className="flex items-center gap-1 text-white text-sm">
              <li>Home</li>
              <li>/</li>
              <li>All Books</li>
            </ul>

        </div>
      </div>
      <div className='w-[90%] mx-auto grid grid-cols-3 row-auto items-center gap-x-10 gap-y-5 my-20'>
            <div className='w-full border border-[#F0EFFB] rounded-md flex flex-col items-start gap-5 overflow-hidden'>
                <img src="https://i.ibb.co/Qc6KpTQ/alexander-andrews-Dr6-VBM0-KNsw-unsplash.jpg" alt="" className='aspect-video object-cover'/>
                <div className='px-5 py-2 flex flex-col items-start gap-2 w-full'>
                    <div className='flex items-center w-full justify-between'>
                        <h1 className='text-2xl text-primary font-medium'>$2400 <span className='text-[#000929] opacity-50 text-base font-normal'>/Month</span></h1>
                        <Tooltip title='Property Details'>
                        <button className='border border-[#E8E6F9] rounded-full p-2 text-2xl text-primary font-bold'>
                        <IoIosArrowRoundForward/> 
                        </button>
                        </Tooltip>
                    </div>
                    <h1 className='text-xl font-medium'>St. Crystal</h1>
                    <p className='text-[#000929] opacity-50 text-sm'>210 US Highway, Highland Lake, FL</p>
                    <hr className='w-full border border-[#F0EFFB]'/>
                    <div className='w-full flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                        <IoBedOutline className='text-primary text-xl'/> 
                        <span className='text-[#000929] opacity-70 text-sm'>4 Rooms</span>
                        </div>
                        <div className='flex items-center gap-2'>
                        <PiBathtub className='text-primary text-xl'/> 
                        <span className='text-[#000929] opacity-70 text-sm'>2 Bathroom</span>
                        </div>
                        <div className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_601_1323)">
    <path d="M8.83148 15.5437L3.45631 10.1685C2.8479 9.56011 2.8479 8.43989 3.45631 7.83148L8.83148 2.45631C9.43989 1.8479 10.5601 1.8479 11.1685 2.45631L16.5437 7.83148C17.1521 8.43989 17.1521 9.56011 16.5437 10.1685L11.1685 15.5437C10.5601 16.1521 9.43989 16.1521 8.83148 15.5437V15.5437Z" stroke="#318CE7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 13.1714L6.36371 17.5351" stroke="#318CE7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.6362 17.5351L17.9999 13.1714" stroke="#318CE7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_601_1323">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
                        <span className='text-[#000929] opacity-70 text-sm'>6x8 m²</span>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default AllProperties