import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast'
import { IoCheckmark } from 'react-icons/io5'
import useAxiosSecure from '../../hooks/useAxiosSecure'

const AdminAdvertisement = () => {
const axiosSecure = useAxiosSecure()
const {data:properties,isPending,refetch} = useQuery({
    queryKey: ['properties_advertise'],
    queryFn: async () => {
        const {data} = await axiosSecure.get(`/all_properties?verified=true`)
        return data
    }
})

const handleAdvertise = async (id) => {
    try{
        await mutateAsync(id)
    }
    catch(error){
        toast.error('Something Went Wrong')
    }
}

const {mutateAsync} = useMutation({
    mutationFn: async (id) => {
        const {data} = await axiosSecure.patch(`/admin_properties/${id}`,{property_advertise:true})
        return data
    },
    onSuccess: () => {
        refetch()
        toast.success('Successfully Added Advertise')
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
 <h1 className="text-2xl text-[#18191C] font-medium mb-10">
        Advertise Properties
      </h1>
      <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Agent</th>
        <th>price</th>
        <th>Status</th>
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
              <div className="mask mask-squircle w-12 h-12">
                <img src={property?.property_image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{property?.property_title}</div>
              <div className="text-sm opacity-50">{property?.property_location}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="">{property?.agent_name}</span>
        </td>
        <td>
        <h1 className="text-sm text-primary font-medium">
            ${property?.property_price_min} - ${property?.property_price_max}{" "}
            
          </h1>
        </td>
        <td>
        {property?.property_advertise ? <div className="flex items-center gap-1 text-green-500">
            <IoCheckmark className="text-xl"/> 
            <span>Advertised</span>
          </div>
          : 
          <span>Not Advertised</span>
          }
        </td>
       <th>
          <button disabled={property?.property_advertise} onClick={()=>handleAdvertise(property?._id)} className="bg-primary px-2 py-1 rounded-md text-white font-normal">Advertise</button>
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

export default AdminAdvertisement