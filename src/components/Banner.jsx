import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Navigation, Pagination } from 'swiper/modules';


const Banner = () => {
    const items = [
        {
          key: 'sale',
          label: 'For Sale',
          children: <form className='w-full flex flex-col items-center gap-8 justify-between mt-10 font-poppins'>
            <input type="text" className='bg-[#d4d4d433] px-5 py-4 rounded-full text-[#D4D4D4] w-full focus:outline-none mt-5' placeholder='New York, San Francisco, etc'/>
            <select className='bg-[#d4d4d433] px-5 py-4 rounded-full accent-[#D4D4D4] w-full focus:outline-none' placeholder='New York, San Francisco, etc'>
                <option disabled value="">Select Property Type</option>
                <option  value="Select">Beach Side</option>
                <option  value="Villa">Villa</option>
            </select>
            <select className='bg-[#d4d4d433] px-5 py-4 rounded-full accent-[#D4D4D4] w-full focus:outline-none' placeholder='New York, San Francisco, etc'>
            <option disabled selected value="">Select Rooms</option>
                <option  value="1">1</option>
                <option  value="2">2</option>
                <option  value="3">3</option>
            </select>
            <button className='bg-primary text-white py-3 px-5 flex items-center justify-center w-full rounded-full gap-3 text-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.53582 19.0716C4.27949 19.0716 0 14.7921 0 9.53582C0 4.27949 4.27949 0 9.53582 0C14.7921 0 19.0716 4.27949 19.0716 9.53582C19.0716 14.7921 14.7921 19.0716 9.53582 19.0716ZM9.53582 1.39549C5.04235 1.39549 1.39549 5.05166 1.39549 9.53582C1.39549 14.02 5.04235 17.6761 9.53582 17.6761C14.0293 17.6761 17.6761 14.02 17.6761 9.53582C17.6761 5.05166 14.0293 1.39549 9.53582 1.39549Z" fill="white"/>
  <path d="M19.3046 20.0019C19.1278 20.0019 18.951 19.9367 18.8115 19.7972L16.9508 17.9365C16.6811 17.6667 16.6811 17.2202 16.9508 16.9504C17.2206 16.6806 17.6672 16.6806 17.937 16.9504L19.7976 18.811C20.0674 19.0808 20.0674 19.5274 19.7976 19.7972C19.6581 19.9367 19.4813 20.0019 19.3046 20.0019Z" fill="white"/>
</svg>
                <span>Search</span></button>
          </form>,
        },
        {
          key: 'rent',
          label: 'For Rent',
          children: <form className='font-poppins w-full flex flex-col items-center gap-8 justify-between mt-10'>
          <input type="text" className='bg-[#d4d4d433] px-5 py-4 rounded-full text-[#D4D4D4] w-full focus:outline-none mt-5' placeholder='New York, San Francisco, etc'/>
          <select className='bg-[#d4d4d433] px-5 py-4 rounded-full accent-[#D4D4D4] w-full focus:outline-none' placeholder='New York, San Francisco, etc'>
              <option disabled value="">Select Property Type</option>
              <option  value="Select">Beach Side</option>
              <option  value="Villa">Villa</option>
          </select>
          <select className='bg-[#d4d4d433] px-5 py-4 rounded-full accent-[#D4D4D4] w-full focus:outline-none' placeholder='New York, San Francisco, etc'>
          <option disabled selected value="">Select Rooms</option>
              <option  value="1">1</option>
              <option  value="2">2</option>
              <option  value="3">3</option>
          </select>
          <button className='bg-primary text-white py-3 px-5 flex items-center justify-center w-full rounded-full gap-3 text-lg'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.53582 19.0716C4.27949 19.0716 0 14.7921 0 9.53582C0 4.27949 4.27949 0 9.53582 0C14.7921 0 19.0716 4.27949 19.0716 9.53582C19.0716 14.7921 14.7921 19.0716 9.53582 19.0716ZM9.53582 1.39549C5.04235 1.39549 1.39549 5.05166 1.39549 9.53582C1.39549 14.02 5.04235 17.6761 9.53582 17.6761C14.0293 17.6761 17.6761 14.02 17.6761 9.53582C17.6761 5.05166 14.0293 1.39549 9.53582 1.39549Z" fill="white"/>
<path d="M19.3046 20.0019C19.1278 20.0019 18.951 19.9367 18.8115 19.7972L16.9508 17.9365C16.6811 17.6667 16.6811 17.2202 16.9508 16.9504C17.2206 16.6806 17.6672 16.6806 17.937 16.9504L19.7976 18.811C20.0674 19.0808 20.0674 19.5274 19.7976 19.7972C19.6581 19.9367 19.4813 20.0019 19.3046 20.0019Z" fill="white"/>
</svg>
              <span>Search</span></button>
        </form>,
        },
      ];
    
  return (
    <div
    className='bg-banner rounded-custom-banner w-full grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 row-auto items-center gap-x-20 gap-y-10 lg:p-24 md:p-16 p-10'
    >
        <div className='w-full flex flex-col items-start gap-5'>
        <span className='text-primary font-medium'>REAL ESTATE</span>
<h1 className='lg:text-5xl md:text-4xl text-3xl font-semibold leading-[50px]'>Find the perfect home you love..!</h1>
<p className='leading-[26px] text-[#808080] text-sm'>
  Discover your dream home with us. Explore a variety of properties that fit your lifestyle and budget. Our team is dedicated to helping you find a place.
</p>
        </div>
        <div className='w-full'>
        <Swiper pagination={true} navigation={true} modules={[Pagination,Navigation]} className="w-full shadow-2xl">
        <SwiperSlide>
            <img src="https://i.ibb.co/898VDfb/alexander-andrews-Dr6-VBM0-KNsw-unsplash.jpg" alt="" className='w-full rounded-lg object-cover h-[400px] '/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://i.ibb.co/mtVcvCx/luke-stackpoole-e-Wq-Og-J-lfi-I-unsplash.jpg" alt="" className='w-full rounded-lg object-cover h-[400px]'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://i.ibb.co/QbsbLMW/log-home-58166-1280.jpg" alt="" className='w-full h-[400px] rounded-lg object-cover'/>
        </SwiperSlide>

      </Swiper>
        </div>
        <div className='w-full flex lg:flex-row flex-col items-center justify-center lg:col-span-2  md:flex-row lg:gap-10 gap-5 lg:-mb-40 md:-mb-24'>
            <div className='bg-white shadow-lg px-5 py-3 rounded-full flex items-center gap-3'>
            <Avatar.Group>
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
      <a href="https://ant.design">
        <Avatar
          style={{
            backgroundColor: '#f56a00',
          }}
        >
          K
        </Avatar>
      </a>

        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      <Avatar
        style={{
          backgroundColor: '#1677ff',
        }}
        icon={<AntDesignOutlined />}
      />
        <Avatar
          style={{
            backgroundColor: '#f56a05',
          }}
        >
          100+
        </Avatar>
    </Avatar.Group>
    <h1 className='font-medium'>72k+ Happy <br />
Customers</h1>
            </div>
            <div className='bg-white shadow-lg px-5 py-3 rounded-full flex items-center gap-3'>
            <img src="https://i.ibb.co/898VDfb/alexander-andrews-Dr6-VBM0-KNsw-unsplash.jpg" alt="" className='w-10 h-10 object-cover rounded-full'/>
    <h1 className='font-medium'>200+ New 
 <br /> 
 Listings Everyday!</h1>
            </div>
        </div>
    </div>
  )
}

export default Banner