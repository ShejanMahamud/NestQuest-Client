import { useMutation, useQuery } from "@tanstack/react-query";
import { Modal, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import moment from 'moment';
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoBedOutline, IoLocationOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Map from "../Utils/Map";
import useAuth from "../hooks/useAuth";
import useAxiosCommon from "../hooks/useAxiosCommon";
const PropertyDetails = () => {
  const [rating, SetRating] = useState(0);
  const [reviewModal, setReviewModal] = useState(false);
  const axiosCommon = useAxiosCommon();
  const { user } = useAuth();
  const { id } = useParams();

  const { data: property, isPending } = useQuery({
    queryKey: ["property", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/property/${id}`);
      return data;
    },
  });

  const { data: reviews, reviewsPending,refetch } = useQuery({
    queryKey: ["review_property", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/reviews/${id}`);
      return data[0];
    },
  });

  const handleReview = async (e) => {
    e.preventDefault();
    try {
      const review_title = e.target.title.value;
      const review_description = e.target.description.value;
      const review_rating = rating;
      const review = {
        review_title,
        review_description,
        review_rating,
        user_email: user?.email,
        property_id: id,
        review_time: moment().format('lll')
      };
      await reviewAsync(review);
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  const handleWishlist = async () => {
    try{
      const {_id,property_advertise,property_type,property_description,property_bathrooms,property_rooms,property_space, ...rest} = property
      await wishlistAsync({...rest,property_id: _id,user_email: user?.email})
    }
    catch(error){
      toast.error('Something Went Wrong')
    }
  }

  const { mutateAsync: reviewAsync } = useMutation({
    mutationFn: async (review) => {
      const { data } = await axiosCommon.post(`/reviews`, review);
      return data;
    },
    onSuccess: () => {
      refetch()
      setReviewModal(false)
      toast.success("Review Added Successfully");
    },
  });

  const {mutateAsync: wishlistAsync} = useMutation({
    mutationFn: async (wishlist) => {
      const {data} = axiosCommon.post(`/wishlist`,wishlist)
      return data
    },
    onSuccess: () => {
      toast.success('Successfully Added WishList')
    }
  })

  if (isPending || reviewsPending) {
    return (
      <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
      </div>
    );
  }

  return (
    <div className="w-full p-10 grid grid-cols-1 row-auto items-center gap-10">
      <div className="w-full grid grid-cols-[70%_25%] gap-10 items-start">
        <div className="flex flex-col items-start gap-5">
          <img
            src={property?.property_image}
            alt=""
            className="aspect-video rounded-lg"
          />
          <div className="w-full p-3 flex flex-col items-start gap-3">
            <div className="w-full flex items-center justify-between">
              <div className="flex flex-col items-start gap-3">
                <h1 className="text-2xl font-medium">
                  {property?.property_title}
                </h1>
                <div className="flex items-center gap-2 text-gray-500">
                  <IoLocationOutline className="text-xl font-medium" />
                  <span className="text-sm ">
                    {property?.detailed_location}
                  </span>
                </div>
                <span className="text-sm font-medium">
                  {property?.property_location}
                </span>
              </div>
              <div className="flex flex-col items-start gap-3">
                <Rate
                  allowHalf
                  defaultValue={reviews?.average_rating}
                  disabled
                />
                <span className="text-gray-500 font-medium text-sm">
                  {reviews?.review_count}+ Reviews
                </span>
                <h1 className="text-xl text-primary font-medium">
                  ${property?.property_price_min} - $
                  {property?.property_price_max}{" "}
                </h1>
              </div>
            </div>
            <div className="w-full my-5">
              <p>{property?.property_description}</p>
            </div>
            <div className="w-full my-5">
              <h1 className="text-xl font-medium mb-5">Facilities</h1>
              <div className="w-full flex items-center gap-10">
                <div className="flex items-center gap-2">
                  <IoBedOutline className="text-primary text-3xl" />
                  <span className="text-[#000929] opacity-70 text-lg">
                    {property?.property_rooms} Rooms
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <PiBathtub className="text-primary text-3xl" />
                  <span className="text-[#000929] opacity-70 text-lg">
                    {property?.property_bathrooms} Bathroom
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                  <span className="text-[#000929] opacity-70 text-lg">
                    {property?.property_space}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-10 items-center">
          <div className="w-full rounded-lg shadow-lg flex flex-col items-center gap-1 py-3">
            <img
              src={property?.agent_photo}
              alt=""
              className="h-16 w-16 rounded-full object-cover"
            />
            <h1 className="font-medium text-lg">{property?.agent_name}</h1>
            <p className="text-gray-500 text-sm">Agent of NestQuest</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-2 w-full">
            <Map location={"Broadway 10012, New York, NY, USA"} />
          </div>
          <button onClick={handleWishlist} className="w-full bg-primary text-white font-medium rounded-lg py-3">
            Add To Wishlist
          </button>
        </div>
        <div className="w-full col-span-2 bg-white shadow-xl rounded-lg p-10">
          <h1 className="text-lg font-medium mb-5">Reviews</h1>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="bg-primary text-white px-2 py-1 rounded-md text-sm font-medium">
                {reviews?.average_rating}
              </span>
              <span className="text-gray-400 font-medium">
                From {reviews?.review_count} Reviews
              </span>
            </div>
            <button
              onClick={() => setReviewModal(true)}
              className="px-4 py-2 rounded-md bg-primary text-white font-medium"
            >
              Share Review
            </button>
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
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            className="mt-10 py-10"
          >
            {reviews?.reviews &&
              reviews?.reviews.map((review) => (
                <SwiperSlide key={review?._id}>
                  <div className="bg-white py-5 px-10 rounded-xl shadow-lg flex flex-col items-start gap-5 w-full">
                    <img
                      src="https://gist.github.com/ShejanMahamud/af31927d9c9847d471c960321f3c3aea/raw/18f6ab0c85a16fcfd8a1b4b7c1c3c0210782ba09/qoute.svg"
                      alt=""
                    />
                    <h1 className="text-sm">{review?.review_title}</h1>
                    <p>{review?.review_description}</p>
                    <hr className="w-full border border-[#D4D4D4] my-2" />
                    <div className="w-full flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={review?.user_photo}
                          alt=""
                          className="w-10 h-10 rounded-full border border-primary object-cover"
                        />
                        <span className="text-sm">{review?.user_name}</span>
                      </div>
                      <Rate
                        disabled
                        defaultValue={review?.review_rating}
                        className="gap-0"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <Modal
          open={reviewModal}
          footer={false}
          onCancel={() => setReviewModal(false)}
        >
          <form
            onSubmit={handleReview}
            className="p-5 flex w-full items-center flex-col gap-5"
          >
            <div className="w-full">
              <label class="block mb-2 text-sm text-gray-600  ">
                Review Title
              </label>
              <input
                type="text"
                required
                placeholder="John"
                name="title"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="w-full">
              <label class="block mb-2 text-sm text-gray-600  ">
                Share Your Thoughts
              </label>
              <TextArea name="description" rows={4} />
            </div>
            <div className="w-full">
              <label class="block mb-2 text-sm text-gray-600  ">Rating</label>
              <Rate onChange={SetRating} allowHalf defaultValue={0} />
            </div>
            <button className="bg-primary text-white font-medium w-full py-3 rounded-md">
              Submit Review
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default PropertyDetails;
