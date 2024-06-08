import { useMutation, useQuery } from '@tanstack/react-query';
import { Rate } from 'antd';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { IoWarningOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAxiosCommon from './../../hooks/useAxiosCommon';

const AdminManageReviews = () => {
const axiosSecure= useAxiosSecure()
const axiosCommon = useAxiosCommon();

const {data:reviews,isPending,refetch} = useQuery({
  queryKey: ['admin_all_reviews'],
  queryFn: async () => {
    const {data} = await axiosCommon.get("/all_reviews")
    return data
  }
})


const {mutateAsync} = useMutation({
  mutationFn: async id => {
    const {data} = await axiosSecure.delete(`/review/${id}`)
    return data
  },
  onSuccess: () => {
    refetch()
  }
})

const handleDeleteReviews = async (id) => {
  try{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        await mutateAsync(id)
        Swal.fire({
          title: "Deleted!",
          text: "Reviews has been deleted.",
          icon: "success"
        });
      }
    });
  }
  catch(error){
    toast.error('Something Went Wrong')
  }
}

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
    <div className='w-full min-h-screen p-10'>
      <h1 className="text-2xl text-[#18191C] font-medium mb-10">
        Manage Reviews
      </h1>
      <div className='w-full grid grid-cols-2 row-auto items-center gap-5'>
        {
          reviews && reviews.map(review => (
            <div key={review?._id} className="bg-white py-5 px-5 rounded-xl shadow-lg flex flex-col items-start gap-5 w-full">
                    <img
                      src="https://gist.github.com/ShejanMahamud/af31927d9c9847d471c960321f3c3aea/raw/18f6ab0c85a16fcfd8a1b4b7c1c3c0210782ba09/qoute.svg"
                      alt=""
                    />
                    <h1 className="text-sm">{review?.review_title}</h1>
                    <p className='text-xs text-gray-400'>{review?.review_description}</p>
                    <hr className="w-full border border-[#D4D4D4] my-2" />
                    <div className="w-full flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={review?.user_photo}
                          alt=""
                          className="w-10 h-10 rounded-full border border-primary object-cover"
                        />
                        <div className='flex flex-col items-start gap-1'>
                        <span className="text-sm">{review?.user_name}</span>
                        <span className='text-xs'>{review?.user_email}</span>
                        </div>
                      </div>
                      <div className='flex items-center gap-5'>
                      <Rate
                        disabled
                        defaultValue={review?.review_rating}
                        className="gap-0"
                      />
                      <button 
                      onClick={()=>handleDeleteReviews(review?._id)} 
                      className='text-white text-2xl bg-red-500 px-2 py-2 rounded-lg'>
                      <AiOutlineDelete/>
                      </button>
                      </div>
                    </div>
        </div>
          ))
        }
        {
          reviews && reviews.length <= 0 && <div className='text-gray-400 w-full flex items-center justify-center min-h-screen flex-col col-span-3'>
            <IoWarningOutline className='text-9xl'/> 
            <h1 className='text-xl'>No Reviews Found!</h1>
          </div>
        }
        </div>
    </div>
  )
}

export default AdminManageReviews