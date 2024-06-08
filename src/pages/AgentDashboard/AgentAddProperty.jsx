import { UploadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Upload } from "antd";
import JoditEditor from "jodit-react";
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useJodit from '../../hooks/useJodit';
import usePhotoUpload from "../../hooks/usePhotoUpload";

const AgentAddProperty = () => {
const axiosSecure = useAxiosSecure()
const [description,setDescription] = useState(null)
const {photo,uploadProps} = usePhotoUpload()
const {config,editor} = useJodit()
const {user} = useAuth()

const handleAddProperty = async (e) => {
    e.preventDefault();
    try{
        const property_title = e.target.title.value;
        const property_image = photo;
        const property_status = 'Pending'
        const property_price_min = parseInt(e.target.min_price.value);
        const property_price_max = parseInt(e.target.max_price.value);
        const property_location = e.target.location.value;
        const detailed_location = e.target.detailed_location.value;
        const property_advertise = false;
        const agent_email = user?.email;
        const agent_name = user?.displayName;
        const agent_photo = user?.photoURL;
        const property_type = e.target.property_type.value;
        const property_description = description;
        const property_rooms = e.target.room.value;
        const property_bathrooms = e.target.bathroom.value;
        const property_space = e.target.space.value;

        const info =  {property_title,property_image,property_status,property_price_min,property_price_max,property_location,detailed_location,property_advertise,agent_email,agent_name,agent_photo,property_type,property_description,property_rooms,property_bathrooms,property_space}
        // return console.log(info)
        await mutateAsync(info)
        e.target.reset()
    }
    catch(error){
        toast.error('Something Went Wrong!')
    }
}

const {mutateAsync} = useMutation({
    mutationFn: async info => {
        const {data} = await axiosSecure.post('/properties',info)
        return data
    },
    onSuccess: () => {
        toast.success('Property Added Successfully!')
    }
})

  return (
    <div className="border-l border-[#e4e5e8] w-full min-h-screen px-10 py-10 font-inter">
<div className="w-full">
  <h1 className="text-xl text-[#18191C] font-medium mb-10">Post A Property</h1>
  <form onSubmit={handleAddProperty} className="w-full grid grid-cols-3 row-auto items-center gap-x-5 gap-y-5">
    <div className="flex flex-col items-start gap-2 col-span-3">
      <h1 className="text-sm text-[#18191C] mb-2">Property Title</h1>
      <input
        type="text"
        className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
        name="title"
        required
        placeholder="Property Title"
      />
    </div>
    <div className="flex flex-col items-start gap-2 col-span-2">
      <h1 className="text-sm text-[#18191C] mb-2">Property Detail Location</h1>
      <input
        type="text"
        required
        className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
        name="detailed_location"
        placeholder="123 Street, New York, USA"
      />
    </div>
    <div className="flex flex-col items-start gap-2 col-span-1 ">
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
      required
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
        required
        className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
        name="max_price"
        placeholder="Max Price"
      />
    </div>
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-sm text-[#18191C] mb-2">Property Location</h1>
      <input
        type="text"
        required
        className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
        name="location"
        placeholder="New York, USA"
      />
    </div>
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-sm text-[#18191C] mb-2">Property Type</h1>
      <select
      required
        name="property_type"
        className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
      >
        <option value="select" selected disabled>
          Select
        </option>
        <option value="Rent">Rent</option>
        <option value="Sell">Sell</option>
      </select>
    </div>
    <h1 className="text-lg text-[#18191C] font-medium my-5 col-span-3">
  Property Details 
    </h1>
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-sm text-[#18191C] mb-2">Rooms</h1>
      <select
      required
        name="room"
        className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
      >
        <option value="select" selected disabled>
          Select
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-sm text-[#18191C] mb-2">Bathrooms</h1>
      <select
      required
        name="bathroom"
        className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
      >
        <option value="select" selected disabled>
          Select
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-sm text-[#18191C] mb-2">Property Space</h1>
      <input
        type="text"
        required
        className="px-4 py-3 rounded-lg bg-transparent w-full border border-[#E4E5E8] focus:outline-none"
        name="space"
        placeholder="Ex: 6x8 m²"
      />
    </div>
  <h1 className="text-lg text-[#18191C] font-medium my-5 col-span-3">
  Property Description 
    </h1>
    <div className='flex flex-col items-start gap-2 col-span-3 w-full'>
  <h1 className='text-sm text-[#18191C]'>Description</h1>
  <JoditEditor
                ref={editor}
                config={config}
                onChange={(newContent) => setDescription(newContent)}
                
              />
  </div>

  <h1 className="text-lg text-[#18191C] font-medium my-5 col-span-3">
  Agent Information 
    </h1>
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
  <button className="bg-primary px-4 py-3 rounded-md text-white font-medium flex items-center gap-3 w-[30%] col-span-2 justify-center">
<span>Add Property</span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M5 12H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5L19 12L12 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
  </form>
</div>
</div>
  )
}

export default AgentAddProperty