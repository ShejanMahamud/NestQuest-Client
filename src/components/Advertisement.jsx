import { useQuery } from "@tanstack/react-query";
import React from "react";
import { GoVerified } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { LuDollarSign } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useAxiosCommon from "../hooks/useAxiosCommon";
const Advertisement = () => {
  const navigate = useNavigate()
const axiosCommon = useAxiosCommon()

const {data:advertises,isPending} = useQuery({
    queryKey: ['advertises'],
    queryFn: async () => {
        const {data} = await axiosCommon.get('/all_properties?advertise=true')
        return data
    }
})

if(isPending){
    return <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
    <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
  </div>
}

  return (
    <div className="w-[90%] mx-auto my-28">
      <div className="flex flex-col items-start gap-2 mb-10 w-full">
        <h1 className="text-primary font-medium">Advertise</h1>
        <span className=" font-bold lg:text-3xl md:text-xl text-lg">
          Featured places for buy
        </span>
        <p className="text-[#737D8C] w-[60%] text-sm">
          We try to provide a better home experience
        </p>
      </div>
      <div className="w-full grid grid-cols-3 items-center gap-10">
      

      </div>
      <Swiper 
  modules={[Navigation]}
 spaceBetween={30}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      > 
      {
          advertises.map((advertise,index)=> (<SwiperSlide key={index}>
            <div key={advertise?._id} className="relative w-full">
        <div className="bg-advertise h-[300px] w-full absolute rounded-3xl"></div>
        <img
          src={advertise?.property_image}
          alt=""
          className="h-[300px] w-full object-cover rounded-3xl 
            bg-advertise"
        />
        <div className="bg-transparent backdrop-blur-sm rounded-md inline-flex items-center gap-1 px-3 py-2 border border-white border-opacity-30 text-xs text-white absolute top-5 right-5">
          <IoLocationSharp className="text-base"/>
          <h1>{advertise?.property_location}</h1>
        </div>
        <div className="bg-transparent backdrop-blur-sm rounded-md inline-flex items-center gap-1 px-3 py-2 border border-white border-opacity-30 text-xs text-white absolute top-5 left-5">
          <GoVerified className="text-base"/>
          <h1>{advertise?.property_status}</h1>
        </div>
        <div className="bg-transparent backdrop-blur-sm rounded-md inline-flex items-center gap-1 px-3 py-2 border border-white border-opacity-30 text-xs text-white absolute bottom-5 left-5">
          <LuDollarSign className="text-base"/>
          <h1>${advertise?.property_price_min} - ${advertise?.property_price_max}</h1>
        </div>
        <h1 className="absolute right-5 bottom-5 text-white"></h1>
        <button onClick={()=>navigate(`/details/${advertise?._id}`)} className="bg-primary px-2 py-1 rounded-md text-white font-medium flex items-center gap-3 text-xs absolute bottom-5 right-5">
          <span>View Details</span>
          <img
            src="https://gist.github.com/ShejanMahamud/3e1531c623443a8f5df5f64e60328b72/raw/406db90cd80314df603b5da7cbe504acfb194eaf/arrow.svg"
            alt=""
          />
        </button>
      </div>
        </SwiperSlide>))
      }</Swiper>
    </div>
  );
};

export default Advertisement;
