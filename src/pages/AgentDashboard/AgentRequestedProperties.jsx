import { useMutation, useQuery } from '@tanstack/react-query'
import { Skeleton } from 'antd'
import React from 'react'
import toast from 'react-hot-toast'
import { IoCheckmark, IoClose, IoTimeOutline } from 'react-icons/io5'
import useAuth from '../../hooks/useAuth'
import useAxiosSecure from '../../hooks/useAxiosSecure'

const AgentRequestedProperties = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()

  const { data: properties, isPending,refetch } = useQuery({
    queryKey: ['requested_properties', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/requested/${user?.email}`)
      return data
    }
  })

  const {mutateAsync} = useMutation({
    mutationFn: async ({id,status}) => {
      const {data} = await axiosSecure.patch(`/offered/${id}`,{status})
      return data
    },
    onSuccess: () => {
      refetch()
      toast.success('Successfully Updated')
    }
  })

  const handleChangeStatus = async (id,status) => {
    try{
      await mutateAsync({id,status})
    }
    catch(error){
      toast.error('Something Went Wrong!')
    }
  }

  return (
    <div className='w-full p-10 min-h-screen'>
      <h1 className="text-2xl text-[#18191C] font-medium mb-10">Requested Property</h1>
      <div className="overflow-x-auto">
        {isPending ? (
              // Render skeleton rows
              Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                          <Skeleton.Avatar active size="large" shape="square" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <Skeleton.Input active size="small" style={{ width: 100, marginBottom: 8 }} />
                      <Skeleton.Input active size="small" style={{ width: 150 }} />
                    </div>
                  </td>
                  <td>
                    <div>
                      <Skeleton.Input active size="small" style={{ width: 100, marginBottom: 8 }} />
                      <Skeleton.Input active size="small" style={{ width: 150 }} />
                    </div>
                  </td>
                  <td className='font-medium'>
                    <Skeleton.Input active size="small" style={{ width: 80 }} />
                  </td>
                  <th>
                    <Skeleton.Button active size="small" style={{ marginRight: 8 }} />
                    <Skeleton.Button active size="small" />
                  </th>
                </tr>
              ))
            ) : (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Property Info</th>
                <th>Buyer Info</th>
                <th>Offered Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {properties && properties.map(property => (
                <tr key={property?._id}>
                  <td>
                    <div>
                      <div className="font-bold mb-1">{property?.property_title}</div>
                      <div className="text-sm opacity-50">{property?.detailed_location}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{property?.buyer_name}</div>
                      <div className="text-sm opacity-50">{property?.buyer_email}</div>
                    </div>
                  </td>
                  <td className='font-medium'>{property?.offer_price}</td>
                  <td>
                    {
                property?.status === 'Pending' && <div className="flex items-center gap-1 text-yellow-500">
                  <IoTimeOutline className="text-xl"/> 
                  <span>Pending</span>
                </div>
              }
              {
                property?.status === 'Verified' && <div className="flex items-center gap-1 text-green-500">
                  <IoCheckmark className="text-xl"/> 
                  <span>Verified</span>
                </div>
              }
              {
                property?.status === 'Rejected' && <div className="flex items-center gap-1 text-red-500">
                  <IoClose className="text-xl"/> 
                  <span>Rejected</span>
                </div>
}
              </td>
                  <th>
                    <div className='w-full flex items-center gap-2'>
                    <button onClick={()=>handleChangeStatus(property?._id,'Verified')} className="bg-green-500 text-white font-medium text-xs px-2 py-1 rounded-md">Accept</button>
                    <button onClick={()=>handleChangeStatus(property?._id,'Rejected')} className="bg-red-500 text-white font-medium text-xs px-2 py-1 rounded-md">Reject</button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default AgentRequestedProperties
