import { useMutation, useQuery } from "@tanstack/react-query";
import { DatePicker } from "antd";
import moment from "moment";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UserMakeOffer = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [offerPriceValid, setOfferPriceValid] = useState(true);

  const { data: property, isPending } = useQuery({
    queryKey: ["make_offer", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/property/${id}`);
      return data;
    },
  });

  const handleOfferPriceChange = (e) => {
    const value = parseInt(e.target.value);
    if (
      property?.property_price_min > value ||
      property?.property_price_max < value
    ) {
      setOfferPriceValid(false);
    } else {
      setOfferPriceValid(true);
    }
  };

  const handleMakeOffer = async (e) => {
    try {
        e.preventDefault()
      const buying_date = moment(e.target.date.value).format("MMMM D, YYYY");
      const offer_price = parseInt(e.target.offer_price.value);
      const query = {
        property_id: id,
        buyer_email: user?.email,
        buyer_name: user?.displayName,
        agent_email: property?.agent_email,
        agent_name: property?.agent_name,
        offer_price,
        buying_date,
        property_title: property?.property_title,
        property_image: property?.property_image,
        property_location: property?.property_location,
        detailed_location: property?.detailed_location,
        status: 'Pending'
      };
      await offerAsync(query);
    } catch (error) {
      toast.error("Something Went wrong");
    }
  };

  const { mutateAsync: offerAsync } = useMutation({
    mutationFn: async (query) => {
      const { data } = await axiosSecure.post("/offered", query);
      return data;
    },
    onSuccess: () => {
      toast.success("Successfully Offered");
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
    <div className="w-full p-10 min-h-screen">
      <h1 className="text-2xl text-[#18191C] font-medium mb-10">
        Offer This Property
      </h1>
      <form onSubmit={handleMakeOffer} className="w-full grid grid-cols-2 row-auto items-center gap-x-10 gap-y-5">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-sm text-[#18191C] mb-2">Property Title</h1>
          <input
            type="text"
            className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
            name="title"
            disabled
            defaultValue={property?.property_title}
            placeholder="Property Title"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-sm text-[#18191C] mb-2">
            Property Detail Location
          </h1>
          <input
            type="text"
            disabled
            defaultValue={property?.detailed_location}
            className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
            name="detailed_location"
            placeholder="123 Street, New York, USA"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-sm text-[#18191C] mb-2">Property Location</h1>
          <input
            type="text"
            disabled
            defaultValue={property?.property_location}
            className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
            name="location"
            placeholder="New York, USA"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-sm text-[#18191C] mb-2">Offer Price</h1>
          <input
            type="number"
            onChange={handleOfferPriceChange}
            className={`px-4 py-3 rounded-lg bg-transparent w-full border ${
              offerPriceValid ? "border-[#E4E5E8]" : "border-red-500"
            } focus:outline-none`}
            name="offer_price"
            placeholder={`Enter amount between ${property?.property_price_min} and ${property?.property_price_max}`}
          />
          {!offerPriceValid && (
            <p className="text-xs text-red-500">
              Offer must be between {property?.property_price_min} and{" "}
              {property?.property_price_max}
            </p>
          )}
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-sm text-[#18191C] mb-2">Agent Name</h1>
          <input
            type="text"
            required
            disabled
            className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
            defaultValue={property?.agent_name}
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-sm text-[#18191C] mb-2">Agent Email</h1>
          <input
            type="text"
            required
            disabled
            className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
            defaultValue={property?.agent_email}
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-sm text-[#18191C] mb-2">Buyer Email</h1>
          <input
            type="text"
            required
            disabled
            className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
            defaultValue={user?.email}
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-sm text-[#18191C] mb-2">Buyer Name</h1>
          <input
            type="text"
            required
            disabled
            className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
            defaultValue={user?.displayName}
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-sm text-[#18191C] mb-2">Buying Date</h1>
          <DatePicker
            required
            name="date"
            format="YYYY-MM-DD"
            className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
            placeholder="Buying Date"
          />
        </div>
        <button className="py-3 px-5 bg-primary text-white col-span-2 w-full flex justify-center mt-5 font-medium rounded-lg">
          Make Offer
        </button>
      </form>
    </div>
  );
};

export default UserMakeOffer;
