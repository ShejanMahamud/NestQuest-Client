import { UploadOutlined } from '@ant-design/icons';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Upload } from 'antd';
import React from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import usePhotoUpload from '../../hooks/usePhotoUpload';

const AgentPropertyUpdate = () => {
const {id} = useParams();
const {user} = useAuth()
const axiosSecure = useAxiosSecure()
const {photo,uploadProps} = usePhotoUpload();

const {data:property,isPending,refetch} = useQuery({
    queryKey: ['property',id],
    queryFn: async () => {
        const {data} = await axiosSecure.get(`/property/${id}`)
        return data
    }
})

const handlePropertyUpdate = async (e) => {
    e.preventDefault()
    try{
        const property_title = e.target.title.value;
        const property_image = photo;
        const property_price_min = e.target.min_price.value;
        const property_price_max = e.target.max_price.value;
        const property_location = e.target.location.value;
        const detailed_location = e.target.detailed_location.value;
        const info = {property_title,property_price_min,property_price_max,property_location,detailed_location, ...(photo && {photo})}

        await mutateAsync(info)
    }
    catch(error){
        toast.error('Something Went Wrong!')
    }
}

const {mutateAsync} = useMutation({
 mutationFn: async info => {
    const {data} = await axiosSecure.patch(`/property/${id}`,info)
    return data
 },
 onSuccess: () => {
    refetch()
    toast.success('Successfully Updated!')
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
    <div className='w-full p-10 min-h-screen'>
<h1 className="text-2xl text-[#18191C] font-medium mb-10">
        Update Property
      </h1>
      <form onSubmit={handlePropertyUpdate} className='w-full grid grid-cols-2 row-auto items-center gap-x-10 gap-y-5'>
      <div className="flex flex-col items-start gap-2">
      <h1 className="text-sm text-[#18191C] mb-2">Property Title</h1>
      <input
        type="text"
        className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
        name="title"
        defaultValue={property?.property_title}
        placeholder="Property Title"
      />
    </div>
    <div className="flex flex-col items-start gap-2 ">
      <h1 className="text-sm text-[#18191C] mb-2">Property Detail Location</h1>
      <input
        type="text"
        defaultValue={property?.detailed_location}
        className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
        name="detailed_location"
        placeholder="123 Street, New York, USA"
      />
    </div>
    <div className="flex flex-col items-start gap-2 ">
      <h1 className="text-sm text-[#18191C] mb-2">Property Location</h1>
      <input
        type="text"
        defaultValue={property?.property_location}
        className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
        name="location"
        placeholder="New York, USA"
      />
    </div>
      <div className="flex flex-col items-start gap-2 ">
      <h1 className="text-sm text-[#18191C] mb-2">Property Image</h1>
        <Upload {...uploadProps} className='px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none'>
    {!photo && <button type="button" className="text-gray-400 text-base flex items-center gap-2">
      <UploadOutlined />
      <span>Click to Upload</span></button>}
  </Upload>

    </div>
    <div className="flex flex-col items-start gap-2 ">
      <h1 className="text-sm text-[#18191C] mb-2">Min Price</h1>
      <input
      defaultValue={property?.property_price_min}
        type="number"
        className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
        name="min_price"
        placeholder="Min Price"
      />
    </div>
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-sm text-[#18191C] mb-2">Max Price</h1>
      <input
        type="number"
        defaultValue={property?.property_price_max}
        className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
        name="max_price"
        placeholder="Max Price"
      />
    </div>
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-sm text-[#18191C] mb-2">Agent Name</h1>
      <input
        type="text"
        required
        disabled
        className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
        defaultValue={user?.displayName}
      />
    </div>
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-sm text-[#18191C] mb-2">Agent Email</h1>
      <input
        type="text"
        required
        disabled
        className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
        defaultValue={user?.email}
      />
    </div>
    <button className='py-3 px-5 bg-primary text-white col-span-2 w-full flex justify-center mt-5 font-medium rounded-lg'>Update Property</button>
      </form>
    </div>
  )
}

export default AgentPropertyUpdate