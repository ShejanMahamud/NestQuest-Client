import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AgentSoldProperties = () => {
const {user} = useAuth()
const axiosSecure = useAxiosSecure();

const {data,isPending} = useQuery({
  queryKey: ['sold_properties',user?.email],
  queryFn: async () => {
    const {data} = await axiosSecure.get(`/solds/${user?.email}`)
    return data
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
    <div className='w-full min-h-screen p-10'>
            <h1 className="text-2xl text-[#18191C] font-medium mb-10">
        My Sold Properties
      </h1>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Property Title</th>
        <th>Property Location</th>
        <th>Buyer Email</th>
        <th>Buyer Name</th>
        <th>Sold Price</th>
      </tr>
    </thead>
    <tbody>
      {
        data[0]?.properties && data[0]?.properties.map(property => (
          <tr key={property?._id}>
          <th>{property?.property_title}</th>
          <td>{property?.detailed_location}</td>
          <td>{property?.buyer_email}</td>
          <td>{property?.buyer_name}</td>
          <td>{property?.offer_price}</td>
        </tr>
        ))
      }
    </tbody>
  </table>
</div>
<h1 className="text-2xl text-[#18191C] font-medium my-10">
        Total Sold Amount
      </h1>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Action</th>
        <th>Revenue</th>
      </tr>
    </thead>
    <tbody>
    <tr>
          <th>Total Revenue</th>
          <td>{data[0]?.sold_amount}</td>
        </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}

export default AgentSoldProperties