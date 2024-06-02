import { useQuery } from '@tanstack/react-query';
import { Rate } from 'antd';
import React, { useRef } from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useAxiosCommon from '../hooks/useAxiosCommon';

const Reviews = () => {
  const axiosCommon = useAxiosCommon();

  const { data: reviews, isPending } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const { data } = await axiosCommon.get('/reviews');
      return data;
    }
  });

  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
    <div className="w-[90%] mx-auto my-28 flex flex-col lg:flex-row md:flex-row items-center justify-between bg-[url('https://gist.github.com/ShejanMahamud/422c700fd689df95ca29cc335e2311d2/raw/850f1729a61dc67e6ebd136203a50dd3070e3e17/gradient.svg')] bg-no-repeat bg-center ">
      <div className="flex flex-col items-start gap-2 mb-10 w-full">
        <h1 className="text-primary font-medium">TESTIMONIALS</h1>
        <span className=" font-bold lg:text-3xl md:text-xl text-lg">
          Look What Our Customers Say!
        </span>
        <p className="text-[#737D8C] w-[60%] text-sm">
          Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.
        </p>
        <div className='flex items-center gap-5 mt-10'>
          <button ref={prevRef} className='border border-primary rounded-full p-2 text-primary text-2xl'>
            <IoIosArrowRoundBack />
          </button>
          <button ref={nextRef} className='border border-primary rounded-full p-2 text-primary text-2xl'>
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        slidesPerView={1}
        className='lg:w-[50%] w-[90%] p-4'
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className='bg-white py-5 px-10 rounded-xl shadow-xl flex flex-col items-start gap-5 w-full'>
              <img src="https://gist.github.com/ShejanMahamud/af31927d9c9847d471c960321f3c3aea/raw/18f6ab0c85a16fcfd8a1b4b7c1c3c0210782ba09/qoute.svg" alt="" />
              <h1 className='text-sm'>{review.review_description}</h1>
              <hr className='w-full border border-[#D4D4D4] my-2' />
              <div className='w-full flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <img src={review.reviewer_image} alt="" className='w-10 h-10 rounded-full border border-primary' />
                  <span className='text-sm'>{review.reviewer_name}</span>
                </div>
                <Rate disabled defaultValue={2} className='gap-0' />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Reviews;
