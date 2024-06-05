import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  IoCheckmark,
  IoClose,
  IoLocationSharp,
  IoTimeOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UserBoughtProperties = () => {
  const { user } = useAuth();
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure();
  const { data: properties, isPending } = useQuery({
    queryKey: ["bought", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/bought/${user?.email}`);
      return data;
    },
  });

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
        Property Bought
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
                  ${property?.offer_price}
                </h1>
              </div>
              <h1 className="text-xl font-medium">
                {property?.property_title}
              </h1>
              <p className="text-[#000929] opacity-50 text-sm">
                {property?.detailed_location}
              </p>
              <hr className="w-full border border-[#F0EFFB]" />
              <div className="flex w-full items-center justify-between my-3">
                <div className="flex items-center gap-3">
                  <h1>{property?.agent_name}</h1>
                </div>
                <div className="flex items-center gap-2">
                  {property?.status === "Pending" && (
                    <div className="flex items-center gap-1 text-yellow-500">
                      <IoTimeOutline className="text-xl" />
                      <span>Pending</span>
                    </div>
                  )}
                  {property?.status === "Verified" && (
                    <div className="flex items-center gap-1 text-green-500">
                      <IoCheckmark className="text-xl" />
                      <span>Verified</span>
                    </div>
                  )}
                  {property?.status === "Rejected" && (
                    <div className="flex items-center gap-1 text-red-500">
                      <IoClose className="text-xl" />
                      <span>Rejected</span>
                    </div>
                  )}
                </div>
              </div>
              {
                property?.status === 'Verified' && <button onClick={()=>navigate(`/dashboard/user/pay/${property?._id}`)} className="bg-primary text-white font-medium px-4 py-2 rounded-md">Pay Now</button>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBoughtProperties;
