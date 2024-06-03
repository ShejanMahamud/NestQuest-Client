import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast'
import { IoCheckmark, IoClose } from 'react-icons/io5'
import useAxiosSecure from '../../hooks/useAxiosSecure'

const AdminManageProperties = () => {
const axiosSecure = useAxiosSecure()
const {data: properties,isPending,refetch} = useQuery({
  queryKey: ['admin_properties'],
  queryFn: async () => {
    const {data} = await axiosSecure.get('/properties')
    return data
  }
})

const handleStatusUpdate = async (status,id) => {
    try{
      await mutateAsync({status,id})
    }
    catch(error){
      toast.error('Something Went Wrong!')
    }
}

const {mutateAsync} = useMutation({
  mutationFn: async ({status,id}) => {
    const {data} = await axiosSecure.patch(`/property/${id}`,{property_status: status})
    return data
  },
  onSuccess: () => {
    refetch()
    toast.success('Status Updated Successfully')
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
    <div className='p-10 w-full min-h-screen'>
        <h1 className="text-xl text-[#18191C] font-medium mb-10">Manage Properties</h1>
      <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>Property Information</th>
        <th>Agent Information</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
       properties && properties.map(property => (
        <tr key={property?._id}>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-16 h-16">
                <img src={property?.property_image} alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold">{property?.property_title}</div>
              <div className="text-sm opacity-50">{property?.property_location}</div>
            </div>
          </div>
        </td>
        <td>
        {property?.agent_name}
          <br/>
          <span className="badge badge-ghost badge-sm">{property?.agent_email}</span>
        </td>
        <th>
          {
            property?.property_status === 'Pending' && <div className='flex items-center gap-3'>
            <button onClick={()=>handleStatusUpdate('Verified',property?._id)} className='bg-green-500 text-white px-2 py-1 rounded-md text-sm font-normal'>Verify</button>
            <button onClick={()=>handleStatusUpdate('Rejected',property?._id)} className='bg-red-500 text-white px-2 py-1 rounded-md text-sm font-normal'>Rejected</button>
          </div>
          }
          {
            property?.property_status === 'Verified' && <div  className="flex items-center gap-1 text-green-500">
            <IoCheckmark className="text-xl"/> 
            <span>Verified</span>
          </div>
          }
          {
            property?.property_status === 'Rejected' && <div className="flex items-center gap-1 text-red-500">
            <IoClose className="text-xl"/> 
            <span>Rejected</span>
          </div>
          }
        </th>
      </tr>
       ))
      }
    </tbody> 
  </table>
</div>
    </div>
  )
}

export default AdminManageProperties