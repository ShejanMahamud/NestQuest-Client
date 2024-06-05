import { useQuery } from "@tanstack/react-query";
import { Tooltip } from "antd";
import React from "react";
import { IoBedOutline, IoCheckmark, IoClose, IoLocationSharp, IoTimeOutline } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UserWishlist = () => {
const axiosSecure = useAxiosSecure()
const {user} = useAuth()
const navigate = useNavigate()
const {data:properties,isPending} = useQuery({
    queryKey: ['wishlist',user?.email],
    queryFn: async () => {
        const {data} = await axiosSecure.get(`/wishlist/${user?.email}`)
        return data
    }
}) 

  if (isPending) {
    return (
      <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
      </div>
    );
  }

  return (
    <div className="w-full p-10 ">
      <h1 className="text-2xl text-[#18191C] font-medium mb-10">
        My Wishlist
      </h1>
      <div className="w-full grid grid-cols-2 row-auto items-center gap-x-10 gap-y-5 ">
        {properties.map((property) => (
          <div
            key={property?._id}
            className="w-full border border-[#F0EFFB] rounded-md flex flex-col items-start gap-5 overflow-hidden relative"
          >
            <div className="bg-transparent backdrop-blur-sm rounded-md inline-flex items-center gap-1 px-3 py-2 border border-white border-opacity-30 text-xs text-white absolute top-5 left-5">
              <IoLocationSharp className="text-base" />
              <h1>{property?.property_location}</h1>
            </div>
            <img
              src={property?.property_image}
              alt=""
              className="aspect-video object-cover"
            />
            <div className="px-5 py-2 flex flex-col items-start gap-2 w-full">
              <div className="flex items-center w-full justify-between">
                <h1 className="text-xl text-primary font-medium">
                  ${property?.property_price_min} - $
                  {property?.property_price_max}{" "}
                  {/* <span className="text-[#000929] opacity-50 text-base font-normal">
                    /Month
                  </span> */}
                </h1>
                <div className="flex items-center gap-2">
                  <Tooltip title="Make Offer">
                    <button onClick={()=>navigate(`/dashboard/user/make_offer/${property?.property_id}`)} className="border border-green-500 rounded-full p-2 text-2xl text-green-500 font-bold">
                      <MdOutlineLocalOffer />
                    </button>
                  </Tooltip>
                  <Tooltip title='Remove Property'>
                  <button className="border border-red-500 rounded-full p-2 text-2xl text-red-500 font-bold">
                      <IoClose />
                    </button>
                  </Tooltip>
                </div>
              </div>
              <h1 className="text-xl font-medium">
                {property?.property_title}
              </h1>
              <p className="text-[#000929] opacity-50 text-sm">
                {property?.detailed_location}
              </p>
              <hr className="w-full border border-[#F0EFFB]" />
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <IoBedOutline className="text-primary text-xl" />
                  <span className="text-[#000929] opacity-70 text-sm">
                    {property?.property_rooms} Rooms
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <PiBathtub className="text-primary text-xl" />
                  <span className="text-[#000929] opacity-70 text-sm">
                    {property?.property_bathrooms} Bathroom
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_601_1323)">
                      <path
                        d="M8.83148 15.5437L3.45631 10.1685C2.8479 9.56011 2.8479 8.43989 3.45631 7.83148L8.83148 2.45631C9.43989 1.8479 10.5601 1.8479 11.1685 2.45631L16.5437 7.83148C17.1521 8.43989 17.1521 9.56011 16.5437 10.1685L11.1685 15.5437C10.5601 16.1521 9.43989 16.1521 8.83148 15.5437V15.5437Z"
                        stroke="#318CE7"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2 13.1714L6.36371 17.5351"
                        stroke="#318CE7"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.6362 17.5351L17.9999 13.1714"
                        stroke="#318CE7"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_601_1323">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[#000929] opacity-70 text-sm">
                    {property?.property_space}
                  </span>
                </div>
              </div>
              <div className="flex w-full items-center justify-between my-3">
                <div className="flex items-center gap-3">
                  <img
                    src={property?.agent_photo}
                    alt=""
                    className="w-10 h-10 object-cover rounded-full border border-primary"
                  />
                  <h1>{property?.agent_name}</h1>
                </div>
                {property?.property_status === "Pending" && (
                  <div className="flex items-center gap-1 text-yellow-500">
                    <IoTimeOutline className="text-xl" />
                    <span>Pending</span>
                  </div>
                )}
                {property?.property_status === "Verified" && (
                  <div className="flex items-center gap-1 text-green-500">
                    <IoCheckmark className="text-xl" />
                    <span>Verified</span>
                  </div>
                )}
                {property?.property_status === "Rejected" && (
                  <div className="flex items-center gap-1 text-red-500">
                    <IoClose className="text-xl" />
                    <span>Rejected</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserWishlist;
